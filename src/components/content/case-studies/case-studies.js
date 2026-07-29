import React, { useEffect, useState } from "react"

import SlideComponent from "./carousel-slide.js"

import { useTranslation } from "gatsby-plugin-react-i18next"
import "./case-studies.scss"
import SliderButton from "../../../../static/images/slider-navi.png"
import SliderButtonRotated from "../../../../static/images/slider-navi-rotated.png"

const CaseStudiesComponent = () => {
  const { t } = useTranslation()
  const usecases = t("usecases", { returnObjects: true })
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideCount = usecases.length

  useEffect(() => {
    if (slideCount < 2) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setCurrentSlide(current => (current + 1) % slideCount)
    }, 10000)

    return () => window.clearInterval(interval)
  }, [slideCount])

  const showPrevious = () => {
    setCurrentSlide(current => (current - 1 + slideCount) % slideCount)
  }

  const showNext = () => {
    setCurrentSlide(current => (current + 1) % slideCount)
  }

  return (
    <div className="content-container cases-background" id="case-studies">
      <div className="carousel">
        <p className="font-content-title carousel-title">
          <span>{t("case-study-title")}</span>
        </p>
        <button
          aria-label="Previous case study"
          className="slider-button"
          disabled={slideCount < 2}
          onClick={showPrevious}
          type="button"
        >
          <img src={SliderButtonRotated} alt="back" />
        </button>
        <button
          aria-label="Next case study"
          className="slider-button-rotated"
          disabled={slideCount < 2}
          onClick={showNext}
          type="button"
        >
          <img src={SliderButton} alt="next" />
        </button>
        <div aria-live="polite" className="case-studies-slide">
          {slideCount > 0 ? (
            <SlideComponent index={currentSlide} use={usecases[currentSlide]} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesComponent
