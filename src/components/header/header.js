import React from "react"
import Navbar from "./navbar/navbar.js"
import "./header.css"

const HeaderComponent = (props) => (
    <div className="hheader">
        <div className="content-container">
            <Navbar />
            { props.children }
        </div>
    </div>
)

export default HeaderComponent;
