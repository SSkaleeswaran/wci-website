import React from "react";
import { Link } from "react-router-dom";
import "../../styles/tourist-visa.css";

/* =========================================================
   ASSETS
========================================================= */

const ASSET = "/images/tourist";


/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: `${ASSET}/expert-guidance.png`,
    title: "Expert Guidance",
    text: "Get advice from experienced visa professionals.",
  },
  {
    icon: `${ASSET}/document-support.png`,
    title: "Document Support",
    text: "We help you prepare and verify the right documents.",
  },
  {
    icon: `${ASSET}/application-assistance.png`,
    title: "Application Assistance",
    text: "End-to-end support in filling and submitting your application.",
  },
  {
    icon: `${ASSET}/travel-confidence.png`,
    title: "Travel Confidence",
    text: "Focus on your trip while we handle the process.",
  },
];


/* =========================================================
   VISA JOURNEY
========================================================= */

const processSteps = [
  {
    number: "01",
    icon: `${ASSET}/step-consultation.png`,
    title: "Consultation",
    text: "We understand your travel plans and visa requirements.",
  },
  {
    number: "02",
    icon: `${ASSET}/step-document.png`,
    title: "Document Preparation",
    text: "We help you gather and prepare the required documents correctly.",
  },
  {
    number: "03",
    icon: `${ASSET}/step-application.png`,
    title: "Application",
    text: "We assist you in filling and submitting your visa application.",
  },
  {
    number: "04",
    icon: `${ASSET}/step-decision.png`,
    title: "Decision & Guidance",
    text: "We keep you updated and guide you until you receive a decision.",
  },
];


/* =========================================================
   DOCUMENTS
========================================================= */

const documents = [
  {
    icon: `${ASSET}/doc-passport.png`,
    title: "Valid Passport",
    text: "Passport with minimum validity as per requirement.",
  },
  {
    icon: `${ASSET}/doc-form.png`,
    title: "Application Form",
    text: "Completed and signed visa application form.",
  },
  {
    icon: `${ASSET}/doc-photo.png`,
    title: "Photographs",
    text: "Recent passport-size photographs.",
  },
  {
    icon: `${ASSET}/doc-travel.png`,
    title: "Travel Details",
    text: "Flight bookings and accommodation details.",
  },
  {
    icon: `${ASSET}/doc-financial.png`,
    title: "Financial Proof",
    text: "Bank statements or other financial documents.",
  },
  {
    icon: `${ASSET}/doc-additional.png`,
    title: "Additional Documents",
    text: "Documents as per destination and visa type.",
  },
];


/* =========================================================
   PAGE
========================================================= */

function TouristVisaPage() {
  return (
    <main className="tourist-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tourist-hero">

        {/* Hero Image */}

        <div className="tourist-hero-image">
          <img
            src={`${ASSET}/hero-banner.png`}
            alt="Tourist travelling abroad"
          />
        </div>

        {/* Gradient overlay */}

        <div className="tourist-hero-overlay"></div>


        {/* Hero Content */}

        <div className="container tourist-hero-container">

          <div className="tourist-hero-content">

            <span className="tourist-hero-label">
              TOURIST VISA ✈
            </span>

            <h1>
              Explore the world.
              <span>Create memories.</span>
            </h1>

            <div className="tourist-orange-line">
              <img
                src={`${ASSET}/orange-accent-line.png`}
                alt=""
              />
            </div>

            <p>
              Your dream destination is closer than you think.
              <br />
              We simplify the visa process for a stress-free journey.
            </p>

            <Link
              to="/contact"
              className="tourist-primary-btn"
            >Book Consultation
              <span>
                <span>→</span>
              </span>

              {/* <img
                src={`${ASSET}/blue-arrow-icon.png`}
                alt=""
              /> */}
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="tourist-benefits">

        <div className="container">

          <div className="tourist-benefit-inner">

            {benefits.map((benefit) => (
              <div
                className="tourist-benefit-item"
                key={benefit.title}
              >

                <div className="tourist-benefit-icon">

                  <img
                    src={benefit.icon}
                    alt=""
                  />

                </div>

                <div className="tourist-benefit-content">

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VISA JOURNEY
      ===================================================== */}

      <section className="tourist-journey">

        <div className="container">

          <div className="tourist-journey-layout">


            {/* LEFT SIDE */}

            <div className="tourist-journey-intro">

              <span className="tourist-section-label">
                VISA JOURNEY
              </span>

              <h2>
                From planning
                <span>to exploring.</span>
              </h2>

              <div className="tourist-orange-line">
                <img
                  src={`${ASSET}/orange-accent-line.png`}
                  alt=""
                />
              </div>

              <p>
                We guide you through every step
                of your tourist visa application
                with clarity and care.
              </p>


              {/* Passport Decoration */}

              <div className="tourist-passport-decoration">

                <img
                  src={`${ASSET}/passport-travel-decoration.png`}
                  alt=""
                />

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="tourist-process-area">

              {/* Flight route */}

              <div className="tourist-process-route">

                <span className="route-line"></span>

                <span className="route-dot dot-one"></span>

                <span className="route-dot dot-two"></span>

                <span className="route-dot dot-three"></span>

                <span className="route-dot dot-four"></span>

              </div>


              {/* Process Cards */}

              <div className="tourist-process-grid">

                {processSteps.map((step, index) => (

                  <div
                    className="tourist-process-wrapper"
                    key={step.number}
                  >

                    {/* Number */}

                    <div
                      className={`tourist-step-number ${
                        index % 2 !== 0
                          ? "orange-step"
                          : ""
                      }`}
                    >
                      {step.number}
                    </div>


                    {/* Card */}

                    <div className="tourist-process-card">

                      <div className="tourist-process-icon">

                        <img
                          src={step.icon}
                          alt=""
                        />

                      </div>

                      <h3>
                        {step.title}
                      </h3>

                      <p>
                        {step.text}
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
          DOCUMENT CHECKLIST
      ===================================================== */}

      <section className="tourist-documents">

        <div className="container">

          <div className="tourist-documents-box">

            <div className="tourist-documents-heading">

              <span className="tourist-section-label">
                DOCUMENT CHECKLIST
              </span>

              <h2>
                Documents You May Need
              </h2>

              <div className="tourist-orange-line center-line">

                <img
                  src={`${ASSET}/orange-accent-line.png`}
                  alt=""
                />

              </div>

            </div>


            {/* Documents */}

            <div className="tourist-document-grid">

              {documents.map((document) => (

                <div
                  className="tourist-document-item"
                  key={document.title}
                >

                  <div className="tourist-document-icon">

                    <img
                      src={document.icon}
                      alt=""
                    />

                  </div>


                  <div className="tourist-document-content">

                    <h3>
                      {document.title}
                    </h3>

                    <p>
                      {document.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="tourist-final-cta">

        {/* CTA background */}

        <div className="tourist-cta-background">

          <img
            src={`${ASSET}/cta-section-bg.png`}
            alt=""
          />

        </div>


        <div className="container">

          <div className="tourist-cta-content">

            <div className="tourist-cta-spacer"></div>


            <div className="tourist-cta-text">

              <h2>
                Ready for your next journey?
              </h2>

              <p>
                Let WCI handle your visa process while you plan the adventure.
              </p>

            </div>


            <Link
              to="/contact"
              className="tourist-cta-button"
            >
              Book Consultation
              <span>→</span>
              {/* <img
                src={`${ASSET}/blue-arrow-icon.png`}
                alt=""
              /> */}

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default TouristVisaPage;