import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next" //Link
import { CONTACT_URL } from "../../../../static/links.js"
import "./video.scss"

const VideoComponent = () => {

    const { t } = useTranslation();

    return (
        <div className="padded" id="video">
            <div className="content-container">
            <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
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
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/295128872" width="640" height="360"
                            frameBorder="0" allowFullScreen/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default VideoComponent;
