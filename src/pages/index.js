import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Header from "../components/header/header.js"
import HeaderContent from "../components/header/header-content/header-content.js"
import Content1 from "../components/content/main-functionalities/main-functionalities.js"
import Content2 from "../components/content/diagram/diagram.js"
import Content3 from "../components/content/features/features.js"
import Content4 from "../components/content/blog-posts/blog-posts.js"
import Content5 from "../components/content/case-studies/case-studies.js"
import Content6 from "../components/content/video/video.js"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

const IndexPage = (props) => {

  const { t } = useTranslation();

  return (
    <Layout header={t('header')}>
      <SEO title={t('Home')} />
      <Header>
        <HeaderContent title={t('header.title')} />
      </Header>
      < Content1 />
      < Content2 />
      < Content3 />
      < Content5 />
      < Content4 />
      < Content6 />
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
query($language: String!) {
  locales: allLocale(filter: {ns: {in: ["index","case-studies", "common"]}, language: {eq: $language}}) {
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