import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ...businessPurposes, destinations, stats, agenda, faqs arrays stay exactly the same...

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

const stats = [
  { value: "24+", label: "Countries Covered" },
  { value: "1,200+", label: "Business Travellers Assisted" },
  { value: "96%", label: "Application Success Rate" },
  { value: "5–20", label: "Working Days Processing" },
];

const agenda = [
  { time: "STEP 01", title: "Assess", text: "Understand requirements" },
  { time: "STEP 02", title: "Prepare", text: "Organise documents" },
  { time: "STEP 03", title: "Apply", text: "Submit application" },
  { time: "STEP 04", title: "Complete", text: "Biometrics / interview" },
  { time: "STEP 05", title: "Travel", text: "Proceed after decision" },
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

function useCountUp(target, inView, duration = 1400) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const numeric = parseInt(String(target).replace(/[^\d]/g, ""), 10);
    if (isNaN(numeric)) {
      setDisplay(target);
      return;
    }

    const suffix = String(target).replace(/[\d,]/g, "");
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * numeric);
      setDisplay(current.toLocaleString() + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return display;
}

function BusinessVisaPage() {
  const heroRef = useRef(null);
  const [activePurpose, setActivePurpose] = useState("meetings");
  const [openFaq, setOpenFaq] = useState(null);

  const [statRef, statInView] = useReveal(0.3);
  const [purposeRef, purposeInView] = useReveal(0.15);
  const [destRef, destInView] = useReveal(0.15);
  const [supportRef, supportInView] = useReveal(0.15);
  const [journeyRef, journeyInView] = useReveal(0.15);
  const [docRef, docInView] = useReveal(0.15);
  const [noteRef, noteInView] = useReveal(0.25);
  const [faqRef, faqInView] = useReveal(0.15);
  const [ctaRef, ctaInView] = useReveal(0.25);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
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

  const selectedPurpose = businessPurposes.find((item) => item.id === activePurpose);
  const loopDestinations = [...destinations, ...destinations];

  return (
    <main className="business-page">

      {/* HERO */}
      <section
        ref={heroRef}
        className="business-hero"
        style={{ backgroundImage: "url('/images/banners/businessBanner.png')" }}
      >
        <div className="business-hero-overlay"></div>
        <div className="business-hero-grid"></div>

        <div className="container business-hero-content">
          <div className="business-hero-copy reveal-hero-copy in-view">
            <span className="business-kicker">BUSINESS VISA</span>

            <h1>
              Take your
              <br />
              business global.
            </h1>

            <p>
              Professional visa guidance for international meetings,
              conferences, negotiations and business visits.
            </p>

            <Link to="/book-consultation" className="business-main-btn">
              Discuss Your Business Travel →
            </Link>
          </div>
        </div>

        {/* KPI stat bar */}
        <div
          className={`business-stat-bar${statInView ? " in-view" : ""}`}
          ref={statRef}
        >
          <div className="container business-stat-grid">
            {stats.map((stat, i) => (
              <StatCell stat={stat} inView={statInView} delay={i * 120} key={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS PURPOSE */}
      <section
        className={`business-purpose reveal-section${purposeInView ? " in-view" : ""}`}
        ref={purposeRef}
      >
        <div className="container">
          <div className="business-heading reveal-slide-up">
            <span>BUSINESS TRAVEL</span>
            <h2>What brings you abroad?</h2>
          </div>

          <div className="business-tab-strip">
            {businessPurposes.map((purpose, index) => (
              <button
                type="button"
                key={purpose.id}
                className={
                  (activePurpose === purpose.id ? "business-tab active" : "business-tab") +
                  " reveal-tab"
                }
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setActivePurpose(purpose.id)}
              >
                <em>0{index + 1}</em>
                {purpose.label}
              </button>
            ))}
          </div>

          <div className="business-tab-panel" key={selectedPurpose.id}>
            <div className="business-tab-panel-mark">
              {String(businessPurposes.findIndex((p) => p.id === activePurpose) + 1).padStart(2, "0")}
            </div>

            <div>
              <span>BUSINESS VISIT</span>
              <h3>{selectedPurpose.title}</h3>
              <p>{selectedPurpose.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        className={`business-destinations reveal-section${destInView ? " in-view" : ""}`}
        ref={destRef}
      >
        <div className="business-heading container reveal-slide-up">
          <span>GLOBAL DESTINATIONS</span>
          <h2>Take business beyond borders.</h2>
        </div>

        <div className="business-ticker reveal-ticker">
          <div className="business-ticker-track">
            {loopDestinations.map((destination, index) => (
              <div className="business-ticker-item" key={`${destination}-${index}`}>
                <strong>{destination}</strong>
                <span>Business travel</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WCI BUSINESS DESK */}
      <section
        className={`business-support reveal-section${supportInView ? " in-view" : ""}`}
        ref={supportRef}
      >
        <div className="container">
          <div className="business-heading light reveal-slide-up">
            <span>WCI BUSINESS DESK</span>
            <h2>Preparation matters.</h2>
            <p>
              We help you organise the important parts of your business
              visa application before submission.
            </p>
          </div>

          <div className="business-kanban">
            {[
              { tag: "01", title: "Eligibility Review", text: "Review your travel purpose and visa requirements." },
              { tag: "02", title: "Business Documents", text: "Organise company and supporting documentation." },
              { tag: "03", title: "Application Guidance", text: "Receive guidance throughout the application process." },
              { tag: "04", title: "Interview Preparation", text: "Prepare for an interview or appointment when required." },
            ].map((col, i) => (
              <div
                className="business-kanban-col reveal-deal"
                style={{ transitionDelay: `${i * 130}ms` }}
                key={col.tag}
              >
                <span className="business-kanban-tag">{col.tag}</span>
                <h3>{col.title}</h3>
                <p>{col.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        className={`business-journey reveal-section${journeyInView ? " in-view" : ""}`}
        ref={journeyRef}
      >
        <div className="container">
          <div className="business-heading reveal-slide-up">
            <span>APPLICATION FLOW</span>
            <h2>A clear route to your business visit.</h2>
          </div>

          <div className="business-agenda">
            {agenda.map((item, i) => (
              <div
                className={`business-agenda-row ${i % 2 === 0 ? "reveal-slide-left" : "reveal-slide-right"}`}
                style={{ transitionDelay: `${i * 110}ms` }}
                key={item.title}
              >
                <span className="business-agenda-time">{item.time}</span>
                <span className="business-agenda-dot"></span>
                <div className="business-agenda-body">
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section
        className={`business-documents reveal-section${docInView ? " in-view" : ""}`}
        ref={docRef}
      >
        <div className="container">
          <div className="business-contract reveal-contract">

            <div className="business-contract-stamp reveal-stamp">
              <span>APPROVED</span>
              <small>READY TO FILE</small>
            </div>

            <span className="business-contract-label">IMPORTANT DOCUMENTS</span>
            <h2>Keep your file ready.</h2>

            <div className="business-contract-grid">
              {[
                ["Passport", "Valid travel document"],
                ["Invitation Letter", "Business invitation, if applicable"],
                ["Company Documents", "Relevant business evidence"],
                ["Financial Proof", "Evidence of financial support"],
                ["Employment / Business Proof", "Professional background"],
                ["Travel Details", "Itinerary and accommodation"],
              ].map(([label, sub], i) => (
                <div
                  className="reveal-doc-item"
                  style={{ transitionDelay: `${i * 80}ms` }}
                  key={label}
                >
                  <b>{label}</b>
                  <span>{sub}</span>
                </div>
              ))}
            </div>

            <div className="business-contract-signature">
              <div className="business-signature-line"></div>
              <span>Reviewed &amp; prepared by the WCI Business Desk</span>
            </div>

          </div>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section
        className={`business-note reveal-section${noteInView ? " in-view" : ""}`}
        ref={noteRef}
      >
        <div className="container">
          <div className="business-note-inner reveal-pop">
            <div className="business-note-symbol">!</div>
            <div>
              <span>IMPORTANT</span>
              <h2>Business activities must match the conditions of your visa.</h2>
              <p>
                Visa requirements and permitted activities vary by
                destination. Make sure your application accurately
                represents the purpose of your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`business-faq reveal-section${faqInView ? " in-view" : ""}`}
        ref={faqRef}
      >
        <div className="container">
          <div className="business-heading reveal-slide-up">
            <span>FAQ</span>
            <h2>Business visa questions.</h2>
          </div>

          <div className="business-faq-grid">
            {faqs.map((faq, index) => (
              <div
                className={
                  (openFaq === index ? "business-faq-card open" : "business-faq-card") +
                  " reveal-faq-flip"
                }
                style={{ transitionDelay: `${index * 100}ms` }}
                key={faq.question}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="business-faq-card-head">
                  <span>{faq.question}</span>
                  <b>{openFaq === index ? "−" : "+"}</b>
                </div>

                {openFaq === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`business-final reveal-section${ctaInView ? " in-view" : ""}`}
        ref={ctaRef}
      >
        <div className="container">
          <div className="business-card-cta reveal-card-cta">

            <div className="business-card-front">
              <span>WCI</span>
              <strong>Well Career Immigration</strong>
              <small>Business Visa Desk</small>
            </div>

            <div className="business-card-text">
              <span>YOUR NEXT BUSINESS MOVE</span>
              <h2>Take the next step globally.</h2>
              <p>Discuss your business travel plans with our team.</p>

              <Link to="/book-consultation" className="business-main-btn">
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

function StatCell({ stat, inView, delay }) {
  const display = useCountUp(stat.value, inView);

  return (
    <div className="business-stat reveal-stat" style={{ transitionDelay: `${delay}ms` }}>
      <strong>{display}</strong>
      <span>{stat.label}</span>
    </div>
  );
}

export default BusinessVisaPage;