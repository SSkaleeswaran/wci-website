import React from "react";
import { Link } from "react-router-dom";
import "../../styles/russia-page.css";

const destinations = [
  {
    title: "Moscow",
    subtitle: "Capital City",
    image: "/images/countryDetailIMG/Moscow.jpg",
    text: "Explore Russia's historic capital, famous landmarks, grand architecture and vibrant city life.",
  },
  {
    title: "St. Petersburg",
    subtitle: "Culture & History",
    image: "/images/countryDetailIMG/Petersburg.jpg",
    text: "Discover magnificent architecture, museums, canals and one of Russia's most culturally significant cities.",
  },
  {
    title: "Kazan",
    subtitle: "Culture & Heritage",
    image: "/images/countryDetailIMG/Kazan.jpg",
    text: "Experience the meeting of Russian and Tatar cultures through architecture, food and history.",
  },
  {
    title: "Sochi",
    subtitle: "Black Sea",
    image: "/images/countryDetailIMG/Sochi.jpg",
    text: "A popular Black Sea destination combining coastal scenery, mountains and outdoor experiences.",
  },
  {
    title: "Lake Baikal",
    subtitle: "Natural Wonder",
    image: "/images/countryDetailIMG/LakeBaikal.jpg",
    text: "Experience one of the world's most remarkable freshwater environments surrounded by dramatic landscapes.",
  },
  {
    title: "Golden Ring",
    subtitle: "Historic Russia",
    image: "/images/countryDetailIMG/GoldenRing.jpg",
    text: "Explore historic towns, traditional architecture and important cultural sites beyond the major cities.",
  },
];

const experiences = [
  {
    number: "01",
    title: "History",
    text: "Explore centuries of Russian history through historic cities, monuments and architectural landmarks.",
  },
  {
    number: "02",
    title: "Architecture",
    text: "Discover distinctive churches, palaces, squares, theatres and imperial-era buildings.",
  },
  {
    number: "03",
    title: "Culture",
    text: "Experience Russian art, music, literature, cuisine and regional traditions.",
  },
  {
    number: "04",
    title: "Nature",
    text: "From the Black Sea coast to Lake Baikal, Russia offers extraordinary natural landscapes.",
  },
];

