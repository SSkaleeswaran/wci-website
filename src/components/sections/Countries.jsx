import { useRef, } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const countries = [
  {
    flag: "/images/flags/united-states-of-america.png",
    image: "/images/countries/usa-statue.avif",
    name: "United States",
    region: "America",
    tagline: "Business & tourism visas",
  },
  {
    flag: "/images/flags/united-kingdom.png",
    image: "/images/countries/london-clock.jpg",
    name: "United Kingdom",
    region: "Europe",
    tagline: "Study, work & family visas",
  },
  {
    flag: "/images/flags/canada.png",
    image: "/images/countries/canada-toronto.jpg",
    name: "Canada",
    region: "North America",
    tagline: "Study & migration visas",
  },
  {
    flag: "/images/flags/schengen.png",
    image: "/images/countries/schengen-nature.jpg",
    name: "Schengen Area",
    region: "Europe",
    tagline: "29 countries, one visa",
  },
  {
    flag: "/images/flags/south-korea.png",
    image: "/images/countries/southkorea.jpg",
    name: "South Korea",
    region: "Asia",
    tagline: "Tourism & business visas",
  },
  {
    flag: "/images/flags/japan.png",
    image: "/images/countries/japan.jpg",
    name: "Japan",
    region: "Asia",
    tagline: "Tourism & business visas",
  },
  {
    flag: "/images/flags/australia.png",
    image: "/images/countries/aus-sydny.jpg",
    name: "Australia",
    region: "Oceania",
    tagline: "Study, work & tourism visas",
  },
];

const badgeClasses = ["badge-navy", "badge-gold", "badge-teal"];

function CountryCard({ country, index }) {
  return (
    <article className="wave-card">

      <div className="wave-card-image">
        <img src={country.image} alt={country.name} loading="lazy" />

        <span className={`wave-card-badge ${badgeClasses[index % 3]}`}>
          {country.region}
        </span>

        <Link to="/countries" className="wave-card-hover">
          <span>Read More</span>
        </Link>
      </div>

      <div className="wave-card-body">
        <h3>{country.name}</h3>
        <div className={`wave-card-line ${badgeClasses[index % 3]}`}></div>

        <div className="wave-card-footer">
          <img src={country.flag} alt="" className="wave-card-flag" />
          <div>
            <small>Visa Guidance</small>
            <strong>{country.tagline}</strong>
          </div>
        </div>
      </div>

    </article>
  );
}

function Countries() {
  const swiperRef = useRef(null);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  
  // useEffect(() => {
  //   const handleResize = () => setIsMobile(window.innerWidth <= 767);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <section className="countries-section">

      <div className="countries-wave" aria-hidden="true">
        <svg
          className="countries-wave-svg wave-back"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <path d="M0,420 C300,520 500,320 800,400 C1100,480 1300,300 1600,380 L1600,900 L0,900 Z" />
        </svg>
        <svg
          className="countries-wave-svg wave-front"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <path d="M0,360 C280,280 520,480 800,410 C1080,340 1320,520 1600,440 L1600,900 L0,900 Z" />
        </svg>
      </div>

      <div className="container">
        <button
              type="button"
              className="countries-slider-arrow countries-slider-arrow-right"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous country"
            >
              ←
            </button>

            <button
              type="button"
              className="countries-slider-arrow countries-slider-arrow-left"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next country"
            >
              →
            </button>

        <div className="countries-heading">
          <span className="section-label">COUNTRY LIST</span>

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

        <div className="countries-slider">
          <div className="countries-slider-viewport">

            

            <Swiper
              modules={[Autoplay]}
              loop={true}
              speed={900}
              spaceBetween={24}
              slidesPerView={1}
              slidesPerGroup={1}
              allowTouchMove={true}
              autoplay={{
                delay: 2800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              breakpoints={{
                640: { slidesPerView: 2, slidesPerGroup: 1 },
                1024: { slidesPerView: 3, slidesPerGroup: 1 },
              }}
              className="countries-swiper"
            >
              {countries.map((country, index) => (
                <SwiperSlide key={country.name}>
                  <CountryCard country={country} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Countries;