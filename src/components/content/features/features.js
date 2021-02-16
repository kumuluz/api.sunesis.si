import {useTranslation} from "gatsby-plugin-react-i18next" //Link
import { Row, Col } from 'react-bootstrap';
import React from 'react'
import "./features.css"

import image1 from "../../../../static/images/icon-access.png"
import image2 from "../../../../static/images/icon-custom.png"
import image3 from "../../../../static/images/icon-upgrade.png"
import image4 from "../../../../static/images/icon-wrench.png"

const FeaturesComponent = () => {
    
    const {t} = useTranslation();
    
    return (
    <div className="features">
        <div className="container">
            <Row>
                <Col md={3}>
                    <img src={ image1 } alt="Kumuluz" className="iimage"/>
                    <p>{t('advantages.advantage1-text')}</p>
                </Col>
                <Col md={3}>
                    <img src={ image2 } alt="Kumuluz" className="iimage"/>
                    <p>{t('advantages.advantage2-text')}</p>
                </Col>
                <Col md={3}>
                    <img src={ image3 } alt="Kumuluz" className="iimage"/>
                    <p>{t('advantages.advantage3-text')}</p>
                </Col>
                <Col md={3}>
                    <img src={ image4 } alt="Kumuluz" className="iimage"/>
                    <p>{t('advantages.advantage4-text')}</p>
                </Col>
            </Row>
        </div>
    </div>
    )
}

export default FeaturesComponent;