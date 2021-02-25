import React from 'react'
import {useTranslation} from "gatsby-plugin-react-i18next" //Link
import "./case-studies.scss"

const CaseStudiesComponent = (props) => {
    
    const {t} = useTranslation();
    const text = t('case' + props.s + '.text').length > 100? 
        t('case' + props.s + '.text').substring(0,500) : 
        t('case' + props.s + '.text1').substring(0,500);
    const features = t('case' + props.s + '.features', {returnObjects: true});
    // const detailComponents = details.map((detail, index) => {
    //     if(index % 2 === 0)
    //       return (<ContentL title={detail.title} text={detail.text} key={index} ide={index}/>);
    //     else
    //       return (<ContentR title={detail.title} text={detail.text} key={index} ide={index}/>);
    //   });

    return (
        <div className="row container">
        <div className="col-md-6">
           <p className="post-title">{t('case' + props.s + '.title')}</p>
           <hr/>
           <p className="post-text">
                { text } ...
           </p>
       </div>
       <div className="col-md-6 row">
           <div className="col-md-6">
               <div className="featture">
                   <p className="featture-title">{features[0].title}</p>
                   <p className="featture-text">{features[0].text}</p>
               </div>
               <div className="featture">
                   <p className="featture-title">{features[1].title}</p>
                   <p className="featture-text">{features[1].text}</p>
               </div>
           </div>
           <div className="middle-aligned featture col-md-6">
               <p className="featture-title">{features[2].title}</p>
               <p className="featture-text">{features[2].text}</p>
           </div>
       </div>
   </div>
    )
}

export default CaseStudiesComponent;