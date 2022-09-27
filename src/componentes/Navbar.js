import React from "react";
// import { logoME } from "../svg/MELogo.svg";
import { BiTask } from "react-icons/bi";
import { FaMicrosoft } from "react-icons/fa";
import { Container, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
export default function Navbar() {
  return (
    <IconContext.Provider value={{ size: "2vw" }}>
      <Container
        className="nav justify-content-between"
        style={{ marginBottom: "25px", marginTop: "25px" }}
      >
        <Col xs="auto">
          <a href="/">
            {/* <logoME /> */}
            <FaMicrosoft size={50} />
          </a>
        </Col>

        <Col xs="auto">
          <a href="/">
            <BiTask />
            Proyectos
          </a>
        </Col>
      </Container>
    </IconContext.Provider>
  );
}
