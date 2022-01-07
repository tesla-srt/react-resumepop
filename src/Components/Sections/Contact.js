//https://discord.com/api/webhooks/928473790369898576/v86BmtamkckYKBwieOnhw83jOmxrvI51xtY3KdKWPLFHYv7o0tmOWkv67BdZHdKzDqZy
import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalTitle from "react-bootstrap/ModalTitle";
import Discord, { Message } from "discord.js";
import { Section } from "../Section";

export const Contact = () => {
  const [thanks, setThanks] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    var estimate =
      (data.UpdateCV ? 15 : 0) + (data.NewCV ? 25 : 0) + (data.Cover ? 25 : 0);

    var myEmbed = {
      author: {
        name: data.name,
      },
      title: data.email,
      description:
        "" +
        (data.UpdateCV ? "Update Resume, " : "") +
        (data.NewCV ? "New Resume, " : "") +
        (data.Cover ? "Cover Letter, " : "") +
        "",
      color: hexToDecimal("#ff0000"),
      footer: { text: "Estimate: $" + estimate },
    };

    var msg = {
      username: "contact-hook",
      embeds: [myEmbed],
    };

    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://thingproxy.freeboard.io/fetch/https://discord.com/api/webhooks/928473790369898576/v86BmtamkckYKBwieOnhw83jOmxrvI51xtY3KdKWPLFHYv7o0tmOWkv67BdZHdKzDqZy"
    );

    request.setRequestHeader("Content-type", "application/json");
    request.setRequestHeader(
       "Access-Control-Allow-Origin", "*"
    );

    const params = {
      headers: {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      username: "My Webhook Name",
      avatar_url: "",
      content: "The message to send",
    };

    request.send(JSON.stringify(params));
    setThanks(true);

    console.log(JSON.stringify(msg));
    /*
    fetch(
      "https://thingproxy.freeboard.io/fetch/https://discord.com/api/webhooks/928473790369898576/v86BmtamkckYKBwieOnhw83jOmxrvI51xtY3KdKWPLFHYv7o0tmOWkv67BdZHdKzDqZy",
      {
        method: "POST",
        body: JSON.stringify(msg),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    ).then((res) => {
      setThanks(true);
    });
    
*/
  };

  function hexToDecimal(hex) {
    return parseInt(hex.replace("#", ""), 16);
  }

  return (
    <>
      <Modal show={thanks} fullscreen={true} onHide={() => setThanks(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
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

      <Section dark={true} id="section4">
        <h1 className="fromLeft">Contact</h1>
        <p className="lead">
          To set up a consultation or inquire about a service, please fill out
          the form below.
        </p>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row md={2} lg={2}>
              <Col>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    className="p-2 fs-5"
                    placeholder="UpdateCV"
                    label="$15 - Update Resume"
                    {...register("UpdateCV", {})}
                  />
                  <Form.Check
                    type="checkbox"
                    className="p-2 fs-5"
                    label="$25 - New Resume"
                    placeholder="NewCV"
                    {...register("NewCV", {})}
                  />
                  <Form.Check
                    type="checkbox"
                    className="p-2 fs-5"
                    label="$25 - Cover Letter"
                    placeholder="Cover"
                    {...register("Cover", {})}
                  />
                </Form.Group>
              </Col>
              <Col className="d-grid gap-2">
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="m-2"
                    placeholder="Name"
                    {...register("name", {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                  <Form.Control.Feedback>
                    {errors.name && "Name is required"}
                  </Form.Control.Feedback>

                  <Form.Control
                    type="text"
                    className="m-2"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <Form.Control.Feedback>
                    {errors.email && "Email is required"}
                  </Form.Control.Feedback>

                  <Form.Control
                    type="tel"
                    className="m-2"
                    placeholder="Mobile number"
                    {...register("Mobile number", {
                      required: false,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />

                  <Button
                    variant="success"
                    className="m-2"
                    size="lg"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </Section>
    </>
  );
};
