import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Content1 from "../components/content/main-functionalities/main-functionalities.js"
import Content2 from "../components/content/diagram/diagram.js"
import Content3 from "../components/content/features/features.js"
import Content4 from "../components/content/blog-posts/blog-posts.js"
import Content5 from "../components/content/case-studies/case-studies.js"
import Content6 from "../components/content/video/video.js"
import {useTranslation} from "gatsby-plugin-react-i18next" //Link
import { graphql } from "gatsby"

const IndexPage = () => {

  const {t} = useTranslation();

  return (
    <Layout header={t('header')}>
      <SEO title={t('Home')} />
      {/* <SEO title="Home" /> */}
      < Content1 /> 
      < Content2 />
      < Content3 />
      < Content4 /> 
      < Content5 /> 
      < Content6 /> 
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["translations", "index"]}, language: {eq: $language}}) {
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