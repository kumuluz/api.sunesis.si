import React from 'react'
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import "./diagram.css"
import image from "../../../../static/images/kumuluz-api-diagram.png"

const DiagramComponent = () => {

    const { t } = useTranslation();

    return (
        <div className="diagram">
            <div className="container justify-content-md-center">
                <img src={image} alt="Kumuluz" style={{width:"100%"}}/>
            </div>
            <Link to="/technical-details">
            <button className="specs-button">
                    <span className="specs-text">{t("diagram.specs-button")}</span>
            </button>
            </Link>
        </div>
    )
}
export default DiagramComponent;