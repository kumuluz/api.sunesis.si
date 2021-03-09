import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"
import  "./studies.scss"
import image from "../../../../static/images/ingress-egress-diagram.png"


const Study2Component = () => {

    const { t } = useTranslation();
    const usageCases = t('case2', { returnObjects: true });

    const features = usageCases.features
    const listFeatures = features.map((feature, index) => 
        <div key={index} className="col-md-4" style={{paddingBottom:"20px", paddingTop:"20px"}}>
            <p className="font-subtitle-blue feaature-title">{feature.title}</p>
            <p className="font-content-text feaature-text">{feature.text}</p>
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
            <div style={{padding:"40px 0 40px 0", textAlign:"center"}}>
                <img src={image} alt="kumuluz"/>
            </div>
            <hr className="margin_top"/>
        </div>
    )
}

export default Study2Component;
