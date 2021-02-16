import React from "react"
import { Container } from 'react-bootstrap'
import Navbar from "./navbar/navbar.js"
import HeaderContent from "./header-content/header-content.js"
import "./header.css"

const HeaderComponent = (props) => (
    <div className="hheader">
        <Container>
            <Navbar />
            <HeaderContent title={props.title}/>
        </Container>
    </div>
)

export default HeaderComponent;
