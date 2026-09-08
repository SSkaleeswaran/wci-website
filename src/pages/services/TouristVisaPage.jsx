import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/tourist-visa.css";

const ASSET = "/images/tourist";

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

function TouristVisaPage() {
  const [benefitsRef, benefitsInView] = useReveal(0.1);
  const [journeyRef, journeyInView] = useReveal(0.1);
  const [documentsRef, documentsInView] = useReveal(0.1);
  const [ctaRef, ctaInView] = useReveal(0.25);

  const journeyPathRef = useRef(null);
  const journeyNodeRefs = useRef([]);
  const [journeyD, setJourneyD] = useState("");
  const [journeyViewBox, setJourneyViewBox] = useState("0 0 100 100");

  useEffect(() => {
    const computePath = () => {
      const container = journeyPathRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const points = journeyNodeRefs.current
        .filter(Boolean)
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            x: r.left + r.width / 2 - rect.left,
            y: r.top + r.height / 2 - rect.top,
          };
        });

      if (points.length < 2) return;

      let d = `M${points[0].x},${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const midY = (prev.y + curr.y) / 2;
        d += ` C${prev.x},${midY} ${curr.x},${midY} ${curr.x},${curr.y}`;
      }

      setJourneyD(d);
      setJourneyViewBox(`0 0 ${rect.width} ${rect.height}`);
    };

    computePath();
    const raf = requestAnimationFrame(computePath);
    const settleTimer = setTimeout(computePath, 700);
    window.addEventListener("resize", computePath);

    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(computePath);
      ro.observe(journeyPathRef.current);
    }

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settleTimer);
      window.removeEventListener("resize", computePath);
      if (ro) ro.disconnect();
    };
  }, [journeyInView]);

  return (
    <main className="tourist-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tourist-hero">

        <div className="tourist-hero-image">
          <img
            src={'/images/banners/tourBanner.png'}
            alt="Tourist travelling abroad"
          />
        </div>

        <div className="tourist-hero-overlay"></div>

        <div className="container tourist-hero-container">

          <div className="tourist-hero-content">

            <span className="tourist-hero-label">
              TOURIST VISA 
              {/* <span className="hero-plane">✈</span> */}
            </span>

            <h1>
              Explore the world.
              <span>Create memories.</span>
            </h1>

            <div className="tourist-accent-line"></div>

            <p>
              Your dream destination is closer than you think.
          
            </p>

            <Link to="/contact" className="tourist-primary-btn">
              Book Consultation
              <span><span>→</span></span>
            </Link>

          </div>

          {/* Boarding-pass floating widget */}
          <div className="boarding-pass" aria-hidden="true">
            <div className="boarding-pass-row">
              <span className="bp-label">Passenger</span>
              <span className="bp-value">You</span>
            </div>
            <div className="boarding-pass-row">
              <span className="bp-label">From</span>
              <span className="bp-value">Application</span>
            </div>
            <div className="bp-plane-track">
              <span className="bp-dot"></span>
              <span className="bp-plane">✈</span>
              <span className="bp-dot end"></span>
            </div>
            <div className="boarding-pass-row">
              <span className="bp-label">To</span>
              <span className="bp-value">Approved</span>
            </div>
            <div className="bp-barcode"></div>
          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS — ticket strip
      ===================================================== */}

      <section
        className={`tourist-benefits${benefitsInView ? " in-view" : ""}`}
        ref={benefitsRef}
      >

        <div className="container">

          <div className="ticket-strip">

            <span className="ticket-notch left"></span>
            <span className="ticket-notch right"></span>

            {benefits.map((benefit, i) => (
              <div
                className="ticket-item"
                key={benefit.title}
                style={{ transitionDelay: `${i * 100}ms` }}
              >

                <div className="ticket-icon">
                  <img src={benefit.icon} alt="" />
                </div>

                <div className="ticket-text">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VISA JOURNEY — curved flight-path timeline
      ===================================================== */}

      <section
        className={`tourist-journey${journeyInView ? " in-view" : ""}`}
        ref={journeyRef}
      >

        <div className="container">

          <div className="journey-heading">

            <span className="tourist-section-label01">VISA JOURNEY</span>

            <h2>
              From planning <span>to exploring.</span>
            </h2>

            <div className="tourist-accent-line center-line"></div>

            <p>
              We guide you through every step of your tourist visa
              application with clarity and care.
            </p>

          </div>

          <div className="journey-timeline" ref={journeyPathRef}>

            <svg
              className="journey-curve"
              viewBox={journeyViewBox}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="journeyGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--gold)" />
                  <stop offset="50%" stopColor="var(--navy)" />
                  <stop offset="100%" stopColor="var(--gold)" />
                </linearGradient>
              </defs>
              <path
                pathLength="1"
                d={journeyD}
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset: journeyInView ? 0 : 1,
                }}
              />
            </svg>

            {processSteps.map((step, i) => (
              <div
                className={`journey-stop stop-${i}`}
                key={step.number}
                style={{ transitionDelay: `${i * 150}ms` }}
              >

                <span className="journey-ghost">{step.number}</span>

                <div
                  className="journey-node"
                  ref={(el) => (journeyNodeRefs.current[i] = el)}
                >
                  <img src={step.icon} alt="" />
                </div>

                <div className="journey-stub">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

              </div>
            ))}

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

          <div className="checklist-card">

            <div className="checklist-side">

              <div className="checklist-passport-badge">
                <img src={`${ASSET}/passport-travel-decoration.png`} alt="" />
              </div>

              <span className="tourist-section-label">
                DOCUMENT CHECKLIST
              </span>

              <h2>Pack these before you apply</h2>

              <div className="tourist-accent-line"></div>

              {/* <p>
                Six things to have ready. We double-check every one
                before your application goes anywhere.
              </p> */}
            </div>

            <div className="checklist-list">

              {documents.map((document, i) => (

                <div
                  className="checklist-row"
                  key={document.title}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >

                  <span className="checklist-tick">✓</span>

                  <div className="checklist-icon">
                    <img src={document.icon} alt="" />
                  </div>

                  <div className="checklist-content">
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
          FINAL CTA — boarding pass banner
      ===================================================== */}

      <section
        className={`tourist-final-cta${ctaInView ? " in-view" : ""}`}
        ref={ctaRef}
      >

        <div className="container">

          <div className="cta-pass">

            <div className="cta-pass-main">
              <span className="cta-pass-label">Next stop</span>
              <h2>Ready for your next journey?</h2>
              <p>Let WCI take care of the visa — you just pack your bags.</p>
            </div>

            <div className="cta-pass-divider">
              <span className="cta-notch top"></span>
              {Array.from({ length: 14 }).map((_, i) => (
                <span className="cta-dash" key={i}></span>
              ))}
              <span className="cta-notch bottom"></span>
            </div>

            <div className="cta-pass-stub">
              <span className="cta-pass-plane">✈</span>
              <Link to="/contact" className="tourist-cta-button">
                Book Consultation
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default TouristVisaPage;