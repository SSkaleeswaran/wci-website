import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";


const countries = [
  {
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


/* =========================================
   COUNTRY POINTS
========================================= */

function CountryPoints({
  country,
  isExpanded,
}) {
  const points = isExpanded
    ? [...country.summary, ...country.details]
    : country.summary;

  return (
    <ul className="country-points">

      {points.map((point, index) => {

        const isDetailPoint =
          index >= country.summary.length;

        return (
          <li
            key={`${country.name}-${index}`}
            className={
              isDetailPoint
                ? "country-detail-point"
                : undefined
            }
          >

            <span className="country-check">
              ✓
            </span>

            <span>
              {point}
            </span>

          </li>
        );
      })}

    </ul>
  );
}


/* =========================================
   COUNTRY CARD
========================================= */

function CountryCard({
  country,
  isExpanded,
  onToggle,
}) {
  return (
    <article
      className={`country-card ${
        isExpanded
          ? "country-card-expanded"
          : ""
      }`}
    >

      {/* IMAGE */}

      <div className="country-card-image">

        <img
          src={country.image}
          alt={country.name}
          loading="lazy"
        />

      </div>


      {/* HEADER */}

      <div className="country-card-header">

        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="country-flag"
        />

        <h3>
          {country.name}
        </h3>

      </div>


      {/* INFORMATION */}

      <CountryPoints
        country={country}
        isExpanded={isExpanded}
      />


      {/* SHOW MORE */}

      <Link
        to="/countries"
        className="country-read-more"
      >
        Show More

        <span>
          →
        </span>
      </Link>


      {/* CONTACT */}

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
}


/* =========================================
   COUNTRIES
========================================= */

function Countries() {

  const [expandedCountry, setExpandedCountry] =
    useState(null);

  const swiperRef = useRef(null);


  /*
    Desktop:
    Arrow navigation only.

    Mobile:
    Touch/swipe enabled.
  */

  const [isMobile, setIsMobile] =
    useState(
      window.innerWidth <= 767
    );


  /* =========================================
     RESPONSIVE CHECK
  ========================================= */

  useEffect(() => {

    const handleResize = () => {

      setIsMobile(
        window.innerWidth <= 767
      );

    };


    window.addEventListener(
      "resize",
      handleResize
    );


    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);


  /* =========================================
     TOGGLE DETAILS
  ========================================= */

  const toggleDetails = (
    countryName
  ) => {

    setExpandedCountry(
      (current) =>
        current === countryName
          ? null
          : countryName
    );

  };


  return (

    <section className="countries-section">

      <div className="container">


        {/* =====================================
            HEADING
        ===================================== */}

        <div className="countries-heading">

          <span className="section-label">
            COUNTRY LIST
          </span>


          <h2>

            The Countries We Serve for

            <span>
              {" "}Visa &amp; Immigration
            </span>

          </h2>


          <div className="countries-heading-line">
          </div>


          <p>
            Explore the destinations where we
            provide visa and immigration
            guidance.
          </p>

        </div>


        {/* =====================================
            SLIDER
        ===================================== */}

        <div className="countries-slider">

          <div className="countries-slider-viewport">


            {/* =================================
                LEFT ARROW

                LEFT = NEXT
            ================================= */}

            <button
              type="button"
              className="countries-slider-arrow countries-slider-arrow-left"
              onClick={() =>
                swiperRef.current?.slideNext()
              }
              aria-label="Next country"
            >
              ←
            </button>


            {/* =================================
                RIGHT ARROW

                RIGHT = PREVIOUS
            ================================= */}

            <button
              type="button"
              className="countries-slider-arrow countries-slider-arrow-right"
              onClick={() =>
                swiperRef.current?.slidePrev()
              }
              aria-label="Previous country"
            >
              →
            </button>


            {/* =================================
                SWIPER
            ================================= */}

            <Swiper

              modules={[
                EffectCoverflow,
              ]}


              /* COVERFLOW */

              effect="coverflow"


              /* CENTER */

              centeredSlides={true}


              /* CARD WIDTH */

              slidesPerView="auto"


              /* LOOP */

              loop={true}

              loopedSlides={
                countries.length
              }


              /* SPEED */

              speed={700}


              /* SAVE SWIPER INSTANCE */

              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}


              /* MOBILE TOUCH */

              allowTouchMove={
                isMobile
              }


              /* PREVENT MULTIPLE CLICKS */

              preventInteractionOnTransition={
                true
              }


              /* TRACK TRANSFORMED SLIDES */

              watchSlidesProgress={
                true
              }


              /* COVERFLOW SETTINGS */

              coverflowEffect={{

                rotate: 6,

                stretch: -35,

                depth: 120,

                modifier: 2,

                slideShadows: false,

              }}


              className="countries-swiper"
            >


              {countries.map(
                (country) => (

                  <SwiperSlide
                    key={country.name}
                  >

                    <CountryCard

                      country={
                        country
                      }

                      isExpanded={
                        expandedCountry ===
                        country.name
                      }

                      onToggle={() =>
                        toggleDetails(
                          country.name
                        )
                      }

                    />

                  </SwiperSlide>

                )
              )}


            </Swiper>

          </div>

        </div>

      </div>

    </section>

  );
}


export default Countries;