import React from 'react'
import { Col } from 'react-bootstrap';
import "./header-content.css"
import image from "../../../../static/images/kumuluz-header.png"

const HeaderComponent = (props) => (

    <div className="container">
        <div className="row">
            <Col md={7}>
                <p className="header-title">{ props.title }</p>
                <p className="header-text">
                    Celovita rešitev za upravljanje z API-ji, zasnovana na modularni način. Varna, hitro nadgradljiva in razširljiva, obenem pa dostopna po poslovnem modelu, ki vam najbolj ustreza.
                </p>
                <button className="contact-button">
                    <span className="contact-button-text">KONTAKT</span>
                </button>
                <button className="vide-button">
                    <span className="vide-button-text">POGLEJ VIDEO</span>
                </button>
            </Col>
            <Col md={5}>
                <img src={ image } alt="Kumuluz" className="image"/>
            </Col>
        </div>
    </div>
)

export default HeaderComponent;