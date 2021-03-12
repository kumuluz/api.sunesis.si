import React from 'react'
import Layout from "../components/layouts/layout"
import SEO from "../components/seo.js"
import Header from "../components/header/header.js"
import HeaderContent from "../components/header/header-content/header-title.js"
import ContentL from "../components/content/technical-details/content-left.js"
import ContentR from "../components/content/technical-details/content-right.js"
import Selector from "../components/content/technical-details/selector.js"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from 'gatsby'

const BusinessDetailsPage = () => {

  const { t } = useTranslation();
  const details = t('business-details', { returnObjects: true });

  return (
    <Layout>
      <SEO title="Business Advantages" />
      <Header>
        <HeaderContent page="business"/>
      </Header>
      <div className="kumuluz-container">
        <div className="left-selector">
        <Selector det={details} page="business"/>
        </div>
        <div className="right-content">
          <div>
            {details.map((detail, index) => {
              if (index % 2 === 0)
                return (<ContentL title={detail.title} text={detail.text} key={index} id={"paragraph"+index} image={detail.image}/>);
              else
                return (<ContentR title={detail.title} text={detail.text} key={index} id={"paragraph"+index} image={detail.image}/>);
            })
            }
          </div>
        </div>
    </div>
    </Layout>
  )
}

export default BusinessDetailsPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["business-details", "common"]}, language: {eq: $language}}) {
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
