import React from 'react'
import "./technical-details.scss"
import { Link } from "gatsby-plugin-react-i18next"

const SelectorComponent = (props) => {

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
        </div>
    )
}

export default SelectorComponent;
