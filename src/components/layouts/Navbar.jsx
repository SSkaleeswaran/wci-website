import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <BootstrapNavbar
      expand="lg"
      expanded={isMenuOpen}
      onToggle={setIsMenuOpen}
      className={`main-navbar ${
        isScrolled ? "navbar-scrolled" : ""
      } ${isMenuOpen ? "mobile-menu-open" : ""}`}
    >
      <Container>

        {/* Logo */}
        <BootstrapNavbar.Brand
          as={NavLink}
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
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
        >
          <span
            className={`mobile-menu-icon ${
              isMenuOpen ? "is-open" : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </BootstrapNavbar.Toggle>


        {/* Navigation */}
        <BootstrapNavbar.Collapse id="main-navbar">

          <Nav className="navbar-links">

            <Nav.Link
              as={NavLink}
              to="/"
              end
              onClick={closeMenu}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={closeMenu}
            >
              About
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/services"
              onClick={closeMenu}
            >
              Services
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/countries"
              onClick={closeMenu}
            >
              Countries
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </Nav.Link>

          </Nav>


          {/* Phone */}
          <div className="navbar-phone">

            <span className="navbar-phone-icon">
              <i className="bi bi-telephone-fill"></i>
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