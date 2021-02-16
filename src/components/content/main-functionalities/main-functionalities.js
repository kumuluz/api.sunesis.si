import React from 'react'
import { Container, Row } from 'react-bootstrap';
import "./main-functionalities.css"
import image1 from "../../../../static/images/main-functions-1.png"
import image2 from "../../../../static/images/main-functions-2.png"
import image3 from "../../../../static/images/main-functions-3.png"
import {useTranslation} from "gatsby-plugin-react-i18next" //Link


const MainFunctionalites = (props) => {

    const {t} = useTranslation();

    return (
    <Container>
        <Row className="justify-content-md-center">
            <p>{t('sponsors.text')}</p>
            <p>slika</p>
        </Row>
        <Row>
            <h1>{t('main-features.title1')}</h1>
            <h3>{t('main-features.title2')}</h3>
        </Row>
        <Row>
            <div className="col-md-6">
                 <p>{t('main-features.feature1_title')}</p>
                 <p>{t('main-features.feature1_text')}</p>
                 <p>{t('main-features.feature2_title')}</p>
                 <p>{t('main-features.feature2_text')}</p>
            </div>
            <div className="col-md-6">
                <img src={ image1 } alt="Kumuluz" className="image"/>
            </div>
        </Row>
        <Row>
            <div className="col-md-6">
                <img src={ image2 } alt="Kumuluz" className="image"/>
            </div>
            <div className="col-md-6">
                <p>{t('main-features.feature3_title')}</p>
                <p>{t('main-features.feature3_text')}</p>
                <p>{t('main-features.feature4_title')}</p>
                <p>{t('main-features.feature4_text')}</p>
            </div>
        </Row>
        <Row>
            <div className="col-md-6">
                <p>{t('main-features.feature5_title')}</p>
                <p>{t('main-features.feature5_text')}</p>
                <p>{t('main-features.feature6_title')}</p>
                <p>{t('main-features.feature6_text')}</p>
            </div>
            <div className="col-md-6">
                <img src={ image3 } alt="Kumuluz" className="image"/>
            </div>
        </Row>
    </Container>
    )
}

export default MainFunctionalites;