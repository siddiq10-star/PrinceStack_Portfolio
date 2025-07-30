import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegFilePdf,
} from "react-icons/fa";
import "../stylesheets/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <Container>
        {/* Top strip: nav links + resume CTA */}
        <Row className="py-3 border-bottom">
          <Col
            md={8}
            className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start"
          >
            <a href="#projects" className="footer-link">
              Projects
            </a>
            <a href="#skills" className="footer-link">
              Skills
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <a
              href="https://drive.google.com/file/d/1hKnzuvYLJJxXUPhKOEw_b-c-PdbAr7aY/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta"
              aria-label="Download Resume (PDF)"
              title="Download Resume (PDF)"
            >
              <FaRegFilePdf className="me-2" />
              Download Resume
            </a>
          </Col>
        </Row>

        {/* Middle strip: contact info */}
        <Row className="py-3 border-bottom">
          <Col
            md={8}
            className="d-flex flex-column gap-2 align-items-center align-items-md-start"
          >
            <div className="footer-contact">
              <FaEnvelope className="me-2" aria-hidden="true" />
              <a
                href="mailto:siddiqprince48@gmail.com" // your email
                className="footer-link"
              >
                siddiqprince48@gmail.com
              </a>
            </div>
            <div className="footer-contact">
              <FaPhoneAlt className="me-2" aria-hidden="true" />
              <a href="tel:+91XXXXXXXXXX" className="footer-link">
                +91 86607-75318
              </a>
            </div>
            <div className="footer-contact">
              <FaMapMarkerAlt className="me-2" aria-hidden="true" />
              <span>Karnataka, India · Available for freelance</span>
            </div>
          </Col>

          {/* Socials */}
          <Col
            md={4}
            className="text-md-end text-center d-flex gap-3 justify-content-center justify-content-md-end align-items-center"
          >
            <a
              href="https://www.linkedin.com/in/mohammed-sidiq-ap/"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin className="footer-icon" />
            </a>
            <a
              href="https://github.com/siddiq10-star?tab=repositories"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub className="footer-icon" />
            </a>
            <a
              href="https://www.instagram.com/siddiq__prince/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram className="footer-icon" />
            </a>
          </Col>
        </Row>

        {/* Bottom strip: copyright */}
        <Row className="py-3">
          <Col md={12} className="text-center">
            <p className="mb-0">
              &copy; {year} PrinceStack. Built with React + Vite. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
