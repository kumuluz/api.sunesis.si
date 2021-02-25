import React from 'react'
import "./technical-details.scss"

const SelectorComponent = (props) => {

    return (
        <div>
            <label className="radio_select">One
                <input type="radio" name="select" />
                <span className="checkmark"></span>
            </label>
            <label className="radio_select">Two
                <input type="radio" name="radio" name="select" />
                <span className="checkmark"></span>
            </label>
            <label className="radio_select">Three
                <input type="radio" name="radio" name="select" />
                <span className="checkmark"></span>
            </label>
            <label className="radio_select">Four
                <input type="radio" name="radio" name="select" />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default SelectorComponent;