import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"
import style from "./studies.scss"


const Study3Component = () => {

    const { t } = useTranslation();
    const usageCases = t('case3', { returnObjects: true });
   
    let items = usageCases.bulletpoints1;
    const listItems1 = items.map((point, index) => 
        <li key={index}>{point}</li>
    );
    
    items = usageCases.bulletpoints2;
    const listItems2 = items.map((point, index) => 
        <li key={index}>{point}</li>
    );

    return (
        <div className="container" id="study3" style={{paddingBottom:"3%"}}>
            <p className="studies-title font-content-title">{t('case3.title')}</p>
            <p className="font-content-text">{t('case3.text1')}</p>
            <div className="row">
                <div className="col-md-6">
                    <ul className="ul_black" style={{padding:"35px 0 10px 0"}}>
                        {listItems1}
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="ul_black" style={{padding:"35px 0 10px 0"}}>
                        {listItems2}
                    </ul>
                </div>
            </div>
            <p className="font-content-text">{t('case3.text2')}</p>
        </div>
    )
}

export default Study3Component;