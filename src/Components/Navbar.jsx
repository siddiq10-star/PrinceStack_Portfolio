import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Container } from "react-bootstrap";
import logo from "../assets/brandLogo.png";
import "../stylesheets/Navbar.css";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);
  const closeNavbar = () => setIsCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow-sm fixed-top">
      <Container>
        {/* Logo Scrolls to Top */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={50}
          className="navbar-brand d-flex align-items-center text-white"
          onClick={closeNavbar}
        >
          <img src={logo} alt="logo" height="40" className="me-2" />
          <strong>PrinceStack</strong>
        </ScrollLink>

        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-between ${
            isCollapsed ? "" : "show"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex align-items-center gap-4">
            {/* Internal Scroll Links */}
            {["home", "skills", "projects"].map((page) => (
              <li className="nav-item" key={page}>
                <ScrollLink
                  to={page}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={50}
                  activeClass="active"
                  className="nav-link nav-icon-btn"
                  onClick={closeNavbar}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </ScrollLink>
              </li>
            ))}

            {/* External + Route Links */}
            <li className="nav-item d-flex align-items-center gap-2 ms-5">
              <a
                href="https://www.linkedin.com/in/mohammed-sidiq-ap/"
                className="btn btn-dark nav-icon-btn social-icons"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/siddiq__prince/"
                className="btn btn-dark nav-icon-btn social-icons"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://github.com/siddiq10-star?tab=repositories"
                className="btn btn-dark nav-icon-btn social-icons"
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </a>
              <ScrollLink
                to="contact" // 👈 this should match the `id="contact"` in your contact section
                smooth={true}
                duration={50}
                offset={-70}
                className="btn btn-dark nav-icon-btn d-flex align-items-center gap-1 lets-cnt fw-bold ms-5"
                onClick={closeNavbar}
              >
                Let&apos;s Connect <i className="bi bi-arrow-right-circle"></i>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
