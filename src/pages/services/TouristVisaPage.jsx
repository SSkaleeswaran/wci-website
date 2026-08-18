import React from "react";
import { Link } from "react-router-dom";

function TouristVisaPage() {
  return (
    <main className="service-detail-page">

      {/* Hero */}
      <section className="service-detail-hero">
        <div className="container">

          <span className="service-detail-label">
            VISA SERVICES
          </span>

          <h1>
            Tourist <span>Visa</span>
          </h1>

          <p>
            For holidays, sightseeing, and visiting family or friends.
          </p>

        </div>
      </section>


      {/* Main Content */}
      <section className="service-detail-section">
        <div className="container">

          <div className="service-detail-grid">

            {/* Left Content */}
            <div className="service-detail-content">

              <span className="service-detail-small-title">
                TOURIST VISA
              </span>

              <h2>
                Explore the world with confidence
              </h2>

              <p>
                Planning a holiday or visiting family abroad? Our tourist
                visa assistance helps you understand the requirements and
                prepare your application correctly.
              </p>

              <p>
                From documentation to application guidance, we help make
                your visa journey simple and organized.
              </p>

            </div>


            {/* Right Card */}
            <div className="service-detail-card">

              <h3>
                Tourist Visa Assistance
              </h3>

              <ul>
                <li>Document guidance</li>
                <li>Application assistance</li>
                <li>Visa process guidance</li>
                <li>Travel consultation</li>
              </ul>

              <Link
                to="/contact"
                className="service-detail-button"
              >
                Book Consultation
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default TouristVisaPage;