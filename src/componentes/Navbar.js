import React from "react";

import { ReactComponent as LogoME } from "../svg/MELogo.svg";
import { BiTask } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
export default function Navbar() {
  return (
    <IconContext.Provider value={{ size: "45px" }}>
      <Container className="nav justify-content-between">
        <Row>
          <Col ml={5} xs="auto">
            <a href="/">
              <LogoME />
            </a>
          </Col>
        </Row>
        <Col md={{ span: 1, offset: 1 }} xs="auto">
          <a href="/">
            <BiTask />
          </a>
        </Col>
      </Container>
    </IconContext.Provider>
  );
}
