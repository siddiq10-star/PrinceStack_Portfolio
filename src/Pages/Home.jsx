import { Container, Row, Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Skills } from "./Skills";
import "../../src/stylesheets/Home.css";
import brandLogo from "../assets/brandLogo.png";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../Components/Footer";
import { Link as ScrollLink } from "react-scroll"; // at the top if not already imported

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
      <section className="home" id="home">
        <Container className="text-white fw-bold">
          <Row>
            <Col xl={7} md={6} lg={6} className="order-md-2 order-2 order-lg-1">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div>
                  <span className="bg-welcome">Welcome To My Portfolio</span>
                  <h1>Hi! I'm Mohammed Sidiq A P</h1>
                  <span className="txt-rotate d-block mt-2 fw-bold">
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
                  <p>
                    I’m a passionate full stack developer skilled in building
                    responsive web applications using the MERN stack. I love
                    turning ideas into elegant, functional interfaces and
                    writing clean, maintainable code.
                  </p>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-70}
                    duration={50}
                    className="btn lets-cnt-2 d-flex align-items-center gap-2 fw-bold ms-5"
                  >
                    Let's Connect
                    <span className="arrow-icon">
                      <i className="bi bi-arrow-right-circle"></i>
                    </span>
                  </ScrollLink>
                </div>
              </motion.div>
            </Col>
            <Col xl={5} md={6} lg={6} className="order-md-1 order-1 order-lg-2">
              <div>
                <img src={brandLogo} alt="Mohammed Sidiq - Brand Logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
