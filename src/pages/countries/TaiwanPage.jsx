import { Link } from "react-router-dom";
import { useState } from "react";


const attractions = [
  {
    number: "01",
    title: "Taipei 101",
    text: "Experience one of Taiwan's most recognizable landmarks and enjoy panoramic views across Taipei.",
  },
  {
    number: "02",
    title: "Jiufen",
    text: "Explore the atmospheric mountain town known for its historic streets, tea houses and traditional character.",
  },
  {
    number: "03",
    title: "Sun Moon Lake",
    text: "Discover one of Taiwan's most scenic destinations, surrounded by mountains and peaceful lake views.",
  },
  {
    number: "04",
    title: "Taroko",
    text: "Experience dramatic landscapes, marble cliffs and spectacular natural scenery in one of Taiwan's famous regions.",
  },
  {
    number: "05",
    title: "Shilin Night Market",
    text: "Discover Taiwanese street food, shopping and the lively atmosphere of one of Taipei's best-known night markets.",
  },
  {
    number: "06",
    title: "Longshan Temple",
    text: "Explore an important cultural and spiritual landmark and experience a different side of Taipei.",
  },
];

const visaServices = [
  {
    number: "01",
    title: "Tourist Visa",
    text: "Guidance for travellers planning a holiday, sightseeing trip or personal visit to Taiwan.",
  },
  {
    number: "02",
    title: "Business Visa",
    text: "Support for eligible business-related travel and professional visits to Taiwan.",
  },
];

const experiences = [
  {
    icon: "01",
    title: "Taste Taiwan",
    text: "Discover local cuisine, street food, tea culture and vibrant night markets.",
  },
  {
    icon: "02",
    title: "Explore Culture",
    text: "Experience temples, traditional streets, historic towns and local traditions.",
  },
  {
    icon: "03",
    title: "Discover Nature",
    text: "Travel beyond the cities and experience mountains, lakes, coastlines and scenic landscapes.",
  },
  {
    icon: "04",
    title: "Experience Taipei",
    text: "Combine modern city life, shopping, architecture, food and cultural attractions.",
  },
];

const faqs = [
  {
    question: "What type of Taiwan visa does WCI assist with?",
    answer:
      "WCI can guide eligible clients regarding the Taiwan visa service relevant to their purpose of travel. Contact our team to discuss your individual requirements.",
  },
  {
    question: "Can I apply for a Taiwan visa for tourism?",
    answer:
      "Tourism is one of the main purposes for international travel to Taiwan. Our team can help you understand the application process and documentation relevant to your case.",
  },
  {
    question: "What documents are generally required?",
    answer:
      "Requirements depend on the visa category and individual circumstances. Common supporting documents may include a valid passport, photographs, application information, travel details and financial or supporting evidence.",
  },
  {
    question: "Can WCI help with the application process?",
    answer:
      "Yes. Our team can provide guidance on document preparation, application requirements and the overall visa process.",
  },
];

function TaiwanPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="taiwan-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="taiwan-hero"
        style={{
          backgroundImage:
            "url('/images/countries/taiwan.jpg')",
        }}
      >
        <div className="taiwan-hero-overlay"></div>

        <div className="container">
          <div
            className="taiwan-hero-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="taiwan-hero-country">
              <img
                src="/images/flags/taiwan-flag.png"
                alt="Taiwan flag"
              />

              <span>TAIWAN</span>
            </div>

            <h1>
              Discover
              <br />
              <span>Taiwan.</span>
            </h1>

            <p>
              A destination where vibrant cities, traditional culture,
              incredible food and beautiful landscapes come together.
            </p>

            <div className="taiwan-hero-actions">
              <Link
                to="/contact"
                className="taiwan-primary-button"
              >
                Plan Your Journey
                <span>→</span>
              </Link>

              <a
                href="#taiwan-visa"
                className="taiwan-secondary-button"
              >
                Explore Visa Services
              </a>
            </div>
          </div>
        </div>

        <div className="taiwan-hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="taiwan-intro">

        <div className="container">

          <div className="taiwan-intro-grid">

            <div
              className="taiwan-section-heading"
              data-aos="fade-right"
            >
              <span className="taiwan-eyebrow">
                ABOUT TAIWAN
              </span>

              <h2>
                A small island with
                <span> endless stories.</span>
              </h2>
            </div>

            <div
              className="taiwan-intro-text"
              data-aos="fade-left"
            >
              <p>
                Taiwan is a fascinating destination known for its
                modern cities, traditional temples, lively night
                markets and diverse natural landscapes.
              </p>

              <p>
                From the energy of Taipei to peaceful mountain towns,
                scenic lakes and coastal destinations, Taiwan offers
                travellers a combination of culture, food, history
                and adventure.
              </p>

              <div className="taiwan-intro-line"></div>

              <span>
                YOUR JOURNEY. YOUR EXPERIENCE. YOUR STORY.
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY TAIWAN
      ===================================================== */}

      <section className="taiwan-why">

        <div className="container">

          <div
            className="taiwan-section-top"
            data-aos="fade-up"
          >
            <span className="taiwan-eyebrow">
              WHY VISIT TAIWAN
            </span>

            <h2>
              More than a destination.
              <br />
              <span>It's an experience.</span>
            </h2>
          </div>


          <div className="taiwan-experience-grid">

            {experiences.map((item, index) => (
              <div
                className="taiwan-experience-card"
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="taiwan-experience-number">
                  {item.icon}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className="taiwan-card-arrow">
                  ↗
                </span>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VISA SERVICES
      ===================================================== */}

      <section
        className="taiwan-visa"
        id="taiwan-visa"
      >

        <div className="container">

          <div className="taiwan-visa-grid">

            <div
              className="taiwan-visa-heading"
              data-aos="fade-right"
            >
              <span className="taiwan-eyebrow">
                WCI VISA SERVICES
              </span>

              <h2>
                Your Taiwan journey
                <span> starts here.</span>
              </h2>

              <p>
                Understanding the right visa pathway is an important
                part of planning your international journey. Our team
                provides guidance based on your purpose of travel and
                individual circumstances.
              </p>

              <Link
                to="/contact"
                className="taiwan-dark-button"
              >
                Speak With Our Team
                <span>→</span>
              </Link>
            </div>


            <div className="taiwan-visa-cards">

              {visaServices.map((service, index) => (
                <div
                  className="taiwan-visa-card"
                  key={service.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <span>
                    {service.number}
                  </span>

                  <div>
                    <h3>{service.title}</h3>

                    <p>{service.text}</p>
                  </div>

                  <div className="taiwan-visa-card-line"></div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TOURIST SPOTS
      ===================================================== */}

      <section className="taiwan-attractions">

        <div className="container">

          <div
            className="taiwan-attractions-heading"
            data-aos="fade-up"
          >
            <div>
              <span className="taiwan-eyebrow">
                PLACES TO EXPLORE
              </span>

              <h2>
                Discover the
                <span> highlights of Taiwan.</span>
              </h2>
            </div>

            <p>
              From iconic city landmarks to historic towns and
              spectacular natural landscapes, Taiwan offers
              experiences for every kind of traveller.
            </p>
          </div>


          <div className="taiwan-attraction-grid">

            {attractions.map((place, index) => (
              <article
                className="taiwan-attraction-card"
                key={place.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <span className="taiwan-attraction-number">
                  {place.number}
                </span>

                <h3>{place.title}</h3>

                <p>{place.text}</p>

                <span className="taiwan-attraction-link">
                  Explore
                  <span>→</span>
                </span>
              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAVEL ARTICLE
      ===================================================== */}

      <section className="taiwan-article">

        <div className="container">

          <div className="taiwan-article-grid">

            <div
              className="taiwan-article-label"
              data-aos="fade-right"
            >
              <span className="taiwan-eyebrow">
                TRAVEL GUIDE
              </span>

              <strong>
                01
              </strong>

              <span>
                TAIWAN
                <br />
                TRAVEL NOTES
              </span>
            </div>


            <article
              className="taiwan-article-content"
              data-aos="fade-left"
            >
              <h2>
                A first-time traveller's
                <span> guide to Taiwan.</span>
              </h2>

              <p>
                Planning your first trip to Taiwan can be an exciting
                experience. Taipei is often a natural starting point,
                combining modern architecture, traditional temples,
                shopping districts and famous food markets.
              </p>

              <p>
                Travellers looking to experience more of Taiwan can
                explore historic mountain towns, scenic lakes and
                beautiful natural areas outside the capital.
              </p>

              <p>
                One of the best parts of travelling through Taiwan is
                the contrast between modern city life and traditional
                culture. A single journey can include skyscrapers,
                temples, night markets, tea houses and mountain
                landscapes.
              </p>

              <div className="taiwan-article-highlight">
                <span>WCI TRAVEL NOTE</span>

                <p>
                  Plan your itinerary around the experiences you
                  genuinely want to have rather than trying to see
                  everything in one trip.
                </p>
              </div>
            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISA PROCESS
      ===================================================== */}

      <section className="taiwan-process">

        <div className="container">

          <div
            className="taiwan-process-heading"
            data-aos="fade-up"
          >
            <span className="taiwan-eyebrow">
              THE WCI PROCESS
            </span>

            <h2>
              From consultation
              <span> to application.</span>
            </h2>
          </div>


          <div className="taiwan-process-line">

            <div
              className="taiwan-process-step"
              data-aos="fade-up"
            >
              <span>01</span>

              <h3>Consultation</h3>

              <p>
                Understand your travel purpose and the relevant
                visa pathway.
              </p>
            </div>


            <div
              className="taiwan-process-step"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <span>02</span>

              <h3>Documents</h3>

              <p>
                Prepare the required information and supporting
                documentation.
              </p>
            </div>


            <div
              className="taiwan-process-step"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <span>03</span>

              <h3>Application</h3>

              <p>
                Receive guidance through the application and
                submission process.
              </p>
            </div>


            <div
              className="taiwan-process-step"
              data-aos="fade-up"
              data-aos-delay="360"
            >
              <span>04</span>

              <h3>Decision</h3>

              <p>
                Stay informed throughout the process until the
                relevant decision is received.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DOCUMENTS
      ===================================================== */}

      <section className="taiwan-documents">

        <div className="container">

          <div className="taiwan-documents-grid">

            <div
              className="taiwan-documents-heading"
              data-aos="fade-right"
            >
              <span className="taiwan-eyebrow">
                PREPARE WITH CONFIDENCE
              </span>

              <h2>
                Documents matter.
                <span> Preparation matters more.</span>
              </h2>

              <p>
                Visa requirements can vary depending on your purpose
                of travel and personal circumstances. Our team can
                help you understand the documentation relevant to
                your application.
              </p>
            </div>


            <div
              className="taiwan-document-list"
              data-aos="fade-left"
            >

              <div>
                <span>01</span>
                <p>Valid passport</p>
              </div>

              <div>
                <span>02</span>
                <p>Application information</p>
              </div>

              <div>
                <span>03</span>
                <p>Recent photographs</p>
              </div>

              <div>
                <span>04</span>
                <p>Travel information</p>
              </div>

              <div>
                <span>05</span>
                <p>Financial / supporting documents</p>
              </div>

              <div>
                <span>06</span>
                <p>Additional documents where applicable</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="taiwan-faq">

        <div className="container">

          <div className="taiwan-faq-grid">

            <div
              className="taiwan-faq-heading"
              data-aos="fade-right"
            >
              <span className="taiwan-eyebrow">
                TAIWAN VISA FAQ
              </span>

              <h2>
                Questions before
                <span> you travel?</span>
              </h2>

              <p>
                Here are some common questions travellers ask before
                beginning their Taiwan visa journey.
              </p>

              <Link
                to="/faq"
                className="taiwan-faq-link"
              >
                View All FAQs
                <span>→</span>
              </Link>
            </div>


            <div
              className="taiwan-faq-list"
              data-aos="fade-left"
            >

              {faqs.map((faq, index) => (
                <div
                  className={`taiwan-faq-item ${
                    activeFaq === index
                      ? "active"
                      : ""
                  }`}
                  key={faq.question}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(
                        activeFaq === index
                          ? null
                          : index
                      )
                    }
                  >
                    <span>
                      {faq.question}
                    </span>

                    <strong>
                      {activeFaq === index
                        ? "−"
                        : "+"}
                    </strong>
                  </button>

                  {activeFaq === index && (
                    <div className="taiwan-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="taiwan-final-cta">

        <div className="taiwan-final-cta-pattern"></div>

        <div className="container">

          <div
            className="taiwan-final-cta-content"
            data-aos="fade-up"
          >
            <span className="taiwan-eyebrow">
              READY TO EXPLORE TAIWAN?
            </span>

            <h2>
              Your Taiwan journey
              <br />
              <span>starts with the right guidance.</span>
            </h2>

            <p>
              Tell us about your travel plans and let our team
              guide you through the next step.
            </p>

            <Link
              to="/contact"
              className="taiwan-cta-button"
            >
              Book a Consultation
              <span>→</span>
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}

export default TaiwanPage;