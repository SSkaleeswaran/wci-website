import React from "react";
import { Link } from "react-router-dom";
import "../../styles/south-korea-page.css";

const destinations = [
  {
    title: "Seoul",
    subtitle: "Modern Korea",
    image: "/images/countryDetailIMG/seol.jpg",
    text: "A dynamic capital where skyscrapers, palaces, shopping districts and Korean culture come together.",
  },
  {
    title: "Busan",
    subtitle: "Coastal Korea",
    image: "/images/countryDetailIMG/Busan.jpg",
    text: "A vibrant coastal city known for beaches, seafood, markets and scenic waterfront views.",
  },
  {
    title: "Jeju Island",
    subtitle: "Island Escape",
    image: "/images/countryDetailIMG/JejuIsland.jpg",
    text: "A volcanic island offering dramatic landscapes, beaches, waterfalls and a slower travel experience.",
  },
  {
    title: "Gyeongju",
    subtitle: "Historic Korea",
    image: "/images/countryDetailIMG/Gyeongju.jpg",
    text: "A historic destination filled with temples, cultural landmarks and remnants of ancient Korea.",
  },
  {
    title: "Nami Island",
    subtitle: "Nature & Leisure",
    image: "/images/countryDetailIMG/NamiIsland.jpg",
    text: "A popular day-trip destination known for tree-lined paths, seasonal scenery and peaceful surroundings.",
  },
  {
    title: "Incheon",
    subtitle: "Gateway to Korea",
    image: "/images/countryDetailIMG/Incheon.jpg",
    text: "A modern international gateway with waterfront areas, cultural attractions and easy access to Seoul.",
  },
];

const visaServices = [
  {
    number: "01",
    title: "Tourist Visa",
    text: "Guidance for eligible travellers planning holidays, sightseeing and short visits to South Korea.",
  },
  {
    number: "02",
    title: "Business Visa",
    text: "Support for eligible applicants travelling for meetings, business activities and professional purposes.",
  },
];

const experiences = [
  {
    number: "01",
    title: "Korean Culture",
    text: "Experience palaces, traditional villages, museums and the heritage of Korea.",
  },
  {
    number: "02",
    title: "Korean Food",
    text: "Explore local cuisine, street food, markets and regional specialities.",
  },
  {
    number: "03",
    title: "K-Culture",
    text: "Discover the global influence of Korean music, entertainment, fashion and contemporary culture.",
  },
  {
    number: "04",
    title: "City Life",
    text: "Experience the energy of Seoul and other modern Korean cities.",
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    text: "Understand your purpose of travel and identify the appropriate visa pathway.",
  },
  {
    number: "02",
    title: "Documents",
    text: "Organise the supporting documents required for your application.",
  },
  {
    number: "03",
    title: "Application",
    text: "Review and prepare your application before submission.",
  },
  {
    number: "04",
    title: "Decision",
    text: "Follow the application process and receive the visa decision.",
  },
];

const documents = [
  "Valid passport",
  "Completed visa application",
  "Recent photograph",
  "Travel itinerary",
  "Accommodation details",
  "Financial evidence",
];

const faqs = [
  {
    question: "Can WCI help with a South Korea tourist visa?",
    answer:
      "Yes. WCI provides consultation and application support for eligible South Korea tourist visa applicants.",
  },
  {
    question: "Can I travel to South Korea for business?",
    answer:
      "Eligible applicants may require an appropriate business-related visa depending on their purpose and circumstances.",
  },
  {
    question: "What documents are normally required?",
    answer:
      "Requirements vary according to the visa category and applicant. Passport, application documents, photographs, travel information and financial evidence may be required.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Processing time can vary depending on the application and the authorities involved. WCI can guide you based on the current requirements.",
  },
];

