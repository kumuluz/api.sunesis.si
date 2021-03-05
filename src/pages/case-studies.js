import React from 'react'
import { graphql } from 'gatsby'

import Content1 from "../components/content/case-study/study1.js"
import Content2 from "../components/content/case-study/study2.js"
import Content3 from "../components/content/case-study/study3.js"
import Selector from "../components/content/case-study/selector.js"
import Header from "../components/header/header.js"
import HeaderContent from "../components/header/header-content/header-title.js"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo.js"

const CaseStudiesPage = () => {

  return (
    <Layout>
      <SEO title="Case Studies" />
      <Header>
        <HeaderContent page="studies"/>
      </Header>
      <div className="kumuluz-container">
        <Selector/>
        <div className="right-content">
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