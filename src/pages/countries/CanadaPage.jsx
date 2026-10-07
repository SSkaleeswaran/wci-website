import React from "react";
import { Link } from "react-router-dom";
import "../../styles/canada-page.css";

const destinations = [
  {
    number: "01",
    title: "Toronto",
    text: "A vibrant international city known for its skyline, multicultural communities, shopping and business environment.",
    image: "/images/countries/canada-toronto.jpg",
  },
  {
    number: "02",
    title: "Vancouver",
    text: "A beautiful coastal city surrounded by mountains, combining urban life with spectacular natural scenery.",
    image: "/images/countries/canada-vancouver.jpg",
  },
  {
    number: "03",
    title: "Montreal",
    text: "A culturally rich city known for its historic neighbourhoods, architecture, food and European character.",
    image: "/images/countries/canada-montreal.jpg",
  },
  {
    number: "04",
    title: "Banff",
    text: "A spectacular destination in the Canadian Rockies, famous for mountains, lakes and outdoor experiences.",
    image: "/images/countries/canada-banff.jpg",
  },
  {
    number: "05",
    title: "Niagara Falls",
    text: "One of Canada's most famous natural attractions and a popular destination for visitors from around the world.",
    image: "/images/countries/canada-niagara.jpg",
  },
  {
    number: "06",
    title: "Calgary",
    text: "A modern western Canadian city offering access to the Rockies and a strong connection to outdoor adventure.",
    image: "/images/countries/canada-calgary.jpg",
  },
];

const visaServices = [
  {
    number: "01",
    title: "Study Visa",
    text: "Guidance for students planning to pursue education in Canada, from profile assessment through application preparation.",
    link: "/services/study-visa",
  },
  {
    number: "02",
    title: "Visitor Visa",
    text: "Support for travellers planning to visit Canada for tourism, family visits or other eligible temporary purposes.",
    link: "/services/tourist-visa",
  },
  {
    number: "03",
    title: "Business Visa",
    text: "Assistance for eligible business travellers visiting Canada for meetings, conferences and related activities.",
    link: "/services/business-visa",
  },
  {
    number: "04",
    title: "Work Visa",
    text: "Professional guidance for applicants exploring eligible work-related opportunities and documentation.",
    link: "/contact",
  },
];

const faqs = [
  {
    question: "What visa can I apply for to visit Canada?",
    answer:
      "The appropriate visa depends on the purpose of your journey. Visitors travelling for tourism or eligible temporary visits may require a visitor visa. WCI can help assess your purpose and documentation before you apply.",
  },
  {
    question: "Can I apply for a Canada Study Visa through WCI?",
    answer:
      "Yes. WCI provides guidance for students planning to study in Canada, including profile assessment, document preparation and application support.",
  },
  {
    question: "Can WCI help with Canada Business Visa applications?",
    answer:
      "WCI provides business visa guidance for eligible applicants travelling for business-related purposes such as meetings, conferences and other permitted activities.",
  },
  {
    question: "What documents are normally required?",
    answer:
      "Requirements depend on the visa category and your individual circumstances. A valid passport and supporting documents relating to your purpose of travel, finances and background may be required.",
  },
  {
    question: "How does the WCI Canada visa process work?",
    answer:
      "The process generally begins with a consultation and profile review, followed by document preparation, application submission and tracking through the relevant process.",
  },
];

