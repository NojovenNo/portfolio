import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import { Link } from "react-scroll";
import { GrTechnology } from "react-icons/gr";
import {
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
  FaInfoCircle,
} from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
<FaReact />;
function AboutMe() {
  return (
    <div>
      <Container>
        <Row style={{ marginTop: "25px" }}>
          <Col>
            <h2 className="text-center" style={{}}>
              <FaInfoCircle values={{ size: "6vh" }} /> Acerca de mi
            </h2>
            <br />
            <h5 style={{ fontSize: "25px", marginTop: "75px" }}>
              Soy un desarrollador de aplicaciones Desktop con mas de 2 años de
              experiencia, desarrollador front-end y manejo de bases de datos.
            </h5>
          </Col>
          <Col
            style={{
              marginLeft: "50px",
              marginRight: "50px",
              marginBottom: "4.2vh",
            }}
          >
            <h1 className="text-center">
              <GrTechnology values={{ size: "6vh" }} />
              Tecnología
            </h1>
            <br />
            <IconContext.Provider value={{ size: "3vh" }}>
              <Row
                style={{
                  fontSize: "2vh",
                  placeItems: "center",
                  textAlign: "center",
                }}
              >
                <Col xs={6} md={4} style={{ marginTop: "10px" }}>
                  <FaHtml5 />
                  <h3>HTML</h3>
                </Col>
                <Col xs={6} md={4}>
                  <FaCss3Alt />
                  <h3>CSS</h3>
                </Col>
                <Col xs={6} md={4}>
                  <FaBootstrap />
                  <h3>Bootstrap</h3>
                </Col>
                <Col xs={6} md={4} style={{ marginTop: "10px" }}>
                  <FaJs />
                  <h3>JavaScript</h3>
                </Col>
                <Col xs={6} md={4}>
                  <FaReact />
                  <h3>React</h3>
                </Col>
                <Col xs={6} md={4}>
                  <FaFigma />
                  <h3>Figma</h3>
                </Col>
                <Col xs={6} md={4}>
                  <FaPython />
                  <h3>Python</h3>
                </Col>
                <Col xs={6} md={4} style={{ marginTop: "10px" }}>
                  <SiMicrosoftsqlserver />
                  <h3>Microsoft SQL</h3>
                </Col>
                <Col xs={6} md={4}>
                  <GrMysql />
                  <h3>MySQL</h3>
                </Col>
              </Row>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
      <div className="bg-scroll-down">
        <Link to="projects" spy={true} smooth={true} offset={50} duration={200}>
          <button className="scroll-down"></button>
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;
