import React from 'react'
import { graphql } from 'gatsby'
import {useTranslation} from "gatsby-plugin-react-i18next"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo.js"

const CaseStudiesPage = () => {

    const {t} = useTranslation();
    const usageCases = t('cases', { returnObjects: true });
    const items = usageCases[0].bulletpoints
    const listItems = items.map((title, index) => 
        <li key={index}>{title}</li>
    );

    return (
        <Layout>
            <SEO title="Case Studies" />
            <h1>Hello me</h1>
            <h1>{t("hello")}</h1>

            <ul>{listItems}</ul>
        </Layout>
    )
}

export default CaseStudiesPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["case-studies"]}, language: {eq: $language}}) {
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