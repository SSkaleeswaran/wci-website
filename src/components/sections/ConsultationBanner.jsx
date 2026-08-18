import { Link } from "react-router-dom";

function ConsultationBanner() {
  return (
    <section className="consultation-banner-section">
      <div className="container">
        <div className="consultation-banner">

          <div className="consultation-content">
            <span>START YOUR JOURNEY</span>

            <h2>
              Ready to make your
              <strong> global future </strong>
              a reality?
            </h2>

            <p>
              Talk to our team and get personalized guidance for your
              immigration journey.
            </p>
          </div>

          <div className="consultation-action">
            <Link
              to="/book-consultation"
              className="consultation-button"
            >
              Book a Consultation
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ConsultationBanner;
