import React from 'react'
import "./header-content.scss"
import image from "../../../../static/images/kumuluz-header-cut.png"
import { CONTACT_URL } from "../../../../static/links.js"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const HeaderComponent = () =>{

    const { t } = useTranslation();

    return (
    <div className="container">
        <div className="row">
            <div className="col-lg-7">
                <p className="header-content">{t('header.title')}</p>
                <p className="header-text">
                    {t('header.text')}
                </p>
                <a href={CONTACT_URL} target="_blank" rel="noreferrer noopener">
                    <button className="contact-button">
                        <span className="contact-button-text">
                            {t('header.button-contact')}
                        </span>
                    </button>
                </a>
                <Link to="#video">
                    <button className="vide-button">
                        <span className="vide-button-text">
                            {t('header.button-video')}
                        </span>
                    </button>
                </Link>
            </div>
            <div className="col-lg-5">
                <div className="container" style={{height:"100%"}}>
                    <img src={image} alt="Kumuluz" className="image" />
                </div>
            </div>
        </div>
    </div>)
}

export default HeaderComponent;