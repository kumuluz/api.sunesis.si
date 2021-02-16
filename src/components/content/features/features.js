import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./features.module.css"
import image1 from "../../../../static/images/icon-access.png"
import image2 from "../../../../static/images/icon-custom.png"
import image3 from "../../../../static/images/icon-upgrade.png"
import image4 from "../../../../static/images/icon-wrench.png"

const FeaturesComponent = () => (
    <div className="featuress">
    <Container className="justify-content-md-center">
        <Row>
            <Col md={3}>
                <img src={ image1 } alt="Kumuluz" className="iimage"/>
                <p>Lahkotna namestitev "On-premis" ali SaaS</p>
            </Col>
            <Col md={3}>
                <img src={ image2 } alt="Kumuluz" className="iimage"/>
                <p>Enostavne in hitre nadgradnje, od politik, do integracij</p>
            </Col>
            <Col md={3}>
                <img src={ image3 } alt="Kumuluz" className="iimage"/>
                <p>Ločena komponenta za management in razvijalce</p>
            </Col>
            <Col md={3}>
                <img src={ image4 } alt="Kumuluz" className="iimage"/>
                <p>Poslovni model povsem po vaši meri</p>
            </Col>
        </Row>
    </Container>
    </div>
)

export default FeaturesComponent;