import React from 'react'
import "./footer.scss"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

import { Row, Col } from 'react-bootstrap'


const FooterComponent = () => {

    const { t } = useTranslation();
    
    const renderLinks = (title, links) => {
        return (
            <>
                <div className="title">{title}</div>
                {links.map((link, index) => {
                    if(link.href)
                        if(link.href.charAt(0) === '/') {
                            return (<div key={index} className="link">
                                        <Link to={link.href}>
                                            {link.name}
                                        </Link>
                                    </div>)
                        } else {
                            return (<div key={index} className="link">
                                        <a href={link.href} target="_blank" rel="noreferrer noopener">
                                            {link.name}
                                        </a>
                                    </div>)
                        }
                    else
                        return (<div key={index} className="link">
                                    <span>{link.name}</span>
                                </div>)
                })
                }
            </>
        )
    }

    return (
        <div id="footer">
            <div className="content-container">
            <Row>
                <Col xs="6" md="3">
                    <div className="title">{t('footer.products.title')}</div>
                    <div className="subtitle">{t('footer.products.subtitle1')}</div>
                    {t('footer.products.links1', {returnObjects: true})
                        .map( (link,index) => {
                        if(link.href.charAt(0) !== 'h') {
                            return (
                                <div className="link left-pad" key={index}>
                                    <Link  to={link.href} target="_blank" rel="noreferrer noopener">
                                        kumuluz<span className={"color"+link.name}>{link.name}</span>
                                    </Link>
                                </div>
                            )
                        } else {
                            return (
                                <div className="link left-pad" key={index}>
                                    <a  href={link.href} target="_blank" rel="noreferrer noopener">
                                        kumuluz<span className={"color"+link.name}>{link.name}</span>
                                    </a>
                                </div>
                            )
                        }
                    })
                    }
                    <div className="subtitle top-pad">{t('footer.products.subtitle2')}</div>
                    {t('footer.products.links2', {returnObjects: true})
                        .map( (link,index) => {
                        return (
                                <div className="link left-pad" key={index}>
                                    <a href={link.href} target="_blank" rel="noreferrer noopener">
                                        {link.name}
                                    </a>
                                </div>)
                    })}
                </Col>

                <Col xs="6" md="3">
                    {renderLinks(t('footer.services.title'), t('footer.services.links', {returnObjects: true}))}
                </Col>
                <Col xs="6" md="3">
                    {renderLinks(t('footer.community.title'), t('footer.community.links', {returnObjects: true}))}
                </Col>
                <Col xs="6" md="3">
                    {renderLinks(t('footer.company.title'), t('footer.company.links', {returnObjects: true}))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="line" />
                    <p className="copyright">&copy; Sunesis, {t('footer.copyright')}</p>
                </Col>
            </Row>
        </div>
    </div>
    )
}
export default FooterComponent;
