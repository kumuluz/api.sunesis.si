import React from 'react'

import "./main-functionalities.scss"
import image1 from "../../../../static/images/main-functions-1.png"
import image2 from "../../../../static/images/main-functions-2.png"
import image3 from "../../../../static/images/main-functions-3.png"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { ReferencesSpinner } from "../references/references-spinner/references-spinner"

const MainFunctionalites = (props) => {

    const { t } = useTranslation();

    return (
        <div className="content-container">
            <div className="center content-row">
                <p className="sponsors-text">{t('sponsors.text')}</p>
                <div className="references-spinning">
                    <ReferencesSpinner/>
                </div>

            </div>
            <div className="inblock content-row">
                <h1 className="font-content-title weight700">
                    {t('main-features.title1')}
                </h1>
                <hr />
                <p className="font-content-title">
                  {t('main-features.title2')}
                </p>
            </div>
            <div className="padding-div"/>
            <div className="row padded content-row content-row-left">
                <div className="col-md-6 middle ">
                    <h3 className="font-subtitle-blue">{t('main-features.feature1_title')}</h3>
                    <p className="font-content-text">{t('main-features.feature1_text')}</p>
                    <h3 className="font-subtitle-blue">{t('main-features.feature2_title')}</h3>
                    <p className="font-content-text">{t('main-features.feature2_text')}</p>
                </div>
                <div className="col-md-6 img-center img-right">
                    <img src={image1} alt="Kumuluz" />
                </div>
            </div>
            <div className="padding-div"/>
            <div className="row padded content-row">
                <div className="col-md-6 img-center">
                    <img src={image2} alt="Kumuluz" />
                </div>
                <div className="col-md-6 middle ">
                    <h3 className="font-subtitle-blue">{t('main-features.feature3_title')}</h3>
                    <p className="font-content-text">{t('main-features.feature3_text')}</p>
                    <h3 className="font-subtitle-blue">{t('main-features.feature4_title')}</h3>
                    <p className="font-content-text">{t('main-features.feature4_text')}</p>
                </div>
            </div>
            <div className="padding-div"/>
            <div className="inblock content-row">
              <p className="font-content-title">
                {t('main-features.title3')}
              </p>
            </div>
            <div className="padding-div"/>
            <div className="row padded content-row content-row-left">
              <div className="col-md-6 middle ">
                <h3 className="font-subtitle-blue">{t('main-features.feature5_title')}</h3>
                <p className="font-content-text">{t('main-features.feature5_text')}</p>
                <h3 className="font-subtitle-blue">{t('main-features.feature6_title')}</h3>
                <p className="font-content-text">{t('main-features.feature6_text')}</p>
              </div>
              <div className="col-md-6 img-center img-right">
                <img src={image1} alt="Kumuluz" />
              </div>
            </div>
            <div className="padding-div"/>
            <div className="row padded content-row">
              <div className="col-md-6 img-center">
                <img src={image2} alt="Kumuluz" />
              </div>
              <div className="col-md-6 middle ">
                <h3 className="font-subtitle-blue">{t('main-features.feature7_title')}</h3>
                <p className="font-content-text">{t('main-features.feature7_text')}</p>
                <h3 className="font-subtitle-blue">{t('main-features.feature8_title')}</h3>
                <p className="font-content-text">{t('main-features.feature8_text')}</p>
              </div>
            </div>
            <div className="padding-div"/>
            <div className="row padded content-row content-row-left">
                <div className="col-md-6 middle ">
                    <h3 className="font-subtitle-blue">{t('main-features.feature9_title')}</h3>
                    <p className="font-content-text">{t('main-features.feature9_text')}</p>
                    <h3 className="font-subtitle-blue">{t('main-features.feature10_title')}</h3>
                    <p className="font-content-text">{t('main-features.feature10_text')}</p>
                </div>
                <div className="col-md-6 img-center img-right">
                    <img src={image3} alt="Kumuluz" />
                </div>
            </div>
        </div>
    )
}

export default MainFunctionalites;
