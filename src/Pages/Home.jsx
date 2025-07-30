import React, { Suspense, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Skills } from "./Skills";
import "../stylesheets/Home.css"; // <-- simplify path if possible
import brandLogo from "../assets/brandLogo.png";
import bannerBg from "../assets/Banner-bg.jpg";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";

// Lazy-load below-the-fold sections
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("../Components/Footer"));

function Home() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <section
        className="home"
        id="home"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional overlay for contrast */}
        <div className="home-overlay" aria-hidden="true" />

        <Container className="text-white fw-bold position-relative">
          <Row className="align-items-center">
            <Col xl={7} md={6} lg={6} className="order-md-2 order-2 order-lg-1">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div>
                  <span className="bg-welcome">Welcome To My Portfolio</span>
                  <h1 className="mt-2">Hi! I'm Mohammed Sidiq A P</h1>

                  <span
                    className="txt-rotate d-block mt-2 fw-bold"
                    aria-live="polite"
                  >
                    <Typewriter
                      words={[
                        "Web Designer",
                        "Web Developer",
                        "React Developer",
                        "Full Stack Developer",
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>

                  <p className="mt-3">
                    I’m a passionate full stack developer skilled in building
                    responsive web applications using the MERN stack. I love
                    turning ideas into elegant, functional interfaces and
                    writing clean, maintainable code.
                  </p>

                  <ScrollLink
                    to="contact"
                    smooth
                    offset={-70}
                    duration={300}
                    className="btn lets-cnt-2 d-inline-flex align-items-center gap-2 fw-bold ms-0 mt-2"
                    role="button"
                    aria-label="Jump to contact section"
                  >
                    Let’s Connect
                    <FaArrowRight aria-hidden="true" />
                  </ScrollLink>
                </div>
              </motion.div>
            </Col>

            <Col xl={5} md={6} lg={6} className="order-md-1 order-1 order-lg-2">
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="text-center text-lg-end"
              >
                <img
                  src={brandLogo}
                  alt="Mohammed Sidiq - brand logo"
                  width={360} // set your real intrinsic size if known
                  height={360}
                  decoding="async"
                  className="img-fluid"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <Skills />

      <Suspense fallback={null}>
        <Projects />
      </Suspense>

      <Suspense fallback={null}>
        <Contact />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
