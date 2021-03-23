import React from "react"

const StudyComponent = (props) => {


  const items = props.bulletpoints
  let listItems = []
  if (items !== undefined) {
    listItems = items.map((point, index) =>
      <li key={index}>{point}</li>
    )
  }

  const features = props.features
  let listFeatures = []
  if (features !== undefined) {
    listFeatures = features.map((feature, index) =>
      <div key={index} className="col-md-4" style={{ paddingBottom: "20px", paddingTop: "20px" }}>
        <p className="font-subtitle-blue feaature-title">{feature.title}</p>
        <p className="feaature-text font-content-text">{feature.text}</p>
      </div>
    )
  }

  let img
  if (props.image !== undefined) {
    img = (<div style={{ padding: "40px 0 40px 0", textAlign: "center" }}>
      <img src={props.image} className="img" alt="kumuluz"/>
    </div>)
  }

  return (
    <div className="container">
      <div id={props.id} className="row content">
        <div className="col-lg-12">
          <p className="studies-title font-content-title">
            {props.title}
          </p>
          <ul className="ul_blue">{listItems}</ul>
          <p className="font-content-text">{props.text1}</p>
          <p className="font-content-text">{props.text2}</p>
          <div className="row">
            {listFeatures}
          </div>
          {img}
          <hr className="margin_top"/>
        </div>
      </div>
    </div>
  )
}

export default StudyComponent
