import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"
import style from "./studies.scss"

const Study1Component = () => {

    const { t } = useTranslation();
    const usageCases = t('case1', { returnObjects: true });
   
    const items = usageCases.bulletpoints
    const listItems = items.map((point, index) => 
        <li key={index}>{point}</li>
    );

    const features = usageCases.features
    const listFeatures = features.map((feature, index) => 
        <div key={index} className="col-md-4" style={{paddingBottom:"20px", paddingTop:"20px"}}>
            <p className="font-subtitle-blue feaature-title">{feature.title}</p>
            <p className="feaature-text font-content-text">{feature.text}</p>
        </div>
    );

    return (
        <div className="container" id="study1">
            <p className="studies-title font-content-title">
                {t('case1.title')}
            </p>
            <ul className="ul_blue">{listItems}</ul>
            <p className="font-content-text">{t('case1.text')}</p>
            <div className="row">
                {listFeatures}
            </div>
            <hr className="margin_top"/>
        </div>
    )
}

export default Study1Component;
