import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"
import  "./studies.scss"
import image from "../../../../static/images/ingress-egress-diagram.png"


const Study2Component = () => {

    const { t } = useTranslation();
    const usageCases = t('case2', { returnObjects: true });

    const features = usageCases.features
    const listFeatures = features.map((feature, index) => 
        <div key={index} className="col-md-4">
            <p className="font-subtitle-blue feaature-title">{feature.title}</p>
            <p className="font-content-text feature-text">{feature.text}</p>
        </div>
    );

    return (
        <div className="container" id="study2">
            <p className="studies-title font-content-title">{t('case2.title')}</p>
            <div className="row">
                {listFeatures}
            </div>
            <p className="font-content-text">{t('case2.text1')}</p>
            <p className="font-content-text">{t('case2.text2')}</p>
            <img src={image} alt="kumuluz"/>
            <hr className="margin_top"/>
        </div>
    )
}

export default Study2Component;