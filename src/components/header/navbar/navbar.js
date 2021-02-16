import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./navbar.css"
import {Link, useI18next} from 'gatsby-plugin-react-i18next';

const NavbarComponent = () => {

    const {languages, originalPath} = useI18next();

    return (
    <Navbar collapseOnSelect expand="md">
        <Navbar.Brand>
            <Link to="/">
                <svg width="225" height="42" viewBox="0 0 225 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M99.5109 19.1867C98.8109 19.7867 97.9109 19.8867 97.1109 19.3867C96.8109 19.1867 96.5109 19.0867 96.3109 18.8867C95.7109 18.5867 95.0109 18.4867 94.2109 18.4867C92.3109 18.4867 91.4109 19.1867 91.4109 20.5867C91.4109 21.5867 92.6109 22.5867 95.0109 23.4867C97.4109 24.3867 99.1109 25.4867 100.211 26.5867C101.211 27.6867 101.811 29.0867 101.811 30.5867C101.811 32.3867 101.011 34.0867 99.5109 35.3867C98.0109 36.6867 96.1109 37.4867 94.1109 37.4867C91.9109 37.4867 90.1109 36.7867 88.5109 35.3867C87.4109 34.3867 87.7109 32.6867 89.0109 31.9867C89.7109 31.6867 90.5109 31.7867 91.1109 32.1867C92.1109 32.8867 93.1109 33.2867 94.1109 33.2867C95.1109 33.2867 95.9109 32.9867 96.6109 32.4867C97.3109 31.9867 97.7109 31.3867 97.7109 30.6867C97.7109 29.4867 96.4109 28.3867 93.9109 27.3867C91.4109 26.3867 89.6109 25.3867 88.7109 24.3867C87.7109 23.3867 87.2109 22.0867 87.2109 20.5867C87.2109 18.8867 88.0109 17.1867 89.3109 16.0867C90.7109 14.8867 92.4109 14.2867 94.4109 14.2867C95.9109 14.2867 97.5109 14.7867 99.2109 15.8867C100.411 16.5867 100.511 18.2867 99.5109 19.1867Z" fill="white"/>
                    <path d="M108.109 14.8867H108.609C109.709 14.8867 110.709 15.7867 110.709 16.9867V27.2867C110.709 31.0867 112.409 32.9867 115.709 32.9867C117.209 32.9867 118.409 32.4867 119.209 31.4867C120.109 30.4867 120.509 29.0867 120.509 27.2867V16.8867C120.509 15.7867 121.409 14.7867 122.609 14.7867H123.109C124.209 14.7867 125.209 15.6867 125.209 16.8867V27.9867C125.209 30.7867 124.309 32.9867 122.509 34.7867C120.709 36.5867 118.409 37.4867 115.609 37.4867C112.809 37.4867 110.509 36.5867 108.709 34.7867C106.909 32.9867 106.109 30.6867 106.109 27.7867V16.8867C106.009 15.7867 106.909 14.8867 108.109 14.8867Z" fill="white"/>
                    <path d="M130.41 34.7867V16.8867C130.41 15.7867 131.31 14.7867 132.51 14.7867H132.91C134.01 14.7867 135.01 15.6867 135.01 16.8867V18.4867C136.31 16.9867 137.51 15.8867 138.61 15.2867C139.71 14.5867 140.91 14.2867 142.21 14.2867C144.21 14.2867 145.91 14.9867 147.31 16.2867C148.71 17.5867 149.41 19.1867 149.41 20.9867V34.7867C149.41 35.8867 148.51 36.8867 147.31 36.8867H146.81C145.71 36.8867 144.71 35.9867 144.71 34.7867V22.2867C144.71 21.0867 144.31 20.0867 143.51 19.2867C142.71 18.4867 141.71 18.0867 140.61 18.0867C139.11 18.0867 137.71 18.7867 136.61 20.0867C135.51 21.3867 134.91 22.9867 134.91 24.7867V34.6867C134.91 35.7867 134.01 36.7867 132.81 36.7867H132.31C131.31 36.8867 130.41 35.8867 130.41 34.7867Z" fill="white"/>
                    <path d="M174.509 26.7867H157.809C158.209 29.0867 159.109 30.6867 160.609 31.6867C162.009 32.6867 163.609 33.2867 165.309 33.2867C167.409 33.2867 169.209 32.5867 170.809 31.1867C171.509 30.5867 172.609 30.5867 173.409 31.0867L173.509 31.1867C174.509 31.9867 174.609 33.4867 173.709 34.2867C171.409 36.3867 168.509 37.4867 165.109 37.4867C161.809 37.4867 159.109 36.3867 156.909 34.0867C154.709 31.8867 153.609 29.0867 153.609 25.7867C153.609 22.6867 154.709 19.9867 156.909 17.6867C159.109 15.3867 161.809 14.2867 165.109 14.2867C168.309 14.2867 171.009 15.4867 173.209 17.7867C175.009 19.5867 176.109 21.8867 176.409 24.6867C176.609 25.6867 175.709 26.7867 174.509 26.7867ZM158.309 23.0867H171.709C170.209 20.0867 168.009 18.5867 165.109 18.5867C161.909 18.4867 159.609 19.9867 158.309 23.0867Z" fill="white"/>
                    <path d="M192.71 19.1867C192.01 19.7867 191.11 19.8867 190.31 19.3867C190.01 19.1867 189.71 19.0867 189.51 18.8867C188.91 18.5867 188.21 18.4867 187.41 18.4867C185.51 18.4867 184.61 19.1867 184.61 20.5867C184.61 21.5867 185.81 22.5867 188.21 23.4867C190.61 24.3867 192.31 25.4867 193.41 26.5867C194.41 27.6867 195.01 29.0867 195.01 30.5867C195.01 32.3867 194.21 34.0867 192.71 35.3867C191.21 36.6867 189.31 37.4867 187.31 37.4867C185.11 37.4867 183.31 36.7867 181.71 35.3867C180.61 34.3867 180.91 32.6867 182.21 31.9867C182.91 31.6867 183.71 31.7867 184.31 32.1867C185.31 32.8867 186.31 33.2867 187.31 33.2867C188.31 33.2867 189.11 32.9867 189.81 32.4867C190.51 31.9867 190.91 31.3867 190.91 30.6867C190.91 29.4867 189.61 28.3867 187.11 27.3867C184.61 26.3867 182.81 25.3867 181.91 24.3867C180.91 23.3867 180.41 22.0867 180.41 20.5867C180.41 18.8867 181.21 17.1867 182.51 16.0867C183.91 14.8867 185.61 14.2867 187.61 14.2867C189.11 14.2867 190.71 14.7867 192.41 15.8867C193.61 16.5867 193.71 18.2867 192.71 19.1867Z" fill="white"/>
                    <path d="M198.609 7.68673C198.609 6.68673 199.009 5.88673 199.709 5.18673C200.409 4.48673 201.309 4.08673 202.209 4.08673C203.209 4.08673 204.009 4.48673 204.709 5.18673C205.409 5.88673 205.809 6.68673 205.809 7.68673C205.809 8.68673 205.409 9.48673 204.709 10.1867C204.009 10.8867 203.209 11.1867 202.209 11.1867C201.209 11.1867 200.409 10.8867 199.709 10.1867C199.009 9.48673 198.609 8.58673 198.609 7.68673ZM202.009 14.8867H202.509C203.609 14.8867 204.609 15.7867 204.609 16.9867V34.8867C204.609 35.9867 203.709 36.9867 202.509 36.9867H202.009C200.909 36.9867 199.909 36.0867 199.909 34.8867V16.8867C199.909 15.7867 200.809 14.8867 202.009 14.8867Z" fill="white"/>
                    <path d="M221.909 19.1867C221.209 19.7867 220.309 19.8867 219.509 19.3867C219.209 19.1867 218.909 19.0867 218.709 18.8867C218.109 18.5867 217.409 18.4867 216.609 18.4867C214.709 18.4867 213.809 19.1867 213.809 20.5867C213.809 21.5867 215.009 22.5867 217.409 23.4867C219.809 24.3867 221.509 25.4867 222.609 26.5867C223.609 27.6867 224.209 29.0867 224.209 30.5867C224.209 32.3867 223.409 34.0867 221.909 35.3867C220.409 36.6867 218.509 37.4867 216.509 37.4867C214.309 37.4867 212.509 36.7867 210.909 35.3867C209.809 34.3867 210.109 32.6867 211.409 31.9867C212.109 31.6867 212.909 31.7867 213.509 32.1867C214.509 32.8867 215.509 33.2867 216.509 33.2867C217.509 33.2867 218.309 32.9867 219.009 32.4867C219.709 31.9867 220.109 31.3867 220.109 30.6867C220.109 29.4867 218.809 28.3867 216.309 27.3867C213.809 26.3867 212.009 25.3867 211.109 24.3867C210.109 23.3867 209.609 22.0867 209.609 20.5867C209.609 18.8867 210.409 17.1867 211.709 16.0867C213.109 14.8867 214.809 14.2867 216.809 14.2867C218.309 14.2867 219.909 14.7867 221.609 15.8867C222.909 16.5867 223.009 18.2867 221.909 19.1867Z" fill="white"/>
                    <path d="M64.9107 18.9867C62.5107 14.8867 58.3107 12.4867 53.1107 12.1867C52.2107 9.58672 50.5107 7.58672 48.2107 6.28672C45.7107 4.88672 42.8107 4.58672 40.0107 5.28672C37.6107 2.58672 34.4107 0.886722 30.6107 0.286722C26.8107 -0.413278 22.7107 0.186722 19.0107 1.88672C12.0107 4.98672 8.11068 11.1867 8.61068 17.9867C2.41068 19.8867 -0.189322 25.1867 0.0106781 30.0867C0.310678 35.4867 4.11068 41.1867 10.8107 41.5867H18.4107H27.4107C31.0107 41.5867 32.3107 40.8867 33.8107 39.4867C35.4107 38.0867 36.1107 36.3867 36.1107 34.4867C36.1107 32.8867 35.6107 31.4867 34.5107 30.2867C33.4107 29.1867 31.7107 28.0867 29.2107 27.0867C26.7107 26.0867 25.5107 25.0867 25.5107 24.0867C25.5107 22.6867 26.5107 21.9867 28.4107 21.9867C29.2107 21.9867 29.9107 22.1867 30.5107 22.4867C30.8107 22.5867 31.1107 22.7867 31.4107 22.9867C32.2107 23.4867 33.2107 23.3867 33.9107 22.7867C34.9107 21.8867 34.8107 20.1867 33.7107 19.4867C31.9107 18.3867 30.3107 17.7867 28.7107 17.7867C26.6107 17.7867 24.8107 18.3867 23.4107 19.5867C22.1107 20.7867 21.2107 22.4867 21.2107 24.2867C21.2107 25.7867 21.7107 27.0867 22.7107 28.1867C23.7107 29.1867 25.5107 30.1867 28.1107 31.2867C30.7107 32.2867 32.0107 33.3867 32.0107 34.6867C32.0107 35.3867 31.6107 35.9867 30.9107 36.5867C30.2107 37.0867 29.3107 37.3867 28.3107 37.3867H27.8107H11.0107C6.91068 37.0867 4.51068 33.4867 4.31068 29.9867C4.11068 26.6867 5.91068 22.7867 11.3107 21.8867C12.5107 21.6867 13.3107 20.4867 13.0107 19.2867C11.6107 12.5867 16.1107 7.98672 20.7107 5.88672C26.0107 3.48672 33.2107 3.58672 37.4107 9.18672C38.0107 9.98672 39.0107 10.1867 39.9107 9.88672C41.9107 9.08672 44.2107 9.28672 46.0107 10.1867C47.7107 11.0867 48.8107 12.7867 49.2107 14.9867C49.4107 15.9867 50.3107 16.6867 51.3107 16.5867C57.0107 16.4867 59.7107 19.0867 61.1107 21.2867C63.0107 24.5867 63.0107 28.9867 61.1107 32.4867C59.3107 35.6867 56.2107 37.3867 52.3107 37.3867H42.8107C41.7107 37.3867 40.6107 38.1867 40.5107 39.2867C40.4107 40.5867 41.4107 41.6867 42.6107 41.6867H52.2107C57.6107 41.6867 62.2107 39.0867 64.8107 34.5867C67.7107 29.6867 67.7107 23.5867 64.9107 18.9867Z" fill="white"/>
                </svg>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link href="#deets">More deets</Nav.Link>
            </Nav>
        </Navbar.Collapse>
            <ul className="languages">
                {languages.map((lng) => (
                <li key={lng}>
                    <Link to={originalPath} language={lng}>
                    {lng}
                    </Link>
                </li>
                ))}
          </ul>
    </Navbar>
)
}

export default NavbarComponent;