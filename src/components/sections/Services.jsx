import { Link } from "react-router-dom";
import services from "../../data/servicesDataCard";


function Services() {
  return (
    <section className="services-section">
      <div className="container">

        {/* Heading */}
        <div className="services-heading">
          <span className="section-label">OUR SERVICES</span>

          <h2>
            How We Can <span>Help You</span>
          </h2>

          <div className="services-heading-line"></div>

          <p>
            We offer personalized immigration solutions tailored to your
            goals. Explore our services and take the first step toward your
            future.
          </p>
        </div>

        {/* Flight Path */}
        <div className="service-flight-path">
          <span>✈</span>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <div className="service-card-line"></div>

              <p>{service.description}</p>

              <Link
                to={service.path}
                className="service-link"
              >
                Learn More
                <span>→</span>
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;


