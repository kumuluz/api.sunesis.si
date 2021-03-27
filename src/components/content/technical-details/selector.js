import React from 'react'
import "./technical-details.scss"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const SelectorComponent = (props) => {


    const { t } = useTranslation()

    return (
        <div className={props.page + "-selector-line"}>
        {props.det.map((detail, index) => {
            return (
                <Link to={"#paragraph" + index}>
                    <p key={index} className="font-content-text select-text">
                        <span>{detail.menutitle}</span>
                        <span className="radio-button"></span>
                    </p>
                </Link>
            )
        }
        )}
            <button className="back-button" onClick={() => window.history.back()}>
              <span className="back-button-text">
                  {t("button-back")}
              </span>
            </button>
        </div>
    )
}

export default SelectorComponent;
