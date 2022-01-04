import React, { Component } from "react";
import { SvgLoader, SvgProxy, TransformMotion } from "react-svgmt";
import { useSpring, Trail, animated } from "react-spring";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Section } from "./Components/Section";
//import { Hookline } from "./Components/Hookline";
import dummyText from "./DummyText";

const hooks = [
  {
    text: "If applying for jobs still feels intimidating, I’m here for you.",
    key: 1
  },
  {
    text: "I’m here to help you get hired. I’m here to write your story.",
    key: 2
  },
  { text: "I’m here to make your Resume Pop!", key: 3 }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section dark={false} id="section1">
          <h1 className="display-3"> Welcome to ResumePop! </h1>
          <p className="lead">
            Applying for jobs shouldn’t be difficult, because what is a resume
            and cover letter but a short written story that defines you. Think
            of it this way. You’re applying for a job. Your cover letter is the
            story of why you deserve the job, and your resume is the plot
            summary of your proudest accomplishments that make you the best
            candidate.
          </p>
          <ul className="text-left fs-5 pt-4 m-3" id="hookline">
            <Trail
              items={hooks}
              keys={item => item.key}
              from={{ transform: "translate3d(0,-40px,0)" }}
              to={{ transform: "translate3d(0,0px,0)" }}
            >
              {item => props => (
                <li className="text-muted pb-4" style={props}>
                  {item.text}
                </li>
              )}
            </Trail>
          </ul>
        </Section>
        <Section dark={true} id="section2">
          <p>{dummyText}</p>
        </Section>
        <Section dark={false} id="section3">
          <h1>About</h1>
          <p>{dummyText}</p>
        </Section>
        <Section dark={true} id="section4">
          <p>{dummyText}</p>
        </Section>
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
        <Footer />
      </div>
    );
  }
}

export default App;
