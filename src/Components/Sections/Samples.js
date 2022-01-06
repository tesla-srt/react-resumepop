import React, { Component } from "react";
import { useSpring, Trail, animated } from "react-spring";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Placeholder from "react-bootstrap/Placeholder";
import Button from "react-bootstrap/Button";
import { Section } from "../Section";

export default class Samples extends Component {
  render() {
    return (
      <Section dark={false} id="section3">
        <h1 className="fromLeft">Samples</h1>
        <CardGroup className="mb-5 mt-5">

              <Card>
                <Card.Img variant="top" src="holder.js/100px180?auto=yes" />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />
                    <Placeholder xs={4} /> <Placeholder xs={6} />
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src="holder.js/100px180?auto=yes" />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />
                    <Placeholder xs={4} /> <Placeholder xs={6} />
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src="holder.js/100px180?auto=yes" />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />
                    <Placeholder xs={4} /> <Placeholder xs={6} />
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src="holder.js/100px180?auto=yes" />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />
                    <Placeholder xs={4} /> <Placeholder xs={6} />
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
              </CardGroup>
    
      </Section>
    );
  }
}
