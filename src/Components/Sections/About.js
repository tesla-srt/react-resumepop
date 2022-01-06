import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Section } from "../Section";
const profilepic = process.env.PROF_PIC;

export default class About extends Component {
  render() {
    return (
      <Section dark={true} id="section2">
        <h1 className="fromLeft">About Me</h1>
        <div className="clearfix">
          <Image
            roundedCircle
            src="https://cdn.glitch.me/dad08474-c765-4bb4-a862-08c6e5f18652/profile.png?v=1641293423673"
            className="col-md-6 float-md-end mb-3 ms-md-3 border border-3 border-light"
            id="pic"
          />

          <p className="text-break">Hi there, I’m Renee-Elise.</p>
         
          <p className="text-break">
            I’ve helped friends and family land jobs they felt underqualified
            for until they reached out to me.
          </p>

          <p className="text-break">
            I’ve applied to thousands jobs and enjoyed every aspect of the job
            application process, from resume to interview (I’m still not sure
            why - maybe it’s the adrenaline rush - but I do!).
          </p>
        

          <p className="text-break">
            I have a passion for writing and am ready to use my skills of
            storytelling to help others achieve their career goals.
          </p>
          
          <p className="text-break">
            That’s why I started this business. And if you’re still curious
            about me, have a look at my resume below.
          </p>
        </div>

        <a
          className="btn btn-success"
          target="_blank"
          href="https://docs.google.com/document/d/1zHXyD09gqOJT4G8v8TJ8Rajb_k9slHqAy81g1EO9atc/view?usp=sharing"
        >
          My Resume
        </a>
      </Section>
    );
  }
}
