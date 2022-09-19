import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

function AboutMe() {
  return (
    <div
      className="banner"
      style={{
        // backgroundImage: "url(${img})",
        // backgroundImage: `url(${img})`,
        backgroundColor: "lightblue",
        height: "350px",
        width: "100%",
      }}
    >
      <Container id="container-aboutme">
        <IconContext.Provider value={{ size: "25px" }}>
          <Row>
            <Col className="" md={3} xs="Auto">
              <div id="about-me">
                <h2>About Me</h2>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum nobis possimus nihil dolorem harum.
                </h5>
              </div>
            </Col>
            <Col className="mt-2" md={{ span: 1, offset: 5 }} xs={"auto"}>
              <div>
                <h2>Technologys</h2>
                <Row>
                  {/* Icon */}
                  <Col xs="auto" md={5}>
                    <FaHtml5 />
                    <br />
                    <h6>HTML</h6>
                  </Col>
                  {/* Icon */}
                  <Col xs="auto" md={5}>
                    <FaCss3Alt />
                    <br />
                    <h6>CSS</h6>
                  </Col>
                  {/* Icon */}
                  <Col xs="auto" md={5}>
                    <FaBootstrap />
                    <br />
                    <h6>BootStrap</h6>
                  </Col>
                  {/* Icon */}
                  <Col xs="auto" md={5}>
                    <FaJs />
                    <br />
                    <h6>JavaScript</h6>
                  </Col>
                  {/* Icon */}
                  <Col xs="auto" md={5}>
                    <FaReact />
                    <br />
                    <h6>React</h6>
                  </Col>
                  {/* Icon */}
                  <Col xs="auto" md={5}>
                    <FaPython />
                    <br />
                    <h6>Python</h6>
                  </Col>
                  {/* Icon */}
                  <Col xs="auto" md={5}>
                    <FaFigma />
                    <br />
                    <h6>Figma</h6>
                  </Col>
                  {/* Icon */}
                  <Col xs="auto" md={5}>
                    <SiMicrosoftsqlserver />
                    <br />
                    <h6>Microsoft SQL</h6>
                  </Col>
                  {/* Icon */}
                  <Col xs="auto" md={5}>
                    <GrMysql />
                    <br />
                    <h6>MySQL</h6>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </IconContext.Provider>
      </Container>
    </div>
  );
}

export default AboutMe;