function SouthKoreaPage() {
  return (
    <main className="south-korea-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="korea-hero"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,21,48,.92) 0%, rgba(4,21,48,.62) 48%, rgba(4,21,48,.16) 100%), url('/images/countries/s-korea4.avif')",
        }}
      >
        <div className="korea-hero-inner">

          <div
            className="korea-hero-content"
            data-aos="fade-up"
          >
            <span className="korea-eyebrow">
              WCI • SOUTH KOREA VISA
            </span>

            <h1>
              Discover
              <span>Korea.</span>
            </h1>

            <p>
              From the energy of Seoul to the peaceful landscapes of Jeju,
              explore South Korea with professional visa guidance from WCI.
            </p>

            <div className="korea-hero-actions">
              <Link
                to="/book-consultation"
                className="korea-gold-btn"
              >
                Start Your Journey
                <span>→</span>
              </Link>

              <Link
                to="/services"
                className="korea-outline-btn"
              >
                Visa Services
              </Link>
            </div>
          </div>

          <div
            className="korea-symbol"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <span>KR</span>
            <small>WCI GUIDE</small>
          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="korea-intro korea-section">
        <div className="korea-container korea-intro-grid">

          <div
            className="korea-heading"
            data-aos="fade-right"
          >
            <span className="korea-label">
              ABOUT SOUTH KOREA
            </span>

            <h2>
              Where ancient heritage
              <em>meets modern energy.</em>
            </h2>
          </div>

          <div
            className="korea-intro-copy"
            data-aos="fade-left"
          >
            <p>
              South Korea offers a distinctive combination of historic
              culture, modern cities, technology, food and beautiful
              landscapes.
            </p>

            <p>
              Seoul provides a fast-paced urban experience while destinations
              such as Busan, Jeju and Gyeongju reveal very different sides
              of the country.
            </p>

            <div className="korea-mini-line">
              <span></span>
              <strong>WCI SOUTH KOREA VISA GUIDANCE</strong>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          FACTS
      ===================================================== */}

      <section className="korea-facts">
        <div className="korea-container korea-facts-grid">

          <div data-aos="fade-up">
            <span>01</span>
            <strong>Capital</strong>
            <p>Seoul</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span>02</span>
            <strong>Currency</strong>
            <p>South Korean Won</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>03</span>
            <strong>Language</strong>
            <p>Korean</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>04</span>
            <strong>Known For</strong>
            <p>Culture • Food • Technology</p>
          </div>

        </div>
      </section>


      {/* =====================================================
          EXPERIENCES
      ===================================================== */}

      <section className="korea-experiences korea-section">
        <div className="korea-container">

          <div
            className="korea-heading korea-centered"
            data-aos="fade-up"
          >
            <span className="korea-label">
              WHY VISIT SOUTH KOREA
            </span>

            <h2>
              A country with
              <em>many different faces.</em>
            </h2>

            <p>
              Experience the contrast between traditional Korea and
              contemporary Korean life.
            </p>
          </div>

          <div className="korea-experience-grid">

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

      <section className="korea-visa korea-section">
        <div className="korea-container">

          <div className="korea-two-heading">

            <div data-aos="fade-right">
              <span className="korea-label">
                WCI VISA SERVICES
              </span>

              <h2>
                Your South Korea trip
                <em>starts with preparation.</em>
              </h2>
            </div>

            <p data-aos="fade-left">
              WCI helps applicants understand their travel purpose,
              organise supporting documents and prepare their visa
              application.
            </p>

          </div>

          <div className="korea-visa-grid">

            {visaServices.map((visa, index) => (
              <article
                className="korea-visa-card"
                key={visa.number}
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >

                <span className="korea-visa-number">
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

      <section className="korea-destinations korea-section">
        <div className="korea-container">

          <div
            className="korea-heading"
            data-aos="fade-up"
          >
            <span className="korea-label">
              PLACES TO EXPLORE
            </span>

            <h2>
              Six places worth
              <em>putting on your itinerary.</em>
            </h2>
          </div>

          <div className="korea-destination-grid">

            {destinations.map((place, index) => (
              <article
                className="korea-destination-card"
                key={place.title}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >

                <div className="korea-destination-image">
                  <img
                    src={place.image}
                    alt={place.title}
                    loading="lazy"
                  />
                </div>

                <div className="korea-destination-content">

                  <span>{place.subtitle}</span>

                  <h3>{place.title}</h3>

                  <p>{place.text}</p>

                  <div className="korea-destination-arrow">
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

      <section className="korea-story korea-section">
        <div className="korea-container korea-story-grid">

          <div
            className="korea-story-image"
            data-aos="fade-right"
          >
            <img
              src="/images/countries/s-korea4.avif"
              alt="South Korea"
              loading="lazy"
            />

            <div className="korea-story-caption">
              <span>WCI TRAVEL GUIDE</span>
              <strong>South Korea</strong>
            </div>
          </div>

          <article
            className="korea-story-content"
            data-aos="fade-left"
          >
            <span className="korea-label">
              TRAVEL ARTICLE
            </span>

            <h2>
              Planning your first
              <em>South Korea journey.</em>
            </h2>

            <p>
              A first visit to South Korea can begin in Seoul, where
              historical landmarks, modern neighbourhoods, shopping areas
              and Korean food create a diverse introduction to the country.
            </p>

            <p>
              Travellers who have more time can combine Seoul with Busan
              for a coastal experience or Jeju Island for nature and
              slower-paced travel.
            </p>

            <p>
              Gyeongju provides another perspective through its historical
              sites and cultural heritage, making it a useful addition for
              travellers interested in traditional Korea.
            </p>

            <Link
              to="/book-consultation"
              className="korea-text-link"
            >
              Plan Your Korea Trip
              <span>→</span>
            </Link>

          </article>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="korea-process korea-section">
        <div className="korea-container">

          <div
            className="korea-heading korea-centered"
            data-aos="fade-up"
          >
            <span className="korea-label">
              THE WCI PROCESS
            </span>

            <h2>
              A clearer route
              <em>from documents to decision.</em>
            </h2>
          </div>

          <div className="korea-process-grid">

            {process.map((item, index) => (
              <article
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                <span className="korea-process-number">
                  {item.number}
                </span>

                <div className="korea-process-line"></div>

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

      <section className="korea-documents korea-section">
        <div className="korea-container korea-documents-grid">

          <div data-aos="fade-right">

            <span className="korea-label">
              DOCUMENT CHECKLIST
            </span>

            <h2>
              Get your documents
              <em>ready early.</em>
            </h2>

            <p>
              Requirements can vary according to visa category and
              individual circumstances. WCI can help you understand the
              documents relevant to your application.
            </p>

          </div>

          <div
            className="korea-document-list"
            data-aos="fade-left"
          >

            {documents.map((document, index) => (
              <div
                className="korea-document-item"
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

      <section className="korea-faq korea-section">
        <div className="korea-container">

          <div
            className="korea-heading korea-centered"
            data-aos="fade-up"
          >
            <span className="korea-label">
              SOUTH KOREA VISA FAQ
            </span>

            <h2>
              Common questions.
            </h2>
          </div>

          <div className="korea-faq-list">

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
        className="korea-final-cta"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,21,48,.95), rgba(4,21,48,.68)), url('/images/countries/s-korea4.avif')",
        }}
      >
        <div
          className="korea-container korea-final-inner"
          data-aos="fade-up"
        >

          <span className="korea-label">
            READY TO GO?
          </span>

          <h2>
            Your South Korea journey
            <em>starts here.</em>
          </h2>

          <p>
            Speak with WCI about your South Korea visa requirements
            and travel plans.
          </p>

          <Link
            to="/contact"
            className="korea-gold-btn"
          >
            Book a Consultation
            <span>→</span>
          </Link>

        </div>
      </section>

    </main>
  );
}

export default SouthKoreaPage;