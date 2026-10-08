import React from "react";
import { Link } from "react-router-dom";
import "../../styles/uk-page.css";

const destinations = [
  {
    number: "01",
    title: "London",
    subtitle: "History, culture & modern life",
    image: "/images/countryDetailIMG/london.jpg",
  },
  {
    number: "02",
    title: "Edinburgh",
    subtitle: "Castles, heritage & Scottish character",
    image: "/images/countryDetailIMG/Edinburgh.jpg",
  },
  {
    number: "03",
    title: "Manchester",
    subtitle: "Sport, music & city culture",
    image: "/images/countryDetailIMG/Manchester.jpg",
  },
  {
    number: "04",
    title: "Bath",
    subtitle: "Roman history & elegant architecture",
    image: "/images/countryDetailIMG/bathUSA.jpg",
  },
  {
    number: "05",
    title: "Oxford",
    subtitle: "Academic heritage & architecture",
    image: "/images/countryDetailIMG/Oxford.jpg",
  },
  {
    number: "06",
    title: "Scotland",
    subtitle: "Highlands, landscapes & tradition",
    image: "/images/countryDetailIMG/Scotland.jpg",
  },
];

const visaServices = [
  {
    number: "01",
    title: "Visitor Visa",
    text: "Guidance for eligible visitors travelling to the UK for holidays, family visits and other permitted purposes.",
  },
  {
    number: "02",
    title: "Tourist Visa",
    text: "Support with preparation for travellers planning to discover Britain's cities, heritage and attractions.",
  },
  {
    number: "03",
    title: "Business Visa",
    text: "Application guidance for eligible business-related visits, meetings and professional activities.",
  },
  {
    number: "04",
    title: "Study Visa",
    text: "Guidance for students planning to pursue eligible education opportunities in the United Kingdom.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "We begin by understanding your purpose of travel and individual circumstances.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Your supporting information and documentation are organized carefully.",
  },
  {
    number: "03",
    title: "Apply",
    text: "We guide you through the relevant application process and required steps.",
  },
  {
    number: "04",
    title: "Prepare Further",
    text: "Where applicable, we help you understand the next stages and prepare accordingly.",
  },
];

const faqs = [
  {
    question: "Which UK visas does WCI assist with?",
    answer:
      "WCI provides guidance for visitor, tourist, business and study visa applications based on the applicant's individual circumstances.",
  },
  {
    question: "Can I visit family in the UK?",
    answer:
      "Eligible visitors may be able to travel to the UK for permitted family visits. Your circumstances and intended activities determine the appropriate route.",
  },
  {
    question: "Can WCI help with UK study applications?",
    answer:
      "Yes. WCI provides study visa guidance, including application preparation and documentation support.",
  },
  {
    question: "Does WCI guarantee visa approval?",
    answer:
      "No. Visa decisions are made by the relevant authorities. WCI provides professional preparation and application guidance.",
  },
];

