import React, { Component, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalTitle from "react-bootstrap/ModalTitle";

export default class Thanks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thanks: false,
    };
  }
  
  
  render() {
    return (
      <Modal
        show={this.state.thanks}
        fullscreen={true}
        onHide={() => this.setState({ thanks: false })}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <h1 className="display-3 mb-5">Thank You!</h1>
          <p className="fs-4 mb-3">
            I've recieved your request for consultation and will get back to you
            by email as soon as possible.
          </p>
          <p className="fs-5 text-muted">
            For faster support, feel free to join my Discord
          </p>
          <a
            className="btn btn-primary"
            target="_blank"
            href="https://docs.google.com/document/d/1zHXyD09gqOJT4G8v8TJ8Rajb_k9slHqAy81g1EO9atc/view?usp=sharing"
          >
            Discord ☺
          </a>
        </Modal.Body>
      </Modal>
    );
  }
}
