import React from 'react'
import "./technical-details.scss"

const ContentLeftComponent = (props) => {

    return (
        <div className="container" id={"div" + props.key}>
            <div className="row">
                <div className="col-md-6">
                    <p>images</p>
                </div>
                <div className="col-md-6">
                    <p className="tech-title">{props.title}</p>
                    <p className="tech-text">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ContentLeftComponent;