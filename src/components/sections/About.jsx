import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">

          <div className="about-image-wrapper">

  <div className="about-image-placeholder">
    <img
      src="/images/company-img/companyAbout.avif"
      alt="Well Career Immigration"
    />
  </div>

  <div className="about-experience-card">
    <strong>02</strong>
    <span>
      Years of
      <br />
      Experience
    </span>
  </div>

</div>

          {/* Content - RIGHT */}
          <div className="about-content">

            <span className="section-label">
              ABOUT US
            </span>

            <h2>
              Your journey abroad,
              <br />
              <span>guided with confidence.</span>
            </h2>

            <p className="about-description">
              We help individuals and families navigate their immigration
              journey with clear guidance, personalized support, and a
              transparent approach.
            </p>

            <div className="about-features">

              <div className="about-feature">
                <span className="about-check">✓</span>
                <div>
                  <h3>Personalized Guidance</h3>
                  <p>
                    Solutions designed around your goals.
                  </p>
                </div>
              </div>

              <div className="about-feature">
                <span className="about-check">✓</span>
                <div>
                  <h3>Transparent Process</h3>
                  <p>
                    Clear information at every stage.
                  </p>
                </div>
              </div>

              <div className="about-feature">
                <span className="about-check">✓</span>
                <div>
                  <h3>End-to-End Support</h3>
                  <p>
                    Guidance throughout your journey.
                  </p>
                </div>
              </div>

              <div className="about-feature">
                <span className="about-check">✓</span>
                <div>
                  <h3>Client Focused</h3>
                  <p>
                    Your goals remain our priority.
                  </p>
                </div>
              </div>

            </div>

            <Link to="/about" className="about-button">
              Learn More
              <span>→</span>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
