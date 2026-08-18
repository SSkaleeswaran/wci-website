import { useState } from "react";
import { Link } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h1>
            Let&apos;s plan your
            <span> next chapter.</span>
          </h1>
          <p>
            Tell us about your goals and our team will help you understand
            the right next step for your immigration journey.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-details">
              <span className="contact-section-label">CONTACT DETAILS</span>
              <h2>We&apos;re here to help.</h2>
              <p className="contact-intro">
                Reach out by phone, email, or the form. We&apos;ll guide you
                toward the information and support you need.
              </p>

              <div className="contact-methods">
                <a className="contact-method" href="tel:+91XXXXXXXXXX">
                  <span className="contact-icon" aria-hidden="true">☎</span>
                  <span>
                    <small>CALL US</small>
                    <strong>+91 637 989 1812</strong>
                  </span>
                </a>

                <a className="contact-method" href="mailto:info@example.com">
                  <span className="contact-icon" aria-hidden="true">✉</span>
                  <span>
                    <small>EMAIL US</small>
                    <strong>wellcareerimmigration.com</strong>
                  </span>
                </a>

                <div className="contact-method">
                  <span className="contact-icon contact-icon-green" aria-hidden="true">⌖</span>
                  <span>
                    <small>VISIT US</small>
                    <strong>Our Company Address</strong>
                    <em>5th St Ext, Gandhipuram, Coimbatore.</em>
                  </span>
                </div>
              </div>

              <div className="contact-note">
                <span aria-hidden="true">✦</span>
                <p>Our team will respond as soon as possible during business hours.</p>
              </div>
            </div>

            <div className="contact-form-card">
              <span className="contact-form-label">SEND A MESSAGE</span>
              <h2>Start the conversation.</h2>
              <p>Fields marked with <b>*</b> are required.</p>

              {submitted && (
                <div className="contact-success" role="status">
                  Thank you. Your message has been received and we&apos;ll be in touch soon.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <label>
                    Full name <b>*</b>
                    <input name="name" value={form.name} onChange={updateField} required autoComplete="name" placeholder="Enter your name" />
                  </label>

                  <label>
                    Phone number <b>*</b>
                    <input name="phone" value={form.phone} onChange={updateField} required type="tel" autoComplete="tel" placeholder="Enter your phone number" />
                  </label>
                </div>

                <div className="contact-form-grid">
                  <label>
                    Email address <b>*</b>
                    <input name="email" value={form.email} onChange={updateField} required type="email" autoComplete="email" placeholder="Enter your email" />
                  </label>

                  <label>
                    Interested service
                    <select name="service" value={form.service} onChange={updateField}>
                      <option value="">Select a service</option>
                      <option value="study-abroad">Study Abroad</option>
                      <option value="work-visa">Work Visa</option>
                      <option value="family-migration">Family Migration</option>
                      <option value="permanent-residency">Permanent Residency</option>
                    </select>
                  </label>
                </div>

                <label>
                  How can we help? <b>*</b>
                  <textarea name="message" value={form.message} onChange={updateField} required rows="5" placeholder="Tell us a little about your goals" />
                </label>

                <button className="contact-submit" type="submit">
                  Send Message <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>

          <section className="contact-location" aria-label="Office location">
            <div className="contact-map-placeholder">
              <span className="contact-map-pin" aria-hidden="true">●</span>
              <div>
                <span>OUR OFFICE LOCATION</span>
                <strong>Map coming soon</strong>
                <p>Replace this area with your Google Maps embed once the final office address is confirmed.</p>
              </div>
            </div>
            <div className="contact-location-copy">
              <span>VISIT OUR OFFICE</span>
              <h2>Let&apos;s meet and discuss your future.</h2>
              <p>Prefer a personal discussion? Contact us to arrange a convenient time to speak with our team.</p>
              <Link to="/book-consultation">Book a Consultation <i>→</i></Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
