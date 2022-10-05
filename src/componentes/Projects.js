import React from "react";
import { CgToolbox } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  return (
    <div className="projects" style={{ width: "100%", height: "60vw" }}>
      <Container>
        <h1
          className="text-center"
          style={{ paddingTop: "100px", paddingBottom: "50px" }}
        >
          <CgToolbox /> Proyectos
        </h1>
        <Row xs={1} md={2}>
          <Col className="d-flex justify-content-center">
            <Card style={{ width: "18rem", margin: "25px" }}>
              <Card.Img
                variant="top"
                src={
                  "https://miro.medium.com/max/1400/1*qHYa7LoYK1myo_aJw_7VIA.gif"
                }
              />
              <Card.Body>
                <Card.Title>Rick and Morty library</Card.Title>
                <Card.Text>
                  Librery of all characters of rick and morty serie. <br />
                  Axios and react-router-dom.
                </Card.Text>
                <Button variant="primary" active>
                  <FaCode /> <a href="/"> Mirar Codigo</a>
                </Button>{" "}
                {/* <Button variant="secondary" active>
                  <FaDesktop /> <a href="/">Demo</a>
                </Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex justify-content-center">
            <Card style={{ width: "18rem", margin: "25px" }}>
              <Card.Img
                variant="top"
                src={
                  "https://miro.medium.com/max/1400/1*qHYa7LoYK1myo_aJw_7VIA.gif"
                }
              />
              <Card.Body>
                <Card.Title>Portfolio web Template</Card.Title>
                <Card.Text>
                  a web portfolio developed in react.js to publish any project.
                  <br />
                  React - Javascript - ReactScroll
                </Card.Text>
                <Button variant="primary" active>
                  <FaCode /> <a href="/"> Mirar Codigo</a>
                </Button>{" "}
                {/* <Button variant="secondary" active>
                  <FaDesktop /> <a href="/">Demo</a>
                </Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex justify-content-center">
            <Card style={{ width: "18rem", margin: "25px" }}>
              <Card.Img
                variant="top"
                src={
                  "https://miro.medium.com/max/1400/1*qHYa7LoYK1myo_aJw_7VIA.gif"
                }
              />
              <Card.Body>
                <Card.Title>Sell Point VB.NET SQL</Card.Title>
                <Card.Text>
                  Point of sale for a small business. <br /> utility: invoicing,
                  inventory and management of accounts.
                </Card.Text>
                <Button variant="primary" active>
                  <FaCode /> <a href="/"> Mirar Codigo</a>
                </Button>{" "}
                {/* <Button variant="secondary" active>
                  <FaDesktop /> <a href="/">Demo</a>
                </Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex justify-content-center">
            <Card style={{ width: "18rem", margin: "25px" }}>
              <Card.Img
                variant="top"
                src={
                  "https://miro.medium.com/max/1400/1*qHYa7LoYK1myo_aJw_7VIA.gif"
                }
              />
              <Card.Body>
                <Card.Title>Pokedex (PokeApi)</Card.Title>
                <Card.Text>
                  Call an api to get a library of pokemons.
                  <br />
                  React - Javascript - React Router
                </Card.Text>
                <Button variant="primary" active>
                  <FaCode /> <a href="/"> Mirar Codigo</a>
                </Button>{" "}
                {/* <Button variant="secondary" active>
                  <FaDesktop /> <a href="/">Demo</a>
                </Button> */}
              </Card.Body>
            </Card>
          </Col>

          {/* <Col className="d-flex justify-content-center">
            <Card style={{ width: "18rem", margin: "25px" }}>
              <Card.Img
                variant="top"
                src={
                  "https://miro.medium.com/max/1400/1*qHYa7LoYK1myo_aJw_7VIA.gif"
                }
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" active>
                  <FaCode /> <a href="/"> Mirar Codigo</a>
                </Button>{" "}
                <Button variant="secondary" active>
                  <FaDesktop /> <a href="/">Demo</a>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex justify-content-center">
            <Card style={{ width: "18rem", margin: "25px" }}>
              <Card.Img
                variant="top"
                src={
                  "https://miro.medium.com/max/1400/1*qHYa7LoYK1myo_aJw_7VIA.gif"
                }
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" active>
                  <FaCode /> <a href="/"> Mirar Codigo</a>
                </Button>{" "}
                <Button variant="secondary" active>
                  <FaDesktop /> <a href="/">Demo</a>
                </Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
