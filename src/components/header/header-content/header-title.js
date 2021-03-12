import React from "react"
import "./header-content.scss"
import { useTranslation } from "gatsby-plugin-react-i18next"

const HeaderComponent = (props) => {

  const { t } = useTranslation()

  return (
    <div className="row content-row">
      <div className="col-lg-7">
        <p className="header-title">{t("header." + props.page + "-title")}</p>
      </div>
    </div>)
}

export default HeaderComponent
