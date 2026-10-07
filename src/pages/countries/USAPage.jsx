import React from "react";
import { Link } from "react-router-dom";


const destinations = [
  {
    number: "01",
    title: "New York City",
    subtitle: "The city that never sleeps",
    image: "/images/countries/usa-newyork.jpg",
  },
  {
    number: "02",
    title: "Los Angeles",
    subtitle: "Entertainment & California life",
    image: "/images/countries/usa-losangeles.jpg",
  },
  {
    number: "03",
    title: "Las Vegas",
    subtitle: "Lights, entertainment & experiences",
    image: "/images/countries/usa-lasvegas.jpg",
  },
  {
    number: "04",
    title: "San Francisco",
    subtitle: "Culture, technology & iconic views",
    image: "/images/countries/usa-sanfrancisco.jpg",
  },
  {
    number: "05",
    title: "Washington D.C.",
    subtitle: "History, museums & landmarks",
    image: "/images/countries/usa-washington.jpg",
  },
  {
    number: "06",
    title: "Miami",
    subtitle: "Beaches, lifestyle & city energy",
    image: "/images/countries/usa-miami.jpg",
  },
];

const visaServices = [
  {
    number: "01",
    title: "Tourist Visa",
    text: "For travellers visiting the United States for tourism, holidays, sightseeing and personal travel.",
  },
  {
    number: "02",
    title: "Business Visa",
    text: "For eligible business-related visits, meetings, conferences and professional activities.",
  },
  {
    number: "03",
    title: "Visitor Visa Guidance",
    text: "Structured assistance with documentation, application preparation and interview readiness.",
  },
  {
    number: "04",
    title: "Study Visa Guidance",
    text: "Guidance for students planning to pursue eligible academic opportunities in the United States.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    text: "Understand your travel purpose and identify the appropriate visa pathway.",
  },
  {
    number: "02",
    title: "Documentation",
    text: "Prepare and organize the documents required for your application.",
  },
  {
    number: "03",
    title: "Application",
    text: "Complete the required application process with careful attention to detail.",
  },
  {
    number: "04",
    title: "Interview Preparation",
    text: "Prepare for the interview with guidance focused on clarity and consistency.",
  },
];

const faqs = [
  {
    question: "Which USA visas does WCI assist with?",
    answer:
      "WCI provides guidance for tourist, business, visitor and study visa applications, depending on your individual requirements.",
  },
  {
    question: "Can WCI help me prepare for a visa interview?",
    answer:
      "Yes. WCI can help applicants understand the interview process and prepare their documentation and responses.",
  },
  {
    question: "How early should I start my USA visa process?",
    answer:
      "It is generally better to begin well before your intended travel date so you have sufficient time for documentation, appointments and other application steps.",
  },
  {
    question: "Does WCI guarantee visa approval?",
    answer:
      "No. Visa decisions are made by the relevant authorities. WCI provides professional application guidance and preparation support.",
  },
];

