import React from 'react'
import "./header-content.scss"
import image from "../../../../static/images/kumuluz-header-cut.png"
import { useTranslation } from "gatsby-plugin-react-i18next"

const HeaderComponent = (props) =>{

    const { t } = useTranslation();

    return (
    <div className="container">
        <div className="row">
            <div className="col-lg-7">
                <p className="header-content">{t('header.'+props.page+'-title')}</p>
                <p className="header-text">
                    {t('header.'+props.page+'-text')}
                </p>
            </div>
            <div className="col-lg-5">
                <div className="container" style={{height:"100%"}}>
                    <img src={image} alt="Kumuluz" className="image" />
                </div>
            </div>
        </div>
    </div>)
}

export default HeaderComponent;