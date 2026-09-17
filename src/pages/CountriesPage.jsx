import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/countries-page.css";

const countries = [
  {
    id: 1,
    flag: "/images/flags/united-states-of-america.png",
    image: "/images/countries/usa-statue.avif",
    name: "United States",
    code: "USA",
    tagline: "Business & tourism",
    summary: [
      "Usually approves multiple-entry visas valid for 10 years (B1, B2)",
      "6 months maximum duration of stay",
      "Acceptable for business and tourism purposes (B1, B2)",
    ],
    details: [
      "Visa-free entry to 40 countries, including Europe",
      "Ages below 14 and above 80 are exempted from the interview",
      "5 to 6 days processing time (from the interview date)",
    ],
  },
  {
    id: 2,
    flag: "/images/flags/united-kingdom.png",
    image: "/images/countries/london-clock.jpg",
    name: "United Kingdom",
    code: "UK",
    tagline: "Study, business & family",
    summary: [
      "Visa for single or multiple entries",
      "Visa validity up to 10 years and a minimum of 6 months",
      "Free entry to the island of Ireland and its premises",
    ],
    details: [
      "Six-month maximum duration of stay",
      "Ideal for business, tourism, visiting family and friends, and UK visits",
      "Processing takes 20 to 25 working days",
    ],
  },
  {
    id: 3,
    flag: "/images/flags/canada.png",
    image: "/images/countries/canada-toronto.jpg",
    name: "Canada",
    code: "CAN",
    tagline: "Study & migration",
    summary: [
      "Visa type: multiple-entry visa",
      "Validity: up to 10 years (or passport expiry, whichever is earlier)",
      "Minimum stay: 6 months per visit",
    ],
    details: [
      "Maximum stay duration: 6 months per entry",
      "Processing time: approximately 25 to 30 working days",
      "Children under 14 years are exempt from biometrics",
    ],
  },
  {
    id: 4,
    flag: "/images/flags/schengen.png",
    image: "/images/countries/schengen-nature.jpg",
    name: "Schengen Area",
    code: "SCH",
    tagline: "29 countries, one visa",
    summary: [
      "Visa type: single or multiple entry",
      "Validity: up to 3 months per entry",
      "Processing time: approximately 10 to 15 working days",
    ],
    details: [
      "Recent photograph as per specifications",
      "Last 3 months bank statement",
      "Visa fee waived for applicants under the age of 6 and valid for entry into 29 Schengen countries",
    ],
  },
  {
    id: 5,
    flag: "/images/flags/south-korea.png",
    image: "/images/countries/s-korea4.avif",
    name: "South Korea",
    code: "KOR",
    tagline: "Tourism & business",
    summary: [
      "Visa types: single, double, or multiple entry",
      "Processing time: approximately 10 to 15 working days",
      "Requires a valid passport with at least 6 months validity",
    ],
    details: [
      "Visa fee is waived for applicants under the age of 6",
      "Children below 14 years are exempt from biometrics",
      "Applicants must apply before travelling; visa on arrival is not available for Indian citizens",
    ],
  },
  {
    id: 6,
    flag: "/images/flags/japan.png",
    image: "/images/countries/japan.jpg",
    name: "Japan",
    code: "JPN",
    tagline: "Tourism & business",
    summary: [
      "Visa types: single entry, double entry, or multiple entry",
      "Processing time: minimum 6 working days",
      "Application method: submit through VFS Global; no prior appointment needed",
    ],
    details: [
      "Requires a valid passport with at least 6 months validity",
      "Completed and signed visa application form",
      "Recent passport-sized photograph (45mm × 35mm) with 70–80% face visibility",
    ],
  },
  {
    id: 7,
    flag: "/images/flags/australia.png",
    image: "/images/countries/aus-sydny.jpg",
    name: "Australia",
    code: "AUS",
    tagline: "Study, work & tourism",
    summary: [
      "Visa types: single or multiple entry",
      "Visa validity: up to 12 months",
      "Passport requirement: valid for at least 6 months from travel date",
    ],
    details: [
      "Financial proof: attested bank statements for the last 6 months",
      "Recent photograph (35mm × 45mm) with 80% face coverage",
      "Permitted to attend short-term courses or training programs up to 3 months",
    ],
  },
  {
    id: 8,
    flag: "/images/flags/new-z-flag.png",
    image: "/images/countries/new-zland.jpg",
    name: "New Zealand",
    code: "NZ",
    tagline: "Study, work & tourism",
    summary: [
      "Visa types: single or multiple entry visitor visa",
      "Visa validity: up to 9 months per stay",
      "Passport requirement: valid for at least 3 months beyond intended departure",
    ],
    details: [
      "Evidence of sufficient funds for the duration of stay",
      "Onward or return ticket required at the time of application",
      "Processing time: approximately 15 to 20 working days",
    ],
  },
  {
    id: 9,
    flag: "/images/flags/taiwan-flag.png",
    image: "/images/countries/taiwan.jpg",
    name: "Taiwan",
    code: "TWN",
    tagline: "Tourism & business",
    summary: [
      "Visa types: single or multiple entry",
      "Visa validity: up to 90 days per visit",
      "Passport requirement: valid for at least 6 months from travel date",
    ],
    details: [
      "Confirmed return or onward flight ticket required",
      "Proof of accommodation for the full length of stay",
      "Processing time: approximately 5 to 7 working days",
    ],
  },
  {
    id: 10,
    flag: "/images/flags/russia-flag.png",
    image: "/images/countries/russia.jpg",
    name: "Russia",
    code: "RUS",
    tagline: "Tourism & business",
    summary: [
      "Visa types: single, double, or multiple entry",
      "Visa validity: up to 12 months, depending on category",
      "Requires an official invitation letter or tour voucher",
    ],
    details: [
      "Passport must be valid for at least 6 months from travel date",
      "Travel medical insurance covering the full period of stay",
      "Processing time: approximately 10 to 14 working days",
    ],
  },
];

