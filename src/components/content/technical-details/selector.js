import React from 'react'
import "./technical-details.scss"

const SelectorComponent = (props) => {

    const handle = (e) => {
        document.getElementById(e.target.value).scrollIntoView();
    }

    return (
        <div>
            {props.det.map((detail, index) => {
                return (
                    <label className="radio_select" key={index}>
                        <span className="select-text">{detail.title}</span>
                        <input type="radio" value={"paragraph" + index} name="selector" onClick={handle}/>
                        <span className="checkmark"></span>
                    </label>
                )
            }
            )}
        </div>
    )
}

export default SelectorComponent;