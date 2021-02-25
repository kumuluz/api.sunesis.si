import React from 'react'

import Slide from './carousel-slide.js'

import { useTranslation } from "gatsby-plugin-react-i18next" //Link
import "./case-studies.scss"
import { Carousel } from 'react-bootstrap'

const CaseStudiesComponent = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <p className="blog-title">{t('case-study.title')}</p>
            <Carousel>
                <Carousel.Item>
                    <Slide s="1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Slide s="2"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Slide s="3"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CaseStudiesComponent;