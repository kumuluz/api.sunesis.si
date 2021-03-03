import React from 'react'
import "./technical-details.scss"

const SelectorComponent = (props) => {

    const handle = (e) => {
        document.getElementById(e.currentTarget.getAttribute('value')).scrollIntoView();
    }

    return (
        <div className="selector-line">
        {props.det.map((detail, index) => {
            return (
                <p key={index} value={"paragraph" + index} 
                name="selector" onClick={handle} className="select-text"
                >
                        <span>{detail.title}</span>
                        <span className="radio-button"></span>
                    </p>
            )
        }
        )}
        </div>
    )
}

export default SelectorComponent;