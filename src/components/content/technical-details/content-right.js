import React from 'react'
import "./technical-details.scss"

const ContentLeftComponent = (props) => {

    return (
        <div id={"div" + props.ide}>
            <div className="row">
                <div className="col-lg-6">
                    <p>images</p>
                </div>
                <div className="col-lg-6">
                    <p className="tech-title">{props.title}</p>
                    <p className="tech-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ContentLeftComponent;