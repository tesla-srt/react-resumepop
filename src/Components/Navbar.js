import React, { Component } from "react";
//import {TransformMotion } from "react-motion";
//import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { SvgLoader, SvgProxy } from "react-svgmt";

export default class Navbar extends Component {
 scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <SvgLoader
            className="nav-logo"
            id="animated"
            path="https://cdn.glitch.me/dad08474-c765-4bb4-a862-08c6e5f18652/resumepop.min.svg?v=1640497676415"
            onClick={this.scrollToTop}
          ></SvgLoader>
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
