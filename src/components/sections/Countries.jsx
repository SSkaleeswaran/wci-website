import { useState } from "react";
import { Link } from "react-router-dom";

const countries = [
  {
    flag: "/images/flags/united-states-of-america.png",
    name: "United States",
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
    flag: "/images/flags/united-kingdom.png",
    name: "United Kingdom",
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
    flag: "/images/flags/canada.png",
    name: "Canada",
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
    flag: "/images/flags/schengen.png",
    name: "Schengen Area",
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
    flag: "/images/flags/south-korea.png",
    name: "South Korea",
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
    flag: "/images/flags/japan.png",
    name: "Japan",
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
    flag: "/images/flags/australia.png",
    name: "Australia",
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
];

function Countries() {
  const [expandedCountry, setExpandedCountry] = useState(null);

  const toggleDetails = (countryName) => {
    setExpandedCountry((currentCountry) =>
      currentCountry === countryName ? null : countryName
    );
  };

  return (
    <section className="countries-section">
      <div className="container">

        <div className="countries-heading">

          <span className="section-label">
            COUNTRY LIST
          </span>

          <h2>
            The Countries We Serve for
            <span> Visa &amp; Immigration</span>
          </h2>

          <div className="countries-heading-line"></div>

          <p>
            Explore the destinations where we provide visa and
            immigration guidance.
          </p>

        </div>

        <div className="countries-grid">

          {countries.map((country) => {
            const isExpanded =
              expandedCountry === country.name;

            return (
              <article
                className={`country-card ${
                  isExpanded ? "country-card-expanded" : ""
                }`}
                key={country.name}
              >

                {/* Country Header */}

                <div className="country-card-header">

                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="country-flag"
                  />

                  <h3>{country.name}</h3>

                </div>


                {/* Country Information */}

                <ul className="country-points">

                  {country.summary.map((point) => (
                    <li key={point}>
                      <span className="country-check">
                        ✓
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}

                  {isExpanded &&
                    country.details.map((point) => (
                      <li
                        key={point}
                        className="country-detail-point"
                      >
                        <span className="country-check">
                          ✓
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}

                </ul>


                {/* Show More / Less */}

                <button
                  type="button"
                  className="country-read-more"
                  onClick={() =>
                    toggleDetails(country.name)
                  }
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? "Show Less" : "Show More"}

                  <span>
                    {isExpanded ? "↑" : "↓"}
                  </span>
                </button>


                {/* Contact Button */}

                <div className="country-card-actions">

                  <Link
                    to="/contact"
                    className="country-contact-link"
                  >
                    Contact Us

                    <span>
                      →
                    </span>
                  </Link>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Countries;