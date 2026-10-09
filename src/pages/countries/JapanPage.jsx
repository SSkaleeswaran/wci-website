import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const destinations = [
  {
    title: "Tokyo",
    subtitle: "Modern Japan",
    image: "/images/countryDetailIMG/Tokyo.jpg",
    text: "A fast-moving city where technology, culture, shopping and traditional neighbourhoods exist side by side.",
  },
  {
    title: "Kyoto",
    subtitle: "Traditional Japan",
    image: "/images/countryDetailIMG/Kyoto.jpg",
    text: "Historic temples, quiet gardens, traditional streets and Japan's classical cultural heritage.",
  },
  {
    title: "Osaka",
    subtitle: "Food & Energy",
    image: "/images/countryDetailIMG/Osaka.jpg",
    text: "A lively destination known for food, entertainment, shopping and a relaxed urban atmosphere.",
  },
  {
    title: "Mount Fuji",
    subtitle: "Iconic Japan",
    image: "/images/countryDetailIMG/MountFuji.jpg",
    text: "Japan's most recognisable landmark, surrounded by lakes, viewpoints and mountain scenery.",
  },
  {
    title: "Nara",
    subtitle: "Ancient Japan",
    image: "/images/countryDetailIMG/Nara.jpg",
    text: "A historic city famous for temples, cultural landmarks and its peaceful park surroundings.",
  },
  {
    title: "Hiroshima",
    subtitle: "History & Reflection",
    image: "/images/countryDetailIMG/Hiroshima.jpg",
    text: "A meaningful destination combining history, remembrance, culture and beautiful nearby islands.",
  },
];

const visaServices = [
  {
    number: "01",
    title: "Tourist Visa",
    text: "Guidance for travellers planning holidays, sightseeing and short visits to Japan.",
  },
  {
    number: "02",
    title: "Business Visa",
    text: "Support for eligible short-term business visits, meetings and professional activities.",
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    text: "Understand your travel purpose and visa requirements.",
  },
  {
    number: "02",
    title: "Documents",
    text: "Prepare the documents required for your application.",
  },
  {
    number: "03",
    title: "Application",
    text: "Review and organise your application before submission.",
  },
  {
    number: "04",
    title: "Decision",
    text: "Track the application and receive the visa decision.",
  },
];

const documents = [
  "Valid passport",
  "Completed visa application",
  "Recent photograph",
  "Travel itinerary",
  "Accommodation details",
  "Financial documents",
];

const faqs = [
  {
    question: "Can WCI help with a Japan tourist visa?",
    answer:
      "Yes. WCI provides consultation and application support for eligible Japan tourist visa applicants.",
  },
  {
    question: "Can I travel to Japan for business?",
    answer:
      "Eligible travellers may apply for an appropriate short-term business visa depending on the purpose and circumstances of the visit.",
  },
  {
    question: "How long does the Japan visa process take?",
    answer:
      "Processing time can vary depending on the application and the authorities handling it. WCI will guide you based on the current requirements.",
  },
  {
    question: "What documents are required?",
    answer:
      "Requirements depend on the visa category and applicant. Passport, application documents, photographs, travel information and financial evidence may be required.",
  },
];

