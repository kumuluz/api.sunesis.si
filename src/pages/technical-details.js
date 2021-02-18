import React from 'react'
import Layout from "../components/layouts/layout"
import SEO from "../components/seo.js"
import ContentL from "../components/content/technical-details/content-left.js"
import ContentR from "../components/content/technical-details/content-right.js"
import { useTranslation } from "gatsby-plugin-react-i18next" //Link
import { graphql } from 'gatsby'

const TechnicalDetailsPage = () => {

    const { t } = useTranslation();
    const details = t('details', { returnObjects: true });
    const detailComponents = details.map((detail, index) => {
        
        if(index % 2 === 0)
            return (<ContentL title={detail.title} text={detail.text} key={index} />);
        else
            return (<ContentR title={detail.title} text={detail.text} key={index} />);
    });

    return (
        <Layout>
            <SEO title="Technical Details" />
            { detailComponents }
        </Layout>
    )
}

export default TechnicalDetailsPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["technical-details", "common"]}, language: {eq: $language}}) {
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