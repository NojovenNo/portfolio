import React from "react";
import { ReactComponent as LogoME } from "../svg/MELogo.svg";
import { BiTask } from "react-icons/bi";
// import { FaMicrosoft } from "react-icons/fa";
import { Container, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import { Link } from "react-scroll";
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
            <LogoME />
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
              <BiTask size={50} />
            </a>
          </Link>
        </Col>
      </Container>
    </IconContext.Provider>
  );
}
