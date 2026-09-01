import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    id: "guidance",
    title: "We start by listening",
    description:
      "Everyone's situation is different, so we start with your goals and timeline, not a form.",
  },
  {
    id: "process",
    title: "No hidden steps",
    description:
      "You'll always know what's happening, what it costs, and what's next.",
  },
  {
    id: "destinations",
    title: "Where people actually go",
    description:
      "Study, work, or migrate — we cover the countries applicants ask about most.",
  },
  {
    id: "support",
    title: "One team, the whole way",
    description:
      "From your first call to the day you land. Not a new contact every stage.",
  },
];

const icons = {
  guidance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-4-1 2-6z" strokeLinejoin="round" />
    </svg>
  ),
  process: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 12c3-4 5-4 6-2s3 2 6-2" strokeLinecap="round" />
      <circle cx="4" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="20" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  destinations: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M7 12l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
};

function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`why-section${inView ? " in-view" : ""}`}
      ref={sectionRef}
    >
      <div className="why-container">
        <div className="why-intro">
           <span className="why-label">Why choose us</span>
          <div className="why-compass" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <circle className="compass-ring" cx="60" cy="60" r="46" />
              <line className="compass-tick" x1="60" y1="8" x2="60" y2="20" />
              <line className="compass-tick" x1="60" y1="100" x2="60" y2="112" />
              <line className="compass-tick" x1="8" y1="60" x2="20" y2="60" />
              <line className="compass-tick" x1="100" y1="60" x2="112" y2="60" />
              <path className="compass-needle" d="M60 34l10 26-10 26-10-26z" />
              <circle className="compass-dot" cx="60" cy="60" r="3" />
            </svg>
          </div>

          <h2>
            Big decisions,
            <br />
            made simple.
          </h2>

          <div className="why-rule" />

          <p>
           Your international journey involves important decisions. 
           We help make those decisions clearer and easier to navigate.
          </p>
        </div>

        <ul className="why-list">
          {reasons.map((reason, i) => (
            <li
              className="why-row"
              key={reason.id}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="why-icon">{icons[reason.id]}</span>
              <div className="why-row-text">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUs;