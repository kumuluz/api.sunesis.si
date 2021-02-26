import React from 'react'
import "./technical-details.scss"

const ContentLeftComponent = (props) => {

    return (
        <div id={props.id} className="div-margin">
            <div className="row">
                <div className="col-lg-6">
                    <p className="tech-title">{props.title}</p>
                    <p className="tech-text">{props.text}</p>
                </div>
                <div className="col-lg-6">
                    <div style={{background:"#E5E5E5",borderRadius:"21px", height:"100%"}}>
                        images
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentLeftComponent;