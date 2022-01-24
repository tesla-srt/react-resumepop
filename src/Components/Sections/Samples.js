import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Placeholder from "react-bootstrap/Placeholder";
import Button from "react-bootstrap/Button";
import {Section} from "../Section";

const s = [
  {
    title: "Cover Letter Sample",
    src:
      "https://cdn.discordapp.com/attachments/699683919166963815/933924752152744036/IT_Professional_Cover_Letter.png",
    key: 1
  },
  {
    title: "Resume Sample",
    src:
      "https://cdn.discordapp.com/attachments/699683919166963815/933924752572182568/IT_Professional_Resume.png",
    key: 2
  },
  {
    title: "Cover Letter Sample",
    src:
      "https://cdn.discordapp.com/attachments/699683919166963815/933931921023565914/Career_Change_Cover_Letter.png",
    key: 3
  },
  {
    title: "Resume Sample",
    src:
      "https://cdn.discordapp.com/attachments/699683919166963815/933931921388498954/Career_Change_Resume.png",
    key: 4
  }
];

export default class Samples extends Component {
  render() {
    return (
      <Section dark={false} id="section3">
        <h1 className="fromLeft ps-md-6">Samples</h1>
        <p className="ps-md-6">
          Click on any of the links below to see work I've done for my clients.
        </p>
        <Row xs={1} md={4} className="g-4">
          {s.map(({title, src}) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title as="h6">{title}</Card.Title>
                </Card.Body>
                <a class="wb-link" data-whitebox="#group-1" href={src}>
                  <Card.Img variant="bottom" src={src} />
                </a>
              </Card>
            </Col>
          ))}

          {/*  <Col>
            <Card>
              <Card.Body>
                <Card.Title>Resume Sample #1</Card.Title>
              </Card.Body>
              <a
                class="wb-link"
                data-whitebox="#group-1"
                href="https://cdn.discordapp.com/attachments/699683919166963815/932790639010152558/Resume_Sample_1.png"
              >
                <Card.Img
                  variant="bottom"
                  src="https://cdn.discordapp.com/attachments/699683919166963815/932790639010152558/Resume_Sample_1.png"
                />
              </a>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Cover Letter #2</Card.Title>
              </Card.Body>
              <a
                class="wb-link"
                data-whitebox="#group-1"
                href="https://cdn.discordapp.com/attachments/699683919166963815/932790639010152558/Resume_Sample_1.png"
              >
                <Card.Img
                  variant="bottom"
                  src="https://cdn.discordapp.com/attachments/699683919166963815/932790639010152558/Resume_Sample_1.png"
                />
              </a>
            </Card>
          </Col>
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
          </Col> */}
        </Row>
      </Section>
    );
  }
}
