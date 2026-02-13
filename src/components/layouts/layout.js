import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Footer from "../footer/footer.js"

import "./layout.css"

const Layout = ({ children }) => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SmoothScroll = require("smooth-scroll")
      const scroll = new SmoothScroll('a[href^="#"]', {
        speed: 500,
        speedAsDuration: true,
        updateURL: false,
        popstate: true,
        ignore: '[data-scroll-ignore]'
      })
      
      return () => {
        if (scroll && scroll.destroy) {
          scroll.destroy()
        }
      }
    }
  }, [])

  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
