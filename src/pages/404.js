import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Error404 from "../components/errors/404/error404.js"
import Navbar from "../components/header/navbar/navbar.js"
import image from "../../static/images/kumuluz-header-cut.png"

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <SEO title="404: Not found" />
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col-lg-7">
            <Error404 />
          </div>
          <div className="col-lg-5">
            <div className="container not-found-image-container">
              <img src={image} alt="Kumuluz" className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "error"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
