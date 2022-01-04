import React, { Component } from "react";
import { Trail, animated } from "react-spring";

const items = [
  { text: "If applying for jobs still feels intimidating, I’m here for you.", key: 1 },
  { text: "I’m here to help you get hired. I’m here to write your story.", key: 2 },
  { text: "I’m here to make your Resume Pop!", key: 3 }
];

export default class Hookline extends Component {

  render() {
    return (
      <ul className="text-left" id="hookline">
        
        <Trail
        items={items}
        keys={(item) => item.key}
        from={{ transform: "translate3d(0,-40px,0)" }}
        to={{ transform: "translate3d(0,0px,0)" }}
      >
        {(item) => (props) => <li className="text-muted" style={props}>{item.text}</li>}
      </Trail>
      </ul>
    );
  }
}
