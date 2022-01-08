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
        <h1 className="fromLeft order-sm-2">About Me</h1>
        <div className="clearfix">
          <Image
            roundedCircle
            src="https://cdn.glitch.me/dad08474-c765-4bb4-a862-08c6e5f18652/profile.png?v=1641293423673"
            className="col-md-6 float-md-end order-sm-1 mb-3 ms-md-3 border border-3 border-light"
            id="pic"
          />
            <p className="text-break">Hi there, I’m Renee-Elise.</p>

            <p className="text-break">
              My passion has always been about helping others achieve positive
              changes in their life. In recent years, I’ve spent my free time
              helping friends and family discover how they can apply their
              skills and interests into the workforce. I’ve helped others write
              their resumes and cover letters, find and apply to jobs, and
              prepare for interviews.
            </p>

            <p className="text-break">
              I received my Bachelor of Arts from the City College of New York.
              While a student there, I volunteered as an academic writing tutor.
              After graduating, I became a Certified Paralegal and a Certified
              TEFL Instructor.
            </p>

            <p className="text-break">
              I believe in the power of words to manifest positive changes. I
              created ResumePop to help you make your resume pop and land your
              next job!
            </p>

            <p className="text-break">
              And if you’re still curious about me, have a look at my resume
              below.
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
