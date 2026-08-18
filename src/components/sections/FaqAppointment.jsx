import { useState } from "react";
import { Link } from "react-router-dom";

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
{/* route link of faq */}
            <Link
              to="/faq"
              className="faq-more-link"
            >
              View More FAQs
              <span>»</span>
            </Link>

          </div>


          {/*  RIGHT — APPOINTMENT*/}

          <div className="appointment-card">

            <div className="appointment-decoration"></div>

            <div className="appointment-content">
{/* 
              <span className="appointment-label">
                CONSULTATION
              </span> */}

              <h2>
                Book An
                <br />
                <span>Appointment</span>
              </h2>

              {/* <p className="appointment-description">
                Tell us about your goals and choose a convenient
                time to speak with our team.
              </p> */}


              <form className="appointment-form">

                {/* Country + Service */}

                <div className="appointment-form-row">

                  <div className="appointment-field">
                    <label htmlFor="appointment-country">
                      Select Country
                    </label>

                    <select
                      id="appointment-country"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose Country
                      </option>

                      <option value="usa">
                        United States
                      </option>

                      <option value="canada">
                        Canada
                      </option>

                      <option value="uk">
                        United Kingdom
                      </option>

                      <option value="australia">
                        Australia
                      </option>
                    </select>
                  </div>


                  <div className="appointment-field">
                    <label htmlFor="appointment-service">
                      Select Service
                    </label>

                    <select
                      id="appointment-service"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose Service
                      </option>

                      <option value="study-abroad">
                        Study Abroad
                      </option>

                      <option value="work-visa">
                        Work Visa
                      </option>

                      <option value="tourist-visa">
                        Tourist Visa
                      </option>

                      <option value="permanent-residency">
                        Permanent Residency
                      </option>
                    </select>
                  </div>

                </div>


                {/* Name + Phone */}

                <div className="appointment-form-row">

                  <div className="appointment-field">
                    <label htmlFor="appointment-name">
                      Your Full Name
                    </label>

                    <input
                      id="appointment-name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>


                  <div className="appointment-field">
                    <label htmlFor="appointment-phone">
                      Phone
                    </label>

                    <input
                      id="appointment-phone"
                      type="tel"
                      placeholder="Enter phone number"
                    />
                  </div>

                </div>


                {/* Date + Time */}

                <div className="appointment-form-row">

                  <div className="appointment-field">
                    <label htmlFor="appointment-date">
                      Select Date
                    </label>

                    <input
                      id="appointment-date"
                      type="date"
                    />
                  </div>


                  <div className="appointment-field">
                    <label htmlFor="appointment-time">
                      Select Time
                    </label>

                    <input
                      id="appointment-time"
                      type="time"
                    />
                  </div>

                </div>


                <button
                  type="submit"
                  className="appointment-submit"
                >
                  Book Appointment
                  <span>→</span>
                </button>

              </form>


              <div className="appointment-contact">

                <span>
                  Or just give us a call
                </span>

                <strong>
                  +91 637 989 1812
                </strong>

                <small>
                  Our support team is ready to help.
                </small>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FaqAppointment;