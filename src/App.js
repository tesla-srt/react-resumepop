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
import Home from "./Components/Sections/Home";
import Contact from "./Components/Sections/Contact";
import { Section } from "./Components/Section";
import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
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
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
