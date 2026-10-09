import React from "react";
import { Link } from "react-router-dom";
import "../../styles/australia-page.css";

const destinations = [
  {
    number: "01",
    title: "Sydney",
    subtitle: "Harbour, beaches & city life",
    image: "/images/countryDetailIMG/Sydney.jpg",
  },
  {
    number: "02",
    title: "Melbourne",
    subtitle: "Culture, cafés & creative life",
    image: "/images/countryDetailIMG/Melbourne.jpg",
  },
  {
    number: "03",
    title: "Gold Coast",
    subtitle: "Beaches, sunshine & adventure",
    image: "/images/countryDetailIMG/GoldCoast.jpg",
  },
  {
    number: "04",
    title: "Great Barrier Reef",
    subtitle: "One of Australia's natural icons",
    image: "/images/countryDetailIMG/GreatBarrierReef.jpg",
  },
  {
    number: "05",
    title: "Perth",
    subtitle: "Coastline, lifestyle & western Australia",
    image: "/images/countryDetailIMG/Perth.jpg",
  },
  {
    number: "06",
    title: "Uluru",
    subtitle: "Landscape, culture & ancient heritage",
    image: "/images/countryDetailIMG/Uluru.jpg",
  },
];

const visaServices = [
  {
    number: "01",
    title: "Visitor Visa",
    text: "Guidance for eligible travellers planning a visit to Australia for tourism, holidays or visiting family and friends.",
  },
  {
    number: "02",
    title: "Tourist Visa",
    text: "Support with application preparation for travellers who want to explore Australia's cities, coastline and natural attractions.",
  },
  {
    number: "03",
    title: "Business Visa",
    text: "Guidance for eligible business travellers attending meetings, events or other permitted professional activities.",
  },
  {
    number: "04",
    title: "Study Visa",
    text: "Guidance for students planning to pursue eligible educational opportunities in Australia.",
  },
];

const experiences = [
  {
    number: "01",
    title: "Coastal Life",
    text: "From famous beaches to dramatic coastlines, Australia's relationship with the ocean is part of its identity.",
  },
  {
    number: "02",
    title: "Outdoor Adventure",
    text: "National parks, reefs, deserts and diverse landscapes create countless opportunities to explore.",
  },
  {
    number: "03",
    title: "Multicultural Cities",
    text: "Sydney, Melbourne and other major cities offer diverse food, culture, arts and international communities.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    text: "Understand your purpose, travel plans and individual circumstances.",
  },
  {
    number: "02",
    title: "Documentation",
    text: "Organize the supporting information relevant to your application.",
  },
  {
    number: "03",
    title: "Application",
    text: "Proceed through the appropriate application process with structured guidance.",
  },
  {
    number: "04",
    title: "Next Steps",
    text: "Understand the remaining stages and prepare for the outcome of your application.",
  },
];

const faqs = [
  {
    question: "Which Australian visas does WCI assist with?",
    answer:
      "WCI provides guidance for visitor, tourist, business and study visa applications depending on the applicant's circumstances.",
  },
  {
    question: "Can I visit Australia for tourism?",
    answer:
      "Eligible travellers may visit Australia for permitted tourism purposes through the appropriate visa or travel permission.",
  },
  {
    question: "Can WCI help with Australian study visa applications?",
    answer:
      "Yes. WCI provides study visa guidance and application preparation support for students planning to study in Australia.",
  },
  {
    question: "Does WCI guarantee visa approval?",
    answer:
      "No. Visa decisions are made by the relevant Australian authorities. WCI provides preparation and application guidance.",
  },
];

function AustraliaPage() {
  return (
    <main className="australia-page">

      {/* HERO */}
      <section
        className="australia-hero"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,25,54,.94) 0%, rgba(4,25,54,.72) 45%, rgba(4,25,54,.12) 85%), url('/images/countries/aus-sydny.jpg')",
        }}
      >
        <div className="australia-hero-grid"></div>

        <div className="australia-hero-content">
          <div className="australia-hero-label" data-aos="fade-down">
            WCI / AUSTRALIA
          </div>

          <span
            className="australia-eyebrow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            TRAVEL · BUSINESS · STUDY
          </span>

          <h1 data-aos="fade-up" data-aos-delay="180">
            Go beyond
            <br />
            <em>the horizon.</em>
          </h1>

          <p data-aos="fade-up" data-aos-delay="280">
            Discover Australia's cities, coastline, culture and extraordinary
            landscapes with professional visa guidance from WCI.
          </p>

          <div
            className="australia-hero-actions"
            data-aos="fade-up"
            data-aos-delay="380"
          >
            <Link to="/contact" className="australia-primary-btn">
              Start Your Journey
              <span>↗</span>
            </Link>

            <a href="#australia-intro" className="australia-scroll-link">
              Explore Australia
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="australia-hero-coordinates">
          <span>25° 16′ S</span>
          <span>133° 46′ E</span>
        </div>

        <div className="australia-hero-bottom">
          <span>AUSTRALIA</span>
          <span>WCI IMMIGRATION</span>
        </div>
      </section>

      {/* INTRO */}
      <section id="australia-intro" className="australia-intro">
        <div className="australia-big-number">01</div>

        <div className="australia-intro-layout">
          <div className="australia-intro-label">
            <span>ABOUT AUSTRALIA</span>
            <div className="australia-line"></div>
            <small>THE LAND DOWN UNDER</small>
          </div>

          <div className="australia-intro-main">
            <h2 data-aos="fade-up">
              A different
              <br />
              kind of <em>journey.</em>
            </h2>

            <div className="australia-intro-text">
              <p data-aos="fade-up" data-aos-delay="100">
                Australia is known for its distinctive combination of modern
                cities, expansive landscapes, beaches, wildlife and outdoor
                experiences.
              </p>

              <p data-aos="fade-up" data-aos-delay="180">
                Whether you are travelling for tourism, business or education,
                understanding your visa pathway and preparing the appropriate
                documentation are important parts of planning your journey.
              </p>
            </div>
          </div>
        </div>

        <div className="australia-stats" data-aos="fade-up">
          <div>
            <strong>01</strong>
            <span>Island continent</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Natural experiences</span>
          </div>

          <div>
            <strong>AU</strong>
            <span>Global study destination</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="australia-experiences">
        <div className="australia-experience-image" data-aos="fade-right">
          <img
            src="/images/countries/aus-sydny.jpg"
            alt="Sydney Australia"
          />

          <div className="australia-image-caption">
            <span>AUSTRALIA</span>
            <span>EXPLORE FURTHER</span>
          </div>
        </div>

        <div className="australia-experience-content">
          <span className="australia-section-label" data-aos="fade-up">
            WHY AUSTRALIA
          </span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            Where the
            <br />
            journey becomes
            <br />
            <em>the story.</em>
          </h2>

          <p data-aos="fade-up" data-aos-delay="180">
            Australia offers a remarkable variety of experiences, from
            energetic urban centres and famous beaches to remote landscapes
            and natural environments.
          </p>

          <div className="australia-experience-list">
            {experiences.map((item, index) => (
              <div
                key={item.number}
                data-aos="fade-up"
                data-aos-delay={250 + index * 80}
              >
                <span>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISA SERVICES */}
      <section className="australia-services">
        <div className="australia-services-heading">
          <div>
            <span className="australia-section-label">
              WCI VISA SERVICES
            </span>

            <h2 data-aos="fade-up">
              Your purpose.
              <br />
              <em>Your pathway.</em>
            </h2>
          </div>

          <p data-aos="fade-left">
            Different travel purposes require different preparation. WCI helps
            you understand your application pathway and organize your
            supporting information.
          </p>
        </div>

        <div className="australia-services-grid">
          {visaServices.map((service, index) => (
            <article
              className="australia-service-card"
              key={service.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="australia-service-top">
                <span>{service.number}</span>
                <i>↗</i>
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <div className="australia-service-line"></div>
            </article>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="australia-destinations">
        <div className="australia-destination-heading">
          <div>
            <span className="australia-section-label">
              PLACES TO EXPLORE
            </span>

            <h2 data-aos="fade-up">
              Australia,
              <br />
              in <em>six frames.</em>
            </h2>
          </div>

          <p data-aos="fade-left">
            From major coastal cities to extraordinary natural landscapes,
            these destinations offer just a glimpse of what Australia has to
            explore.
          </p>
        </div>

        <div className="australia-destination-grid">
          {destinations.map((destination, index) => (
            <article
              className={`australia-destination-card ${
                index === 1 || index === 4
                  ? "australia-destination-offset"
                  : ""
              }`}
              key={destination.number}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <img
                src={destination.image}
                alt={destination.title}
              />

              <div className="australia-destination-overlay"></div>

              <div className="australia-destination-number">
                {destination.number}
              </div>

              <div className="australia-destination-info">
                <div>
                  <h3>{destination.title}</h3>
                  <p>{destination.subtitle}</p>
                </div>

                {/* <span>↗</span> */}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TRAVEL GUIDE */}
      <section className="australia-guide">
        <div className="australia-guide-watermark">AU</div>

        <div className="australia-guide-inner">
          <div className="australia-guide-meta">
            <span>WCI TRAVEL GUIDE</span>
            <small>AUSTRALIA / GUIDE 01</small>
          </div>

          <article className="australia-guide-content">
            <span className="australia-guide-kicker">
              A FIRST-TIME TRAVELLER'S GUIDE
            </span>

            <h2 data-aos="fade-up">
              Start with
              <br />
              a plan.
              <br />
              <em>Then explore.</em>
            </h2>

            <p data-aos="fade-up" data-aos-delay="100">
              Australia's size means that planning your itinerary can make a
              significant difference to your experience. Choose destinations
              based on the time available and the type of journey you want.
            </p>

            <p data-aos="fade-up" data-aos-delay="180">
              A city-focused trip can offer food, culture, shopping and
              architecture, while a longer itinerary can combine coastal
              destinations, national parks and Australia's distinctive
              landscapes.
            </p>

            <Link
              to="/contact"
              className="australia-guide-link"
              data-aos="fade-up"
              data-aos-delay="260"
            >
              Discuss Your Plans
              <span>↗</span>
            </Link>
          </article>
        </div>
      </section>

      {/* PROCESS */}
      <section className="australia-process">
        <div className="australia-process-heading">
          <span className="australia-section-label">
            THE WCI PROCESS
          </span>

          <h2 data-aos="fade-up">
            Four steps.
            <br />
            <em>One direction.</em>
          </h2>
        </div>

        <div className="australia-process-grid">
          {processSteps.map((step, index) => (
            <div
              className="australia-process-item"
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="australia-process-number">
                {step.number}
              </div>

              <div className="australia-process-dot"></div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="australia-documents">
        <div className="australia-documents-inner">
          <div>
            <span className="australia-section-label">
              PREPARATION
            </span>

            <h2 data-aos="fade-up">
              Get the
              <br />
              details <em>right.</em>
            </h2>

            <p data-aos="fade-up" data-aos-delay="100">
              Requirements depend on your visa route and individual
              circumstances. Your preparation may include documents such as:
            </p>
          </div>

          <div className="australia-document-list">
            <div data-aos="fade-left">
              <span>01</span>
              <strong>Valid Passport</strong>
            </div>

            <div data-aos="fade-left" data-aos-delay="80">
              <span>02</span>
              <strong>Application Information</strong>
            </div>

            <div data-aos="fade-left" data-aos-delay="160">
              <span>03</span>
              <strong>Financial Evidence</strong>
            </div>

            <div data-aos="fade-left" data-aos-delay="240">
              <span>04</span>
              <strong>Travel / Purpose Documents</strong>
            </div>

            <div data-aos="fade-left" data-aos-delay="320">
              <span>05</span>
              <strong>Supporting Documents</strong>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="australia-faq">
        <div className="australia-faq-inner">
          <div className="australia-faq-heading">
            <span className="australia-section-label">FAQ</span>

            <h2 data-aos="fade-up">
              Questions
              <br />
              before
              <br />
              <em>departure.</em>
            </h2>

            <p data-aos="fade-up" data-aos-delay="100">
              A few common questions about planning an Australian visa
              journey.
            </p>
          </div>

          <div className="australia-faq-list">
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

                <div>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="australia-final"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,25,54,.96), rgba(4,25,54,.68)), url('/images/countries/aus-sydny.jpg')",
        }}
      >
        <div className="australia-final-circle australia-circle-one"></div>
        <div className="australia-final-circle australia-circle-two"></div>

        <div className="australia-final-content">
          <span data-aos="fade-up">WELL CAREER IMMIGRATION</span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            Your next
            <br />
            destination
            <br />
            <em>could be Australia.</em>
          </h2>

          <p data-aos="fade-up" data-aos-delay="200">
            Tell us about your travel, business or study plans and let WCI
            help you understand the next step.
          </p>

          <Link
            to="/contact"
            className="australia-final-button"
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

export default AustraliaPage;