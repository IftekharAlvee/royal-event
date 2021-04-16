import React from "react";
import { Button, Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import aboutImg from "../../../images/About.jpg";

const About = () => {
  return (
    <Container className="my-5 py-5">
      <Row>
        <Col sm={6}>
          <Image src={aboutImg} rounded />
        </Col>
        <Col sm={6}  className="d-flex align-items-center">
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
