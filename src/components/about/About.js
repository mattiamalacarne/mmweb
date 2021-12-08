import React, {useState, useEffect} from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../../styles/_main.scss"

import {Fade} from 'react-reveal'
import { Flip } from "react-reveal";

const About = () => {

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsMobile(true);
          setIsDesktop(false);
        }
      }, []);


    return(
        <section id = "about">
            <Container fluid>
              <Row><Fade><h1 className = "abt-title">Qualcosa su di me</h1></Fade></Row>
              <div className = "abt-wrapper">
                <Row md = {2} xs = {1} className = "align-items-center">
                  <Col align = "center">
                    <div>
                      <Flip left>
                        <Image className = "abt-img" src = {process.env.PUBLIC_URL + "/profile.jpeg"} />
                      </Flip>
                    </div>
                  </Col>
                  <Col>
                    <Fade right = {isDesktop} bottom = {isMobile} >
                      <div className = "abt-desc">
                        <p className = "abt-desc-title">Sono uno studente al Politecnico di Milano da ormai troppo tempo, quasi completamente consumato dall'ingegneria informatica</p>
                        <p className = "abt-desc-title">Nel tempo libero sviluppatore indipendente con mille progetti per la testa e pochi veramente realizzati</p>
                        <p className = "abt-desc-title">"Preoccupati e soffri due volte"</p>
                      </div>
                    </Fade>
                  </Col>
                </Row>
              </div>
            </Container>
        </section>
    )
}

export default About