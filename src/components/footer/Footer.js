import React from "react";
import { Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";


const Footer = () => {

    const date = new Date()
    return(
        <section id = "footer">
            <Container>
                <div className = "footer-content">
                    <SocialIcon url = "https://www.instagram.com/mattiamalacarne_/" bgColor = "transparent" fgColor = "#fff"/>
                    <SocialIcon url = "https://twitter.com/mattiamalacarne" bgColor = "transparent" fgColor = "#fff"/>
                    <SocialIcon url = "https://www.linkedin.com/in/mattia-malacarne-a57130226/" bgColor = "transparent" fgColor = "#fff"/>
                    <SocialIcon url = "https://github.com/mattiamalacarne" bgColor = "transparent" fgColor = "#fff"/>
                </div>
            </Container>
            <div className = "license">
                <p className = "license-text">{date.getFullYear()} Mattia Malacarne</p> 
            </div>
        </section>
        
    )
}

export default Footer