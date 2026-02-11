import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/Projects.css";
import projectimg1 from "../assets/project-img1.png";
import projectimg3 from "../assets/project-img3.png";

function Projects() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabContent = {
    tab1: [
      {
        img: projectimg1,
        alt: "CRUD App",
        link: "https://mern-crud-app1.netlify.app/",
      },
      {
        img: projectimg1,
        alt: "Travel World",
        link: "https://yourproject2.com",
      },
      {
        img: projectimg3,
        alt: "MERN CRUD APP",
        link: "https://mern-crud-app1.netlify.app/",
      },
    ],
    tab2: [
      {
        img: projectimg1,
        alt: "Travel World",
        link: "https://yourproject1.com",
      },
      {
        img: projectimg1,
        alt: "Travel World",
        link: "https://yourproject2.com",
      },
      {
        img: projectimg1,
        alt: "Travel World",
        link: "https://yourproject3.com",
      },
    ],
  };

  return (
    <section className="bg-black py-5" id="projects">
      <Container>
        <div className="text-white text-center fw-bold mb-4">
          <h2>Projects</h2>
          <p>
            Here are some of the projects I’ve built using modern web
            technologies, including React, Node.js, Express, and MongoDB. Each
            project highlights my growth as a full-stack developer and my focus
            on responsive, user-friendly interfaces.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="d-flex justify-content-center gap-3 mb-5">
          {["tab1", "tab2"].map((tab, index) => (
            <button
              key={tab}
              className={`custom-tab-button ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              Tab {index + 1}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <Row className="g-4">
          {tabContent[activeTab].map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <div className="project-card">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
