import React from 'react'
import {useTranslation} from "gatsby-plugin-react-i18next" //Link
import "./case-studies.scss"

const CaseStudiesComponent = () => {
    
    const {t} = useTranslation();

    return (
    <div className="container padded">
        <div className="row">
             <div className="col-md-6">
                <p className="blog-title">{t('case-study.case-study-title')}</p>
                <p className="post-title">{t('case-study.study1-title')}</p>
                <hr/>
                <p className="post-text">{t('case-study.study1-text')}</p>
            </div>
            <div className="col-md-6">
                <p>LASTNOSTI</p>
            </div>
        </div>
    </div>
    )
}

export default CaseStudiesComponent;