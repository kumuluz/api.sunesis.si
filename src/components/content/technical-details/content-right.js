import React from "react"
import "./technical-details.scss"

const ContentLeftComponent = (props) => {

  return (
    <div className="container">
      <div id={props.id} className="row" style={{ marginTop: "35px", marginBottom: "90px" }}>
        <div className="col-lg-6">
          <div className="image-holder d-flex align-items-center justify-content-center">
            <img className="image shadow" src={props.image}/>
          </div>
        </div>
        <div className="col-lg-6">
          <p className="font-subtitle-blue tech-title">{props.title}</p>
          <p className="font-content-text">{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default ContentLeftComponent
