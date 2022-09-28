import React from "react";
import { ReactComponent as LogoME } from "./svg/MELogo.svg";
import { BiTask } from "react-icons/bi";
import { Link } from "react-scroll";
// import { FaMicrosoft } from "react-icons/fa";
import { Container, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
export default function Navbar() {
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <Container
        className="nav justify-content-between"
        style={{ marginBottom: "5px", marginTop: "25px" }}
      >
        <Col xs="auto">
          <a href="/">
            <LogoME size={50} />
          </a>
        </Col>

        <Col xs="auto">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={200}
          >
            <a href="/">
              <BiTask />
              Proyectos
            </a>
          </Link>
        </Col>
      </Container>
    </IconContext.Provider>
  );
}
