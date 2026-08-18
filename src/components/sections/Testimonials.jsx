import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/client-1.jpg",
    quote:
      "The team guided me through the entire process and made everything much easier to understand.",
    name: "Client Name",
    journey: "Study Abroad • Canada",
  },
  {
    id: 2,
    image: "/images/testimonials/client-2.jpg",
    quote:
      "I received clear guidance at every stage. The process felt organized and straightforward.",
    name: "Client Name",
    journey: "Work Visa • United Kingdom",
  },
  {
    id: 3,
    image: "/images/testimonials/client-3.jpg",
    quote:
      "The support I received throughout my application journey gave me confidence at every step.",
    name: "Client Name",
    journey: "Migration • Australia",
  },
  {
    id: 4,
    image: "/images/testimonials/client-4.jpg",
    quote:
      "The team explained the process clearly and helped me understand what I needed to prepare.",
    name: "Client Name",
    journey: "Study Abroad • United States",
  },
  {
    id: 5,
    image: "/images/testimonials/client-5.jpg",
    quote:
      "From the first consultation to the next stage, the communication and guidance were excellent.",
    name: "Client Name",
    journey: "Permanent Residency • Canada",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((previous) => {
      if (previous >= testimonials.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };

  const previousSlide = () => {
    setCurrent((previous) => {
      if (previous <= 0) {
        return testimonials.length - 1;
      }

      return previous - 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /*
    Always create two valid testimonials.
    The second card wraps back to the first card
    when we reach the last testimonial.
  */
  const firstTestimonial = testimonials[current];

  const secondTestimonial = testimonials[(current + 1) % testimonials.length];

  const visibleTestimonials = [
    firstTestimonial,
    secondTestimonial,
  ];

  return (
    <section className="testimonials-section">
      <div className="container">

        {/* =========================
            HEADING
        ========================= */}

        <div className="testimonials-heading">
          <span className="section-label">
            CLIENT STORIES
          </span>

          <h2>
            What our clients
            <span> say.</span>
          </h2>

          <div className="testimonials-heading-line"></div>

          <p>
            Real experiences from people who trusted us with their
            international journey.
          </p>
        </div>


        {/* =========================
            CAROUSEL
        ========================= */}

        <div className="testimonials-carousel">

          {/* Previous */}
          <button
            type="button"
            className="testimonial-arrow testimonial-prev"
            onClick={previousSlide}
            aria-label="Previous testimonial"
          >
            ←
          </button>


          {/* Cards */}
          <div className="testimonials-track">

            {visibleTestimonials.map((testimonial) => (
              <article
                className="testimonial-card"
                key={testimonial.id}
              >

                {/* Client photo */}
                <div className="testimonial-photo">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>


                {/* Stars */}
                <div className="testimonial-stars">
                  ★ ★ ★ ★ ★
                </div>


                {/* Quote */}
                <p className="testimonial-text">
                  “{testimonial.quote}”
                </p>


                {/* Client */}
                <div className="testimonial-client">
                  <h3>{testimonial.name}</h3>

                  <p>
                    {testimonial.journey}
                  </p>
                </div>

              </article>
            ))}

          </div>


          {/* Next */}
          <button
            type="button"
            className="testimonial-arrow testimonial-next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            →
          </button>

        </div>


        {/* =========================
            DOTS
        ========================= */}

        <div className="testimonial-controls">

          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              className={
                index === current ? "active" : ""
              }
              onClick={() => setCurrent(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;