import React from 'react'
import { Container } from 'react-bootstrap';
import "./diagram.css"
import image from "../../../../static/images/kumuluz-api-diagram.png"

const DiagramComponent = () => (
    <div className="diagram">
        <Container className="justify-content-md-center">
            <img src={ image } alt="Kumuluz" className="image"/>
        </Container>
        <button>TEHNOLOŠKE SPECIFIKACIJE</button>
    </div>
)

export default DiagramComponent;