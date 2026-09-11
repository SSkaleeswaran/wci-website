import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  subject: "",
  message: "",
  company: "", // honeypot — real users never fill this
};

const MAP_EMBED_SRC =
  "https://www.google.com/maps?cid=13508895320001886105&output=embed";

const MAP_DIRECTIONS_HREF =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(
    "Well Career Immigration, 5th Street Extension, Gandhipuram, Coimbatore, Tamil Nadu 641012"
  );

// ── EmailJS config ───────────────────────────────────────────
// Replace these three with the values from your EmailJS dashboard.
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// Basic front-end rate limit: block resubmission for 60s
const RATE_LIMIT_MS = 60000;

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot check — bots fill every field, real users never see this one
    if (form.company) {
      return;
    }

    // Simple rate limit using localStorage
    const lastSent = Number(localStorage.getItem("wci_last_contact_send") || 0);
    if (Date.now() - lastSent < RATE_LIMIT_MS) {
      setStatus("error");
      setErrorMsg("Please wait a moment before sending another message.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service || "Not specified",
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      localStorage.setItem("wci_last_contact_send", String(Date.now()));
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your message. Please try again, or call us directly.");
    }
  };

  return (
    <main className="contact-page">

      <section
        className="contact-hero"
        style={{ backgroundImage: "url('/images/banners/contactBanner.png')" }}
      >
        <div className="contact-hero-overlay"></div>

        <div className="container contact-hero-inner">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h1>
            Let&apos;s plan your
            <span className="one"> next chapter.</span>
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
                <a className="contact-method" href="tel:+91637 989 1812">
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
                    <strong>wellcareerimmigration@gmail.com</strong>
                  </span>
                </a>

                <div className="contact-method">
                  <span className="contact-icon contact-icon-gold" aria-hidden="true">⌖</span>
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

              {status === "success" && (
                <div className="contact-alert contact-alert-success" role="status">
                  Thank you. Your message has been received and we&apos;ll be in touch soon.
                </div>
              )}

              {status === "error" && (
                <div className="contact-alert contact-alert-error" role="alert">
                  {errorMsg}
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>

                {/* Honeypot — hidden from real users via CSS */}
                <label className="contact-honeypot" aria-hidden="true">
                  Company
                  <input
                    name="company"
                    value={form.company}
                    onChange={updateField}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </label>

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
                      <option value="study-abroad">Study Visa</option>
                      <option value="tourist-visa">Tourist Visa</option>
                      <option value="work-visa">Business Visa</option>
                      <option value="family-migration">Visitor visa</option>
                      <option value="permanent-residency">Permanent Residency</option>
                    </select>
                  </label>
                </div>

                <label>
                  Subject <b>*</b>
                  <input name="subject" value={form.subject} onChange={updateField} required placeholder="What's this about?" />
                </label>

                <label>
                  How can we help? <b>*</b>
                  <textarea name="message" value={form.message} onChange={updateField} required rows="5" placeholder="Tell us a little about your goals" />
                </label>

                <button className="contact-submit" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && <span aria-hidden="true">→</span>}
                </button>
              </form>
            </div>

          </div>

          <section className="contact-location" aria-label="Office location">
            <div className="contact-map-embed">
              <iframe
                title="Well Career Immigration office location"
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
               <a className="contact-map-directions"
                href={MAP_DIRECTIONS_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions <span aria-hidden="true">→</span>
              </a>
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