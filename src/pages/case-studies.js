import React from 'react'
import { graphql } from 'gatsby'
import { Link } from "gatsby-plugin-react-i18next" //Link

import Content1 from "../components/content/case-study/study1.js"
import Content2 from "../components/content/case-study/study2.js"
import Content3 from "../components/content/case-study/study3.js"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo.js"

const CaseStudiesPage = () => {
    return (
        <Layout>
            <Link to="#study1">studija 1</Link>
            <Link to="#study2">studija 2</Link>
            <Link to="#study3">studija 3</Link>
            <SEO title="Case Studies" />
            <Content1/>
            <Content2/>
            <Content3/>
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