import React from 'react'
import {useTranslation, Link} from "gatsby-plugin-react-i18next"
import "./case-studies.scss"

const CaseStudiesComponent = (props) => {
    
    const {t} = useTranslation();
    const text = t('case' + props.s + '.text').length > 100? 
        t('case' + props.s + '.text').substring(0,300) : 
        t('case' + props.s + '.text1').substring(0,300);
    const features = t('case' + props.s + '.features', {returnObjects: true});

    return (
        <div className="row container">
        <div className="col-md-6">
           <p className="font-content-title-bold">{t('case' + props.s + '.title')}</p>
           <hr/>
           <p className="font-content-text feature-text" style={{marginTop:"20px"}}>
                { text } ...
           </p>
            <p className="font-content-text show-more">
                <Link to={"/case-studies/#study"+props.s}>
                    {t('blog.show-more')}
                    &nbsp;
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3203 0.947266L17.3203 7.20823M17.3203 7.20823L12.3203 12.9473M17.3203 7.20823H0.320312" stroke="#EC6B6B" strokeWidth="2"/>
                    </svg>
                </Link>
            </p>
       </div>
       <div className="col-lg-6 row">
           <div className="col-md-6 middle-aligned">
               <div className="featture">
                   <p className="font-content-title carousel-feature-title">
                       {features[0].title}
                    </p>
                   <p className="font-content-text feature-text">
                       {features[0].text}
                    </p>
               </div>
               <div className="featture">
                    <p className="font-content-title carousel-feature-title">
                       {features[1].title}
                    </p>
                    <p className="font-content-text feature-text">
                       {features[1].text}
                    </p>
               </div>
           </div>
           <div className="middle-aligned featture col-md-6">
                    <p className="font-content-title carousel-feature-title">
                       {features[2].title}
                    </p>
                    <p className="font-content-text feature-text">
                       {features[2].text}
                    </p>
           </div>
       </div>
   </div>
    )
}

export default CaseStudiesComponent;
