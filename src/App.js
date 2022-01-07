import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Sections/Home";
import { Contact } from "./Components/Sections/Contact";
import About from "./Components/Sections/About";
import Samples from "./Components/Sections/Samples";
import { Section } from "./Components/Section";

//const Webhook = new Discord.WebhookClient("928473790369898576", "v86BmtamkckYKBwieOnhw83jOmxrvI51xtY3KdKWPLFHYv7o0tmOWkv67BdZHdKzDqZy");

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
