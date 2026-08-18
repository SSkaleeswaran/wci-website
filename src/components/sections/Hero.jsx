import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-75">

          {/* Left Content */}
          <div className="col-lg-6">
            <span className="hero-badge">
              Your journey starts here
            </span>

            <h1 className="hero-title">
              Your Future.
              <br />
              <span>Our Guidance.</span> 
            </h1>

            <p className="hero-description">
              Expert immigration guidance to help you study, work, settle,
              and build a better future abroad with confidence.
            </p>

            <div className="hero-actions">
              <Link to="/book-consultation" className="btn btn-primary">
                Book a Consultation
              </Link>

              <Link to="/services" className="btn btn-outline-dark">
                Explore Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="hero-trust">
              <div>
                <strong>500+</strong>
                <span>Clients Guided</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>Countries</span>
              </div>

              <div>
                <strong>95%</strong>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="col-lg-6">
            <div className="hero-visual">
              <div className="globe-placeholder">
                <span>WORLD</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;