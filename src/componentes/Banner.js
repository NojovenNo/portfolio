import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import banner from "./svg/banner.png";
import Pdf from "./svg/CV+Spanish.pdf";
import {
  IoIosMail,
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosDocument,
} from "react-icons/io";
export default function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${banner})`,
        height: "38vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container style={{ height: "125px" }}>
        <Row>
          <Col xs="auto">
            <h3>
              Maximo <br /> Espinal
            </h3>
          </Col>
          <IconContext.Provider value={{ size: "55px" }}>
            {/* <Col md={{ span: 1, offset: 3 }} xs={1}> */}
            <Col
              className=""
              style={{
                marginTop: "50px",
              }}
              md={{ span: 1, offset: 5 }}
              xs="auto"
            >
              <a
                href="mailto:MaximoEspinalDM@gmail.com"
                style={{ color: "inherit" }}
              >
                <IoIosMail />
              </a>
              <a
                href="https://www.linkedin.com/in/maximoespinaldelgado/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://github.com/NojovenNo"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                <IoLogoGithub />
              </a>
              <a
                href={Pdf}
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit" }}
              >
                <IoIosDocument />
              </a>
            </Col>
          </IconContext.Provider>
        </Row>
      </Container>
    </div>
  );
}
