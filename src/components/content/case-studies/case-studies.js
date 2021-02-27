import React from 'react'

import Slide from './carousel-slide.js'

import { useTranslation } from "gatsby-plugin-react-i18next"
import "./case-studies.scss"
import { Carousel } from 'react-bootstrap'

const CaseStudiesComponent = () => {

    const { t } = useTranslation();

    const pi = <span style={{position:"absolute", left:0, top:0}} className="glyphicon glyphicon-glass">haha</span>;
    const ni = <span style={{position:"absolute", right:0, top:0}} className="glyphicon glyphicon-glass">anacond</span>;

    return (
        <div className="container" style={{marginTop:"50px"}}>
            <p className="blog-title">{t('case-study-title')}</p>
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