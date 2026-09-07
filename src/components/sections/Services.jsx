import { Link } from "react-router-dom";
import services from "../../data/servicesDataCard";

function Services() {
  const loopServices = [...services, ...services];

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
        <div className="service-flight-path" aria-hidden="true">
          <span className="flight-plane">✈</span>
        </div>

      </div>

      {/* Auto-scrolling marquee */}
      <div className="services-marquee">
        <div className="services-track">
          {loopServices.map((service, i) => (
            <div className="service-card" key={`${service.title}-${i}`}>

              <Link to={service.path} key={`${service.title}-${i}`}>
              <div className="service-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                {/* <span className="service-image-icon">{service.icon}</span> */}
              </div>

              <div className="service-card-body">
                <h3>{service.title}</h3>

                <div className="service-card-line"></div>

                <p>{service.description}</p>

                <span className="service-link">
                  Learn More
                  <span>→</span>
                </span>
              </div>
</Link>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Services;