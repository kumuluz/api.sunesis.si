/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header.js"
import Footer from "../footer/footer.js"

import "./layout.css"
//common komponente loadaj skupaj ali v layout - nbar, footer - layouot.js
//komponente posebej in potem posiljaj notri - to kar je v index.js
const Layout = ({children}) => {

  return (
    <>
      <Header title="Zmogljiva API" />
      <div>
        <main>{ children }</main>
      </div>
    <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
