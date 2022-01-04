import React, { Component } from "react";
import { useSpring, Trail, animated } from "react-spring";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Section } from "../Section";

export default class Contact extends Component {
  render() {
    return (
      <Section dark={false} id="section5">
        <h1>Contact</h1>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              1 of 3
            </Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}