function CanadaPage() {
  return (
    <main className="canada-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="canada-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(3, 22, 51, 0.92) 0%,
              rgba(3, 22, 51, 0.68) 38%,
              rgba(3, 22, 51, 0.15) 75%
            ),
            url("/images/countries/canada-toronto.jpg")
          `,
        }}
      >
        <div className="canada-hero-overlay"></div>

        <div className="canada-hero-content">
          <div className="canada-eyebrow">
            <span></span>
            WELL CAREER IMMIGRATION
          </div>

          <h1>
            Discover
            <strong>Canada.</strong>
          </h1>

          <p>
            Plan your journey to Canada with professional guidance,
            clear information and a structured visa application process.
          </p>

          <div className="canada-hero-actions">
            <Link
              to="/book-consultation"
              className="canada-primary-btn"
            >
              Start Your Journey
              <span>→</span>
            </Link>

            <a
              href="#canada-about"
              className="canada-text-link"
            >
              Explore Canada
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="canada-hero-country">
          <img
            src="/images/flags/canada.png"
            alt="Canada flag"
          />

          <span>CANADA</span>
        </div>

        <div className="canada-hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>
      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section
        className="canada-about section-padding"
        id="canada-about"
      >
        <div className="canada-container">

          <div className="canada-section-heading">
            <span className="canada-small-label">
              ABOUT THE COUNTRY
            </span>

            <h2>
              A country built around
              <em>possibility.</em>
            </h2>
          </div>

          <div className="canada-about-grid">

            <div className="canada-about-image">
              <img
                src="/images/countries/canada-toronto.jpg"
                alt="Toronto, Canada"
              />

              <div className="canada-image-caption">
                <span>CANADA</span>
                <strong>01</strong>
              </div>
            </div>

            <div className="canada-about-content">

              <p className="canada-lead">
                Canada is known for its diverse cities, natural landscapes,
                international education and welcoming multicultural
                communities.
              </p>

              <p>
                From the energy of Toronto and Vancouver to the mountains
                of Alberta and the historic character of Quebec, Canada
                offers a wide range of experiences for international
                visitors, students and business travellers.
              </p>

              <p>
                Whether you are planning a holiday, exploring education
                opportunities or travelling for business, understanding
                your purpose and preparing the right documentation is an
                important part of the journey.
              </p>

              <Link
                to="/contact"
                className="canada-inline-link"
              >
                Talk to WCI
                <span>↗</span>
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          WHY CANADA
      ===================================================== */}
      <section className="canada-why">
        <div className="canada-container">

          <div className="canada-why-top">

            <div>
              <span className="canada-small-label light">
                WHY CANADA
              </span>

              <h2>
                More than a destination.
              </h2>
            </div>

            <p>
              Canada brings together education, modern cities, natural
              beauty and international experiences in one destination.
            </p>

          </div>

          <div className="canada-benefits">

            <div className="canada-benefit">
              <span>01</span>
              <h3>World-Class Education</h3>

              <p>
                Canada is home to recognised educational institutions
                and attracts students from around the world.
              </p>
            </div>

            <div className="canada-benefit">
              <span>02</span>
              <h3>Multicultural Cities</h3>

              <p>
                Experience diverse communities, cuisines and cultures
                across Canada's major cities.
              </p>
            </div>

            <div className="canada-benefit">
              <span>03</span>
              <h3>Natural Landscapes</h3>

              <p>
                From the Rocky Mountains to spectacular waterfalls,
                Canada's scenery is one of its defining attractions.
              </p>
            </div>

            <div className="canada-benefit">
              <span>04</span>
              <h3>International Opportunities</h3>

              <p>
                Canada attracts visitors, students and professionals
                from many parts of the world.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          VISA SERVICES
      ===================================================== */}
      <section className="canada-visas section-padding">
        <div className="canada-container">

          <div className="canada-section-heading split">

            <div>
              <span className="canada-small-label">
                WCI VISA SERVICES
              </span>

              <h2>
                Choose the journey
                <em>that fits you.</em>
              </h2>
            </div>

            <p>
              Every journey starts with understanding your purpose,
              profile and documentation requirements.
            </p>

          </div>

          <div className="canada-visa-list">

            {visaServices.map((visa) => (
              <div
                className="canada-visa-item"
                key={visa.number}
              >

                <span className="canada-visa-number">
                  {visa.number}
                </span>

                <div className="canada-visa-main">
                  <h3>{visa.title}</h3>
                  <p>{visa.text}</p>
                </div>

                <Link
                  to={visa.link}
                  className="canada-visa-arrow"
                  aria-label={`Learn more about ${visa.title}`}
                >
                  ↗
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          DESTINATIONS
      ===================================================== */}
      <section className="canada-destinations">
        <div className="canada-container">

          <div className="canada-destination-heading">

            <span className="canada-small-label">
              PLACES TO EXPLORE
            </span>

            <h2>
              Six places.
              <br />
              <em>Countless memories.</em>
            </h2>

          </div>

          <div className="canada-destination-grid">

            {destinations.map((destination) => (
              <article
                className="canada-destination-card"
                key={destination.number}
              >

                <div className="canada-destination-image">

                  <img
                    src={destination.image}
                    alt={destination.title}
                  />

                  <span>{destination.number}</span>

                </div>

                <div className="canada-destination-content">

                  <h3>{destination.title}</h3>

                  <p>{destination.text}</p>

                  <span className="canada-discover">
                    DISCOVER
                    <b>→</b>
                  </span>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          TRAVEL GUIDE
      ===================================================== */}
      <section className="canada-guide section-padding">
        <div className="canada-container">

          <div className="canada-guide-layout">

            <div className="canada-guide-label">

              <span className="canada-small-label">
                WCI TRAVEL GUIDE
              </span>

              <div className="canada-guide-index">
                01
              </div>

            </div>

            <div className="canada-guide-content">

              <h2>
                Planning Your
                <em>Journey to Canada</em>
              </h2>

              <p className="canada-guide-intro">
                A successful international journey begins before you
                board the aircraft. Preparation, documentation and a
                clear travel purpose can make the process more organised.
              </p>

              <div className="canada-guide-points">

                <div>
                  <span>01</span>

                  <h3>Define Your Purpose</h3>

                  <p>
                    Understand whether your journey is for tourism,
                    education, business or another eligible purpose.
                  </p>
                </div>

                <div>
                  <span>02</span>

                  <h3>Prepare Your Documents</h3>

                  <p>
                    Organise the documents that support your application
                    and explain your intended journey.
                  </p>
                </div>

                <div>
                  <span>03</span>

                  <h3>Plan Your Journey</h3>

                  <p>
                    Consider destinations, accommodation, finances
                    and other practical travel arrangements.
                  </p>
                </div>

                <div>
                  <span>04</span>

                  <h3>Apply With Confidence</h3>

                  <p>
                    Review your application carefully before submitting
                    it through the appropriate process.
                  </p>
                </div>

              </div>

              <Link
                to="/contact"
                className="canada-guide-btn"
              >
                Speak With WCI
                <span>→</span>
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="canada-process">
        <div className="canada-container">

          <div className="canada-process-header">

            <span className="canada-small-label light">
              THE WCI APPROACH
            </span>

            <h2>
              From consultation
              <br />
              to <em>application.</em>
            </h2>

          </div>

          <div className="canada-process-line">

            <div className="canada-process-step">
              <span>01</span>
              <h3>Consultation</h3>
              <p>
                Understand your travel purpose and requirements.
              </p>
            </div>

            <div className="canada-process-step">
              <span>02</span>
              <h3>Profile Review</h3>
              <p>
                Review your background and supporting information.
              </p>
            </div>

            <div className="canada-process-step">
              <span>03</span>
              <h3>Documentation</h3>
              <p>
                Organise the documents relevant to your application.
              </p>
            </div>

            <div className="canada-process-step">
              <span>04</span>
              <h3>Application</h3>
              <p>
                Prepare and submit the application through the
                appropriate process.
              </p>
            </div>

            <div className="canada-process-step">
              <span>05</span>
              <h3>Decision</h3>
              <p>
                Follow the application process and receive the outcome.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          DOCUMENTS
      ===================================================== */}
      <section className="canada-documents section-padding">
        <div className="canada-container">

          <div className="canada-documents-grid">

            <div>

              <span className="canada-small-label">
                DOCUMENT PREPARATION
              </span>

              <h2>
                Start with the
                <em>right preparation.</em>
              </h2>

              <p>
                Visa requirements vary according to the application
                category and individual circumstances. Your documents
                should clearly support the purpose of your journey.
              </p>

              <Link
                to="/contact"
                className="canada-outline-btn"
              >
                Get Document Guidance
                <span>→</span>
              </Link>

            </div>

            <div className="canada-document-list">

              <div>
                <span>01</span>
                <strong>Valid Passport</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Financial Documents</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Purpose of Travel</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Supporting Documents</strong>
              </div>

              <div>
                <span>05</span>
                <strong>Academic Documents</strong>
              </div>

              <div>
                <span>06</span>
                <strong>Travel / Accommodation Details</strong>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="canada-faq section-padding">
        <div className="canada-container">

          <div className="canada-faq-header">

            <span className="canada-small-label">
              CANADA VISA FAQ
            </span>

            <h2>
              Questions,
              <em>answered.</em>
            </h2>

          </div>

          <div className="canada-faq-list">

            {faqs.map((faq, index) => (
              <details
                key={index}
                className="canada-faq-item"
              >

                <summary>
                  <span>0{index + 1}</span>
                  {faq.question}
                  <b>+</b>
                </summary>

                <div className="canada-faq-answer">
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
        className="canada-final-cta"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(6, 31, 71, 0.9),
              rgba(6, 31, 71, 0.9)
            ),
            url("/images/countries/canada-toronto.jpg")
          `,
        }}
      >
        <div className="canada-final-overlay"></div>

        <div className="canada-final-content">

          <span className="canada-small-label light">
            YOUR CANADA JOURNEY STARTS HERE
          </span>

          <h2>
            Ready to take
            <em>the next step?</em>
          </h2>

          <p>
            Speak with WCI and understand the right direction
            for your Canada journey.
          </p>

          <Link
            to="/book-consultation"
            className="canada-final-btn"
          >
            Book a Consultation
            <span>→</span>
          </Link>

        </div>
      </section>

    </main>
  );
}

export default CanadaPage;