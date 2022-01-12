import React, { Component } from "react";
//import {TransformMotion } from "react-motion";
//import logo from "../logo.svg";
import { ReactSVG } from "react-svg";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "Components/Logo";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <Logo className="img-fluid w-40" />
          {/*<img
            src="https://cdn.glitch.me/dad08474-c765-4bb4-a862-08c6e5f18652/resumepop.min.svg"
            className="nav-logo"
            onClick={this.scrollToTop}
          />*/}
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                isDynamic={true}
                smooth={true}
                offset={-70}
                duration={250}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                isDynamic={true}
                smooth={true}
                offset={-70}
                duration={250}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                isDynamic={true}
                smooth={true}
                offset={-70}
                duration={250}
              >
                Samples
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                isDynamic={true}
                smooth={true}
                offset={-70}
                duration={250}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
