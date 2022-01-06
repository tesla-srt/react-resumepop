import React, { Component } from "react";
import { useSpring, Trail, animated } from "react-spring";
import { Section } from "../Section";

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

export default class Home extends Component {
  render() {
    return (
      <Section dark={false} id="section1">
        <h1 className="display-3"> Welcome to ResumePop! </h1>
        <p className="lead mb-3 mt-3">
          Applying for jobs shouldn’t be difficult, because what is a resume and
          cover letter but a short written story that defines you. Think of it
          this way. You’re applying for a job. Your cover letter is the story of
          why you deserve the job, and your resume is the plot summary of your
          proudest accomplishments that make you the best candidate.
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
    );
  }
}
