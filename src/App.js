import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Sections/Home";
import { Contact } from "./Components/Sections/Contact";
import About from "./Components/Sections/About";
import Samples from "./Components/Sections/Samples";
import { Section } from "./Components/Section";
import './scss/custom.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Samples />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
