import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next" //Link
import { CONTACT_URL } from "../../../../static/links.js"
import "./video.scss"

const VideoComponent = () => {

    const { t } = useTranslation();

    return (
        <div className="padded" id="video">
            <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <p className="video-title font-content-title">
                        {t('video.video-title')}
                    </p>
                    <p className="video-text font-subtitle-blue" style={{marginBottom:"30px"}}>
                        {t('video.video-text')}
                    </p>
                    <a href={CONTACT_URL} target="_blank" rel="noreferrer noopener">
                        <button className="video-button">
                            <span className="video-button-text">
                                {t("header.button-contact")}</span>
                        </button>
                    </a>
                </div>
                <div className="col-md-5">
                    <p>videooooooo</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default VideoComponent;