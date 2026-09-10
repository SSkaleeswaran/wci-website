import React, { useState } from "react";
import About from "../components/sections/About.jsx"

const services = [
  { title: "Visitor Visa", text: "Guidance for visiting family, friends and destinations abroad.", icon: "✈", img: "/images/banners/visitBanner.png" },
  { title: "Tourist Visa", text: "Support for holiday and leisure travel applications.", icon: "◉" , img: "/images/banners/tourBanner.png"},
  { title: "Business Visa", text: "Assistance for professional visits, meetings and business travel.", icon: "↗", img: "/images/banners/businessBanner.png" },
  { title: "Study Visa", text: "Guidance for students planning to study and build their future overseas.", icon: "⌘",img: "/images/banners/eduBanner.png" },
];

const countries = ["Canada", "USA", "UK", "Japan", "Australia", "Schengen", "South Korea", "Netherlands"];

function AboutPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="wci-about">
      <section className="about-orbit-hero"
        style={{
          backgroundImage:
            "url('/images/banners/aboutPage.png')",
        }}>
        <div className="about-orbit-copy">
          <span className="about-kicker">WELL CAREER IMMIGRATION</span>
          <h1>Beyond borders.<br /><em>Built around you.</em></h1>
          {/* <p>
            We help people move from an international ambition to a clearer,
            better-prepared visa journey.
          </p> */}
          <div className="about-hero-actions">
            <a href="#story" className="about-text-link">Discover WCI ↓</a>
          </div>
        </div>

        <div className="about-orbit">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-ring ring-three" />
          <div className="orbit-core"><span>WCI</span><small>GLOBAL<br />GUIDANCE</small></div>
          {countries.map((country, i) => (
            <span key={country} className={`orbit-country country-${i}`}>{country}</span>
          ))}
        </div>
      </section>

      <section id="story" className="about-story">
        <div className="story-marker"> OUR STORY</div>
        <div className="story-grid">
          <div>
            <h2>International plans deserve <span>personal guidance.</span></h2>
          </div>
          <div>
            <p>
              <strong>Well Career Immigration (WCI)</strong> is an immigration and
              visa consultancy focused on helping individuals take their next
              step internationally.
            </p>
            <p>
              With <strong>2+ years in the field</strong>, we provide guidance
              across visitor, tourist, business, study, career and immigration
              requirements. Our approach is simple: understand the applicant,
              clarify the process and help prepare the journey carefully.
            </p>
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="service-intro">
          <span className="about-kicker">WHAT WE PROVIDE</span>
          <h2>One destination.<br /><em>Different reasons.</em></h2>
          <p>Select a service to explore what WCI can help you with.</p>
        </div>
        <div className="service-stage">
          <div className="service-tabs">
            {services.map((service, index) => (
              <button
                key={service.title}
                className={activeService === index ? "service-tab active" : "service-tab"}
                onClick={() => setActiveService(index)}
              >
                <span>0{index + 1}</span>{service.title}<b>↗</b>
              </button>
            ))}
          </div>
          <div
            className="service-detail"
            style={
              services[activeService].img
                ? {
                  backgroundImage: `linear-gradient(
            90deg,
            rgba(11, 42, 91, 0.43),
            rgba(11, 42, 91, 0.39)
          ), url("${services[activeService].img}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
                : {}
            }
          >
            <span className="service-icon">
              {services[activeService].icon}
            </span>

            <div>
              <small>WCI SERVICE / 0{activeService + 1}</small>
              <h3>{services[activeService].title}</h3>
              <p>{services[activeService].text}</p>
            </div>
          </div>
        </div>
      </section>

      <About/>

      <section className="about-reach">
        <div className="reach-heading">
          <span className="about-kicker">OUR GLOBAL REACH</span>
          <h2>Where could<br /><em>you go next?</em></h2>
        </div>
        <div className="country-cloud">
          {countries.map((country, index) => (
            <div className="country-chip" key={country} style={{ "--i": index }}>
              <span>{String(index + 1).padStart(2, "0")}</span>{country}
            </div>
          ))}
        </div>
      </section>

      <section className="about-principles">
        <div className="principle-number"></div>
        <div>
          <span className="about-kicker">WHY WCI</span>
          <h2>Clear process.<br /><em>Human guidance.</em></h2>
        </div>
        <div className="principles-list">
          <article><b>01</b><h3>Personalised</h3><p>Guidance shaped around your travel, study, business or career goal.</p></article>
          <article><b>02</b><h3>Structured</h3><p>Clearer direction through requirements, documentation and application steps.</p></article>
          <article><b>03</b><h3>International</h3><p>Visa support spanning multiple major destinations around the world.</p></article>
        </div>
      </section>

      <section className="about-cta">
        <div>
          <span className="about-kicker">YOUR NEXT CHAPTER</span>
          <h2>Ready to make<br /><em>the move?</em></h2>
        </div>
        <a href="/contact" className="about-circle-cta">Talk to<br />WCI <span>↗</span></a>
      </section>
    </main>
  );
}

export default AboutPage;