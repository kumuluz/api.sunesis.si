import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Error404 from "../components/errors/404/error404.js"
import Navbar from "../components/header/navbar/navbar.js"
import image from "../../static/images/kumuluz-header-cut.png"

const NotFoundPage = () => {

  return (
    <div style={{
      background: "radial-gradient(32.28% 126.28% at 69.07% 71.82%, #254A99 0%, #2B2B6F 82.13%)",
      height: "100vh", color: "white", minHeight:"550px"
    }}>
    <SEO title="404: Not found" />
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-lg-7">
          <Error404 />
        </div>
        <div className="col-lg-5">
          <div className="container" style={{ height: "100%" }}>
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
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common", "error"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
