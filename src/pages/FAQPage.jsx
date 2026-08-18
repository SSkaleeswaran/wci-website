import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What immigration services do you provide?",
    answer:
      "We provide guidance for study abroad, work visas, family migration, and permanent residency pathways.",
  },
  {
    question: "Which countries do you assist with?",
    answer:
      "We assist with selected international destinations. Contact our team to discuss the destination and pathway that matches your goals.",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "During the consultation, we understand your goals, review your basic requirements, and explain the possible pathways and next steps.",
  },
  {
    question: "What documents will I need?",
    answer:
      "Required documents depend on your destination, service, and individual circumstances. Our team will explain the relevant requirements.",
  },
  {
    question: "How long does the immigration process take?",
    answer:
      "Processing times vary depending on the destination, application type, individual circumstances, and relevant authorities.",
  },
  {
    question: "How can I book a consultation?",
    answer:
      "You can book a consultation using the appointment form on our website or contact our team directly.",
  },
  {
    question: "Can you help me choose the right study destination?",
    answer:
      "Yes. We can discuss your education goals and preferred destinations and help you understand suitable options.",
  },
  {
    question: "Can you help with work visa applications?",
    answer:
      "We provide guidance on available work visa pathways and help you understand the requirements for your chosen destination.",
  },
  {
    question: "Do you assist with permanent residency?",
    answer:
      "We provide guidance on permanent residency pathways based on your profile and the requirements of the destination.",
  },
  {
    question: "Can I speak with a consultant before applying?",
    answer:
      "Yes. A consultation allows you to discuss your goals and understand the possible options before proceeding.",
  },
];

function FAQPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="faq-page">

      {/* =========================
          PAGE HERO
      ========================= */}

      <section className="faq-page-hero">
        <div className="container">

          <span className="faq-page-label">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h1>
            Your questions.
            <span> Our answers.</span>
          </h1>

          <p>
            Find useful information about our immigration services,
            process, destinations, and consultations.
          </p>

        </div>
      </section>


      {/* =========================
          FAQ CONTENT
      ========================= */}

      <section className="faq-page-content">
        <div className="container">

          <div className="faq-page-list">

            {faqs.map((faq, index) => (
              <div
                className={`faq-page-item ${
                  activeFaq === index ? "active" : ""
                }`}
                key={faq.question}
              >

                <button
                  type="button"
                  className="faq-page-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>
                    <small>
                      Q{String(index + 1).padStart(2, "0")}
                    </small>

                    {faq.question}
                  </span>

                  <strong>
                    {activeFaq === index ? "−" : "+"}
                  </strong>
                </button>

                {activeFaq === index && (
                  <div className="faq-page-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}

              </div>
            ))}

          </div>


          {/* =========================
              BOTTOM CTA
          ========================= */}

          <div className="faq-page-cta">

            <div>
              <span>STILL HAVE QUESTIONS?</span>

              <h2>
                Let's talk about
                <span> your journey.</span>
              </h2>

              <p>
                Our team can help you understand the next step.
              </p>
            </div>

            <Link
              to="/contact"
              className="faq-page-cta-button"
            >
              Contact Us
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default FAQPage;