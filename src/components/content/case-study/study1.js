import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"
import style from "./studies.module.scss"

const Study1Component = () => {

    const { t } = useTranslation();
    const usageCases = t('case1', { returnObjects: true });
   
    const items = usageCases.bulletpoints
    const listItems = items.map((point, index) => 
        <li key={index}>{point}</li>
    );

    const features = usageCases.features
    const listFeatures = features.map((feature, index) => 
        <div key={index} className="col-md-4">
            <p className={style.feaature_title}>{feature.title}</p>
            <p className={style.feaature_text}>{feature.text}</p>
        </div>
    );

    return (
        <div className="container" id="study1">
            <p className={style.studies_title}>{t('case1.title')}</p>
            <ul className={style.ul_blue}>{listItems}</ul>
            <p className={style.studies_text}>{t('case1.text')}</p>
            <div className="row">
                {listFeatures}
            </div>
            <hr className={style.margin_top}/>
        </div>
    )
}

export default Study1Component;