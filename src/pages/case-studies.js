import React from "react"
import { graphql } from "gatsby"

import Content from "../components/content/case-study/study.js"
import Selector from "../components/content/case-study/selector.js"
import Header from "../components/header/header.js"
import HeaderContent from "../components/header/header-content/header-title.js"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo.js"
import { useTranslation } from "react-i18next"

const CaseStudiesPage = () => {

  const { t } = useTranslation()
  const details = t("usecases", { returnObjects: true })

  return (
    <Layout>
      <SEO title="Case Studies"/>
      <Header>
        <HeaderContent page="studies"/>
      </Header>
      <div className="kumuluz-container">
        <div className="left-selector">
          <Selector det={details}/>
        </div>
        <div className="right-content">
          <div>
            {
              details.map((detail, index) => {
                return (<Content title={detail.title} text1={detail.text1} text2={detail.text2} key={index}
                                 id={"paragraph" + index} bulletpoints={detail.bulletpoints} features={detail.features}
                                 image={detail.image}/>)
              })
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CaseStudiesPage

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
`
