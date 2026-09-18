import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import "./business-visa-page.css";

const businessPurposes = [
  {
    id: "meetings",
    label: "Meetings",
    title: "Business Meetings",
    text: "Attend meetings with clients, partners, suppliers or business associates.",
  },
  {
    id: "conference",
    label: "Conferences",
    title: "Conferences & Events",
    text: "Travel for eligible conferences, exhibitions, seminars and professional events.",
  },
  {
    id: "negotiation",
    label: "Negotiations",
    title: "Business Negotiations",
    text: "Take part in eligible discussions, negotiations and commercial activities.",
  },
  {
    id: "client",
    label: "Client Visits",
    title: "Client Visits",
    text: "Meet international clients and business contacts during a short business visit.",
  },
];

const destinations = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Schengen / Europe",
];

const faqs = [
  {
    question: "What is a Business Visa used for?",
    answer:
      "A business visa may allow eligible short-term activities such as meetings, conferences, negotiations or client visits, depending on the destination's visa conditions.",
  },
  {
    question: "Can I work on a Business Visa?",
    answer:
      "A visitor or business visa does not automatically give permission to undertake employment. The activities allowed depend on the destination and visa conditions.",
  },
  {
    question: "What documents are normally required?",
    answer:
      "Requirements vary by destination, but may include a passport, invitation letter, company documents, financial evidence, employment or business proof and travel details.",
  },
  {
    question: "Do I need an invitation from a company?",
    answer:
      "An invitation or supporting letter may be required depending on the destination, purpose of travel and circumstances of the application.",
  },
];

