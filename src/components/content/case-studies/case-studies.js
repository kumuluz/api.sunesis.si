import React from 'react'
import {useTranslation} from "gatsby-plugin-react-i18next" //Link


const CaseStudiesComponent = () => {
    
    const {t} = useTranslation();

    return (
    <div className="container">
        <div className="row">
             <div className="col-md-6">
                <p>{t('case-study.case-study-title')}</p>
                <p>{t('case-study.study1-title')}</p>
                <p>{t('case-study.study1-text')}</p>
            </div>
            <div className="col-md-6">
                <p>LASTNOSTI</p>
            </div>
        </div>
    </div>
    )
}

export default CaseStudiesComponent;