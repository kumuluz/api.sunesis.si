import React from 'react'
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import { Container } from 'react-bootstrap';
import "./diagram.css"
import image from "../../../../static/images/kumuluz-api-diagram.png"

const DiagramComponent = () => {

    const { t } = useTranslation();

    return (
        <div className="diagram">
            <Container className="justify-content-md-center">
                <img src={image} alt="Kumuluz" />
            </Container>
            <button className="specs-button">
                <Link to="technical-details">
                    <span className="specs-text">{t("diagram.specs-button")}</span>
                </Link>
            </button>
        </div>
    )
}
export default DiagramComponent;