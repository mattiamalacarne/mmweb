import React, {useEffect, useState} from "react";
import MobileStoreButton from 'react-mobile-store-button'
import { Col, Container, Image, Row } from "react-bootstrap";
import { Fade } from "react-reveal";


const Projects = ({ projects }) => {
    //console.debug(projects)
    if (projects === null) {
        return <div></div>
    }

    return(
        <section id = "projects">
            <Container fluid>
                <Row>
                    <h1 className = "prj-title">Progetti</h1>
                </Row>
                {projects.map((project => {
                    return <Project project = {project} />
                }))}
            </Container>
        </section>
    )
}

const Project = ({project}) => {

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
        <Row className = "project-row">
            <Col lg = {5} xl = {6}className = "project-text">
                <Fade left = {isDesktop} bottom = {isMobile}>
                    <p className = "prj-desc-title">{project.title}</p>
                    <p className = "prj-desc-sub">{project.subtitle}</p>
                    <p className = "prj-desc-desc">{project.desc}</p>
                    <div>
                        {project.ios && (<MobileStoreButton
                            store = "ios"
                            url = {project.ios}
                            width = "100px"
                            linkProps = {{width: "100"}}
                        />)}
                        {project.android && (<span className = "android_btn">
                            <MobileStoreButton
                                store = "android"
                                url = {project.android}
                                width = "120px"
                            />
                        </span>)}
                    </div>
                </Fade>
            </Col>
            <Col lg = {7} xl = {6}>
                <Fade right = {isDesktop} bottom = {isMobile}>
                    <Image className = "prj-image" src = {project.img} />
                </Fade>
            </Col>
        </Row>
    )
}

export default Projects