import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What immigration services do you provide?",
    answer:
      "We provide guidance for study abroad, work visas, family migration, and permanent residency pathways.",
    category: "Services",
  },
  {
    question: "Can you help me choose the right study destination?",
    answer:
      "Yes. We can discuss your education goals and preferred destinations and help you understand suitable options.",
    category: "Services",
  },
  {
    question: "Can you help with work visa applications?",
    answer:
      "We provide guidance on available work visa pathways and help you understand the requirements for your chosen destination.",
    category: "Services",
  },
  {
    question: "Do you assist with permanent residency?",
    answer:
      "We provide guidance on permanent residency pathways based on your profile and the requirements of the destination.",
    category: "Services",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "During the consultation, we understand your goals, review your basic requirements, and explain the possible pathways and next steps.",
    category: "Process",
  },
  {
    question: "How long does the immigration process take?",
    answer:
      "Processing times vary depending on the destination, application type, individual circumstances, and relevant authorities.",
    category: "Process",
  },
  {
    question: "Can I speak with a consultant before applying?",
    answer:
      "Yes. A consultation allows you to discuss your goals and understand the possible options before proceeding.",
    category: "Process",
  },
  {
    question: "What documents will I need?",
    answer:
      "Required documents depend on your destination, service, and individual circumstances. Our team will explain the relevant requirements.",
    category: "Documents",
  },
  {
    question: "Which countries do you assist with?",
    answer:
      "We assist with selected international destinations. Contact our team to discuss the destination and pathway that matches your goals.",
    category: "Getting Started",
  },
  {
    question: "How can I book a consultation?",
    answer:
      "You can book a consultation using the appointment form on our website or contact our team directly.",
    category: "Getting Started",
  },
];

const categories = ["All", "Services", "Process", "Documents", "Getting Started"];

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

function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const [sidebarRef, sidebarInView] = useReveal(0.1);
  const [listRef, listInView] = useReveal(0.05);
  const [ctaRef, ctaInView] = useReveal(0.3);

  const filtered = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch = faq.question.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="faq-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="faq-hero">
        <div className="faq-hero-glow" aria-hidden="true"></div>

        <div className="container faq-hero-reveal">
          <span className="faq-hero-label">FREQUENTLY ASKED QUESTIONS</span>

          <h1>
            Your questions,
            <span> answered clearly.</span>
          </h1>

          <p>
            Find useful information about our immigration services,
            process, destinations, and consultations.
          </p>
        </div>

        <div className="faq-search-float">
          <div className="container">
            <div className="faq-search-bar">
              <span className="faq-search-icon">⌕</span>
              <input
                type="text"
                placeholder="Search a question…"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setActiveCategory("All");
                }}
              />
              {search && (
                <button
                  className="faq-search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* =========================
          FAQ EXPLORER
      ========================= */}

      <section className="faq-explorer">
        <div className="container">

          <div className="faq-explorer-layout">

            {/* SIDEBAR */}
            <div
              className={`faq-sidebar${sidebarInView ? " in-view" : ""}`}
              ref={sidebarRef}
            >
              <span className="faq-sidebar-label">Browse by topic</span>

              <div className="faq-category-list">
                {categories.map((cat, i) => {
                  const count =
                    cat === "All" ? faqs.length : faqs.filter((f) => f.category === cat).length;

                  return (
                    <button
                      key={cat}
                      className={`faq-category-pill${activeCategory === cat ? " active" : ""}`}
                      style={{ transitionDelay: `${i * 90}ms` }}
                      onClick={() => {
                        setActiveCategory(cat);
                        setSearch("");
                      }}
                    >
                      <span>{cat}</span>
                      <small>{count}</small>
                    </button>
                  );
                })}
              </div>

              <div className="faq-sidebar-note">
                <span aria-hidden="true">✦</span>
                <p>Can't find what you're looking for? Reach out and we'll help directly.</p>
              </div>
            </div>

            {/* LIST */}
            <div
              className={`faq-list${listInView ? " in-view" : ""}`}
              ref={listRef}
            >

              <div className="faq-list-header">
                <span>
                  {filtered.length} {filtered.length === 1 ? "question" : "questions"}
                  {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
                </span>
              </div>

              {filtered.length === 0 && (
                <div className="faq-empty">
                  No questions match your search. Try a different term.
                </div>
              )}

              {filtered.map((faq, index) => (
                <div
                  className={`faq-card${openIndex === index ? " open" : ""}`}
                  style={{ transitionDelay: `${Math.min(index * 80, 480)}ms` }}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-card-head"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="faq-card-tag">{faq.category}</span>
                    <span className="faq-card-question">{faq.question}</span>
                    <span className="faq-card-icon">{openIndex === index ? "−" : "+"}</span>
                  </button>

                  <div
                    className="faq-card-body-wrap"
                    style={{ gridTemplateRows: openIndex === index ? "1fr" : "0fr" }}
                  >
                    <div className="faq-card-body-inner">
                      <p className="faq-card-body">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="faq-cta-section">
        <div className="container">
          <div
            className={`faq-cta${ctaInView ? " in-view" : ""}`}
            ref={ctaRef}
          >
            <div className="faq-cta-text">
              <span>STILL HAVE QUESTIONS?</span>
              <h2>Let's talk about your journey.</h2>
              <p>Our team can help you understand the next step.</p>
            </div>

            <Link to="/contact" className="faq-cta-button">
              Contact Us <span>→</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default FAQPage;