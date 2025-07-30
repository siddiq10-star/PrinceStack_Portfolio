import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import contactImg from "../assets/contact-img.png";
import "../stylesheets/Contact.css";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string(), // optional
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
        .required("Phone is required"),
      message: Yup.string(), // optional
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const templateParams = {
        from_name: `${values.firstName} ${values.lastName}`,
        from_email: values.email,
        phone: values.phone,
        message: values.message,
      };

      try {
        setSubmitting(true);

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
          console.error("Missing EmailJS env vars:", {
            SERVICE_ID,
            TEMPLATE_ID,
            PUBLIC_KEY,
          });
          alert(
            "Email service is not configured. Please set the environment variables."
          );
          return;
        }

        const response = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        );
        console.log("Email sent:", response.status, response.text);
        alert("Message sent successfully!");
        resetForm();
      } catch (error) {
        console.error("Email sending failed:", error);
        alert("Failed to send message. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2 className="mb-4 text-white">Get In Touch</h2>
            <Form onSubmit={formik.handleSubmit} noValidate>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="custom-input"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      isInvalid={
                        formik.touched.firstName && !!formik.errors.firstName
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="custom-input"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      isInvalid={
                        formik.touched.lastName && !!formik.errors.lastName
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="custom-input"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      isInvalid={formik.touched.email && !!formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Phone No."
                      className="custom-input"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      isInvalid={formik.touched.phone && !!formik.errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="custom-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  isInvalid={formik.touched.message && !!formik.errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                type="submit"
                className="custom-button"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}

export default Contact;
