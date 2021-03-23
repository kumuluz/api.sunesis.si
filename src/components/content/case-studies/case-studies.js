import React from "react"

import SlideComponent from "./carousel-slide.js"

import { useTranslation } from "gatsby-plugin-react-i18next"
import "./case-studies.scss"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import SliderButton from "../../../../static/images/slider-navi.png"
import SliderButtonRotated from "../../../../static/images/slider-navi-rotated.png"

const CaseStudiesComponent = () => {

  const { t } = useTranslation()
  const usecases = t("usecases", { returnObjects: true })

  return (
    <div className="content-container cases-background" style={{ marginTop: "100px" }}>
      <CarouselProvider
        className="carousel"
        naturalSlideWidth={100}
        naturalSlideHeight={150}
        totalSlides={2}
        infinite={"true"}
        isPlaying={"true"}
        interval={10000}>
        <p className="font-content-title carousel-title" style={{ marginLeft: "15px" }}>
                    <span>
                        {t("case-study-title")}
                    </span>
        </p>
        <ButtonBack className="slider-button">
          <img src={SliderButtonRotated} alt="back"/>
        </ButtonBack>
        <ButtonNext className="slider-button-rotated">
          <img src={SliderButton} alt="next"/>
        </ButtonNext>
        <Slider>
          {
            usecases.map((detail, index) => {
              return (<Slide key={index} index={index}><SlideComponent use={detail} index={index}/> </Slide>)
            })
          }
        </Slider>
      </CarouselProvider>
    </div>
  )
}

export default CaseStudiesComponent
