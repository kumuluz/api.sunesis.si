import React from 'react'
import "./technical-details.scss"

const ContentLeftComponent = (props) => {

    return (
        <div className="container">
            <div id={props.id} className="row" style={{marginTop:"35px", marginBottom:"80px"}}>
                <div className="col-lg-6">
                    <p className="font-subtitle-blue tech-title">{props.title}</p>
                    <p className="font-content-text">{props.text}</p>
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