const visaServices = [
  {
    number: "01",
    title: "Visitor Visa",
    text: "Guidance for eligible travellers planning tourism, sightseeing and short visits to Russia.",
  },
  {
    number: "02",
    title: "Business Visa",
    text: "Support for eligible applicants travelling for meetings, professional activities and business purposes.",
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    text: "Understand your travel purpose and identify the appropriate visa pathway.",
  },
  {
    number: "02",
    title: "Document Preparation",
    text: "Organise the supporting documents relevant to your application.",
  },
  {
    number: "03",
    title: "Application Review",
    text: "Check the application and supporting information before submission.",
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
  "Accommodation information",
  "Supporting financial documents",
];

const faqs = [
  {
    question: "Can WCI help with a Russia visitor visa?",
    answer:
      "Yes. WCI provides consultation and application support for eligible travellers planning a visit to Russia.",
  },
  {
    question: "Can I travel to Russia for business?",
    answer:
      "Eligible travellers may require an appropriate visa depending on the purpose and nature of their business activities.",
  },
  {
    question: "What documents are normally required?",
    answer:
      "Requirements depend on the visa category and individual circumstances. Passport, application documents, travel information and supporting financial documents may be required.",
  },
  {
    question: "How long does the Russia visa process take?",
    answer:
      "Processing requirements and timelines can vary. WCI can guide you according to your visa category and individual circumstances.",
  },
];

function RussiaPage() {
  return (
    <main className="russia-page">

      {/* HERO */}
      <section
        className="ru-hero"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,20,45,.94) 0%, rgba(5,20,45,.68) 48%, rgba(5,20,45,.15) 100%), url('/images/countries/russia.jpg')",
        }}
      >
        <div className="ru-container ru-hero-inner">

          <div
            className="ru-hero-content"
            data-aos="fade-up"
          >
            <span className="ru-eyebrow">
              WCI • RUSSIA VISA
            </span>

            <h1>
              Discover
              <span>Russia.</span>
            </h1>

            <p>
              Experience historic cities, extraordinary architecture,
              culture and diverse landscapes with professional visa
              guidance from WCI.
            </p>

            <div className="ru-hero-actions">
              <Link
                to="/contact"
                className="ru-gold-btn"
              >
                Start Your Journey
                <span>→</span>
              </Link>

              <Link
                to="/visa-services"
                className="ru-outline-btn"
              >
                Visa Services
              </Link>
            </div>
          </div>

          <div
            className="ru-symbol"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <span>RU</span>
            <small>WCI GUIDE</small>
          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="ru-section ru-intro">
        <div className="ru-container ru-intro-grid">

          <div
            className="ru-heading"
            data-aos="fade-right"
          >
            <span className="ru-label">
              ABOUT RUSSIA
            </span>

            <h2>
              A destination shaped by
              <em>history and scale.</em>
            </h2>
          </div>

          <div
            className="ru-intro-copy"
            data-aos="fade-left"
          >
            <p>
              Russia offers a remarkable combination of historic cities,
              architectural landmarks, cultural traditions and vast
              natural landscapes.
            </p>

            <p>
              From the streets of Moscow and St. Petersburg to the
              landscapes around Lake Baikal and the Black Sea coast,
              travellers can experience very different sides of the country.
            </p>

            <div className="ru-mini-line">
              <span></span>
              <strong>WCI RUSSIA VISA GUIDANCE</strong>
            </div>
          </div>

        </div>
      </section>


      {/* FACTS */}
      <section className="ru-facts">
        <div className="ru-container ru-facts-grid">

          <div data-aos="fade-up">
            <span>01</span>
            <strong>Capital</strong>
            <p>Moscow</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span>02</span>
            <strong>Currency</strong>
            <p>Russian Ruble</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>03</span>
            <strong>Language</strong>
            <p>Russian</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>04</span>
            <strong>Known For</strong>
            <p>History • Culture • Nature</p>
          </div>

        </div>
      </section>


      {/* WHY RUSSIA */}
      <section className="ru-section ru-experiences">
        <div className="ru-container">

          <div
            className="ru-heading ru-centered"
            data-aos="fade-up"
          >
            <span className="ru-label">
              WHY VISIT RUSSIA
            </span>

            <h2>
              More than a destination.
              <em>A cultural experience.</em>
            </h2>

            <p>
              Russia offers travellers a distinctive combination of
              history, architecture, culture and natural scenery.
            </p>
          </div>

          <div className="ru-experience-grid">

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


      {/* VISA SERVICES */}
      <section className="ru-section ru-visa">
        <div className="ru-container">

          <div className="ru-two-heading">

            <div data-aos="fade-right">
              <span className="ru-label">
                WCI VISA SERVICES
              </span>

              <h2>
                Plan your Russia trip
                <em>with the right preparation.</em>
              </h2>
            </div>

            <p data-aos="fade-left">
              WCI helps applicants understand their travel purpose,
              prepare supporting documents and organise their application.
            </p>

          </div>

          <div className="ru-visa-grid">

            {visaServices.map((visa, index) => (
              <article
                className="ru-visa-card"
                key={visa.number}
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <span className="ru-visa-number">
                  {visa.number}
                </span>

                <div>
                  <h3>{visa.title}</h3>

                  <p>{visa.text}</p>
                </div>

                <Link to="/visa-services">
                  Explore Service
                  <span>↗</span>
                </Link>
              </article>
            ))}

          </div>

        </div>
      </section>


      {/* DESTINATIONS */}
      <section className="ru-section ru-destinations">
        <div className="ru-container">

          <div
            className="ru-heading"
            data-aos="fade-up"
          >
            <span className="ru-label">
              PLACES TO EXPLORE
            </span>

            <h2>
              Six places to add to
              <em>your Russia itinerary.</em>
            </h2>
          </div>

          <div className="ru-destination-grid">

            {destinations.map((place, index) => (
              <article
                className="ru-destination-card"
                key={place.title}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >

                <div className="ru-destination-image">
                  <img
                    src={place.image}
                    alt={place.title}
                    loading="lazy"
                  />
                </div>

                <div className="ru-destination-content">

                  <span>{place.subtitle}</span>

                  <h3>{place.title}</h3>

                  <p>{place.text}</p>
{/* 
                  <div className="ru-destination-arrow">
                    ↗
                  </div> */}

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* TRAVEL GUIDE */}
      <section className="ru-section ru-story">
        <div className="ru-container ru-story-grid">

          <div
            className="ru-story-image"
            data-aos="fade-right"
          >
            <img
              src="/images/countries/russia.jpg"
              alt="Russia"
              loading="lazy"
            />

            <div className="ru-story-caption">
              <span>WCI TRAVEL GUIDE</span>
              <strong>Russia</strong>
            </div>
          </div>

          <article
            className="ru-story-content"
            data-aos="fade-left"
          >
            <span className="ru-label">
              TRAVEL ARTICLE
            </span>

            <h2>
              Planning your first
              <em>Russia journey.</em>
            </h2>

            <p>
              Russia's scale means that planning your itinerary is
              particularly important. First-time visitors often focus
              on Moscow and St. Petersburg because of their major
              historic and cultural attractions.
            </p>

            <p>
              Moscow offers iconic landmarks, large public spaces,
              museums and a dynamic urban atmosphere. St. Petersburg
              provides a different experience through its waterways,
              architecture and cultural institutions.
            </p>

            <p>
              Travellers with more time can consider destinations such
              as Kazan, Sochi or the extraordinary natural environment
              around Lake Baikal.
            </p>

            <Link
              to="/contact"
              className="ru-text-link"
            >
              Plan Your Russia Trip
              <span>→</span>
            </Link>

          </article>

        </div>
      </section>


      {/* PROCESS */}
      <section className="ru-section ru-process">
        <div className="ru-container">

          <div
            className="ru-heading ru-centered"
            data-aos="fade-up"
          >
            <span className="ru-label">
              THE WCI PROCESS
            </span>

            <h2>
              Four steps towards
              <em>your application.</em>
            </h2>
          </div>

          <div className="ru-process-grid">

            {process.map((item, index) => (
              <article
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="ru-process-number">
                  {item.number}
                </span>

                <div className="ru-process-line"></div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}

          </div>

        </div>
      </section>


      {/* DOCUMENTS */}
      <section className="ru-section ru-documents">
        <div className="ru-container ru-documents-grid">

          <div data-aos="fade-right">

            <span className="ru-label">
              DOCUMENT CHECKLIST
            </span>

            <h2>
              Prepare your documents
              <em>before applying.</em>
            </h2>

            <p>
              Document requirements depend on your visa category and
              individual circumstances. WCI can help you understand
              the supporting documents relevant to your application.
            </p>

          </div>

          <div
            className="ru-document-list"
            data-aos="fade-left"
          >

            {documents.map((document, index) => (
              <div
                className="ru-document-item"
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


      {/* FAQ */}
      <section className="ru-section ru-faq">
        <div className="ru-container">

          <div
            className="ru-heading ru-centered"
            data-aos="fade-up"
          >
            <span className="ru-label">
              RUSSIA VISA FAQ
            </span>

            <h2>
              Common questions.
            </h2>
          </div>

          <div className="ru-faq-list">

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


      {/* CTA */}
      <section
        className="ru-final-cta"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,20,45,.95), rgba(5,20,45,.68)), url('/images/countries/russia.jpg')",
        }}
      >
        <div
          className="ru-container ru-final-inner"
          data-aos="fade-up"
        >

          <span className="ru-label">
            READY TO GO?
          </span>

          <h2>
            Your Russia journey
            <em>starts here.</em>
          </h2>

          <p>
            Speak with WCI about your Russia visa requirements
            and travel plans.
          </p>

          <Link
            to="/contact"
            className="ru-gold-btn"
          >
            Book a Consultation
            <span>→</span>
          </Link>

        </div>
      </section>

    </main>
  );
}

export default RussiaPage;