const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Discuss your goals with our team and understand the possible pathways for your journey.",
  },
  {
    number: "02",
    title: "Profile Review",
    description:
      "We review your profile, goals, and requirements to identify suitable options.",
  },
  {
    number: "03",
    title: "Application",
    description:
      "Get guidance through the preparation and submission of your application.",
  },
  {
    number: "04",
    title: "Next Step",
    description:
      "Receive continued guidance as you move forward with your immigration journey.",
  },
];

function Process() {
  return (
    <section className="process-section">
      <div className="container">

        {/* Heading */}
        <div className="process-heading">
          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            Your journey,
            <span> simplified.</span>
          </h2>

          <div className="process-heading-line"></div>

          <p>
            From your first consultation to your next step, we make the
            process easier to understand.
          </p>
        </div>

        {/* Steps */}
        <div className="process-grid">

          {processSteps.map((step, index) => (
            <div className="process-item" key={step.number}>

              {/* Number */}
              <div className="process-number">
                {step.number}
              </div>

              {/* Connector */}
              {index < processSteps.length - 1 && (
                <div className="process-connector"></div>
              )}

              {/* Content */}
              <div className="process-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;