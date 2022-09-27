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
        style={{
          margin: "15px",
          paddingRight: "30px",
        }}
      >
        <Col xs="auto">
          <a href="/">
            {/* <logoME /> */}
            <FaMicrosoft size={50} />
          </a>
        </Col>

        <Col xs="auto">
          <a href="/">
            <BiTask size={50} />
          </a>
        </Col>
      </Container>
    </IconContext.Provider>
  );
}
