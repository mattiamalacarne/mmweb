import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import Fade from 'react-reveal/Fade'

import '../../styles/_main.scss'

const Hero = () => {

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
        <section id = "hero" className = "jumbotron">
            <Container>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                    <h1 className = 'hero-title'>
                        Ciao, il mio nome è <span className = 'text-color-main'>Mattia</span>
                        <br />
                        E sono uno sviluppatore un po' a caso
                    </h1>
                </Fade>
            </Container>
        </section>
    )
}

export default Hero