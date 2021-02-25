import React from 'react'
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import "./diagram.css"
import image from "../../../../static/images/kumuluz-api-diagram.png"

const DiagramComponent = () => {

    const { t } = useTranslation();

    return (
        <div className="diagram">
            <div className="container justify-content-md-center">
                <img src={image} alt="Kumuluz" />
            </div>
            <button className="specs-button">
                <Link to="technical-details">
                    <span className="specs-text">{t("diagram.specs-button")}</span>
                </Link>
            </button>
        </div>
    )
}
export default DiagramComponent;