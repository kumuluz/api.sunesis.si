const crypto = require("crypto")
const fs = require("fs")
const path = require("path")

const getHtmlFiles = directory =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      return getHtmlFiles(entryPath)
    }

    return entry.isFile() && entry.name.endsWith(".html") ? [entryPath] : []
  })

const hashContent = content =>
  `'sha256-${crypto.createHash("sha256").update(content).digest("base64")}'`

const stripGatsbyInternalStyles = html =>
  html
    .replace(
      /(<div) style="outline:none" (tabindex="-1" id="gatsby-focus-wrapper")/g,
      "$1 $2",
    )
    .replace(/(<div id="gatsby-announcer") style="[^"]*"/g, "$1")

const generateCspHeaders = publicDirectory => {
  const styleHashes = new Set()
  const htmlFiles = getHtmlFiles(publicDirectory)

  for (const htmlFile of htmlFiles) {
    const source = fs.readFileSync(htmlFile, "utf8")
    const html = stripGatsbyInternalStyles(source)
    const inlineStyleAttributes = html.match(/\sstyle=(?:"[^"]*"|'[^']*')/g)

    if (inlineStyleAttributes) {
      throw new Error(
        `Strict CSP requires class-based styles. Found ${inlineStyleAttributes.length} inline style attribute(s) in ${path.relative(publicDirectory, htmlFile)}.`,
      )
    }

    for (const match of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
      styleHashes.add(hashContent(match[1]))
    }

    if (html !== source) {
      fs.writeFileSync(htmlFile, html)
    }
  }

  const directives = [
    "default-src 'self'",
    "script-src 'self'",
    `style-src 'self' ${Array.from(styleHashes).sort().join(" ")}`,
    "style-src-attr 'none'",
    "img-src 'self' data:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "media-src 'self'",
    "object-src 'none'",
    "frame-src https://player.vimeo.com https://app.netlify.com",
    "frame-ancestors 'none'",
    "base-uri 'none'",
    "form-action 'self'",
    "manifest-src 'self'",
    "worker-src 'self'",
  ]

  fs.writeFileSync(
    path.join(publicDirectory, "_headers"),
    `/*\n  Content-Security-Policy: ${directives.join("; ")}\n`,
  )

  console.log(
    `Generated strict CSP for ${htmlFiles.length} HTML files with ${styleHashes.size} inline style hash(es).`,
  )
}

if (require.main === module) {
  generateCspHeaders(path.join(process.cwd(), "public"))
}

module.exports = {
  generateCspHeaders,
  hashContent,
  stripGatsbyInternalStyles,
}
