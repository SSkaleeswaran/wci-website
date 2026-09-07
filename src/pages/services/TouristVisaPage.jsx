import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/tourist-visa.css";

/* =========================================================
   ASSETS
========================================================= */

const ASSET = "/images/tourist";


/* =========================================================
   REVEAL-ON-SCROLL HOOK
========================================================= */

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}


/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: `${ASSET}/expert-guidance.png`,
    title: "Expert Guidance",
    text: "Real advice from people who've done this hundreds of times.",
  },
  {
    icon: `${ASSET}/document-support.png`,
    title: "Document Support",
    text: "We check every document before it's ever submitted.",
  },
  {
    icon: `${ASSET}/application-assistance.png`,
    title: "Application Assistance",
    text: "We handle the details — you just sign where it matters.",
  },
  {
    icon: `${ASSET}/travel-confidence.png`,
    title: "Travel Confidence",
    text: "You focus on the trip. We handle the process.",
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
    text: "We start by understanding where you're going and why — every trip is different.",
  },
  {
    number: "02",
    icon: `${ASSET}/step-document.png`,
    title: "Document Preparation",
    text: "We tell you exactly what's needed, so there's no guesswork.",
  },
  {
    number: "03",
    icon: `${ASSET}/step-application.png`,
    title: "Application",
    text: "We complete and submit it together, step by step.",
  },
  {
    number: "04",
    icon: `${ASSET}/step-decision.png`,
    title: "Decision & Guidance",
    text: "We keep you posted and stay ready to help right up to your decision.",
  },
];


/* =========================================================
   DOCUMENTS
========================================================= */

const documents = [
  {
    icon: `${ASSET}/doc-passport.png`,
    title: "Valid Passport",
    text: "Should stay valid well beyond your travel dates.",
  },
  {
    icon: `${ASSET}/doc-form.png`,
    title: "Application Form",
    text: "Filled in fully and signed — we make sure nothing's missed.",
  },
  {
    icon: `${ASSET}/doc-photo.png`,
    title: "Photographs",
    text: "Recent passport-size photos, to the exact spec.",
  },
  {
    icon: `${ASSET}/doc-travel.png`,
    title: "Travel Details",
    text: "Your flights and stay booked and ready to show.",
  },
  {
    icon: `${ASSET}/doc-financial.png`,
    title: "Financial Proof",
    text: "Recent bank statements or similar proof of funds.",
  },
  {
    icon: `${ASSET}/doc-additional.png`,
    title: "Additional Documents",
    text: "Anything extra your specific destination asks for.",
  },
];


/* =========================================================
   PAGE
========================================================= */

function TouristVisaPage() {
  const [benefitsRef, benefitsInView] = useReveal(0.1);
  const [journeyRef, journeyInView] = useReveal(0.12);
  const [documentsRef, documentsInView] = useReveal(0.08);
  const [ctaRef, ctaInView] = useReveal(0.2);

  return (
    <main className="tourist-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tourist-hero">

        <div className="tourist-hero-image">
          <img
            src={'/images/banners/bannerVacationNew.jpeg'}
            alt="Tourist travelling abroad"
          />
        </div>

        <div className="tourist-hero-overlay"></div>

        <div className="container tourist-hero-container">

          <div className="tourist-hero-content">

            <span className="tourist-hero-label">
              TOURIST VISA <span className="hero-plane">✈</span>
            </span>

            <h1>
              Explore the world.
              <span>Create memories.</span>
            </h1>

            <div className="tourist-accent-line"></div>

            <p>
              Your dream destination is closer than you think. We handle
              the visa process so your trip can start with excitement,
              not paperwork.
            </p>

            <Link to="/contact" className="tourist-primary-btn">
              Book Consultation
              <span><span>→</span></span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section
        className={`tourist-benefits${benefitsInView ? " in-view" : ""}`}
        ref={benefitsRef}
      >

        <div className="container">

          <div className="tourist-benefit-inner">

            {benefits.map((benefit, i) => (
              <div
                className="tourist-benefit-item"
                key={benefit.title}
                style={{ transitionDelay: `${i * 100}ms` }}
              >

                <div className="tourist-benefit-icon">
                  <img src={benefit.icon} alt="" />
                </div>

                <div className="tourist-benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VISA JOURNEY
      ===================================================== */}

      <section
        className={`tourist-journey${journeyInView ? " in-view" : ""}`}
        ref={journeyRef}
      >

        <div className="container">

          <div className="tourist-journey-layout">

            {/* LEFT SIDE */}

            <div className="tourist-journey-intro">

              <span className="tourist-section-label">VISA JOURNEY</span>

              <h2>
                From planning
                <span>to exploring.</span>
              </h2>

              <div className="tourist-accent-line"></div>

              <p>
                We guide you through every step of your tourist visa
                application with clarity and care.
              </p>

              <div className="tourist-passport-decoration">
                <img
                  src={`${ASSET}/passport-travel-decoration.png`}
                  alt=""
                />
              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="tourist-process-area">

              <div className="tourist-process-route">
                <span className="route-line"></span>
                <span className="route-dot dot-one"></span>
                <span className="route-dot dot-two"></span>
                <span className="route-dot dot-three"></span>
                <span className="route-dot dot-four"></span>
              </div>

              <div className="tourist-process-grid">

                {processSteps.map((step, index) => (

                  <div
                    className="tourist-process-wrapper"
                    key={step.number}
                    style={{ transitionDelay: `${index * 130}ms` }}
                  >

                    <div
                      className={`tourist-step-number ${
                        index % 2 !== 0 ? "gold-step" : ""
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="tourist-process-card">
                      <div className="tourist-process-icon">
                        <img src={step.icon} alt="" />
                      </div>

                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
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

      <section
        className={`tourist-documents${documentsInView ? " in-view" : ""}`}
        ref={documentsRef}
      >

        <div className="container">

          <div className="tourist-documents-box">

            <div className="tourist-documents-heading">
              <span className="tourist-section-label">
                DOCUMENT CHECKLIST
              </span>

              <h2>Documents You May Need</h2>

              <div className="tourist-accent-line center-line"></div>
            </div>

            <div className="tourist-document-grid">

              {documents.map((document, i) => (

                <div
                  className="tourist-document-item"
                  key={document.title}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >

                  <div className="tourist-document-icon">
                    <img src={document.icon} alt="" />
                  </div>

                  <div className="tourist-document-content">
                    <h3>{document.title}</h3>
                    <p>{document.text}</p>
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

      <section
        className={`tourist-final-cta${ctaInView ? " in-view" : ""}`}
        ref={ctaRef}
      >

        <div className="tourist-cta-background">
          <img src={`${ASSET}/cta-section-bg.png`} alt="" />
        </div>

        <div className="container">

          <div className="tourist-cta-content">

            <div className="tourist-cta-spacer"></div>

            <div className="tourist-cta-text">
              <h2>Ready for your next journey?</h2>
              <p>Let WCI take care of the visa — you just pack your bags.</p>
            </div>

            <Link to="/contact" className="tourist-cta-button">
              Book Consultation
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default TouristVisaPage;