function BusinessVisaPage() {
  const heroRef = useRef(null);
  const [activePurpose, setActivePurpose] = useState("meetings");
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width - 0.5) * 2;

      const y =
        ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      hero.style.setProperty("--business-x", `${x * 8}px`);
      hero.style.setProperty("--business-y", `${y * 6}px`);
    };

    const resetMouse = () => {
      hero.style.setProperty("--business-x", "0px");
      hero.style.setProperty("--business-y", "0px");
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", resetMouse);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", resetMouse);
    };
  }, []);

  const selectedPurpose = businessPurposes.find(
    (item) => item.id === activePurpose
  );

  return (
    <main className="business-page">

      {/* =================================
          HERO
      ================================= */}
      <section
        ref={heroRef}
        className="business-hero"
        style={{
          backgroundImage:
            "url('/images/banners/bannerBusiness.jpeg')",
        }}
      >
        <div className="business-hero-overlay"></div>

        <div className="business-hero-grid"></div>

        <div className="container business-hero-content">
          <div className="business-hero-copy">
            <span className="business-kicker">
              BUSINESS VISA
            </span>

            <h1>
              Take your
              <br />
              business global.
            </h1>

            <p>
              Professional visa guidance for international meetings,
              conferences, negotiations and business visits.
            </p>

            <Link
              to="/book-consultation"
              className="business-main-btn"
            >
              Discuss Your Business Travel →
            </Link>
          </div>

          <div className="business-hero-panel">
            <span>GLOBAL BUSINESS</span>

            <div className="business-panel-line"></div>

            <strong>
              Connect.
              <br />
              Meet.
              <br />
              Grow.
            </strong>

            <small>
              Your business journey starts with the right preparation.
            </small>
          </div>
        </div>

        <div className="business-hero-orbit"></div>
      </section>

      {/* =================================
          BUSINESS PURPOSE
      ================================= */}
      <section className="business-purpose">
        <div className="container">
          <div className="business-heading-row">
            <div>
              <span>BUSINESS TRAVEL</span>
              <h2>What brings you abroad?</h2>
            </div>

            <p>
              Business travel can have different purposes. Your intended
              activity helps determine the appropriate visa requirements.
            </p>
          </div>

          <div className="business-purpose-layout">

            <div className="business-purpose-menu">
              {businessPurposes.map((purpose, index) => (
                <button
                  type="button"
                  key={purpose.id}
                  className={
                    activePurpose === purpose.id
                      ? "business-purpose-item active"
                      : "business-purpose-item"
                  }
                  onClick={() => setActivePurpose(purpose.id)}
                >
                  <span>0{index + 1}</span>
                  <strong>{purpose.label}</strong>
                  <b>→</b>
                </button>
              ))}
            </div>

            <div className="business-purpose-preview">
              <div className="business-preview-mark">
                {String(
                  businessPurposes.findIndex(
                    (item) => item.id === activePurpose
                  ) + 1
                ).padStart(2, "0")}
              </div>

              <div>
                <span>BUSINESS VISIT</span>

                <h3>{selectedPurpose.title}</h3>

                <p>{selectedPurpose.text}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================
          DESTINATIONS
      ================================= */}
      <section className="business-destinations">
        <div className="container">

          <div className="business-heading">
            <span>GLOBAL DESTINATIONS</span>
            <h2>Take business beyond borders.</h2>
          </div>

          <div className="business-destination-strip">
            {destinations.map((destination, index) => (
              <div
                className="business-destination"
                key={destination}
              >
                <small>
                  0{index + 1}
                </small>

                <strong>{destination}</strong>

                <span>Business travel</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =================================
          WCI BUSINESS DESK
      ================================= */}
      <section className="business-support">
        <div className="container">
          <div className="business-support-layout">

            <div className="business-support-intro">
              <span>WCI BUSINESS DESK</span>

              <h2>
                Preparation
                <br />
                matters.
              </h2>

              <p>
                We help you organise the important parts of your
                business visa application before submission.
              </p>
            </div>

            <div className="business-support-list">

              <div className="business-support-row">
                <span>01</span>
                <div>
                  <h3>Eligibility Review</h3>
                  <p>
                    Review your travel purpose and visa requirements.
                  </p>
                </div>
              </div>

              <div className="business-support-row">
                <span>02</span>
                <div>
                  <h3>Business Documents</h3>
                  <p>
                    Organise company and supporting documentation.
                  </p>
                </div>
              </div>

              <div className="business-support-row">
                <span>03</span>
                <div>
                  <h3>Application Guidance</h3>
                  <p>
                    Receive guidance throughout the application process.
                  </p>
                </div>
              </div>

              <div className="business-support-row">
                <span>04</span>
                <div>
                  <h3>Interview Preparation</h3>
                  <p>
                    Prepare for an interview or appointment when required.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =================================
          BUSINESS JOURNEY
      ================================= */}
      <section className="business-journey">
        <div className="container">

          <div className="business-heading">
            <span>APPLICATION FLOW</span>
            <h2>A clear route to your business visit.</h2>
          </div>

          <div className="business-timeline">

            <div className="business-timeline-line"></div>

            <div className="business-timeline-step">
              <div className="business-step-dot">01</div>
              <strong>Assess</strong>
              <span>Understand requirements</span>
            </div>

            <div className="business-timeline-step">
              <div className="business-step-dot">02</div>
              <strong>Prepare</strong>
              <span>Organise documents</span>
            </div>

            <div className="business-timeline-step">
              <div className="business-step-dot">03</div>
              <strong>Apply</strong>
              <span>Submit application</span>
            </div>

            <div className="business-timeline-step">
              <div className="business-step-dot">04</div>
              <strong>Complete</strong>
              <span>Biometrics / interview</span>
            </div>

            <div className="business-timeline-step">
              <div className="business-step-dot">05</div>
              <strong>Travel</strong>
              <span>Proceed after decision</span>
            </div>

          </div>
        </div>
      </section>

      {/* =================================
          DOCUMENTS
      ================================= */}
      <section className="business-documents">
        <div className="container">

          <div className="business-document-card">

            <div className="business-document-side">
              <div className="business-document-icon">
                B
              </div>

              <span>BUSINESS FILE</span>

              <strong>
                Prepare
                <br />
                with purpose.
              </strong>
            </div>

            <div className="business-document-content">
              <span>IMPORTANT DOCUMENTS</span>

              <h2>Keep your file ready.</h2>

              <div className="business-document-grid">

                <div>
                  <b>Passport</b>
                  <span>Valid travel document</span>
                </div>

                <div>
                  <b>Invitation Letter</b>
                  <span>Business invitation, if applicable</span>
                </div>

                <div>
                  <b>Company Documents</b>
                  <span>Relevant business evidence</span>
                </div>

                <div>
                  <b>Financial Proof</b>
                  <span>Evidence of financial support</span>
                </div>

                <div>
                  <b>Employment / Business Proof</b>
                  <span>Professional background</span>
                </div>

                <div>
                  <b>Travel Details</b>
                  <span>Itinerary and accommodation</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================
          IMPORTANT NOTE
      ================================= */}
      <section className="business-note">
        <div className="container">

          <div className="business-note-inner">
            <div className="business-note-symbol">
              !
            </div>

            <div>
              <span>IMPORTANT</span>

              <h2>
                Business activities must match
                the conditions of your visa.
              </h2>

              <p>
                Visa requirements and permitted activities vary by
                destination. Make sure your application accurately
                represents the purpose of your visit.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =================================
          FAQ
      ================================= */}
      <section className="business-faq">
        <div className="container">

          <div className="business-faq-layout">

            <div className="business-heading">
              <span>FAQ</span>

              <h2>
                Business visa
                <br />
                questions.
              </h2>
            </div>

            <div className="business-faq-list">

              {faqs.map((faq, index) => (
                <div
                  className={
                    openFaq === index
                      ? "business-faq-item open"
                      : "business-faq-item"
                  }
                  key={faq.question}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        openFaq === index ? null : index
                      )
                    }
                  >
                    <span>{faq.question}</span>
                    <b>
                      {openFaq === index ? "−" : "+"}
                    </b>
                  </button>

                  {openFaq === index && (
                    <p>{faq.answer}</p>
                  )}
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =================================
          CTA
      ================================= */}
      <section className="business-final">
        <div className="container">

          <div className="business-final-inner">

            <div className="business-final-mark">
              WCI
            </div>

            <div>
              <span>YOUR NEXT BUSINESS MOVE</span>

              <h2>
                Take the next
                <br />
                step globally.
              </h2>

              <p>
                Discuss your business travel plans with our team.
              </p>

              <Link
                to="/book-consultation"
                className="business-main-btn"
              >
                Book a Consultation →
              </Link>
            </div>

          </div>

          <small className="business-disclaimer">
            Visa decisions are made by the relevant immigration
            authorities. WCI does not guarantee visa approval.
          </small>

        </div>
      </section>

    </main>
  );
}

export default BusinessVisaPage;