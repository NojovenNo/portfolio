import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import banner from "../svg/mobBanner.png";
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
        backgroundImage: `url(${banner})`,
        height: "38vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <IconContext.Provider
          value={{ size: "55px", color: "rgba(0, 0, 0, 1)" }}
        >
          <Row className="col-sm">
            <Col xs={10}>
              <h3
                style={{
                  marginLeft: "20%",
                }}
              >
                Maximo <br /> Espinal
              </h3>
              <Col
                className=""
                style={{
                  marginLeft: "25%",
                }}
              >
                <a href="/" style={{ color: "inherit" }}>
                  <IoIosMail />
                </a>
                <a href="/" style={{ color: "inherit" }}>
                  <IoLogoLinkedin />
                </a>
                <a href="/" style={{ color: "inherit" }}>
                  <IoLogoGithub />
                </a>
                <a href="/" style={{ color: "inherit" }}>
                  <IoIosDocument />
                </a>
              </Col>
            </Col>

            {/* <Col md={{ span: 1, offset: 3 }} xs={1}> */}
          </Row>
        </IconContext.Provider>
      </Container>
    </div>
  );
}
