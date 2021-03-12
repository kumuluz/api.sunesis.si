import React from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import "./diagram.css"
import image from "../../../../static/images/kumuluz-api-diagram-large.png"

const DiagramComponent = () => {

  const { t } = useTranslation()

  return (
    <div className="diagram">
      <div className="description-text justify-content-md-center">
        <span>{t("diagram.description")}</span>
      </div>
      <Link to="/business-details">
        <button className="business-button">
          <span className="business-text">{t("diagram.business-button")}</span>
        </button>
      </Link>
      <Link to="/technical-details">
        <button className="specs-button">
          <span className="specs-text">{t("diagram.specs-button")}</span>
        </button>
      </Link>
      <div className="image-diagram justify-content-md-center">
        <img src={image} alt="Kumuluz" style={{ width: "100%" }}/>
      </div>
    </div>
  )
}
export default DiagramComponent
