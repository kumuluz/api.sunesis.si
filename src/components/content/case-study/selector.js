import React from "react"
import "./studies.scss"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const SelectorComponent = (props) => {

  const { t } = useTranslation()

  return (
    <div className="case-selector-line">
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
      <Link to="/">
        <button className="back-button">
              <span className="back-button-text">
                  {t("button-back")}
              </span>
        </button>
      </Link>
    </div>
  )
}

export default SelectorComponent
