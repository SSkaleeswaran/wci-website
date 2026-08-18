import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const banners = [
  {
    id: 1,
    label: "STUDY ABROAD",
    title: "Your Global Education Journey Starts Here.",
    description:
      "Explore international study opportunities and get personalized guidance from our team.",
    button: "Explore Study Options",
    path: "/services/study-abroad",
    accent: "orange",
  },
  {
    id: 2,
    label: "WORK ABROAD",
    title: "Build Your Career Beyond Borders.",
    description:
      "Discover international work opportunities and understand the right visa pathway for you.",
    button: "Explore Work Visa",
    path: "/services/work-visa",
    accent: "green",
  },
  {
    id: 3,
    label: "IMMIGRATION",
    title: "A Better Future Starts With the Right Path.",
    description:
      "Get professional guidance for your immigration goals and take the next step with confidence.",
    button: "Book Consultation",
    path: "/book-consultation",
    accent: "orange",
  },
];

function PromoBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === banners.length - 1 ? 0 : previous + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const activeBanner = banners[currentSlide];

  return (
    <section className={`promo-banner promo-${activeBanner.accent}`}>
      <div className="container">
        <div className="promo-content">

          <div className="promo-text">
            <span className="promo-label">
              {activeBanner.label}
            </span>

            <h1>{activeBanner.title}</h1>

            <p>{activeBanner.description}</p>

            <Link
              to={activeBanner.path}
              className="promo-button"
            >
              {activeBanner.button}
              <span>→</span>
            </Link>
          </div>

          <div className="promo-visual">
            <div className="promo-circle promo-circle-one"></div>
            <div className="promo-circle promo-circle-two"></div>

            <div className="promo-globe">
              🌍
            </div>
          </div>

        </div>

        <div className="promo-controls">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;