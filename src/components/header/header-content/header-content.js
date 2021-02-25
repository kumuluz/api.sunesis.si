import React from 'react'
import "./header-content.scss"
import image from "../../../../static/images/kumuluz-header.png"
import { CONTACT_URL } from "../../../../static/links.js"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

const HeaderComponent = (props) => (

    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <p className="header-content">{props.title}</p>
                <p className="header-text">
                    Celovita rešitev za upravljanje z API-ji, zasnovana na modularni način. Varna, hitro nadgradljiva in razširljiva, obenem pa dostopna po poslovnem modelu, ki vam najbolj ustreza.
                </p>
                <button className="contact-button">
                    <span className="contact-button-text">
                        <a href={CONTACT_URL}>KONTAKT</a>
                    </span>
                </button>
                <button className="vide-button">
                    <span className="vide-button-text">
                        <Link to="#video">POGLEJ VIDEO</Link>
                    </span>
                </button>
            </div>
            <div className="col-md-5">
                <img src={image} alt="Kumuluz" className="image" />
            </div>
        </div>
    </div>
)

export default HeaderComponent;