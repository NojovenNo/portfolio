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
        height: "500px",
        width: "100%",
      }}
    >
      <Container>
        <Row>
          <Col className="" md={3} xs="auto">
            <h3>
              Maximo <br /> Espinal
            </h3>
          </Col>
          <IconContext.Provider value={{ size: "60px" }}>
            {/* <Col md={{ span: 1, offset: 3 }} xs={1}> */}
            <Col className="mt-5" md={{ span: 1, offset: 5 }} xs="auto">
              <IoIosMail />
              <IoLogoLinkedin />
              <IoLogoGithub />
              <IoIosDocument />
            </Col>
          </IconContext.Provider>
        </Row>
      </Container>
    </div>
  );
}