function USAPage() {
  return (
    <main className="usa-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="usa-hero"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,20,45,.94) 0%, rgba(4,20,45,.76) 42%, rgba(4,20,45,.18) 82%), url('/images/countries/usa-statue.avif')",
        }}
      >
        <div className="usa-hero-grid"></div>

        <div className="usa-hero-content">
          <div className="usa-eyebrow" data-aos="fade-up">
            WCI · UNITED STATES
          </div>

          <h1 data-aos="fade-up" data-aos-delay="100">
            America,
            <br />
            <span>within reach.</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200">
            Explore opportunities, iconic destinations and unforgettable
            experiences across the United States with professional visa
            guidance from WCI.
          </p>

          <div
            className="usa-hero-actions"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link to="/contact" className="usa-primary-btn">
              Start Your Journey
              <span>↗</span>
            </Link>

            <a href="#usa-overview" className="usa-text-link">
              Explore USA
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="usa-hero-bottom">
          <span>01 — UNITED STATES</span>
          <span>TRAVEL · BUSINESS · STUDY</span>
        </div>
      </section>

      {/* =====================================================
          INTRO / OVERVIEW
      ===================================================== */}
      <section id="usa-overview" className="usa-overview">
        <div className="usa-section-number">01</div>

        <div className="usa-overview-inner">
          <div
            className="usa-overview-label"
            data-aos="fade-right"
          >
            ABOUT THE COUNTRY
          </div>

          <div className="usa-overview-content">
            <h2 data-aos="fade-up">
              A country built
              <br />
              on <em>possibility.</em>
            </h2>

            <div className="usa-overview-text">
              <p data-aos="fade-up" data-aos-delay="100">
                The United States is one of the world's most diverse travel
                and business destinations, combining major global cities,
                renowned universities, cultural landmarks and extraordinary
                landscapes.
              </p>

              <p data-aos="fade-up" data-aos-delay="200">
                Whether your journey is for tourism, business or education,
                careful preparation is an important part of the visa process.
                WCI helps you approach your application with structured
                guidance and documentation support.
              </p>
            </div>
          </div>
        </div>

        <div className="usa-facts" data-aos="fade-up">
          <div className="usa-fact">
            <strong>50</strong>
            <span>States</span>
          </div>

          <div className="usa-fact">
            <strong>01</strong>
            <span>Global destination</span>
          </div>

          <div className="usa-fact">
            <strong>∞</strong>
            <span>Places to explore</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY USA
      ===================================================== */}
      <section className="usa-why">
        <div className="usa-why-image-wrap" data-aos="fade-right">
          <img
            src="/images/countries/usa-statue.avif"
            alt="United States landmark"
          />

          <div className="usa-image-caption">
            <span>THE UNITED STATES</span>
            <span>TRAVEL WITH PURPOSE</span>
          </div>
        </div>

        <div className="usa-why-content">
          <span className="usa-small-label" data-aos="fade-up">
            WHY VISIT
          </span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            More than
            <br />
            <em>a destination.</em>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200">
            From the energy of New York to the landscapes of the West Coast,
            the United States offers an enormous range of experiences.
          </p>

          <div className="usa-highlight-list">
            <div data-aos="fade-up" data-aos-delay="250">
              <span>01</span>
              <div>
                <h3>Iconic Cities</h3>
                <p>
                  Experience globally recognized cities, architecture,
                  culture and entertainment.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <span>02</span>
              <div>
                <h3>World-Class Education</h3>
                <p>
                  Discover a wide range of academic institutions and study
                  opportunities.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="350">
              <span>03</span>
              <div>
                <h3>Business & Innovation</h3>
                <p>
                  A major global centre for entrepreneurship, technology and
                  international business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISA SERVICES
      ===================================================== */}
      <section className="usa-visa-section">
        <div className="usa-section-heading">
          <div>
            <span className="usa-small-label">WCI VISA SERVICES</span>

            <h2 data-aos="fade-up">
              Your purpose.
              <br />
              <em>Your pathway.</em>
            </h2>
          </div>

          <p data-aos="fade-left">
            Every application has a different purpose. Our role is to help you
            understand the process, prepare correctly and move forward with
            greater confidence.
          </p>
        </div>

        <div className="usa-visa-grid">
          {visaServices.map((visa, index) => (
            <div
              className="usa-visa-card"
              key={visa.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="usa-card-number">{visa.number}</span>

              <div className="usa-card-arrow">↗</div>

              <h3>{visa.title}</h3>

              <p>{visa.text}</p>

              <div className="usa-card-line"></div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          DESTINATIONS
      ===================================================== */}
      <section className="usa-destinations">
        <div className="usa-destination-header">
          <div>
            <span className="usa-small-label">PLACES TO EXPLORE</span>

            <h2 data-aos="fade-up">
              Six ways to
              <br />
              experience <em>America.</em>
            </h2>
          </div>

          <p data-aos="fade-left">
            A small selection from a country filled with cities, landscapes,
            culture and experiences.
          </p>
        </div>

        <div className="usa-destination-grid">
          {destinations.map((destination, index) => (
            <article
              className={`usa-destination-card ${
                index % 3 === 1 ? "usa-destination-tall" : ""
              }`}
              key={destination.number}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <img
                src={destination.image}
                alt={destination.title}
              />

              <div className="usa-destination-overlay"></div>

              <div className="usa-destination-info">
                <span>{destination.number}</span>

                <div>
                  <h3>{destination.title}</h3>
                  <p>{destination.subtitle}</p>
                </div>

                <span className="usa-destination-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          TRAVEL ARTICLE
      ===================================================== */}
      <section className="usa-story">
        <div className="usa-story-number">03</div>

        <div className="usa-story-inner">
          <div className="usa-story-meta" data-aos="fade-right">
            <span>WCI TRAVEL GUIDE</span>
            <small>USA / FIRST-TIME VISIT</small>
          </div>

          <article className="usa-story-content">
            <h2 data-aos="fade-up">
              Planning your
              <br />
              first trip to
              <br />
              <em>the USA.</em>
            </h2>

            <p data-aos="fade-up" data-aos-delay="100">
              A successful trip starts before you board the aircraft. Your
              destination, travel purpose, financial planning, accommodation
              and supporting documentation all contribute to a well-prepared
              journey.
            </p>

            <p data-aos="fade-up" data-aos-delay="200">
              If you are travelling for tourism, consider building your
              itinerary around the cities and experiences that matter most to
              you. For business travel, make sure your purpose and supporting
              documents clearly reflect the nature of your visit.
            </p>

            <Link
              to="/contact"
              className="usa-story-link"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Discuss Your Travel Plan
              <span>↗</span>
            </Link>
          </article>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="usa-process">
        <div className="usa-process-heading">
          <span className="usa-small-label">THE WCI PROCESS</span>

          <h2 data-aos="fade-up">
            From intention
            <br />
            to <em>application.</em>
          </h2>
        </div>

        <div className="usa-process-line">
          {processSteps.map((step, index) => (
            <div
              className="usa-process-step"
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="usa-process-top">
                <span>{step.number}</span>
                <div></div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          DOCUMENTS
      ===================================================== */}
      <section className="usa-documents">
        <div className="usa-documents-inner">
          <div>
            <span className="usa-small-label">PREPARATION</span>

            <h2 data-aos="fade-up">
              Prepare with
              <br />
              <em>clarity.</em>
            </h2>

            <p data-aos="fade-up" data-aos-delay="100">
              Requirements can vary depending on the visa category and your
              individual circumstances. Typical preparation may include:
            </p>
          </div>

          <div className="usa-document-list">
            <div data-aos="fade-left">
              <span>01</span>
              <strong>Valid Passport</strong>
            </div>

            <div data-aos="fade-left" data-aos-delay="100">
              <span>02</span>
              <strong>Application Information</strong>
            </div>

            <div data-aos="fade-left" data-aos-delay="200">
              <span>03</span>
              <strong>Financial Documents</strong>
            </div>

            <div data-aos="fade-left" data-aos-delay="300">
              <span>04</span>
              <strong>Travel / Purpose Documents</strong>
            </div>

            <div data-aos="fade-left" data-aos-delay="400">
              <span>05</span>
              <strong>Supporting Documents</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="usa-faq">
        <div className="usa-faq-heading">
          <span className="usa-small-label">QUESTIONS</span>

          <h2 data-aos="fade-up">
            Before you
            <br />
            <em>take off.</em>
          </h2>
        </div>

        <div className="usa-faq-list">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <summary>
                <span>0{index + 1}</span>
                <strong>{faq.question}</strong>
                <i>+</i>
              </summary>

              <div className="usa-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        className="usa-final-cta"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,20,45,.95), rgba(4,20,45,.72)), url('/images/countries/usa-statue.avif')",
        }}
      >
        <div className="usa-final-orbit"></div>

        <div className="usa-final-content">
          <span data-aos="fade-up">WELL CAREER IMMIGRATION</span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            Your American
            <br />
            journey starts
            <br />
            <em>with a plan.</em>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200">
            Tell us about your travel, business or study plans and let us help
            you understand your next step.
          </p>

          <Link
            to="/contact"
            className="usa-final-btn"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Talk to WCI
            <span>↗</span>
          </Link>
        </div>
      </section>

    </main>
  );
}

export default USAPage;