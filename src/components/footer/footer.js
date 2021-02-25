import React from 'react'
import "./footer.scss"
import { Link, useTranslation } from "gatsby-plugin-react-i18next" //Link

import { Row, Col } from 'react-bootstrap'


const FooterComponent = () => {

    const { t } = useTranslation();
    const renderLink = (link, index) => {
        if (link.href.startsWith("/")) {
            return (
                <div key={index}>
                    <Link to={link.href}>
                        {link.title}
                    </Link>
                </div>
            );
        } else {
            return (
                <div key={index}>
                    <a href={link.href} target="_blank" rel="noreferrer noopener">
                        {link.title}
                    </a>
                </div>
            );
        }
    }
    
    const renderLinks = (title, links) => {
        return (
            <>
                <div className="title">{title}</div>
                {links.map((link, index) => {
                    return <a key={index} href={link.href}>{link.name}</a>
                })
                }
            </>
        )
    }

    const footerLinks = t('footer', {returnObjects: true});

    return (
        <div id="footer" className="container-fluid">
            <div className="container">
            <Row className="links">
                <Col xs="6" md="3" lg="auto">
                    <div className="title">{footerLinks.products.title}</div>
                    <div className="subtitle">{footerLinks.products.subtitle1}</div>
                    {footerLinks.products.links1.map( (link,index) => {
                        return <a  href={link.href} className="left-pad" key={index}>kumuluz
                                    <span className={"color"+link.name}>{link.name}</span>
                                </a>
                    })
                    }
                    <div className="subtitle top-pad">{footerLinks.products.subtitle2}</div>
                    {footerLinks.products.links2.map( (link,index) => {
                        return <a href={link.href} className="left-pad" href={link.href} key={index}>
                                    {link.name}
                                </a>
                    })}
                </Col>

                <Col xs="6" md="3" lg="auto">
                    {renderLinks(footerLinks.services.title, footerLinks.services.links)}
                </Col>
                <Col xs="6" md="3" lg="auto">
                    {renderLinks(footerLinks.community.title, footerLinks.community.links)}
                </Col>
                <Col xs="6" md="3" lg="auto">
                    {renderLinks(footerLinks.company.title, footerLinks.company.links)}
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