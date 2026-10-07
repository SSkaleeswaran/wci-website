import React from "react";
import { Link } from "react-router-dom";
import "../../styles/new-zealand-page.css";

const destinations = [
  {
    title: "Auckland",
    subtitle: "City & Harbour",
    image: "/images/countries/nz-auckland.jpg",
    text: "New Zealand's largest city, surrounded by harbours, islands, restaurants and urban attractions.",
  },
  {
    title: "Queenstown",
    subtitle: "Adventure Capital",
    image: "/images/countries/nz-queenstown.jpg",
    text: "A spectacular alpine destination known for adventure activities, mountains and lake views.",
  },
  {
    title: "Rotorua",
    subtitle: "Culture & Geothermal",
    image: "/images/countries/nz-rotorua.jpg",
    text: "Experience geothermal landscapes and discover Māori culture in one of New Zealand's distinctive regions.",
  },
  {
    title: "Wellington",
    subtitle: "Culture & Capital",
    image: "/images/countries/nz-wellington.jpg",
    text: "A compact waterfront capital known for culture, museums, cafés and creative industries.",
  },
  {
    title: "Milford Sound",
    subtitle: "Wild New Zealand",
    image: "/images/countries/nz-milford.jpg",
    text: "Dramatic mountains, waterfalls and waterways make Milford Sound one of the country's iconic landscapes.",
  },
  {
    title: "Christchurch",
    subtitle: "South Island",
    image: "/images/countries/nz-christchurch.jpg",
    text: "A gateway to the South Island with gardens, outdoor experiences and access to spectacular landscapes.",
  },
];

const visaServices = [
  {
    number: "01",
    title: "Visitor Visa",
    text: "Guidance for eligible travellers planning holidays, family visits and short stays in New Zealand.",
  },
  {
    number: "02",
    title: "Business Visa",
    text: "Support for eligible applicants travelling for meetings, professional activities and business purposes.",
  },
];

const experiences = [
  {
    number: "01",
    title: "Adventure",
    text: "Discover hiking, scenic drives, water activities and some of the world's most impressive outdoor landscapes.",
  },
  {
    number: "02",
    title: "Nature",
    text: "Experience mountains, lakes, beaches, forests and dramatic coastal scenery.",
  },
  {
    number: "03",
    title: "Māori Culture",
    text: "Learn about Māori heritage, traditions, art and cultural experiences across the country.",
  },
  {
    number: "04",
    title: "Road Trips",
    text: "Explore New Zealand's diverse regions through scenic routes and memorable journeys.",
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    text: "Understand your travel purpose and determine the appropriate visa pathway.",
  },
  {
    number: "02",
    title: "Documents",
    text: "Prepare the supporting documents relevant to your application.",
  },
  {
    number: "03",
    title: "Application",
    text: "Review your application carefully before submission.",
  },
  {
    number: "04",
    title: "Decision",
    text: "Follow the application process and receive the final decision.",
  },
];

const documents = [
  "Valid passport",
  "Completed application",
  "Recent photograph",
  "Travel itinerary",
  "Accommodation details",
  "Financial evidence",
];

const faqs = [
  {
    question: "Can WCI help with a New Zealand visitor visa?",
    answer:
      "Yes. WCI provides consultation and application support for eligible New Zealand visitor visa applicants.",
  },
  {
    question: "Can I visit New Zealand for business?",
    answer:
      "Eligible travellers may require an appropriate visa depending on the purpose and nature of their business activities.",
  },
  {
    question: "What documents are normally required?",
    answer:
      "Requirements depend on the visa category and applicant. Passport, application documents, travel information and financial evidence may be required.",
  },
  {
    question: "How long does the New Zealand visa process take?",
    answer:
      "Processing time can vary depending on the application and current immigration requirements. WCI can guide you based on your circumstances.",
  },
];

