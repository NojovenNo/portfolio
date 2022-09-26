import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  IoIosMail,
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosDocument,
} from "react-icons/io";
// import img from "../svg/Banner-Fondo.jpg";
export default function Banner() {
  return (
    <div
      className="banner"
      style={{
        // backgroundImage: "url(${img})",
        // backgroundImage: `url(${img})`,
        backgroundColor: "lightblue",
        height: "100%",
        width: "100%",
      }}
    >
      <Container>
        <Row>
          <Col xs="auto">
            <h3>
              Maximo <br /> Espinal
            </h3>
          </Col>
          <IconContext.Provider value={{ size: "65px" }}>
            {/* <Col md={{ span: 1, offset: 3 }} xs={1}> */}
            <Col
              className=""
              style={{
                marginTop: "50px",
                marginBottom: "50px",
              }}
              md={{ span: 1, offset: 5 }}
              xs="auto"
            >
              <a href="/">
                <IoIosMail />
              </a>
              <a href="/">
                <IoLogoLinkedin />
              </a>
              <a href="/">
                <IoLogoGithub />
              </a>
              <a href="/">
                <IoIosDocument />
              </a>
            </Col>
          </IconContext.Provider>
        </Row>
      </Container>
    </div>
  );
}
