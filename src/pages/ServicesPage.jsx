import React from "react";
import { Link } from "react-router-dom";
import services from "../data/servicesDataCard";



function ServicesPage() {
  return (
    <main className="services-page">
     <section className="services-page-hero"  style={{
    backgroundImage: "url('/images/banners/hero-banner.png ')",
  }}>
        <div className="container">
          <span className="services-page-label">
            OUR SERVICES
          </span>

          <h1>
            Visa & Immigration
            <span> Services</span>
          </h1>

          <p>
            Professional guidance for your travel, study,
            and work visa requirements.
          </p>
        </div>
      </section>

    <section className="services-section">
      <div className="container">
  

        {/* Flight Path */}
        <div className="service-flight-path">
          <span>✈</span>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <div className="service-card-line"></div>

              <p>{service.description}</p>

              <Link
                to={service.path}
                className="service-link"
              >
                Learn More
                <span>→</span>
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
    </main>
  );
}
export default ServicesPage;