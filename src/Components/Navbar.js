import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "./Logo";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <Logo className="nav-logo img-fluid" onClick={this.scrollToTop} />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                isDynamic={true}
                smooth={true}
                offset={-70}
                duration={150}
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
                duration={150}
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
                duration={150}
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
                duration={150}
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
