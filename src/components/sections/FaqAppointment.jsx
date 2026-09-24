import { useState } from "react";
import { Link } from "react-router-dom";
import { Scene3DCanvas } from "../hero3d/Hero3d";

const faqs = [
  {
    id: 1,
    question: "What immigration services do you provide?",
    answer:
      "We provide guidance for study abroad, work visas, family migration, and permanent residency pathways.",
  },
  {
    id: 2,
    question: "Which countries do you assist with?",
    answer:
      "We assist with selected international destinations. Contact our team to discuss the destination and pathway that matches your goals.",
  },
  {
    id: 3,
    question: "What documents will I need?",
    answer:
      "The required documents depend on your destination, service, and individual circumstances. Our team will explain the relevant requirements.",
  },
  {
    id: 4,
    question: "How long does the process take?",
    answer:
      "Processing time varies depending on the destination, application type, and relevant authorities.",
  },
];

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
              <span>immigration journey?</span>
            </h2>

            <p className="faq-description">
              Find answers to some of the most common questions about
              our services and immigration process.
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

            <Link
              to="/faq"
              className="faq-more-link"
            >
              View More FAQs
              <span>»</span>
            </Link>

          </div>


          {/* =========================
              RIGHT — 3D VISUAL
          ========================= */}

          <div className="faq-visual">

            <div className="faq-hero-3d">

              <Scene3DCanvas />
              
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FaqAppointment;