function NewZealandPage() {
  return (
    <main className="new-zealand-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="nz-hero"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,21,48,.91) 0%, rgba(4,21,48,.62) 48%, rgba(4,21,48,.12) 100%), url('/images/countries/new-zland.jpg')",
        }}
      >
        <div className="nz-hero-inner">

          <div
            className="nz-hero-content"
            data-aos="fade-up"
          >
            <span className="nz-eyebrow">
              WCI • NEW ZEALAND VISA
            </span>

            <h1>
              Discover
              <span>New Zealand.</span>
            </h1>

            <p>
              From vibrant cities to extraordinary landscapes, plan your
              New Zealand journey with professional visa guidance from WCI.
            </p>

            <div className="nz-hero-actions">
              <Link
                to="/book-consultation"
                className="nz-gold-btn"
              >
                Start Your Journey
                <span>→</span>
              </Link>

              <Link
                to="/services"
                className="nz-outline-btn"
              >
                Visa Services
              </Link>
            </div>
          </div>

          <div
            className="nz-symbol"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <span>NZ</span>
            <small>WCI GUIDE</small>
          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="nz-intro nz-section">
        <div className="nz-container nz-intro-grid">

          <div
            className="nz-heading"
            data-aos="fade-right"
          >
            <span className="nz-label">
              ABOUT NEW ZEALAND
            </span>

            <h2>
              Where cities meet
              <em>extraordinary nature.</em>
            </h2>
          </div>

          <div
            className="nz-intro-copy"
            data-aos="fade-left"
          >
            <p>
              New Zealand is known for its dramatic landscapes, outdoor
              experiences, welcoming cities and distinctive Māori heritage.
            </p>

            <p>
              From Auckland and Wellington to the mountains of Queenstown
              and the natural beauty of the South Island, every region
              offers a different travel experience.
            </p>

            <div className="nz-mini-line">
              <span></span>
              <strong>WCI NEW ZEALAND VISA GUIDANCE</strong>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          FACTS
      ===================================================== */}

      <section className="nz-facts">
        <div className="nz-container nz-facts-grid">

          <div data-aos="fade-up">
            <span>01</span>
            <strong>Capital</strong>
            <p>Wellington</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span>02</span>
            <strong>Currency</strong>
            <p>New Zealand Dollar</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>03</span>
            <strong>Languages</strong>
            <p>English • Māori</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>04</span>
            <strong>Known For</strong>
            <p>Nature • Adventure • Culture</p>
          </div>

        </div>
      </section>


      {/* =====================================================
          EXPERIENCES
      ===================================================== */}

      <section className="nz-experiences nz-section">
        <div className="nz-container">

          <div
            className="nz-heading nz-centered"
            data-aos="fade-up"
          >
            <span className="nz-label">
              WHY VISIT NEW ZEALAND
            </span>

            <h2>
              A journey built around
              <em>experience.</em>
            </h2>

            <p>
              New Zealand is ideal for travellers who want a combination
              of nature, adventure, culture and memorable road journeys.
            </p>
          </div>

          <div className="nz-experience-grid">

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

      <section className="nz-visa nz-section">
        <div className="nz-container">

          <div className="nz-two-heading">

            <div data-aos="fade-right">
              <span className="nz-label">
                WCI VISA SERVICES
              </span>

              <h2>
                Your New Zealand journey
                <em>starts with preparation.</em>
              </h2>
            </div>

            <p data-aos="fade-left">
              WCI helps applicants understand their travel purpose,
              organise supporting documents and prepare their application.
            </p>

          </div>

          <div className="nz-visa-grid">

            {visaServices.map((visa, index) => (
              <article
                className="nz-visa-card"
                key={visa.number}
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >

                <span className="nz-visa-number">
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

      <section className="nz-destinations nz-section">
        <div className="nz-container">

          <div
            className="nz-heading"
            data-aos="fade-up"
          >
            <span className="nz-label">
              PLACES TO EXPLORE
            </span>

            <h2>
              Six places for
              <em>your New Zealand itinerary.</em>
            </h2>
          </div>

          <div className="nz-destination-grid">

            {destinations.map((place, index) => (
              <article
                className="nz-destination-card"
                key={place.title}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >

                <div className="nz-destination-image">
                  <img
                    src={place.image}
                    alt={place.title}
                    loading="lazy"
                  />
                </div>

                <div className="nz-destination-content">

                  <span>{place.subtitle}</span>

                  <h3>{place.title}</h3>

                  <p>{place.text}</p>

                  <div className="nz-destination-arrow">
                    ↗
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          TRAVEL ARTICLE
      ===================================================== */}

      <section className="nz-story nz-section">
        <div className="nz-container nz-story-grid">

          <div
            className="nz-story-image"
            data-aos="fade-right"
          >
            <img
              src="/images/countries/new-zland.jpg"
              alt="New Zealand"
              loading="lazy"
            />

            <div className="nz-story-caption">
              <span>WCI TRAVEL GUIDE</span>
              <strong>New Zealand</strong>
            </div>
          </div>

          <article
            className="nz-story-content"
            data-aos="fade-left"
          >
            <span className="nz-label">
              TRAVEL ARTICLE
            </span>

            <h2>
              Planning your first
              <em>New Zealand journey.</em>
            </h2>

            <p>
              New Zealand is a destination where the journey itself can
              become part of the experience. A well-planned itinerary can
              combine cities, scenic routes, mountains, lakes and cultural
              experiences.
            </p>

            <p>
              Auckland is a natural starting point for many travellers,
              while Queenstown offers a very different alpine atmosphere.
              Wellington provides a compact cultural and waterfront
              experience.
            </p>

            <p>
              Travellers with additional time can explore the South Island,
              including Milford Sound and Christchurch, or experience
              geothermal landscapes and Māori culture around Rotorua.
            </p>

            <Link
              to="/book-consultation"
              className="nz-text-link"
            >
              Plan Your New Zealand Trip
              <span>→</span>
            </Link>

          </article>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="nz-process nz-section">
        <div className="nz-container">

          <div
            className="nz-heading nz-centered"
            data-aos="fade-up"
          >
            <span className="nz-label">
              THE WCI PROCESS
            </span>

            <h2>
              Four clear steps
              <em>towards your application.</em>
            </h2>
          </div>

          <div className="nz-process-grid">

            {process.map((item, index) => (
              <article
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                <span className="nz-process-number">
                  {item.number}
                </span>

                <div className="nz-process-line"></div>

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

      <section className="nz-documents nz-section">
        <div className="nz-container nz-documents-grid">

          <div data-aos="fade-right">

            <span className="nz-label">
              DOCUMENT CHECKLIST
            </span>

            <h2>
              Prepare your documents
              <em>before you apply.</em>
            </h2>

            <p>
              Requirements can vary depending on the visa category and
              individual circumstances. WCI can help you understand the
              documents relevant to your application.
            </p>

          </div>

          <div
            className="nz-document-list"
            data-aos="fade-left"
          >

            {documents.map((document, index) => (
              <div
                className="nz-document-item"
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

      <section className="nz-faq nz-section">
        <div className="nz-container">

          <div
            className="nz-heading nz-centered"
            data-aos="fade-up"
          >
            <span className="nz-label">
              NEW ZEALAND VISA FAQ
            </span>

            <h2>
              Common questions.
            </h2>
          </div>

          <div className="nz-faq-list">

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
        className="nz-final-cta"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,21,48,.95), rgba(4,21,48,.68)), url('/images/countries/new-zland.jpg')",
        }}
      >
        <div
          className="nz-container nz-final-inner"
          data-aos="fade-up"
        >

          <span className="nz-label">
            READY TO GO?
          </span>

          <h2>
            Your New Zealand journey
            <em>starts here.</em>
          </h2>

          <p>
            Speak with WCI about your New Zealand visa requirements
            and travel plans.
          </p>

          <Link
            to="/book-consultation"
            className="nz-gold-btn"
          >
            Book a Consultation
            <span>→</span>
          </Link>

        </div>
      </section>

    </main>
  );
}

export default NewZealandPage;