function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function CountryBlock({ country, index }) {
  const [ref, inView] = useReveal(0.15);
  const isReversed = index % 2 === 1;

  return (
    <section
      className={`country-block${isReversed ? " reversed" : ""}${inView ? " in-view" : ""}`}
      ref={ref}
    >
      <div className="container country-block-inner">

        <div className="country-block-image">
          <img src={country.image} alt={country.name} loading="lazy" />
          <div className="country-block-image-overlay"></div>

          <div className="country-block-flagchip">
            <img src={country.flag} alt="" />
            <span>{country.code}</span>
          </div>
        </div>

        <div className="country-block-content">

          <span className="country-block-index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="country-block-eyebrow">{country.tagline}</span>

          <h2>{country.name}</h2>

          <div className="country-block-line"></div>

          <div className="country-block-columns">

            <div className="country-block-col">
              <span className="country-block-col-label">Visa Overview</span>
              <ul>
                {country.summary.map((point, i) => (
                  <li key={i}>
                    <span className="country-block-check">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="country-block-col">
              <span className="country-block-col-label">Good to Know</span>
              <ul>
                {country.details.map((point, i) => (
                  <li key={i}>
                    <span className="country-block-check">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <Link to="/contact" className="country-block-cta">
            Contact Us <span>→</span>
          </Link>

        </div>

      </div>
    </section>
  );
}

function CountriesPage() {
  return (
    <main className="countries-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="countries-page-hero"
        style={{ backgroundImage: "url('/images/banners/bigBanner.jpeg')" }}
      >
        <div className="countries-page-hero-overlay"></div>

        <div className="container">
          <div className="countries-page-hero-content">
            <span className="countries-page-label">COUNTRY LIST</span>

            <h1>
              Explore Your Global
              <br />
              <span>Opportunities</span>
            </h1>

            <div className="countries-page-line"></div>

            <p>
              Explore the destinations where we provide visa and
              immigration guidance for your international journey.
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          COUNTRY BLOCKS — one section per country
      ===================================================== */}

      <div className="country-blocks">
        {countries.map((country, index) => (
          <CountryBlock country={country} index={index} key={country.id} />
        ))}
      </div>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="countries-page-cta">
        <div className="container">
          <div className="countries-page-cta-content">
            <span>NEED HELP?</span>

            <h2>
              Not Sure Which Destination
              Is Right For You?
            </h2>

            <p>
              Talk to our team and get guidance based on your travel,
              education, career or immigration goals.
            </p>

            <Link to="/contact" className="countries-page-cta-button">
              Contact Us <span>→</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default CountriesPage;