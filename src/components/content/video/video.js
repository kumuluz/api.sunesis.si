import React from 'react'
import {useTranslation} from "gatsby-plugin-react-i18next" //Link


const VideoComponent = () => {
    
    const {t} = useTranslation();

    return (
        <div className="container">
        <div className="row">
             <div className="col-md-6">
                <p>{t('video.video-title')}</p>
                <p>{t('video.video-text')}</p>
            </div>
            <div className="col-md-6">
                <p>videooooooo</p>
            </div>
        </div>
    </div>
    )
}

export default VideoComponent;