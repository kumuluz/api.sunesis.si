import React from "react"
import PropTypes from "prop-types"
import Footer from "../footer/footer.js"

import "./layout.css"

const Layout = ({ children }) => {

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
