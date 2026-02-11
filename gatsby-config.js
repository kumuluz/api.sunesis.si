module.exports = {
  siteMetadata: {
    title: `KumuluzAPI`,
    description: `Kumuluz api predstavlja sodobno rešitev pri programiranju REST API vmesnikov.`,
    author: `@Sunesis`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        directives: {
          "default-src": "'self' https://player.vimeo.com",
          "script-src": "'self' 'unsafe-inline' https://www.google-analytics.com https://www.googletagmanager.com https://player.vimeo.com",
          "style-src": "'self' 'unsafe-inline' https://fonts.googleapis.com",
          "img-src": "'self' data: https://www.google-analytics.com https://i.vimeocdn.com",
          "font-src": "'self' data: https://fonts.gstatic.com",
          "connect-src": "'self' https://www.google-analytics.com https://player.vimeo.com",
          "frame-src": "'self' https://player.vimeo.com",
          "object-src": "'none'",
          "base-uri": "'self'",
          "form-action": "'self'",
          "upgrade-insecure-requests": null
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/stylesheets`,
        name: `styles`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`sl`, `en`, `de`],
        defaultLanguage: `sl`,
        redirect: false,
        siteUrl: `https://kumuluz-api-netlify.app/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: '.',
          nsSeparator: false
        }
      }
    },
  ]
}
