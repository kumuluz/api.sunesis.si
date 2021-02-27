import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// import { Img } from 'gatsby-image'
import { Row } from 'react-bootstrap'

import "./main-functionalities.css"
import image1 from "../../../../static/images/main-functions-1.png"
import image2 from "../../../../static/images/main-functions-2.png"
import image3 from "../../../../static/images/main-functions-3.png"
import { useTranslation } from "gatsby-plugin-react-i18next"
import img_sponsors from "../../../../static/images/sponsors.png"

const MainFunctionalites = (props) => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="center">
                <p className="sponsors-text">{t('sponsors.text')}</p>
                <img src={img_sponsors} alt="studija 1" />

            </div>
            <div className="inblock">
                <h1 className="main-functionalities-title weight700">
                    {t('main-features.title1')}
                </h1>
                <hr />
            </div>
            <p className="main-functionalities-title weight400">
                {t('main-features.title2')}
            </p>
            <div className="container">
            </div>
            <div className="row padded">
                <div className="col-md-6 middle">
                    <h3 className="main-functionalities-subtitle">{t('main-features.feature1_title')}</h3>
                    <p className="main-functionalities-text">{t('main-features.feature1_text')}</p>
                    <h3 className="main-functionalities-subtitle">{t('main-features.feature2_title')}</h3>
                    <p className="main-functionalities-text">{t('main-features.feature2_text')}</p>
                </div>
                <div className="col-md-6 img-right">
                    <img src={image1} alt="Kumuluz"/>
                </div>
            </div>
            <div className="row padded">
                <div className="col-md-6 img-center">
                    <img src={image2} alt="Kumuluz"/>
                </div>
                <div className="col-md-6 middle">
                    <h3 className="main-functionalities-subtitle">{t('main-features.feature3_title')}</h3>
                    <p className="main-functionalities-text">{t('main-features.feature3_text')}</p>
                    <h3 className="main-functionalities-subtitle">{t('main-features.feature4_title')}</h3>
                    <p className="main-functionalities-text">{t('main-features.feature4_text')}</p>
                </div>
            </div>
            <div className="row padded">
                <div className="col-md-6 middle">
                    <h3 className="main-functionalities-subtitle">{t('main-features.feature5_title')}</h3>
                    <p className="main-functionalities-text">{t('main-features.feature5_text')}</p>
                    <h3 className="main-functionalities-subtitle">{t('main-features.feature6_title')}</h3>
                    <p className="main-functionalities-text">{t('main-features.feature6_text')}</p>
                </div>
                <div className="col-md-6 img-right">
                    <img src={image3} alt="Kumuluz" />
                </div>
            </div>
        </div>
    )
}

export default MainFunctionalites;
