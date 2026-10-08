import React from "react";
import { Link } from "react-router-dom";
import "../../styles/schengen-page.css";

const destinations = [
  {
    title: "Germany",
    subtitle: "Berlin • Munich • Frankfurt",
    image: "/images/countries/schengen-germany.jpg",
    text: "A major European destination for higher education, business, technology, culture and international travel.",
  },
  {
    title: "Netherlands",
    subtitle: "Amsterdam • Rotterdam • Eindhoven",
    image: "/images/countries/schengen-netherlands.jpg",
    text: "Known for international education, innovative industries, historic cities and a highly connected European lifestyle.",
  },
  {
    title: "France",
    subtitle: "Paris • Lyon • Bordeaux",
    image: "/images/countries/schengen-france.jpg",
    text: "Explore world-renowned culture, universities, architecture, business centres and historic European destinations.",
  },
  {
    title: "Italy",
    subtitle: "Milan • Rome • Bologna",
    image: "/images/countries/schengen-italy.jpg",
    text: "A destination combining education, design, business, history, architecture and some of Europe's most recognised cities.",
  },
  {
    title: "Sweden",
    subtitle: "Stockholm • Gothenburg • Lund",
    image: "/images/countries/schengen-sweden.jpg",
    text: "Discover a modern European destination known for innovation, technology, education and quality of life.",
  },
  {
    title: "Finland",
    subtitle: "Helsinki • Tampere • Turku",
    image: "/images/countries/schengen-finland.jpg",
    text: "Explore a Nordic destination recognised for education, innovation, technology and distinctive natural landscapes.",
  },
];

const experiences = [
  {
    number: "01",
    title: "European Travel",
    text: "Plan eligible short-stay travel across participating Schengen destinations according to the conditions of your visa.",
  },
  {
    number: "02",
    title: "Education Destinations",
    text: "Explore European countries that are also popular destinations for international students and higher education.",
  },
  {
    number: "03",
    title: "Business Travel",
    text: "Prepare for eligible meetings, conferences and other permitted short-term business activities in Europe.",
  },
  {
    number: "04",
    title: "Culture & Lifestyle",
    text: "Experience Europe's different languages, cuisines, architecture, traditions, cities and landscapes.",
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
    title: "Business Visa",
    text: "Support for eligible applicants travelling for meetings, conferences and other permitted short-term business purposes.",
  },
  {
    number: "03",
    title: "Travel Planning",
    text: "Understand your itinerary, main destination and supporting documents before preparing your application.",
  },
  {
    number: "04",
    title: "Study Pathway Guidance",
    text: "If your goal is long-term education, WCI can help you understand that country's relevant study visa or permit pathway.",
  },
];

const process = [
  {
    number: "01",
    title: "Consultation",
    text: "Understand your purpose of travel, destination, itinerary and the pathway that best matches your plans.",
  },
  {
    number: "02",
    title: "Destination Planning",
    text: "Review your main destination and organise the relevant travel or visa pathway.",
  },
  {
    number: "03",
    title: "Document Preparation",
    text: "Organise the supporting documents relevant to your individual application.",
  },
  {
    number: "04",
    title: "Application",
    text: "Review your application before submission and guide you through the next steps.",
  },
];

const documents = [
  "Valid passport",
  "Completed visa application",
  "Recent photograph",
  "Travel itinerary",
  "Accommodation details",
  "Travel insurance",
  "Financial evidence",
  "Supporting documents",
];

const faqs = [
  {
    question: "What is a Schengen visa?",
    answer:
      "A Schengen visa is generally used for eligible short stays in participating Schengen countries, subject to the conditions of the visa and applicable immigration rules.",
  },
  {
    question: "Can I visit multiple European countries?",
    answer:
      "Depending on the visa issued and your travel circumstances, a Schengen visa can allow travel across multiple participating countries. Your itinerary and applicable rules should be considered before applying.",
  },
  {
    question: "Is a Schengen visa the same as a study visa?",
    answer:
      "No. A standard Schengen short-stay visa is not generally the route for long-term study. Students planning long-term education normally need to follow the relevant country's national study visa or residence permit pathway.",
  },
  {
    question: "Can I travel to Germany with a Schengen visa?",
    answer:
      "Germany is part of the Schengen Area, so eligible short-stay travel to Germany can be possible under the conditions of an appropriate Schengen visa.",
  },
  {
    question: "Which country should I apply through?",
    answer:
      "The appropriate application authority generally depends on your main destination and the circumstances of your trip. WCI can help you understand the appropriate pathway based on your itinerary.",
  },
  {
    question: "What documents are required?",
    answer:
      "Requirements vary according to the applicant, travel purpose and itinerary. Passport, application documents, itinerary, accommodation information, financial evidence, insurance and other supporting documents may be required.",
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
            "linear-gradient(90deg, rgba(5,20,45,.95) 0%, rgba(5,20,45,.72) 48%, rgba(5,20,45,.16) 100%), url('/images/countries/schengen-nature.jpg')",
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
              Explore European travel, business and education destinations
              with professional guidance for your Schengen and country-specific
              visa pathways.
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
              One European region.
              <em>Many opportunities.</em>
            </h2>
          </div>

          <div
            className="sc-intro-copy"
            data-aos="fade-left"
          >
            <p>
              The Schengen Area brings together participating European
              countries under common short-stay travel rules, allowing
              eligible travellers to plan journeys across multiple
              destinations.
            </p>

            <p>
              Europe is also home to major education and business
              destinations. Germany, the Netherlands, France, Italy,
              Sweden and Finland are among the countries applicants may
              consider for different long-term plans.
            </p>

            <p>
              It is important to understand the difference between a
              short-stay Schengen visa and the national visa or residence
              pathway required for long-term study or other purposes.
            </p>

            <div className="sc-mini-line">
              <span></span>
              <strong>WCI EUROPE VISA GUIDANCE</strong>
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
            <strong>Schengen Type</strong>
            <p>Short Stay</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>03</span>
            <strong>Popular For</strong>
            <p>Travel • Business</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>04</span>
            <strong>Education</strong>
            <p>Country-Specific Pathways</p>
          </div>

        </div>
      </section>


      {/* =====================================================
          WHY EUROPE
      ===================================================== */}

      <section className="sc-section sc-experiences">
        <div className="sc-container">

          <div
            className="sc-heading sc-centered"
            data-aos="fade-up"
          >
            <span className="sc-label">
              WHY CONSIDER EUROPE
            </span>

            <h2>
              One European region.
              <em>Different possibilities.</em>
            </h2>

            <p>
              Whether your goal is a short European journey, business
              travel or exploring long-term education opportunities,
              understanding the right country and visa pathway is essential.
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
                Choose the right
                <em>European pathway.</em>
              </h2>

            </div>

            <p data-aos="fade-left">
              WCI helps applicants understand their purpose of travel,
              destination and supporting documentation before moving
              forward with the appropriate visa pathway.
            </p>

          </div>

          <div className="sc-visa-grid">

            {visaServices.map((visa, index) => (
              <article
                className="sc-visa-card"
                key={visa.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
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
              Explore Europe's
              <em>leading destinations.</em>
            </h2>

            <p className="sc-section-intro">
              These countries offer a combination of education,
              business, culture and travel opportunities. Long-term
              study or residence requires the relevant national pathway.
            </p>

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
                    alt={`${place.title} - ${place.subtitle}`}
                    loading="lazy"
                  />

                </div>

                <div className="sc-destination-content">

                  <span>
                    {place.subtitle}
                  </span>

                  <h3>
                    {place.title}
                  </h3>

                  <p>
                    {place.text}
                  </p>

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
          TRAVEL + EDUCATION GUIDE
      ===================================================== */}

      <section className="sc-section sc-story">

        <div className="sc-container sc-story-grid">

          <div
            className="sc-story-image"
            data-aos="fade-right"
          >

            <img
              src="/images/countries/schengen-nature.jpg"
              alt="Europe travel and destinations"
              loading="lazy"
            />

            <div className="sc-story-caption">
              <span>WCI EUROPE GUIDE</span>
              <strong>Travel • Study • Business</strong>
            </div>

          </div>


          <article
            className="sc-story-content"
            data-aos="fade-left"
          >

            <span className="sc-label">
              EUROPE GUIDE
            </span>

            <h2>
              Choose the country
              <em>that matches your goal.</em>
            </h2>

            <p>
              Europe offers very different opportunities depending on
              your purpose. Germany is well known for higher education,
              technology and business, while the Netherlands offers
              international education and innovative industries.
            </p>

            <p>
              France and Italy combine universities, business centres,
              culture and historic cities. Sweden and Finland are also
              recognised for education, technology and innovation.
            </p>

            <p>
              If your plan is a short visit, a Schengen visa may be the
              appropriate pathway when you meet the applicable
              requirements. If your goal is long-term study, the relevant
              country's national study visa or residence pathway should
              be considered instead.
            </p>

            <Link
              to="/contact"
              className="sc-text-link"
            >
              Discuss Your Europe Plans
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
              <em>your European pathway.</em>
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

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

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
              <em>for your chosen pathway.</em>
            </h2>

            <p>
              Requirements vary depending on your destination,
              travel purpose and individual circumstances. WCI can
              help you understand the documents relevant to your
              application.
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
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {document}
                </strong>

                <i>
                  ✓
                </i>

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
              EUROPE VISA FAQ
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

                  <span>
                    {faq.question}
                  </span>

                  <b>
                    +
                  </b>

                </summary>

                <p>
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
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
            READY TO PLAN?
          </span>

          <h2>
            Your European journey
            <em>starts here.</em>
          </h2>

          <p>
            Speak with WCI about your European travel,
            business or education plans.
          </p>

          <Link
            to="/contact"
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