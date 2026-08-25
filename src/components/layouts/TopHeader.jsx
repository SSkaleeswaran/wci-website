import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <div className="top-header">
      <Container>
        <div className="top-header-inner">


            <Link to="/" className="top-header-logo">
  <img
    src="/images/headerLogo.png"
    alt="Immigration Consultancy"
  />
</Link>

          {/* Email */}
          <div className="top-header-item">
            <div className="top-header-icon">
              ✉
            </div>

            <div>
              <span>Email Us</span>
              <a href="mailto:wellcareerimmigration.com">
                wellcareerimmigration.com
              </a>
            </div>
          </div>


          {/* Opening Hours */}
          <div className="top-header-item">
            <div className="top-header-icon">
              ◷
            </div>

            <div>
              <span>Opening Hours</span>
              <strong>
                Mon - Fri, 9AM - 6PM
              </strong>
            </div>
          </div>


          {/* Location */}
          <div className="top-header-item">
            <div className="top-header-icon">
              ⌖
            </div>

            <div>
              <span>Our Location</span>
              <strong>
                Gandhipuram, Coimbatore.
              </strong>
            </div>
          </div>


          {/* Consultation */}
          <Link
            to="/contact"
            className="top-header-button"
          >
            Book Consultation
            <span>→</span>
          </Link>

        </div>
      </Container>
    </div>
  );
}

export default TopHeader;