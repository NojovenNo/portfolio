import React from "react";
import { CgToolbox } from "react-icons/cg";
import { FaCode, FaDesktop } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  return (
    <div className="projects" style={{ width: "100%", height: "60vw" }}>
      <Container>
        <h1 className="text-center" style={{ paddingTop: "55px" }}>
          <CgToolbox /> Proyectos
        </h1>
        <Row xs={1} md={3}>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
