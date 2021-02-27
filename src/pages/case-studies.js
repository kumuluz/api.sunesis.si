import React from 'react'
import { graphql } from 'gatsby'
import { Link } from "gatsby-plugin-react-i18next" //Link
import { useTranslation } from "gatsby-plugin-react-i18next" //Link

import Content1 from "../components/content/case-study/study1.js"
import Content2 from "../components/content/case-study/study2.js"
import Content3 from "../components/content/case-study/study3.js"
import Header from "../components/header/header.js"
import HeaderContent from "../components/header/header-content/header-title.js"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo.js"
import img_akrapovic from "../../static/images/akrapovic.png"
import img_petrol from "../../static/images/petrol.png"
import img_abanka from "../../static/images/abanka.png"
import img_generali from "../../static/images/generali.png"

const CaseStudiesPage = () => {

  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title="Case Studies" />
      <Header>
        <HeaderContent />
      </Header>
      <div className="row">
        <div className="col-2" style={{ display: "inline-block", marginTop: "65px", textAlign: "center" }}>
          <Link to="#study1"><img src={img_generali} alt="studija 1" style={{ marginBottom: "20px" }} /></Link>
          <Link to="#study2"><img src={img_abanka} alt="studija 2" style={{ marginBottom: "10px" }} /></Link>
          <Link to="#study3"><img src={img_petrol} alt="studija 3" style={{ marginBottom: "10px" }} /></Link>
          <Link to="#study4"><img src={img_akrapovic} alt="studija 4" style={{ marginBottom: "0" }} /></Link>
        </div>
        <div className="col-10">
          <Content1 />
          <Content2 />
          <Content3 />
        </div>
      </div>
    </Layout>
  )
}

export default CaseStudiesPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["case-studies","common"]}, language: {eq: $language}}) {
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