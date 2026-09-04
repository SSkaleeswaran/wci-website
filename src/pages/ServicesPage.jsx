import React from "react";
import { Link } from "react-router-dom";
import services from "../data/servicesDataCard";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Discuss your goals with our team and understand the possible pathways for your journey.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Profile Review",
    description:
      "We review your profile, goals, and requirements to identify suitable options.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Application",
    description:
      "Get guidance through the preparation and submission of your application.",
    icon: "✈️",
  },
  {
    number: "04",
    title: "Next Step",
    description:
      "Receive continued guidance as you move forward with your immigration journey.",
    icon: "✓",
  },
];

function ServicesPage() {
  return (
    <main className="services-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="services-page-hero"
        style={{
          backgroundImage:
            "url('/images/banners/hero-banner.png')",
        }}
      >
        <div className="services-hero-overlay"></div>

        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-7">

              <div className="services-hero-content">

                <span className="services-page-label">
                  OUR SERVICES
                </span>

                <h1>
                  Visa & Immigration
                  <span> Services</span>
                </h1>

               

                <div className="services-hero-line"></div>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-options-section">

        {/* Decorative background */}
        <div className="services-bg-shape services-bg-shape-one"></div>
        <div className="services-bg-shape services-bg-shape-two"></div>

        <div className="container position-relative">

          {/* Heading */}

          <div className="row justify-content-between align-items-end mb-5">

            <div className="col-lg-6">

              <div className="services-options-heading">

                {/* <span>
                  OUR VISA & IMMIGRATION SERVICES
                </span> */}

                <h2>
                  Explore Your
                  <strong> Options</strong>
                </h2>

              </div>

            </div>


            <div className="col-lg-5">
                
              <p className="services-options-intro">
                Professional guidance for your travel, study,
                  work and family immigration journey. <br></br>
                We offer a wide range of visa and immigration
                services to help you achieve your goals,
                wherever you want to go.
              </p>

            </div>

          </div>


          {/* =================================================
              SERVICE CARDS
          ================================================= */}

          <div className="row g-4">

            {services.map((service, index) => (

              <div
                className="col-lg-6"
                key={service.title}
              >

                <div
                  className={`services-modern-card services-card-${index + 1}`}
                >

                  {/* Small visual */}
                  <div className="services-card-visual">

                    <div className="services-card-icon">
                      {service.icon}
                    </div>

                    <div className="services-card-circle"></div>

                  </div>


                  {/* Card content */}
                  <div className="services-card-content">

                    <span className="services-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>
                      {service.title}
                    </h3>

                    <div className="services-card-line"></div>

                    <p>
                      {service.description}
                    </p>

                    <Link
                      to={service.path}
                      className="services-modern-link"
                    >
                      Learn More
                      <span>→</span>
                    </Link>

                  </div>


                  {/* Decorative corner */}
                  <div className="services-card-corner"></div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="services-process-section">

        <div className="container">

          <div className="row align-items-center">

            {/* Process heading */}

            <div className="col-lg-4 mb-5 mb-lg-0">

              <div className="services-process-heading">

                <span>
                  HOW IT WORKS
                </span>

                <h2>
                  Your Journey,
                  <strong> Simplified.</strong>
                </h2>

                <div className="services-process-line"></div>

                <p>
                  From your first consultation to your next
                  step, we make the process easier to understand.
                </p>

              </div>

            </div>


            {/* Process steps */}

            <div className="col-lg-8">

              <div className="row g-3">

                {processSteps.map((step) => (

                  <div
                    className="col-sm-6"
                    key={step.number}
                  >

                    <div className="services-process-card">

                      <div className="services-process-top">

                        <div className="services-process-number">
                          {step.number}
                        </div>

                        <div className="services-process-icon">
                          {step.icon}
                        </div>

                      </div>

                      <h3>
                        {step.title}
                      </h3>

                      <p>
                        {step.description}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="services-cta-section">

        <div className="container">

          <div className="services-cta">

            <div className="services-cta-decoration"></div>

            <div className="row align-items-center position-relative">

              <div className="col-lg-8">

                <span className="services-cta-label">
                  NEED ASSISTANCE?
                </span>

                <h2>
                  Ready to take the next step?
                </h2>

                <p>
                  Talk to our team and get professional
                  guidance for your international journey.
                </p>

              </div>


              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

                <Link
                  to="/contact"
                  className="services-cta-button"
                >
                  Get in Touch Today
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ServicesPage;