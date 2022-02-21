import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./navbar.scss"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

const NavbarComponent = () => {

    const { languages, language, changeLanguage } = useI18next();
    const { t } = useTranslation();

    const navbarLinks = t('navbar.links', { returnObjects: true }).map((link, index) =>
        <a href={link.link} key={index} target="_blank" rel="noreferrer">
            {link.name}
        </a>
    );

    let setSelected = (e) => {
      changeLanguage(e.target.getAttribute('value'));
    }


    return (
        <Navbar className="nbar" bg="transparent" expand="lg" variant="dark">
            <Navbar.Brand>
                <Link to="/">
                    <div className="nbar-brand2">
                      <img src="/images/kumuluz-api-logo-final.svg" alt="KumuluzAPI"/>
                    </div>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="expand-navbar" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="expand-navbar">
                    {navbarLinks}
                    { <div className="dropdown">
                        <p>
                            {t("navbar.language."+language +"-short")} &nbsp;
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L4 4L7 1" stroke="#5DC2EF"/>
                            </svg>
                        </p>
                        <div className="dropdown-content">
                            {languages.map((lng) => (
                                <p key={lng} onClick={setSelected} value={lng} role="presentation">
                                    {t("navbar.language."+lng +"-full")}
                                </p>
                            ))}
                        </div>
                    </div> }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;