function JapanPage() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: false,
      offset: 80,
    });

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="japan-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="japan-hero"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,21,48,.88) 0%, rgba(4,21,48,.60) 48%, rgba(4,21,48,.18) 100%), url('/images/countries/japan.jpg')",
        }}
      >
        <div className="japan-hero-inner">

          <div
            className="japan-hero-content"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <span className="japan-eyebrow">
              WCI • JAPAN VISA
            </span>

            <h1>
              Discover
              <span>Japan.</span>
            </h1>

            <p>
              From the energy of Tokyo to the timeless streets of Kyoto,
              explore Japan with professional visa guidance from WCI.
            </p>

            <div className="japan-hero-actions">
              <Link to="/book-consultation" className="japan-gold-btn">
                Start Your Journey
                <span>→</span>
              </Link>

              <Link to="/services" className="japan-outline-btn">
                Visa Services
              </Link>
            </div>
          </div>

          <div
            className="japan-hero-stamp"
            data-aos="zoom-in"
            data-aos-delay="350"
          >
            <span>JP</span>
            <small>WCI GUIDE</small>
          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="japan-intro section-compact">
        <div className="japan-container japan-intro-grid">

          <div
            className="japan-section-heading"
            data-aos="fade-right"
          >
            <span className="japan-label">
              ABOUT JAPAN
            </span>

            <h2>
              A country where
              <em>tradition meets tomorrow.</em>
            </h2>
          </div>

          <div
            className="japan-intro-copy"
            data-aos="fade-left"
          >
            <p>
              Japan combines centuries-old traditions with modern cities,
              advanced technology, distinctive food culture and remarkable
              natural landscapes.
            </p>

            <p>
              Whether your journey is for tourism or business, preparation
              and the correct visa category are essential before travelling.
            </p>

            <div className="japan-mini-line">
              <span></span>
              <strong>WCI JAPAN VISA GUIDANCE</strong>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          QUICK FACTS
      ===================================================== */}

      <section className="japan-facts">
        <div className="japan-container japan-facts-grid">

          <div data-aos="fade-up">
            <span>01</span>
            <strong>Capital</strong>
            <p>Tokyo</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <span>02</span>
            <strong>Currency</strong>
            <p>Japanese Yen</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <span>03</span>
            <strong>Language</strong>
            <p>Japanese</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <span>04</span>
            <strong>Known For</strong>
            <p>Culture • Technology • Food</p>
          </div>

        </div>
      </section>


      {/* =====================================================
          WHY JAPAN
      ===================================================== */}

      <section className="japan-why section-compact">
        <div className="japan-container">

          <div
            className="japan-section-heading centered"
            data-aos="fade-up"
          >
            <span className="japan-label">
              WHY JAPAN
            </span>

            <h2>
              More than a destination.
            </h2>

            <p>
              Every region offers a different side of Japan.
            </p>
          </div>

          <div className="japan-experience-grid">

            <article data-aos="fade-up">
              <span>01</span>
              <h3>Culture</h3>
              <p>
                Discover temples, gardens, traditional neighbourhoods and
                centuries of Japanese heritage.
              </p>
            </article>

            <article data-aos="fade-up" data-aos-delay="100">
              <span>02</span>
              <h3>Food</h3>
              <p>
                Experience regional cuisine ranging from sushi and ramen
                to Osaka street food and traditional dishes.
              </p>
            </article>

            <article data-aos="fade-up" data-aos-delay="200">
              <span>03</span>
              <h3>Technology</h3>
              <p>
                Explore one of the world's most advanced urban environments
                alongside traditional Japanese life.
              </p>
            </article>

            <article data-aos="fade-up" data-aos-delay="300">
              <span>04</span>
              <h3>Nature</h3>
              <p>
                From Mount Fuji to peaceful countryside, Japan offers
                remarkable landscapes throughout the year.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          VISA SERVICES
      ===================================================== */}

      <section className="japan-visa section-compact">
        <div className="japan-container">

          <div className="japan-two-column-heading">

            <div data-aos="fade-right">
              <span className="japan-label">
                WCI VISA SERVICES
              </span>

              <h2>
                Your Japan journey
                <em>starts with preparation.</em>
              </h2>
            </div>

            <p data-aos="fade-left">
              WCI helps applicants understand the appropriate visa category,
              prepare documents and organise their application.
            </p>

          </div>

          <div className="japan-visa-grid">

            {visaServices.map((visa, index) => (
              <article
                className="japan-visa-card"
                key={visa.number}
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <span className="visa-number">
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

      <section className="japan-destinations section-compact">
        <div className="japan-container">

          <div
            className="japan-section-heading"
            data-aos="fade-up"
          >
            <span className="japan-label">
              PLACES TO EXPLORE
            </span>

            <h2>
              Six sides of Japan.
            </h2>
          </div>

          <div className="japan-destination-grid">

            {destinations.map((place, index) => (
              <article
                className="japan-destination-card"
                key={place.title}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >

                <div className="destination-image">
                  <img
                    src={place.image}
                    alt={place.title}
                    loading="lazy"
                  />
                </div>

                <div className="destination-content">
                  <span>{place.subtitle}</span>

                  <h3>{place.title}</h3>

                  <p>{place.text}</p>

                  <div className="destination-arrow">
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

      <section className="japan-story section-compact">
        <div className="japan-container japan-story-grid">

          <div
            className="japan-story-image"
            data-aos="fade-right"
          >
            <img
              src="/images/countries/japan.jpg"
              alt="Japan travel"
              loading="lazy"
            />

            <div className="story-caption">
              <span>WCI TRAVEL GUIDE</span>
              <strong>Japan</strong>
            </div>
          </div>

          <article
            className="japan-story-content"
            data-aos="fade-left"
          >
            <span className="japan-label">
              TRAVEL ARTICLE
            </span>

            <h2>
              Planning your first
              <em>Japan journey.</em>
            </h2>

            <p>
              A first trip to Japan can combine major cities, historic
              neighbourhoods, cultural attractions and regional experiences.
              Building a realistic itinerary is important because each
              destination offers a different experience.
            </p>

            <p>
              Tokyo can provide a modern introduction to the country,
              while Kyoto offers a very different atmosphere through its
              temples, gardens and historic streets.
            </p>

            <p>
              Depending on your travel plans, destinations such as Osaka,
              Nara, Hiroshima and the Mount Fuji region can be added to
              create a more diverse itinerary.
            </p>

            <Link to="/book-consultation" className="japan-text-link">
              Plan Your Japan Trip
              <span>→</span>
            </Link>
          </article>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="japan-process section-compact">
        <div className="japan-container">

          <div
            className="japan-section-heading centered"
            data-aos="fade-up"
          >
            <span className="japan-label">
              THE WCI PROCESS
            </span>

            <h2>
              Simple. Structured. Clear.
            </h2>
          </div>

          <div className="japan-process-grid">

            {process.map((item, index) => (
              <article
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="process-number">
                  {item.number}
                </span>

                <div className="process-line"></div>

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

      <section className="japan-documents section-compact">
        <div className="japan-container japan-documents-grid">

          <div data-aos="fade-right">
            <span className="japan-label">
              DOCUMENT CHECKLIST
            </span>

            <h2>
              Prepare before
              <em>you apply.</em>
            </h2>

            <p>
              Exact requirements can vary depending on the visa category
              and applicant. WCI can help you understand the current
              requirements for your application.
            </p>
          </div>

          <div className="document-list" data-aos="fade-left">

            {documents.map((document, index) => (
              <div
                className="document-item"
                key={document}
              >
                <span>0{index + 1}</span>
                <strong>{document}</strong>
                <i>✓</i>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="japan-faq section-compact">
        <div className="japan-container">

          <div
            className="japan-section-heading centered"
            data-aos="fade-up"
          >
            <span className="japan-label">
              JAPAN VISA FAQ
            </span>

            <h2>
              Questions, answered.
            </h2>
          </div>

          <div className="japan-faq-list">

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
        className="japan-final-cta"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,21,48,.95), rgba(4,21,48,.68)), url('/images/countries/japan.jpg')",
        }}
      >
        <div
          className="japan-container japan-final-inner"
          data-aos="fade-up"
        >
          <span className="japan-label">
            READY TO GO?
          </span>

          <h2>
            Your Japan journey
            <em>starts here.</em>
          </h2>

          <p>
            Speak with WCI about your Japan visa requirements and travel plans.
          </p>

          <Link
            to="/book-consultation"
            className="japan-gold-btn"
          >
            Book a Consultation
            <span>→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}

export default JapanPage;