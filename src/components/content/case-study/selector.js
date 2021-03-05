import React from 'react'
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import style from "./studies.module.scss"
import img_akrapovic from "../../../../static/images/akrapovic.png"
import img_petrol from "../../../../static/images/petrol.png"
import img_abanka from "../../../../static/images/abanka.png"
import img_generali from "../../../../static/images/generali.png"

const SelectorComponent = () => {

    const { t } = useTranslation();
    const usageCases = t('case2', { returnObjects: true });

    const features = usageCases.features
    const listFeatures = features.map((feature, index) =>
        <div key={index} className="col-md-4">
            <p className={style.feaature_title}>{feature.title}</p>
            <p className={style.feaature_text}>{feature.text}</p>
        </div>
    );

    return (
        <div className={style.right}>
            <div>
                <Link to="#study1">
                    <img src={img_generali} alt="studija 1"/>
                </Link>

            </div>
            <div className={style.image}>
                <Link to="#study2">
                    <img src={img_abanka} alt="studija 2" />
                </Link>
            </div>
            <div className={style.image}>
                <Link to="#study3">
                    <img src={img_petrol} alt="studija 3" />
                </Link>
            </div>
            <div className={style.image}>
                <Link to="#study4">
                    <img src={img_akrapovic} alt="studija 4" />
                </Link>
            </div>
        </div>
    )
}

export default SelectorComponent;