import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    id: 1,
    question: "What visa services do you provide?",
    answer:
      "We provide guidance for Visitor Visa, Tourist Visa, Business Visa, and Study Visa applications.",
  },
  {
    id: 2,
    question: "Which countries do you assist with?",
    answer:
      "We assist with Canada, USA, UK, Japan, Australia, Schengen countries, South Korea, New Zealand, Taiwan, and Russia.",
  },
  {
    id: 3,
    question: "What documents will I need?",
    answer:
      "The required documents depend on your destination, visa type, and individual circumstances. Our team will explain the relevant requirements.",
  },
  {
    id: 4,
    question: "How long does the visa process take?",
    answer:
      "Processing time varies depending on the destination, application type, documentation, and the relevant authorities.",
  },
];

const MAP_EMBED_SRC =
  "https://www.google.com/maps?cid=13508895320001886105&output=embed";

function FaqAppointment() {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqClick = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section className="faq-appointment-section">
      <div className="container">
        <div className="faq-appointment-layout">

          {/* =========================
              LEFT — FAQ
          ========================= */}
          <div className="faq-content">

            <span className="faq-label">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              Questions about your
              <br />
              <span>visa journey?</span>
            </h2>

            <p className="faq-description">
              Find answers to some of the most common questions about
              our visa services and application process.
            </p>

            <div className="faq-list">
              {faqs.map((faq) => (
                <div
                  className={`faq-item ${
                    activeFaq === faq.id ? "faq-open" : ""
                  }`}
                  key={faq.id}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => handleFaqClick(faq.id)}
                  >
                    <span>
                      Q{faq.id}. {faq.question}
                    </span>

                    <span className="faq-arrow">
                      {activeFaq === faq.id ? "⌃" : "›"}
                    </span>
                  </button>

                  {activeFaq === faq.id && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link to="/faq" className="faq-more-link">
              View More FAQs
              <span>»</span>
            </Link>
          </div>

          {/* =========================
              RIGHT — OFFICE MAP
          ========================= */}
          <div className="faq-map-wrapper">

            <div className="faq-map-card">

              <div className="faq-map-header">
                <span>VISIT OUR OFFICE</span>

                <h3>
                  Let&apos;s meet and discuss
                  <br />
                  your future.
                </h3>

                <p>
                  Prefer a personal discussion? Visit our office
                  in Gandhipuram, Coimbatore.
                </p>
              </div>

              <div className="faq-map-embed">
                <iframe
                  title="Well Career Immigration office location"
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="faq-map-footer">
                <div>
                  <strong>Well Career Immigration</strong>
                  <span>
                    5th Street Extension, Gandhipuram,
                    Coimbatore, Tamil Nadu 641012
                  </span>
                </div>

                <Link to="/contact">
                  Contact Us
                  <span>→</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FaqAppointment;