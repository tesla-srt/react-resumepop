//https://discord.com/api/webhooks/928473790369898576/v86BmtamkckYKBwieOnhw83jOmxrvI51xtY3KdKWPLFHYv7o0tmOWkv67BdZHdKzDqZy
import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalTitle from "react-bootstrap/ModalTitle";

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
        (data.Consult ? "Free Consultation, " : "") +
        "",
      fields: [
        {
          name: "Name",
          value: data.name,
        },
        {
          name: "Email",
          value: data.email,
        },
        {
          name: "Phone",
          value: data.mobilephone,
        },
        {
          name: "Estimate",
          value: "Estimate: $" + estimate,
        },
      ],
      color: hexToDecimal("#ff0000"),
      timestamp: new Date(),
    };

    var msg = {
      username: "ResumePop",
      embeds: [myEmbed],
    };

    const Webhook = new Discord.WebhookClient(
      "929288651328856117",
      "ZRNqJHlxdAcCV5v0pMXHOsr4NqjlTQ8f2NbrpMtGbf-l8SyTgD_NKZe2V2vC7USajDOf"
    );
    Webhook.send(msg)
      .then(() => setThanks(true))
      .catch((e) => console.log("Failed to send message!", e.message));
  };

  function hexToDecimal(hex) {
    return parseInt(hex.replace("#", ""), 16);
  }

  return (
    <>
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
                  <Stack gap={2}>
                    <Form.Check
                      type="checkbox"
                      className="fs-5"
                      placeholder="UpdateCV"
                      label="Update Resume"
                      {...register("UpdateCV", {})}
                    />
                    <Form.Check
                      type="checkbox"
                      className="fs-5"
                      label="New Resume"
                      placeholder="NewCV"
                      {...register("NewCV", {})}
                    />
                    <Form.Check
                      type="checkbox"
                      className="fs-5"
                      label="Cover Letter"
                      placeholder="Cover"
                      {...register("Cover", {})}
                    />
                    <Form.Check
                      type="checkbox"
                      className="fs-5"
                      label="Free Consultation"
                      placeholder="Consult"
                      {...register("Consult", {})}
                    />
                  </Stack>
                </Form.Group>
              </Col>
              <Col className="">
                <Form.Group>
                  <Stack gap={2}>
                    <Form.Control
                      type="text"
                      className=""
                      placeholder="Name"
                      {...register("name", {
                        required: true,
                        maxLength: 80,
                      })}
                    />

                    <span className="formError">
                      {errors.name && "Name is required"}
                    </span>

                    <Form.Control
                      type="text"
                      className=""
                      placeholder="Email"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />

                    <span className="formError">
                      {errors.email && "Email is required"}
                    </span>

                    <Form.Control
                      type="tel"
                      className=""
                      placeholder="Mobile number"
                      {...register("mobilephone", {
                        required: false,
                        minLength: 6,
                        maxLength: 12,
                      })}
                    />

                    <Form.Check
                      type="checkbox"
                      className="fs-5"
                      label="I am not a robot"
                      {...register("robot", { required: true })}
                    />
                    <span className="formError">
                      {errors.robot && "*required"}
                    </span>

                    <Button
                      variant="light"
                      className=""
                      size="lg"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Stack>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </Section>
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
            Your message has been sent, I will get back to you by email or phone
            as soon as possible.
          </p>
          <p className="fs-5 text-muted">
            For faster support, feel free to join my Discord
          </p>
          <a
            className="btn btn-primary btn-discord"
            target="_blank"
            href="https://discord.gg/wKchFsxdNe"
          >
            Discord ☺
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
};
