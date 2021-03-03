import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import React from "react"
import "../error.scss"

const Error404 = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <h1 style={{paddingTop:"50px", fontSize:"80px",fontFamily:"Rubik"}}>404</h1>
            <h1 className="error-title">{t('error.text1')}</h1>
            <h1 className="error-content">{t('error.text2')}</h1>
            <div className="error-button">
              <Link to="/">
                  <button className="contact-button">
                      <span className="contact-button-text">
                          {t('error.home')}
                      </span>
                  </button>
              </Link>
            </div>
        </div>
    )
}

export default Error404