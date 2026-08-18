import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          {/* =========================
              BRAND
          ========================= */}

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">◉</span>

              <span>
                IMMIGRATION
                <small>CONSULTANCY</small>
              </span>
            </Link>

            <p>
              Your trusted partner for navigating global
              opportunities with confidence.
            </p>

            <div className="footer-socials">

              <a href="#!" aria-label="Facebook">
                <FaFacebookF aria-hidden="true" />
              </a>

              <a href="#!" aria-label="Instagram">
                <FaInstagram aria-hidden="true" />
              </a>

              <a href="#!" aria-label="LinkedIn">
                <FaLinkedinIn aria-hidden="true" />
              </a>

              <a href="#!" aria-label="X">
                <FaXTwitter aria-hidden="true" />
              </a>

            </div>

          </div>


          {/* =========================
              QUICK LINKS
          ========================= */}

          <div className="footer-column">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>

            <Link to="/about">About Us</Link>

            <Link to="/services">Services</Link>

            <Link to="/countries">Countries</Link>

            <Link to="/faq">FAQs</Link>

          </div>


          {/* =========================
              SERVICES
          ========================= */}

          <div className="footer-column">

            <h3>Services</h3>

            <Link to="/services">
              Study Abroad
            </Link>

            <Link to="/services">
              Work Visa
            </Link>

            <Link to="/services">
              Family Migration
            </Link>

            <Link to="/services">
              Permanent Residency
            </Link>

          </div>


          {/* =========================
              CONTACT
          ========================= */}

          <div className="footer-column footer-contact">

            <h3>Contact</h3>

            <a href="tel:+916379891812" className="footer-phone">
              +91 637 989 1812
            </a>

            <a href="mailto:wellcareerimmigration.com">
              wellcareerimmigration.com
            </a>

            <p>
              Our Company Address
              <br />
              5th Street Extention, Gandhipuram, Coimbatore.
            </p>

            <Link
              to="/contact"
              className="footer-contact-link"
            >
              Contact Us
              <span>→</span>
            </Link>

          </div>

        </div>


        {/* =========================
            BOTTOM
        ========================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Immigration Consultancy.
            All rights reserved.
          </p>

          <div>

            <a href="#!">
              Privacy Policy
            </a>

            <a href="#!">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
