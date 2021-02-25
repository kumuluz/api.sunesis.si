import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"
import style from "./studies.module.scss"


const Study2Component = () => {

    const { t } = useTranslation();
    const usageCases = t('case2', { returnObjects: true });

    const features = usageCases.features
    const listFeatures = features.map((feature, index) => 
        <div key={index} className="col-md-4">
            <p className={style.feaature_title}>{feature.title}</p>
            <p className={style.feaature_text}>{feature.text}</p>
        </div>
    );

    return (
        <div className="container" id="study2">
            <p className={style.studies_title}>{t('case2.title')}</p>
            <div className="row">
                {listFeatures}
            </div>
            <p className={style.studies_text}>{t('case2.text1')}</p>
            <p className={style.studies_text}>{t('case2.text2')}</p>
            <hr className={style.margin_top}/>
        </div>
    )
}

export default Study2Component;