import { useTranslation } from "gatsby-plugin-react-i18next"
import { Row } from 'react-bootstrap';
import React from 'react'
import "./features.css"

import image1 from "../../../../static/images/icon-access.png"
import image2 from "../../../../static/images/icon-custom.png"
import image3 from "../../../../static/images/icon-upgrade.png"
import image4 from "../../../../static/images/icon-wrench.png"

const FeaturesComponent = () => {

    const { t } = useTranslation();

    return (
        <div className="features">
            <Row>
                <div className="col-md-6 col-lg-3">
                    <img src={image1} alt="Kumuluz" className="iimage" />
                    <p className="font-content-text feature-white">
                        {t('advantages.advantage1-text')}
                    </p>
                </div>
                <div className="col-md-6 col-lg-3">
                    <img src={image2} alt="Kumuluz" className="iimage" />
                    <p className="font-content-text feature-white">
                        {t('advantages.advantage2-text')}
                    </p>
                </div>
                <div className="col-md-6 col-lg-3">
                    <img src={image3} alt="Kumuluz" className="iimage" />
                    <p className="font-content-text feature-white">
                        {t('advantages.advantage3-text')}
                    </p>
                </div>
                <div className="col-md-6 col-lg-3">
                    <img src={image4} alt="Kumuluz" className="iimage" />
                    <p className="font-content-text feature-white">
                        {t('advantages.advantage4-text')}
                    </p>
                </div>
            </Row>
        </div>
    )
}

export default FeaturesComponent;