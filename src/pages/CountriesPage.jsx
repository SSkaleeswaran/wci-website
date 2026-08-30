import { Link } from "react-router-dom";

import "../styles/countries-page.css";


const countries = [
    {
        id: 1,

        flag: "/images/flags/united-states-of-america.png",

        image: "/images/countries/usa-statue.avif",

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
        id: 2,

        flag: "/images/flags/united-kingdom.png",

        image: "/images/countries/london-clock.jpg",

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
        id: 3,

        flag: "/images/flags/canada.png",

        image: "/images/countries/canada-toronto.jpg",

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
        id: 4,

        flag: "/images/flags/schengen.png",

        image: "/images/countries/schengen-nature.jpg",

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
        id: 5,

        flag: "/images/flags/south-korea.png",

        image: "/images/countries/southkorea.jpg",

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
        id: 6,

        flag: "/images/flags/japan.png",

        image: "/images/countries/japan.jpg",

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
        id: 7,

        flag: "/images/flags/australia.png",

        image: "/images/countries/aus-sydny.jpg",

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


function CountriesPage() {

    return (

        <main className="countries-page">


            {/* =================================================
          PAGE HERO
      ================================================= */}

           <section
  className="countries-page-hero"
  style={{
    backgroundImage: "url('/images/banners/bigBanner.jpeg')",
  }}
>
  <div className="countries-page-hero-overlay"></div>

  <div className="container">

    <div className="countries-page-hero-content">

      <span className="countries-page-label">
        COUNTRY LIST
      </span>

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

            {/* =================================================
          COUNTRY LIST
      ================================================= */}

            <section className="countries-page-list">

                <div className="container">

                    {countries.map((country, index) => (

                        <article
                            key={country.id}
                            className={`country-page-row ${index % 2 === 0
                                    ? "country-image-right"
                                    : "country-image-left"
                                }`}
                        >


                            {/* =================================================
                  CONTENT
              ================================================= */}

                            <div className="country-page-content">

                                {/* <span className="country-page-number">
                  0{country.id}
                </span> */}


                                <h2>
                                    {country.name}
                                </h2>


                                <div className="country-page-line"></div>


                                <ul className="country-page-points">

                                    {[
                                        ...country.summary,
                                        ...country.details,
                                    ].map((point, pointIndex) => (

                                        <li
                                            key={`${country.id}-${pointIndex}`}
                                        >

                                            <span className="country-page-check">
                                                ✓
                                            </span>

                                            <span>
                                                {point}
                                            </span>

                                        </li>

                                    ))}

                                </ul>


                                {/* =================================================
                    COUNTRY INFO
                ================================================= */}

                                <div className="country-page-footer">

                                    <div className="country-page-name">

                                        <img
                                            src={country.flag}
                                            alt={`${country.name} flag`}
                                        />

                                        <strong>
                                            {country.name}
                                        </strong>

                                    </div>


                                    <Link
                                        to="/contact"
                                        className="country-page-contact"
                                    >
                                        Contact Us

                                        <span>
                                            →
                                        </span>
                                    </Link>

                                </div>

                            </div>


                            {/* =================================================
                  IMAGE
              ================================================= */}

                            <div className="country-page-image">

                                <img
                                    src={country.image}
                                    alt={country.name}
                                    loading={
                                        index === 0
                                            ? "eager"
                                            : "lazy"
                                    }
                                />

                            </div>


                        </article>

                    ))}

                </div>

            </section>


            {/* =================================================
          CTA
      ================================================= */}

            <section className="countries-page-cta">

                <div className="container">

                    <div className="countries-page-cta-content">

                        <span>
                            NEED HELP?
                        </span>

                        <h2>
                            Not Sure Which Destination
                            Is Right For You?
                        </h2>

                        <p>
                            Talk to our team and get guidance
                            based on your travel, education,
                            career or immigration goals.
                        </p>

                        <Link
                            to="/contact"
                            className="countries-page-cta-button"
                        >
                            Contact Us

                            <span>
                                →
                            </span>
                        </Link>

                    </div>

                </div>

            </section>


        </main>
    );
}


export default CountriesPage;