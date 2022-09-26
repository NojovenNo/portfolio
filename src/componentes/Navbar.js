import React from "react";
import { ReactComponent as LogoME } from "../svg/MELogo.svg";
import { BiTask } from "react-icons/bi";
import { Container, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
export default function Navbar() {
  return (
    <IconContext.Provider value={{ size: "65px" }}>
      <Container className="nav justify-content-between mx-10">
        <Col xs="auto">
          <a href="/">
            <LogoME />
          </a>
        </Col>

        <Col xs="auto">
          <a href="/">
            <BiTask />
          </a>
        </Col>
      </Container>
    </IconContext.Provider>
  );
}
