import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next" //Link
import "./studies.scss"

const Study2Component = () => {

    const { t } = useTranslation();
    const usageCases = t('case2', { returnObjects: true });

    const features = usageCases.features
    const listFeatures = features.map((feature, index) => 
        <div key={index} className="col-md-4">
            <p className="feaature-title">{feature.title}</p>
            <p className="feaature-text">{feature.text}</p>
        </div>
    );

    return (
        <div className="container" id="study2">
            <p className="studies-title">{t('case2.title')}</p>
            <div className="row">
                {listFeatures}
            </div>
            <p className="studies-text">{t('case2.text1')}</p>
            <p className="studies-text">{t('case2.text2')}</p>
            <hr/>
        </div>
    )
}

export default Study2Component;