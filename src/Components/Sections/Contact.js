import React, { Component } from "react";
import { useSpring, Trail, animated } from "react-spring";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Section } from "../Section";

{
  /**
  NEED FORM!
  Create Discord Webhook
**/
}
const send = () => {
  
};
export default class Contact extends Component {
  render() {
    return (
      <Section dark={true} id="section4">
        <h1 className="fromLeft">Contact</h1>
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
