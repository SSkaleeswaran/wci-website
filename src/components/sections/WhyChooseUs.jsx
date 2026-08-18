const reasons = [
  {
    number: "01",
    title: "Personalized Guidance",
    description:
      "We understand that every applicant has different goals, circumstances, and aspirations.",
  },
  {
    number: "02",
    title: "Transparent Process",
    description:
      "We keep the process clear so you understand the important steps along your journey.",
  },
  {
    number: "03",
    title: "Global Opportunities",
    description:
      "Explore international education, career, and migration opportunities in leading destinations.",
  },
  {
    number: "04",
    title: "End-to-End Support",
    description:
      "Get guidance throughout your journey, from your initial consultation to your next step.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">

        <div className="why-heading">
          <span className="section-label">
            WHY CHOOSE US
          </span>

          <h2>
            Guidance that goes
            <span> beyond paperwork.</span>
          </h2>

          <div className="why-heading-line"></div>

          <p>
            Your international journey involves important decisions.
            We help make those decisions clearer and easier to navigate.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div className="why-card" key={reason.number}>

              <div className="why-number">
                {reason.number}
              </div>

              <div>
                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;