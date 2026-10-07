import React from "react";
import { Link } from "react-router-dom";
import "../../styles/schengen-page.css";

const destinations = [
  {
    title: "Paris",
    subtitle: "France",
    image: "/images/countries/schengen-paris.jpg",
    text: "Explore iconic landmarks, elegant streets, museums, cafés and the atmosphere of the French capital.",
  },
  {
    title: "Rome",
    subtitle: "Italy",
    image: "/images/countries/schengen-rome.jpg",
    text: "Discover ancient history, remarkable architecture, Italian cuisine and timeless city streets.",
  },
  {
    title: "Amsterdam",
    subtitle: "Netherlands",
    image: "/images/countries/schengen-amsterdam.jpg",
    text: "Experience canals, historic architecture, museums and the distinctive character of Amsterdam.",
  },
  {
    title: "Zurich",
    subtitle: "Switzerland",
    image: "/images/countries/schengen-zurich.jpg",
    text: "A gateway to Swiss landscapes, lakes, mountains and a sophisticated European city experience.",
  },
  {
    title: "Vienna",
    subtitle: "Austria",
    image: "/images/countries/schengen-vienna.jpg",
    text: "Explore imperial architecture, classical culture, museums and elegant historic districts.",
  },
  {
    title: "Prague",
    subtitle: "Czech Republic",
    image: "/images/countries/schengen-prague.jpg",
    text: "Discover medieval streets, historic squares, bridges and one of Europe's most distinctive cityscapes.",
  },
];

const experiences = [
  {
    number: "01",
    title: "Multi-Country Travel",
    text: "Plan a European itinerary that can include multiple Schengen destinations within the applicable visa conditions.",
  },
  {
    number: "02",
    title: "European Culture",
    text: "Experience different languages, cuisines, architecture, traditions and historic cities in one journey.",
  },
  {
    number: "03",
    title: "Historic Cities",
    text: "Discover centuries of European history through landmarks, museums, castles and old towns.",
  },
  {
    number: "04",
    title: "Scenic Journeys",
    text: "Combine major cities with mountains, lakes, countryside and other European landscapes.",
  },
];

const visaServices = [
  {
    number: "01",
    title: "Tourist Visa",
    text: "Guidance for eligible travellers planning tourism and short stays within the Schengen Area.",
  },
  {
    number: "02",
    title: "Business Travel",
    text: "Support for eligible applicants travelling for meetings, conferences and other permitted business purposes.",
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    text: "Understand your itinerary, travel purpose and the appropriate visa pathway.",
  },
  {
    number: "02",
    title: "Itinerary & Documents",
    text: "Organise your travel plan and supporting documents according to your circumstances.",
  },
  {
    number: "03",
    title: "Application Review",
    text: "Review the application and supporting information before submission.",
  },
  {
    number: "04",
    title: "Decision",
    text: "Follow the application process and receive the final decision.",
  },
];

const documents = [
  "Valid passport",
  "Completed visa application",
  "Recent photograph",
  "Travel itinerary",
  "Accommodation details",
  "Travel insurance / financial evidence",
];

const faqs = [
  {
    question: "What is a Schengen visa?",
    answer:
      "A Schengen visa can allow eligible short-stay travellers to visit participating Schengen countries subject to the conditions of the visa and applicable immigration rules.",
  },
  {
    question: "Can I visit multiple European countries with one Schengen visa?",
    answer:
      "Depending on the visa issued and your travel circumstances, a Schengen visa can allow travel across multiple participating countries. Your itinerary and applicable rules should be considered before applying.",
  },
  {
    question: "Which country should I apply through?",
    answer:
      "The appropriate consulate or visa authority generally depends on your main destination and the circumstances of your trip. WCI can help you understand the application pathway based on your itinerary.",
  },
  {
    question: "What documents are required?",
    answer:
      "Requirements vary according to the applicant and trip. Passport, application documents, itinerary, accommodation information, financial evidence and other supporting documents may be required.",
  },
];

function SchengenPage() {
  return (
    <main className="schengen-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="sc-hero"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,20,45,.94) 0%, rgba(5,20,45,.67) 48%, rgba(5,20,45,.12) 100%), url('/images/countries/schengen-nature.jpg')",
        }}
      >
        <div className="sc-container sc-hero-inner">

          <div
            className="sc-hero-content"
            data-aos="fade-up"
          >
            <span className="sc-eyebrow">
              WCI • SCHENGEN VISA
            </span>

            <h1>
              One journey.
              <span>Many Europes.</span>
            </h1>

            <p>
              Plan your European journey with professional Schengen
              visa guidance, from your first itinerary to your application.
            </p>

            <div className="sc-hero-actions">
              <Link
                to="/book-consultation"
                className="sc-gold-btn"
              >
                Start Your Journey
                <span>→</span>
              </Link>

              <Link
                to="/services"
                className="sc-outline-btn"
              >
                Visa Services
              </Link>
            </div>
          </div>

          <div
            className="sc-symbol"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <span>EU</span>
            <small>WCI GUIDE</small>
          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="sc-section sc-intro">
        <div className="sc-container sc-intro-grid">

          <div
            className="sc-heading"
            data-aos="fade-right"
          >
            <span className="sc-label">
              ABOUT SCHENGEN
            </span>

            <h2>
              Europe becomes
              <em>your itinerary.</em>
            </h2>
          </div>

          <div
            className="sc-intro-copy"
            data-aos="fade-left"
          >
            <p>
              The Schengen Area brings together participating European
              countries under common short-stay travel rules, making it
              possible for eligible travellers to plan journeys across
              multiple destinations.
            </p>

            <p>
              Whether your itinerary focuses on one country or several
              European cities, careful planning is important when preparing
              your visa application.
            </p>

            <div className="sc-mini-line">
              <span></span>
              <strong>WCI SCHENGEN VISA GUIDANCE</strong>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          FACTS
      ===================================================== */}

      <section className="sc-facts">
        <div className="sc-container sc-facts-grid">

          <div data-aos="fade-up">
            <span>01</span>
            <strong>Region</strong>
            <p>Europe</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span>02</span>
            <strong>Travel Type</strong>
            <p>Short Stay</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>03</span>
            <strong>Known For</strong>
            <p>Multi-Country Travel</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>04</span>
            <strong>Experience</strong>
            <p>Culture • History • Nature</p>
          </div>

        </div>
      </section>


      {/* =====================================================
          WHY SCHENGEN
      ===================================================== */}

      <section className="sc-section sc-experiences">
        <div className="sc-container">

          <div
            className="sc-heading sc-centered"
            data-aos="fade-up"
          >
            <span className="sc-label">
              WHY CHOOSE SCHENGEN
            </span>

            <h2>
              One application journey.
              <em>Countless experiences.</em>
            </h2>

            <p>
              Build a European itinerary around the destinations,
              experiences and cultures that interest you most.
            </p>
          </div>

          <div className="sc-experience-grid">

            {experiences.map((item, index) => (
              <article
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          VISA SERVICES
      ===================================================== */}

      <section className="sc-section sc-visa">
        <div className="sc-container">

          <div className="sc-two-heading">

            <div data-aos="fade-right">
              <span className="sc-label">
                WCI VISA SERVICES
              </span>

              <h2>
                Your European journey
                <em>starts with preparation.</em>
              </h2>
            </div>

            <p data-aos="fade-left">
              WCI helps applicants understand their travel purpose,
              organise their itinerary and prepare the supporting
              documents required for their application.
            </p>

          </div>

          <div className="sc-visa-grid">

            {visaServices.map((visa, index) => (
              <article
                className="sc-visa-card"
                key={visa.number}
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <span className="sc-visa-number">
                  {visa.number}
                </span>

                <div>
                  <h3>{visa.title}</h3>

                  <p>{visa.text}</p>
                </div>

                <Link to="/book-consultation">
                  Explore Service
                  <span>↗</span>
                </Link>
              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          DESTINATIONS
      ===================================================== */}

      <section className="sc-section sc-destinations">
        <div className="sc-container">

          <div
            className="sc-heading"
            data-aos="fade-up"
          >
            <span className="sc-label">
              EUROPEAN DESTINATIONS
            </span>

            <h2>
              Start with these
              <em>iconic cities.</em>
            </h2>
          </div>

          <div className="sc-destination-grid">

            {destinations.map((place, index) => (
              <article
                className="sc-destination-card"
                key={place.title}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >

                <div className="sc-destination-image">
                  <img
                    src={place.image}
                    alt={`${place.title}, ${place.subtitle}`}
                    loading="lazy"
                  />
                </div>

                <div className="sc-destination-content">

                  <span>{place.subtitle}</span>

                  <h3>{place.title}</h3>

                  <p>{place.text}</p>

                  <div className="sc-destination-arrow">
                    ↗
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          TRAVEL GUIDE
      ===================================================== */}

      <section className="sc-section sc-story">
        <div className="sc-container sc-story-grid">

          <div
            className="sc-story-image"
            data-aos="fade-right"
          >
            <img
              src="/images/countries/schengen-nature.jpg"
              alt="Schengen Europe"
              loading="lazy"
            />

            <div className="sc-story-caption">
              <span>WCI TRAVEL GUIDE</span>
              <strong>Schengen Europe</strong>
            </div>
          </div>

          <article
            className="sc-story-content"
            data-aos="fade-left"
          >
            <span className="sc-label">
              TRAVEL ARTICLE
            </span>

            <h2>
              Planning your first
              <em>European journey.</em>
            </h2>

            <p>
              A Schengen trip can combine several European destinations,
              but a strong itinerary starts with understanding where you
              want to travel and how long you plan to stay.
            </p>

            <p>
              Paris can offer art, architecture and French culture.
              Rome combines ancient history with Italian cuisine, while
              Amsterdam provides canals, museums and historic streets.
            </p>

            <p>
              Travellers interested in mountains and natural scenery
              can consider Switzerland, while Vienna and Prague offer
              distinctive historic and cultural experiences.
            </p>

            <Link
              to="/book-consultation"
              className="sc-text-link"
            >
              Plan Your Europe Trip
              <span>→</span>
            </Link>

          </article>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="sc-section sc-process">
        <div className="sc-container">

          <div
            className="sc-heading sc-centered"
            data-aos="fade-up"
          >
            <span className="sc-label">
              THE WCI PROCESS
            </span>

            <h2>
              Four steps towards
              <em>your Schengen application.</em>
            </h2>
          </div>

          <div className="sc-process-grid">

            {process.map((item, index) => (
              <article
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="sc-process-number">
                  {item.number}
                </span>

                <div className="sc-process-line"></div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          DOCUMENTS
      ===================================================== */}

      <section className="sc-section sc-documents">
        <div className="sc-container sc-documents-grid">

          <div data-aos="fade-right">

            <span className="sc-label">
              DOCUMENT CHECKLIST
            </span>

            <h2>
              Prepare your documents
              <em>with your itinerary in mind.</em>
            </h2>

            <p>
              Requirements can vary depending on the applicant,
              travel purpose and itinerary. WCI can help you understand
              the supporting documents relevant to your application.
            </p>

          </div>

          <div
            className="sc-document-list"
            data-aos="fade-left"
          >

            {documents.map((document, index) => (
              <div
                className="sc-document-item"
                key={document}
              >
                <span>
                  0{index + 1}
                </span>

                <strong>
                  {document}
                </strong>

                <i>✓</i>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="sc-section sc-faq">
        <div className="sc-container">

          <div
            className="sc-heading sc-centered"
            data-aos="fade-up"
          >
            <span className="sc-label">
              SCHENGEN VISA FAQ
            </span>

            <h2>
              Common questions.
            </h2>
          </div>

          <div className="sc-faq-list">

            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <summary>
                  <span>{faq.question}</span>
                  <b>+</b>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="sc-final-cta"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,20,45,.95), rgba(5,20,45,.68)), url('/images/countries/schengen-nature.jpg')",
        }}
      >
        <div
          className="sc-container sc-final-inner"
          data-aos="fade-up"
        >

          <span className="sc-label">
            READY TO GO?
          </span>

          <h2>
            Your European journey
            <em>starts here.</em>
          </h2>

          <p>
            Speak with WCI about your Schengen visa requirements
            and European travel plans.
          </p>

          <Link
            to="/book-consultation"
            className="sc-gold-btn"
          >
            Book a Consultation
            <span>→</span>
          </Link>

        </div>
      </section>

    </main>
  );
}

export default SchengenPage;