function UKPage() {
  return (
    <main className="uk-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="uk-hero"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,25,54,.95) 0%, rgba(5,25,54,.80) 42%, rgba(5,25,54,.20) 82%), url('/images/countries/london-clock.jpg')",
        }}
      >
        <div className="uk-hero-pattern"></div>

        <div className="uk-hero-content">
          <div className="uk-hero-top" data-aos="fade-down">
            <span>WCI</span>
            <span>UNITED KINGDOM</span>
          </div>

          <div className="uk-hero-main">
            <span
              className="uk-eyebrow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              TRAVEL · BUSINESS · STUDY
            </span>

            <h1 data-aos="fade-up" data-aos-delay="180">
              Discover
              <br />
              <em>Britain.</em>
            </h1>

            <p data-aos="fade-up" data-aos-delay="280">
              From historic streets and royal landmarks to world-class
              universities and international business centres, the United
              Kingdom offers a journey shaped by history and opportunity.
            </p>

            <div
              className="uk-hero-actions"
              data-aos="fade-up"
              data-aos-delay="380"
            >
              <Link to="/contact" className="uk-gold-button">
                Plan Your Journey
                <span>↗</span>
              </Link>

              <a href="#uk-story" className="uk-hero-scroll">
                Scroll to explore
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="uk-hero-stamp" data-aos="zoom-in" data-aos-delay="500">
          <span>GB</span>
          <small>WELL CAREER<br />IMMIGRATION</small>
        </div>

        <div className="uk-hero-footer">
          <span>01 / UNITED KINGDOM</span>
          <span>EST. JOURNEY</span>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section id="uk-story" className="uk-intro">
        <div className="uk-intro-number">01</div>

        <div className="uk-intro-layout">
          <div className="uk-intro-side">
            <span>THE UNITED KINGDOM</span>
            <div className="uk-vertical-line"></div>
            <small>AN ISLAND OF STORIES</small>
          </div>

          <div className="uk-intro-content">
            <h2 data-aos="fade-up">
              Where history
              <br />
              meets <em>possibility.</em>
            </h2>

            <div className="uk-intro-copy">
              <p data-aos="fade-up" data-aos-delay="100">
                The United Kingdom combines centuries of history with modern
                cities, internationally recognised universities, cultural
                landmarks and a diverse range of travel experiences.
              </p>

              <p data-aos="fade-up" data-aos-delay="180">
                Whether your purpose is tourism, visiting family, business or
                education, preparation is an important part of your journey.
                WCI helps you approach your visa application with a clear and
                organized plan.
              </p>
            </div>
          </div>
        </div>

        <div className="uk-intro-facts" data-aos="fade-up">
          <div>
            <strong>01</strong>
            <span>Historic destination</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Cultural experiences</span>
          </div>

          <div>
            <strong>UK</strong>
            <span>Global education hub</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL IMAGE SECTION
      ===================================================== */}
      <section className="uk-editorial">
        <div className="uk-editorial-image" data-aos="fade-right">
          <img
            src="/images/countries/london-clock.jpg"
            alt="London landmark"
          />

          <div className="uk-editorial-image-label">
            <span>LONDON</span>
            <span>UNITED KINGDOM</span>
          </div>
        </div>

        <div className="uk-editorial-copy">
          <span className="uk-section-label" data-aos="fade-up">
            WHY THE UK
          </span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            A journey
            <br />
            worth <em>remembering.</em>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200">
            The UK offers much more than one destination. London provides
            global-city energy, while cities and regions across England,
            Scotland, Wales and Northern Ireland offer distinct landscapes,
            traditions and experiences.
          </p>

          <div className="uk-editorial-points">
            <div data-aos="fade-up" data-aos-delay="250">
              <span>01</span>
              <div>
                <h3>Culture</h3>
                <p>
                  Museums, architecture, theatre, music and centuries of
                  cultural heritage.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="320">
              <span>02</span>
              <div>
                <h3>Education</h3>
                <p>
                  A globally recognised destination for international
                  students and academic institutions.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="390">
              <span>03</span>
              <div>
                <h3>Business</h3>
                <p>
                  London and other major cities provide important
                  international business environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISA SERVICES
      ===================================================== */}
      <section className="uk-services">
        <div className="uk-services-heading">
          <span className="uk-section-label">WCI VISA SERVICES</span>

          <h2 data-aos="fade-up">
            Choose your
            <br />
            <em>reason.</em>
          </h2>

          <p data-aos="fade-left">
            Your intended purpose determines the relevant visa route. WCI
            helps you understand the process and prepare your application
            according to your circumstances.
          </p>
        </div>

        <div className="uk-services-list">
          {visaServices.map((service, index) => (
            <div
              className="uk-service-row"
              key={service.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="uk-service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <span className="uk-service-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          DESTINATIONS
      ===================================================== */}
      <section className="uk-destinations">
        <div className="uk-destination-heading">
          <div>
            <span className="uk-section-label">PLACES TO EXPLORE</span>

            <h2 data-aos="fade-up">
              Six places.
              <br />
              Endless <em>stories.</em>
            </h2>
          </div>

          <p data-aos="fade-left">
            Start with the places that define the UK, then discover the
            experiences beyond the famous landmarks.
          </p>
        </div>

        <div className="uk-destination-grid">
          {destinations.map((destination, index) => (
            <article
              className="uk-destination-card"
              key={destination.number}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <img
                src={destination.image}
                alt={destination.title}
              />

              <div className="uk-destination-shade"></div>

              <div className="uk-destination-top">
                <span>{destination.number}</span>
                <span>EXPLORE</span>
              </div>

              <div className="uk-destination-bottom">
                <div>
                  <h3>{destination.title}</h3>
                  <p>{destination.subtitle}</p>
                </div>

                <span className="uk-round-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          TRAVEL ARTICLE
      ===================================================== */}
      <section className="uk-article">
        <div className="uk-article-decor">UK</div>

        <div className="uk-article-inner">
          <div className="uk-article-meta">
            <span>WCI TRAVEL JOURNAL</span>
            <small>GUIDE 01 / UK</small>
          </div>

          <article className="uk-article-content">
            <span className="uk-article-kicker">
              A FIRST-TIME VISITOR'S GUIDE
            </span>

            <h2 data-aos="fade-up">
              Your first
              <br />
              chapter in
              <br />
              <em>Britain.</em>
            </h2>

            <p data-aos="fade-up" data-aos-delay="100">
              A first trip to the UK can combine major landmarks with smaller
              experiences that reveal the character of each destination.
              Planning your route in advance helps you make the most of your
              time.
            </p>

            <p data-aos="fade-up" data-aos-delay="180">
              London is an obvious starting point, but travellers can also
              explore historic university cities, coastal towns, countryside
              landscapes and destinations across Scotland and Wales.
            </p>

            <Link
              to="/contact"
              className="uk-article-button"
              data-aos="fade-up"
              data-aos-delay="260"
            >
              Plan With WCI
              <span>↗</span>
            </Link>
          </article>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="uk-process">
        <div className="uk-process-heading">
          <span className="uk-section-label">THE WCI METHOD</span>

          <h2 data-aos="fade-up">
            Clear steps.
            <br />
            <em>Less confusion.</em>
          </h2>
        </div>

        <div className="uk-process-track">
          {processSteps.map((step, index) => (
            <div
              className="uk-process-card"
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="uk-process-number">
                {step.number}
              </div>

              <div className="uk-process-dot"></div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          DOCUMENTS
      ===================================================== */}
      <section className="uk-documents">
        <div className="uk-documents-inner">
          <div className="uk-documents-heading">
            <span className="uk-section-label">DOCUMENT PREPARATION</span>

            <h2 data-aos="fade-up">
              Details
              <br />
              <em>matter.</em>
            </h2>

            <p data-aos="fade-up" data-aos-delay="100">
              The exact requirements depend on your visa route and personal
              circumstances. Preparation may involve documents such as:
            </p>
          </div>

          <div className="uk-document-stack">
            <div data-aos="fade-left">
              <span>01</span>
              <strong>Valid Passport</strong>
              <small>Travel identification</small>
            </div>

            <div data-aos="fade-left" data-aos-delay="80">
              <span>02</span>
              <strong>Application Information</strong>
              <small>Personal & travel details</small>
            </div>

            <div data-aos="fade-left" data-aos-delay="160">
              <span>03</span>
              <strong>Financial Evidence</strong>
              <small>Where applicable</small>
            </div>

            <div data-aos="fade-left" data-aos-delay="240">
              <span>04</span>
              <strong>Purpose Documents</strong>
              <small>Supporting your journey</small>
            </div>

            <div data-aos="fade-left" data-aos-delay="320">
              <span>05</span>
              <strong>Supporting Documents</strong>
              <small>According to your application</small>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="uk-faq">
        <div className="uk-faq-inner">
          <div className="uk-faq-title">
            <span className="uk-section-label">FAQ</span>

            <h2 data-aos="fade-up">
              Before you
              <br />
              <em>go.</em>
            </h2>

            <p data-aos="fade-up" data-aos-delay="100">
              Some of the common questions travellers and applicants ask
              before beginning their UK visa journey.
            </p>
          </div>

          <div className="uk-faq-list">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >
                <summary>
                  <span>0{index + 1}</span>

                  <strong>{faq.question}</strong>

                  <i>+</i>
                </summary>

                <div>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        className="uk-final"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,25,54,.96), rgba(5,25,54,.72)), url('/images/countries/london-clock.jpg')",
        }}
      >
        <div className="uk-final-ring uk-final-ring-one"></div>
        <div className="uk-final-ring uk-final-ring-two"></div>

        <div className="uk-final-content">
          <span data-aos="fade-up">WELL CAREER IMMIGRATION</span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            Britain is
            <br />
            waiting.
            <br />
            <em>Are you ready?</em>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200">
            Tell us about your travel, business or study plans and let WCI
            help you understand the next step.
          </p>

          <Link
            to="/contact"
            className="uk-final-button"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Start Your Application
            <span>↗</span>
          </Link>
        </div>
      </section>

    </main>
  );
}

export default UKPage;