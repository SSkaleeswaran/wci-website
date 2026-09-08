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

function VisitorVisaPage() {
  const heroRef = useRef(null);
  const [destination, setDestination] = useState(destinations[0]);
  const [faqOpen, setFaqOpen] = useState(null);

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
            "url('/images/banners/bannerVacation.jpeg')",
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
              confidence.
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
      <section className="visitor-destination-section">
        <div className="container">
          <div className="visitor-small-heading">
            <span>DESTINATION</span>
            <h2>Where are you headed?</h2>
          </div>

          <div className="visitor-destination-wrap">

            <div className="visitor-destination-nav">
              {destinations.map((item) => (
                <button
                  type="button"
                  key={item.code}
                  className={
                    destination.code === item.code
                      ? "destination-pill active"
                      : "destination-pill"
                  }
                  onClick={() => setDestination(item)}
                >
                  <span>{item.code}</span>
                  {item.name}
                </button>
              ))}
            </div>

            <div className="visitor-destination-info">
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
      <section className="visitor-purpose-section">
        <div className="container">
          <div className="purpose-intro">
            <span>WHY ARE YOU TRAVELLING?</span>
            <h2>Your reason matters.</h2>
          </div>

          <div className="purpose-row">
            <div className="purpose-choice">
              <b>01</b>
              <strong>Holiday</strong>
              <span>Explore somewhere new.</span>
            </div>

            <div className="purpose-choice">
              <b>02</b>
              <strong>Family</strong>
              <span>Spend time with loved ones.</span>
            </div>

            <div className="purpose-choice">
              <b>03</b>
              <strong>Business</strong>
              <span>Attend eligible short visits.</span>
            </div>

            <div className="purpose-choice">
              <b>04</b>
              <strong>Events</strong>
              <span>Attend conferences or events.</span>
            </div>
          </div>
        </div>
      </section>

      {/* WCI DESK */}
      <section className="visitor-desk-section">
        <div className="container">
          <div className="visitor-desk">

            <div className="desk-heading">
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
              <div>
                <span>Eligibility</span>
                <p>Understand your visa requirements.</p>
              </div>

              <div>
                <span>Documents</span>
                <p>Organise your supporting evidence.</p>
              </div>

              <div>
                <span>Application</span>
                <p>Get guidance through the process.</p>
              </div>

              <div>
                <span>Interview</span>
                <p>Prepare when an interview is required.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="visitor-route-section">
        <div className="container">
          <div className="visitor-small-heading">
            <span>THE JOURNEY</span>
            <h2>One step at a time.</h2>
          </div>

          <div className="visitor-route">

            <div className="route-path"></div>

            <div className="route-stop">
              <div>01</div>
              <span>CHECK</span>
              <p>Eligibility</p>
            </div>

            <div className="route-stop">
              <div>02</div>
              <span>PREPARE</span>
              <p>Documents</p>
            </div>

            <div className="route-stop">
              <div>03</div>
              <span>APPLY</span>
              <p>Application</p>
            </div>

            <div className="route-stop">
              <div>04</div>
              <span>COMPLETE</span>
              <p>Biometrics</p>
            </div>

            <div className="route-stop">
              <div>05</div>
              <span>TRAVEL</span>
              <p>Decision</p>
            </div>

          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="visitor-file-section">
        <div className="container">
          <div className="visitor-file">

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
                <div>Passport</div>
                <div>Financial evidence</div>
                <div>Employment / business proof</div>
                <div>Travel itinerary</div>
                <div>Accommodation details</div>
                <div>Invitation letter, if applicable</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="visitor-question-section">
        <div className="container">
          <div className="visitor-question-layout">

            <div>
              <span>QUESTIONS</span>
              <h2>Before you travel.</h2>
            </div>

            <div className="visitor-faq">
              {faqs.map((faq, index) => (
                <div
                  className={
                    faqOpen === index
                      ? "visitor-faq-item open"
                      : "visitor-faq-item"
                  }
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
      <section className="visitor-end">
        <div className="container">
          <div className="visitor-end-inner">
            <span>READY WHEN YOU ARE</span>

            <h2>Where will you go next?</h2>

            <p>
              Start with a consultation and understand your visitor
              visa options.
            </p>

            <Link
              to="/book-consultation"
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