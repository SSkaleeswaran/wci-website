import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import navbarBg from "../../assets/navbar-bg.jpg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BootstrapNavbar
  expand="lg"
  style={{
    "--navbar-bg": `url(${navbarBg})`,
  }}
  className={`main-navbar ${
    isScrolled ? "navbar-scrolled" : ""
  }`}
>
      <Container>

        {/* Logo */}
        <BootstrapNavbar.Brand
          as={NavLink}
          to="/"
          className="navbar-logo"
        >
          <img
            src="/images/headerLogo.png"
            alt="Immigration Consultancy"
          />
        </BootstrapNavbar.Brand>


        {/* Mobile Toggle */}
        <BootstrapNavbar.Toggle
          aria-controls="main-navbar"
          className="navbar-toggler"
        />


        {/* Navigation */}
        <BootstrapNavbar.Collapse id="main-navbar">

          <Nav className="navbar-links">

            <Nav.Link
              as={NavLink}
              to="/"
              end
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
            >
              About
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/services"
            >
              Services
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/countries"
            >
              Countries
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
            >
              Contact
            </Nav.Link>

          </Nav>


          {/* Phone */}
          <div className="navbar-phone">

            <span className="navbar-phone-icon">
              {/* ☎ */}
            </span>

            <div>
              <span>Call For Consultation</span>

              <a href="tel:+916379891812">
                +91 637 989 1812
              </a>
            </div>

          </div>

        </BootstrapNavbar.Collapse>

      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;