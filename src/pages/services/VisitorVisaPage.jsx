import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    code: "UK",
    name: "United Kingdom",
    text: "Tourism, family visits and short-term travel.",
  },
  {
    code: "CA",
    name: "Canada",
    text: "Explore Canada or visit family and friends.",
  },
  {
    code: "AU",
    name: "Australia",
    text: "Short visits for tourism or eligible purposes.",
  },
  {
    code: "US",
    name: "United States",
    text: "Tourism, family visits and eligible business travel.",
  },
  {
    code: "EU",
    name: "Schengen",
    text: "Short-stay travel across participating European countries.",
  },
];

const faqs = [
  {
    q: "How long does a visitor visa take?",
    a: "Processing times depend on the destination, application type and individual circumstances.",
  },
  {
    q: "Do I need financial proof?",
    a: "You may need to show that you can financially support yourself during your visit.",
  },
  {
    q: "Will I need an interview?",
    a: "Requirements vary by destination and applicant. Biometrics or an interview may be required.",
  },
  {
    q: "Can I apply after a refusal?",
    a: "You can generally apply again, but the reasons behind the previous refusal should be addressed carefully.",
  },
];

// Reusable scroll-reveal hook — works in every browser, no CSS-only limitations
function useReveal(threshold = 0.2) {
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

function VisitorVisaPage() {
  const heroRef = useRef(null);
  const [destination, setDestination] = useState(destinations[0]);
  const [faqOpen, setFaqOpen] = useState(null);

  const [destRef, destInView] = useReveal(0.15);
  const [purposeRef, purposeInView] = useReveal(0.15);
  const [deskRef, deskInView] = useReveal(0.15);
  const [routeRef, routeInView] = useReveal(0.15);
  const [fileRef, fileInView] = useReveal(0.15);
  const [faqRef, faqInView] = useReveal(0.15);
  const [ctaRef, ctaInView] = useReveal(0.25);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const moveHero = (event) => {
      const rect = hero.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      hero.style.setProperty("--mouse-x", `${x * 14}px`);
      hero.style.setProperty("--mouse-y", `${y * 10}px`);
    };

    hero.addEventListener("mousemove", moveHero);

    return () => {
      hero.removeEventListener("mousemove", moveHero);
    };
  }, []);

  return (
    <main className="visitor-page">

      {/* HERO */}
      <section
        ref={heroRef}
        className="visitor-hero"
        style={{
          backgroundImage:
            "url('/images/banners/visitBanner.png')",
        }}
      >
        <div className="visitor-hero-shade"></div>

        <div className="visitor-orbit visitor-orbit-one"></div>
        <div className="visitor-orbit visitor-orbit-two"></div>

        <div className="container visitor-hero-inner">
          <div className="visitor-hero-copy">
            <span>VISITOR VISA</span>

            <h1>
              Travel with
              <br />
             <h1 className="h1class"> confidence.</h1> 
            </h1>

            <p>
              Professional guidance for tourism, family visits and
              short-term travel.
            </p>

            <Link
              to="/book-consultation"
              className="visitor-gold-button"
            >
              Start Your Journey →
            </Link>
          </div>

          <div className="visitor-floating-card">
            <small>YOUR NEXT STOP</small>
            <strong>Anywhere.</strong>
            <div className="floating-line"></div>
            <span>Let WCI help you get there.</span>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        className={`visitor-destination-section reveal-unfold${destInView ? " in-view" : ""}`}
        ref={destRef}
      >
        <div className="container">
          <div className="visitor-small-heading">
            <span>DESTINATION</span>
            <h2>Where are you headed?</h2>
          </div>

          <div className="visitor-destination-wrap">

            <div className="visitor-destination-nav">
              {destinations.map((item, i) => (
                <button
                  type="button"
                  key={item.code}
                  className={
                    destination.code === item.code
                      ? "destination-pill active reveal-pill"
                      : "destination-pill reveal-pill"
                  }
                  style={{ transitionDelay: `${i * 70}ms` }}
                  onClick={() => setDestination(item)}
                >
                  <span>{item.code}</span>
                  {item.name}
                </button>
              ))}
            </div>

            <div className="visitor-destination-info reveal-slide-right">
              <div className="destination-mini-stamp">
                {destination.code}
              </div>

              <div>
                <span>VISITOR VISA</span>
                <h3>{destination.name}</h3>
                <p>{destination.text}</p>
              </div>

              <Link to="/countries ">
                Explore →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section
        className={`visitor-purpose-section reveal-section${purposeInView ? " in-view" : ""}`}
        ref={purposeRef}
      >
        <div className="container">
          <div className="purpose-intro reveal-slide-up">
            <span>WHY ARE YOU TRAVELLING?</span>
            <h2>Your reason matters.</h2>
          </div>

          <div className="purpose-row">
            <div className="purpose-choice reveal-flip" style={{ transitionDelay: "0ms" }}>
              <b>01</b>
              <strong>Holiday</strong>
              <span>Explore somewhere new.</span>
            </div>

            <div className="purpose-choice reveal-flip" style={{ transitionDelay: "90ms" }}>
              <b>02</b>
              <strong>Family</strong>
              <span>Spend time with loved ones.</span>
            </div>

            <div className="purpose-choice reveal-flip" style={{ transitionDelay: "180ms" }}>
              <b>03</b>
              <strong>Business</strong>
              <span>Attend eligible short visits.</span>
            </div>

            <div className="purpose-choice reveal-flip" style={{ transitionDelay: "270ms" }}>
              <b>04</b>
              <strong>Events</strong>
              <span>Attend conferences or events.</span>
            </div>
          </div>
        </div>
      </section>

      {/* WCI DESK */}
      <section
        className={`visitor-desk-section reveal-section${deskInView ? " in-view" : ""}`}
        ref={deskRef}
      >
        <div className="container">
          <div className="visitor-desk">

            <div className="desk-heading reveal-slide-left">
              <span>THE WCI TRAVEL DESK</span>

              <h2>
                We make the
                <br />
                paperwork simpler.
              </h2>

              <p>
                From your first assessment to application submission,
                we help you prepare with clarity.
              </p>
            </div>

            <div className="desk-services">
              <div className="reveal-wipe" style={{ transitionDelay: "0ms" }}>
                <span>Eligibility</span>
                <p>Understand your visa requirements.</p>
              </div>

              <div className="reveal-wipe" style={{ transitionDelay: "90ms" }}>
                <span>Documents</span>
                <p>Organise your supporting evidence.</p>
              </div>

              <div className="reveal-wipe" style={{ transitionDelay: "180ms" }}>
                <span>Application</span>
                <p>Get guidance through the process.</p>
              </div>

              <div className="reveal-wipe" style={{ transitionDelay: "270ms" }}>
                <span>Interview</span>
                <p>Prepare when an interview is required.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        className={`visitor-route-section reveal-section${routeInView ? " in-view" : ""}`}
        ref={routeRef}
      >
        <div className="container">
          <div className="visitor-small-heading">
            <span>THE JOURNEY</span>
            <h2>One step at a time.</h2>
          </div>

          <div className="visitor-route">

            <div className="route-path reveal-path-draw"></div>

            <div className="route-stop reveal-stop-bounce" style={{ transitionDelay: "0ms" }}>
              <div>01</div>
              <span>CHECK</span>
              <p>Eligibility</p>
            </div>

            <div className="route-stop reveal-stop-bounce" style={{ transitionDelay: "100ms" }}>
              <div>02</div>
              <span>PREPARE</span>
              <p>Documents</p>
            </div>

            <div className="route-stop reveal-stop-bounce" style={{ transitionDelay: "200ms" }}>
              <div>03</div>
              <span>APPLY</span>
              <p>Application</p>
            </div>

            <div className="route-stop reveal-stop-bounce" style={{ transitionDelay: "300ms" }}>
              <div>04</div>
              <span>COMPLETE</span>
              <p>Biometrics</p>
            </div>

            <div className="route-stop reveal-stop-bounce" style={{ transitionDelay: "400ms" }}>
              <div>05</div>
              <span>TRAVEL</span>
              <p>Decision</p>
            </div>

          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section
        className={`visitor-file-section reveal-section${fileInView ? " in-view" : ""}`}
        ref={fileRef}
      >
        <div className="container">
          <div className="visitor-file reveal-folder">

            <div className="file-cover">
              <div className="file-circle">WCI</div>
              <span>TRAVEL FILE</span>
              <strong>VISITOR VISA</strong>
              <small>Prepared with care.</small>
            </div>

            <div className="file-content">
              <span>KEEP THESE READY</span>

              <h2>Your essential documents.</h2>

              <div className="document-list">
                <div className="reveal-doc-row" style={{ transitionDelay: "0ms" }}>Passport</div>
                <div className="reveal-doc-row" style={{ transitionDelay: "60ms" }}>Financial evidence</div>
                <div className="reveal-doc-row" style={{ transitionDelay: "120ms" }}>Employment / business proof</div>
                <div className="reveal-doc-row" style={{ transitionDelay: "180ms" }}>Travel itinerary</div>
                <div className="reveal-doc-row" style={{ transitionDelay: "240ms" }}>Accommodation details</div>
                <div className="reveal-doc-row" style={{ transitionDelay: "300ms" }}>Invitation letter, if applicable</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`visitor-question-section reveal-section${faqInView ? " in-view" : ""}`}
        ref={faqRef}
      >
        <div className="container">
          <div className="visitor-question-layout">

            <div className="reveal-slide-left">
              <span>QUESTIONS</span>
              <h2>Before you travel.</h2>
            </div>

            <div className="visitor-faq">
              {faqs.map((faq, index) => (
                <div
                  className={
                    faqOpen === index
                      ? "visitor-faq-item open reveal-faq-item"
                      : "visitor-faq-item reveal-faq-item"
                  }
                  style={{ transitionDelay: `${index * 80}ms` }}
                  key={faq.q}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setFaqOpen(
                        faqOpen === index ? null : index
                      )
                    }
                  >
                    <span>{faq.q}</span>
                    <b>{faqOpen === index ? "−" : "+"}</b>
                  </button>

                  {faqOpen === index && <p>{faq.a}</p>}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`visitor-end reveal-section${ctaInView ? " in-view" : ""}`}
        ref={ctaRef}
      >
        <div className="container">
          <div className="visitor-end-inner reveal-pop">
            <span>READY WHEN YOU ARE</span>

            <h2>Where will you go next?</h2>

            <p>
              Start with a consultation and understand your visitor
              visa options.
            </p>

            <Link
              to="/contact"
              className="visitor-gold-button"
            >
              Book Consultation →
            </Link>

            <small>
              Visa decisions are made by the relevant immigration
              authorities. WCI does not guarantee visa approval.
            </small>
          </div>
        </div>
      </section>

    </main>
  );
}

export default VisitorVisaPage;