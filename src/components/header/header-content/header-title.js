import React from 'react'
import "./header-content.scss"
import image from "../../../../static/images/kumuluz-header.png"

const HeaderComponent = (props) => (

    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <p className="header-content">{props.title}</p>
            </div>
            <div className="col-md-5">
                <img src={image} alt="Kumuluz" className="image" />
            </div>
        </div>
    </div>
)

export default HeaderComponent;