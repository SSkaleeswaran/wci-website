import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import services from "../data/servicesDataCard";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Discuss your goals with our team and understand the possible pathways for your journey.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Profile Review",
    description:
      "We review your profile, goals, and requirements to identify suitable options.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Application",
    description:
      "Get guidance through the preparation and submission of your application.",
    icon: "✈️",
  },
  {
    number: "04",
    title: "Next Step",
    description:
      "Receive continued guidance as you move forward with your immigration journey.",
    icon: "✓",
  },
];

function ServicesPage() {
  /* =====================================================
     PROCESS ANIMATION STATE
  ===================================================== */

  const processRef = useRef(null);
  const pathContainerRef = useRef(null);
  const nodeRefs = useRef([]);

  const [processInView, setProcessInView] = useState(false);
  const [snakeD, setSnakeD] = useState("");
  const [snakeViewBox, setSnakeViewBox] = useState("0 0 100 100");

  /* =====================================================
     PROCESS SECTION - INTERSECTION OBSERVER
  ===================================================== */

  useEffect(() => {
    const element = processRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     PROCESS CONNECTING PATH
  ===================================================== */

  useEffect(() => {
    const computePath = () => {
      const container = pathContainerRef.current;

      if (!container) return;

      const containerRect = container.getBoundingClientRect();

      const points = nodeRefs.current
        .filter(Boolean)
        .map((element) => {
          const rect = element.getBoundingClientRect();

          return {
            x:
              rect.left +
              rect.width / 2 -
              containerRect.left,

            y:
              rect.top +
              rect.height / 2 -
              containerRect.top,
          };
        });

      if (points.length < 2) return;

      let path = `M ${points[0].x} ${points[0].y}`;

      for (let i = 1; i < points.length; i++) {
        const previous = points[i - 1];
        const current = points[i];

        const midY =
          (previous.y + current.y) / 2;

        path +=
          ` C ${previous.x} ${midY}` +
          ` ${current.x} ${midY}` +
          ` ${current.x} ${current.y}`;
      }

      setSnakeD(path);

      setSnakeViewBox(
        `0 0 ${containerRect.width} ${containerRect.height}`
      );
    };

    computePath();

    const animationFrame =
      requestAnimationFrame(computePath);

    const settleTimer = setTimeout(
      computePath,
      700
    );

    window.addEventListener(
      "resize",
      computePath
    );

    let resizeObserver;

    if (window.ResizeObserver) {
      resizeObserver =
        new ResizeObserver(computePath);

      if (pathContainerRef.current) {
        resizeObserver.observe(
          pathContainerRef.current
        );
      }
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(settleTimer);

      window.removeEventListener(
        "resize",
        computePath
      );

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [processInView]);

  return (
    <main className="services-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="services-page-hero"
        style={{
          backgroundImage:
            "url('/images/banners/hero-banner.png')",
        }}
      >
        <div className="services-hero-overlay"></div>

        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              <div className="services-hero-content">

                <span className="services-page-label">
                  OUR SERVICES
                </span>

                <h1>
                  Visa
                   <span className="andSimbal"> & </span>
                    Immigration
                  <span> Services</span>
                </h1>

                <div className="services-hero-line"></div>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES OPTIONS
      ===================================================== */}

      <section className="services-options-section">

        {/* Decorative Background */}
        <div className="services-bg-shape services-bg-shape-one"></div>
        <div className="services-bg-shape services-bg-shape-two"></div>

        <div className="container position-relative">

          {/* Heading */}
          <div className="row justify-content-between align-items-end mb-5">

            <div className="col-lg-6">

              <div className="services-options-heading">

                <h2>
                  Explore Your
                  <strong> Options</strong>
                </h2>

              </div>

            </div>

            <div className="col-lg-5">

              <p className="services-options-intro">
                Professional guidance for your travel, study,
                work and family immigration journey.
                <br />
                We offer a wide range of visa and immigration
                services to help you achieve your goals,
                wherever you want to go.
              </p>

            </div>

          </div>


          {/* =================================================
              SERVICE CARDS
          ================================================= */}

          <div className="row g-4">

            {services.map((service, index) => (

              <div
                className="col-lg-6"
                key={service.title}
              >

                <div
                  className={`services-modern-card services-card-${index + 1}`}
                >

                  {/* Visual */}
                  <div className="services-card-visual">

                    <div className="services-card-icon">
                      {service.icon}
                    </div>

                    <div className="services-card-circle"></div>

                  </div>


                  {/* Content */}
                  <div className="services-card-content">

                    <span className="services-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>
                      {service.title}
                    </h3>

                    <div className="services-card-line"></div>

                    <p>
                      {service.description}
                    </p>

                    <Link
                      to={service.path}
                      className="services-modern-link"
                    >
                      Learn More
                      <span>→</span>
                    </Link>

                  </div>


                  {/* Decorative Corner */}
                  <div className="services-card-corner"></div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        ref={processRef}
        className={`services-process-section ${
          processInView ? "in-view" : ""
        }`}
      >

        <div className="container">

          {/* Process Heading */}
          <div className="services-process-heading">

            <span>
              HOW IT WORKS
            </span>

            <h2>
              Your Journey,
              <strong> Simplified.</strong>
            </h2>

            <div className="services-process-line"></div>

            <p>
              From your first consultation to your next
              step, we make the process easier to understand.
            </p>

          </div>


          {/* Process Path */}
          <div
            className="services-process-path"
            ref={pathContainerRef}
          >

            {/* Connecting Line */}
            <svg
              className="services-process-connector"
              viewBox={snakeViewBox}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                pathLength="1"
                d={snakeD}
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset:
                    processInView ? 0 : 1,
                }}
              />
            </svg>


            {/* Process Steps */}
            {processSteps.map((step, index) => (

              <div
                className={`process-step ${
                  processInView ? "step-visible" : ""
                }`}
                key={step.number}
                style={{
                  transitionDelay:
                    `${index * 130}ms`,
                }}
              >

                {/* Large Background Number */}
                <span className="process-step-ghost">
                  {step.number}
                </span>


                {/* Icon Node */}
                <div
                  className="process-step-node"
                  ref={(element) => {
                    nodeRefs.current[index] =
                      element;
                  }}
                >
                  <span className="process-step-icon">
                    {step.icon}
                  </span>
                </div>


                {/* Text */}
                <div className="process-step-text">

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="services-cta-section">

        <div className="container">

          <div className="services-cta">

            <div className="services-cta-decoration"></div>

            <div className="row align-items-center position-relative">

              <div className="col-lg-8">

                <span className="services-cta-label">
                  NEED ASSISTANCE?
                </span>

                <h2>
                  Ready to take the next step?
                </h2>

                <p>
                  Talk to our team and get professional
                  guidance for your international journey.
                </p>

              </div>


              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

                <Link
                  to="/contact"
                  className="services-cta-button"
                >
                  Start Today
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ServicesPage;