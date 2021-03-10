import React from "react"
import "./header-content.scss"
import image from "../../../../static/images/kumuluz-header.png"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { CONTACT_URL } from "../../../../static/links"

const HeaderComponent = (props) => {

  const { t } = useTranslation()

  return (
    <div className="row content-row">
      <div className="col-lg-7">
        <p className="header-title">{t("header." + props.page + "-title")}</p>
        <p className="header-text">
          {t("header." + props.page + "-text")}
        </p>
        <a href={CONTACT_URL} target="_blank" rel="noreferrer noopener">
          <button className="contact-button">
                        <span className="contact-button-text">
                            {t("header.button-contact")}
                        </span>
          </button>
        </a>
      </div>
      <div className="col-lg-5 image-col">
        <div className="image-container">
          <img src={image} alt="Kumuluz" className="image"/>
        </div>
      </div>
    </div>)
}

export default HeaderComponent
