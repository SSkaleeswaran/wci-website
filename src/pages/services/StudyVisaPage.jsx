import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ASSET = "/images/study";

/* =========================================================
   REVEAL HOOK
========================================================= */

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    number: "01",
    title: "Profile First",
    text: "We understand your academic background, goals and budget before recommending options.",
  },
  {
    number: "02",
    title: "Right Fit",
    text: "Your course and university shortlist is built around your profile and long-term plans.",
  },
  {
    number: "03",
    title: "Complete Support",
    text: "From applications and documentation to visa preparation, we stay with you throughout.",
  },
  {
    number: "04",
    title: "Ready to Go",
    text: "We help you prepare for the final steps before you begin your journey abroad.",
  },
];

const destinations = [
  {
    name: "United Kingdom",
    short: "UK",
    image: `${ASSET}/uk.jpg`,
    description:
      "Explore globally recognised universities, diverse courses and internationally valued qualifications.",
  },
  {
    name: "Canada",
    short: "CA",
    image: `${ASSET}/canada.jpg`,
    description:
      "Discover quality education, practical programs and a welcoming environment for international students.",
  },
  {
    name: "Australia",
    short: "AU",
    image: `${ASSET}/australia.jpg`,
    description:
      "Choose from leading institutions and a wide range of career-focused study options.",
  },
  {
    name: "United States",
    short: "US",
    image: `${ASSET}/usa.jpg`,
    description:
      "Access a broad selection of universities, programs and academic pathways across the country.",
  },
  {
    name: "Ireland",
    short: "IE",
    image: `${ASSET}/ireland.jpg`,
    description:
      "Build your international education experience in a growing European study destination.",
  },
  {
    name: "New Zealand",
    short: "NZ",
    image: `${ASSET}/new-zealand.jpg`,
    description:
      "Study in a student-friendly environment with a strong focus on quality education.",
  },
];

const services = [
  {
    number: "01",
    title: "Profile Assessment",
    text:
      "We review your academic background, interests, career direction and budget to understand which study pathways may suit you.",
  },
  {
    number: "02",
    title: "Course & University Selection",
    text:
      "We help you compare courses and universities based on your goals rather than simply choosing an institution because of its ranking.",
  },
  {
    number: "03",
    title: "Application Assistance",
    text:
      "We guide you through application requirements, forms and supporting documentation so your application is properly prepared.",
  },
  {
    number: "04",
    title: "SOP & LOR Guidance",
    text:
      "We help you present your academic journey, motivation and future plans clearly and consistently in your application documents.",
  },
  {
    number: "05",
    title: "Financial & Scholarship Guidance",
    text:
      "We help you understand the financial requirements and explore scholarship or funding opportunities relevant to your profile.",
  },
  {
    number: "06",
    title: "Visa Guidance",
    text:
      "Once your admission is secured, we help you prepare your visa documentation and get ready for the visa process.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Profile Assessment",
    text:
      "Tell us about your education, preferred destination, course interests and career plans.",
  },
  {
    number: "02",
    title: "Shortlist",
    text:
      "We identify suitable courses and universities based on your profile and requirements.",
  },
  {
    number: "03",
    title: "Application",
    text:
      "We guide you through the application and help prepare the required supporting documents.",
  },
  {
    number: "04",
    title: "Offer Letter",
    text:
      "Once an institution makes an admission decision, we help you understand the next steps.",
  },
  {
    number: "05",
    title: "Visa",
    text:
      "We help you prepare your visa file and get ready for the visa process.",
  },
  {
    number: "06",
    title: "Departure",
    text:
      "Before you leave, we help you prepare for the practical aspects of starting your life abroad.",
  },
];

const intakes = [
  {
    season: "September",
    title: "Main Intake",
    text:
      "The most popular intake for many international study destinations, with a broad range of courses available.",
  },
  {
    season: "January",
    title: "Winter Intake",
    text:
      "A useful alternative for students who miss the main intake or prefer a different application timeline.",
  },
  {
    season: "May",
    title: "Additional Intake",
    text:
      "Some institutions offer programs during this period, depending on the destination and course.",
  },
];

const documents = [
  {
    title: "Academic Transcripts",
    text: "Your academic records and certificates.",
  },
  {
    title: "Passport",
    text: "A valid passport with sufficient validity.",
  },
  {
    title: "English Test Score",
    text: "IELTS, TOEFL, PTE or another accepted test where required.",
  },
  {
    title: "Statement of Purpose",
    text: "A clear explanation of your academic and career goals.",
  },
  {
    title: "Letters of Recommendation",
    text: "Academic or professional references where required.",
  },
  {
    title: "Financial Documents",
    text: "Evidence of funds or sponsorship where required.",
  },
];

const faqs = [
  {
    question: "When should I start planning my study abroad application?",
    answer:
      "Ideally, start several months before your intended intake. This gives you time to research courses, prepare tests, organise documents and complete applications without rushing.",
  },
  {
    question: "How do I choose the right country for my studies?",
    answer:
      "The right destination depends on your course, academic profile, budget, career plans and personal preferences. We can help you compare these factors before you make a decision.",
  },
  {
    question: "Can you help me choose a university?",
    answer:
      "Yes. We can help you evaluate universities and courses based on your academic background, career goals, preferred destination and budget.",
  },
  {
    question: "Do I need IELTS or another English test?",
    answer:
      "Requirements vary by university, course and destination. Some institutions may accept different English-language qualifications or exemptions depending on your background.",
  },
  {
    question: "Do you help with the student visa process?",
    answer:
      "Yes. After your admission process, we guide you through the required visa documentation and preparation for the visa process.",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

function StudyVisaPage() {
  const [introRef, introInView] = useReveal(0.15);
  const [whyRef, whyInView] = useReveal(0.1);
  const [destinationRef, destinationInView] = useReveal(0.1);
  const [serviceRef, serviceInView] = useReveal(0.1);
  const [processRef, processInView] = useReveal(0.1);
  const [intakeRef, intakeInView] = useReveal(0.1);
  const [documentsRef, documentsInView] = useReveal(0.1);
  const [faqRef, faqInView] = useReveal(0.1);
  const [ctaRef, ctaInView] = useReveal(0.2);

  const [activeDestination, setActiveDestination] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const [checkedDocuments, setCheckedDocuments] = useState(
    documents.map(() => false)
  );

  const checkedCount = checkedDocuments.filter(Boolean).length;

  const toggleDocument = (index) => {
    setCheckedDocuments((previous) => {
      const next = [...previous];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <main className="study-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="study-hero">

        <div
          className="study-hero-image"
          style={{
            backgroundImage:
              "url('/images/banners/eduBanner.png')",
          }}
        />

        <div className="study-hero-overlay" />

        <div className="container study-hero-container">

          <div className="study-hero-content">

            <span className="study-hero-eyebrow">
              STUDY ABROAD WITH WCI
            </span>

            <h1>
              Your future
              <span> starts with the right choice.</span>
            </h1>

            <p>
              Find the right course, university and destination
              with guidance from profile assessment to visa
              preparation.
            </p>

            <div className="study-hero-actions">

              <Link
                to="/book-consultation"
                className="study-btn-primary"
              >
                Book a Consultation
                <span>→</span>
              </Link>

              <a
                href="#study-destinations"
                className="study-btn-secondary"
              >
                Explore Destinations
              </a>

            </div>

            <div className="study-hero-trust">

              <span>
                ✓ Profile-based guidance
              </span>

              <span>
                ✓ Application support
              </span>

              <span>
                ✓ Visa guidance
              </span>

            </div>

          </div>

        </div>

        <div className="study-hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="study-hero-line" />
        </div>

      </section>

      {/* =====================================================
          INTRO / TRUST
      ===================================================== */}

      <section
        ref={introRef}
        className={`study-intro-section ${
          introInView ? "is-visible" : ""
        }`}
      >

        <div className="container">

          <div className="study-intro-grid">

            <div className="study-intro-heading">

              <span className="study-eyebrow">
                YOUR JOURNEY
              </span>

              <h2>
                Study abroad with
                <span> clarity.</span>
              </h2>

            </div>

            <div className="study-intro-copy">

              <p>
                Choosing to study abroad is a major decision.
                There are courses to compare, universities to
                evaluate, documents to prepare and visa
                requirements to understand.
              </p>

              <p>
                WCI brings these steps together into one clear
                journey, helping you move forward with better
                information and a structured plan.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY WCI
      ===================================================== */}

      <section
        ref={whyRef}
        className={`study-why-section ${
          whyInView ? "is-visible" : ""
        }`}
      >

        <div className="container">

          <div className="study-section-header">

            <div>

              <span className="study-eyebrow">
                WHY WCI
              </span>

              <h2>
                A better way to plan
                <span> your study journey.</span>
              </h2>

            </div>

            <p>
              Our approach focuses on your profile and goals,
              not a one-size-fits-all list of universities.
            </p>

          </div>

          <div className="study-why-grid">

            {stats.map((item) => (
              <div
                className="study-why-card"
                key={item.number}
              >

                <span className="study-why-number">
                  {item.number}
                </span>

                <div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          DESTINATIONS
      ===================================================== */}

      <section
        id="study-destinations"
        ref={destinationRef}
        className={`study-destinations-section ${
          destinationInView ? "is-visible" : ""
        }`}
      >

        <div className="container">

          <div className="study-section-header study-section-header-center">

            <span className="study-eyebrow">
              STUDY DESTINATIONS
            </span>

            <h2>
              Where could your
              <span> journey take you?</span>
            </h2>

            <p>
              Explore some of the destinations students choose
              for international education.
            </p>

          </div>

          <div className="study-destination-layout">

            <div className="study-destination-list">

              {destinations.map((destination, index) => (
                <button
                  type="button"
                  key={destination.name}
                  className={`study-destination-tab ${
                    activeDestination === index
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveDestination(index)
                  }
                >

                  <span className="study-destination-tab-number">
                    0{index + 1}
                  </span>

                  <span className="study-destination-tab-name">
                    {destination.name}
                  </span>

                  <span className="study-destination-tab-arrow">
                    →
                  </span>

                </button>
              ))}

            </div>

            <div className="study-destination-preview">

              <div
                className="study-destination-image"
                style={{
                  backgroundImage: `url('${destinations[activeDestination].image}')`,
                }}
              />

              <div className="study-destination-overlay" />

              <div className="study-destination-content">

                <span className="study-destination-code">
                  {destinations[activeDestination].short}
                </span>

                <h3>
                  {destinations[activeDestination].name}
                </h3>

                <p>
                  {destinations[activeDestination].description}
                </p>

                <Link
                  to="/countries"
                  className="study-destination-link"
                >
                  Explore Countries
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        ref={serviceRef}
        className={`study-services-section ${
          serviceInView ? "is-visible" : ""
        }`}
      >

        <div className="container">

          <div className="study-section-header">

            <div>

              <span className="study-eyebrow">
                WHAT WE HELP WITH
              </span>

              <h2>
                From first idea
                <span> to visa.</span>
              </h2>

            </div>

            <p>
              Practical support at the stages where students
              need the most clarity.
            </p>

          </div>

          <div className="study-services-grid">

            {services.map((service) => (
              <div
                className="study-service-card"
                key={service.number}
              >

                <span className="study-service-number">
                  {service.number}
                </span>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>

                <span className="study-service-arrow">
                  →
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        ref={processRef}
        className={`study-process-section ${
          processInView ? "is-visible" : ""
        }`}
      >

        <div className="container">

          <div className="study-section-header study-section-header-center">

            <span className="study-eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              Six steps.
              <span> One clear journey.</span>
            </h2>

            <p>
              We keep the process structured so you always know
              what happens next.
            </p>

          </div>

          <div className="study-process">

            <div className="study-process-tabs">

              {processSteps.map((step, index) => (
                <button
                  type="button"
                  key={step.number}
                  className={`study-process-tab ${
                    activeStep === index
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setActiveStep(index)}
                >

                  <span>
                    {step.number}
                  </span>

                  <strong>
                    {step.title}
                  </strong>

                </button>
              ))}

            </div>

            <div className="study-process-panel">

              <div className="study-process-panel-number">
                {processSteps[activeStep].number}
              </div>

              <div className="study-process-panel-content">

                <span className="study-process-kicker">
                  STEP {processSteps[activeStep].number}
                </span>

                <h3>
                  {processSteps[activeStep].title}
                </h3>

                <p>
                  {processSteps[activeStep].text}
                </p>

              </div>

              <div className="study-process-progress">

                {processSteps.map((step, index) => (
                  <span
                    key={step.number}
                    className={
                      index <= activeStep
                        ? "active"
                        : ""
                    }
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTAKES
      ===================================================== */}

      <section
        ref={intakeRef}
        className={`study-intake-section ${
          intakeInView ? "is-visible" : ""
        }`}
      >

        <div className="container">

          <div className="study-intake-layout">

            <div className="study-intake-heading">

              <span className="study-eyebrow">
                PLAN AHEAD
              </span>

              <h2>
                Choose your
                <span> intake wisely.</span>
              </h2>

              <p>
                Intake availability varies by destination,
                institution and course. Start early so you have
                enough time to prepare a strong application.
              </p>

              <Link
                to="/book-consultation"
                className="study-text-link"
              >
                Discuss your timeline
                <span>→</span>
              </Link>

            </div>

            <div className="study-intake-list">

              {intakes.map((intake, index) => (
                <div
                  className="study-intake-item"
                  key={intake.season}
                >

                  <span className="study-intake-number">
                    0{index + 1}
                  </span>

                  <div>

                    <span className="study-intake-season">
                      {intake.season}
                    </span>

                    <h3>
                      {intake.title}
                    </h3>

                    <p>
                      {intake.text}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          DOCUMENT CHECKLIST
      ===================================================== */}

      <section
        ref={documentsRef}
        className={`study-documents-section ${
          documentsInView ? "is-visible" : ""
        }`}
      >

        <div className="container">

          <div className="study-section-header">

            <div>

              <span className="study-eyebrow">
                DOCUMENT CHECKLIST
              </span>

              <h2>
                Start preparing
                <span> early.</span>
              </h2>

            </div>

            <div className="study-document-progress">

              <strong>
                {checkedCount}
                <span> / {documents.length}</span>
              </strong>

              <div className="study-document-progress-bar">
                <span
                  style={{
                    width: `${
                      (checkedCount /
                        documents.length) *
                      100
                    }%`,
                  }}
                />
              </div>

              <small>
                Items prepared
              </small>

            </div>

          </div>

          <div className="study-documents-grid">

            {documents.map((document, index) => (
              <button
                type="button"
                key={document.title}
                className={`study-document ${
                  checkedDocuments[index]
                    ? "checked"
                    : ""
                }`}
                onClick={() => toggleDocument(index)}
              >

                <span className="study-document-check">

                  {checkedDocuments[index]
                    ? "✓"
                    : ""}

                </span>

                <span className="study-document-content">

                  <strong>
                    {document.title}
                  </strong>

                  <small>
                    {document.text}
                  </small>

                </span>

                <span className="study-document-arrow">
                  →
                </span>

              </button>
            ))}

          </div>

          <p className="study-document-note">
            Requirements can vary depending on your destination,
            university and course. Use this as a starting point
            and confirm the exact requirements for your application.
          </p>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        ref={faqRef}
        className={`study-faq-section ${
          faqInView ? "is-visible" : ""
        }`}
      >

        <div className="container">

          <div className="study-faq-layout">

            <div className="study-faq-heading">

              <span className="study-eyebrow">
                FAQ
              </span>

              <h2>
                Questions students
                <span> usually ask.</span>
              </h2>

              <p>
                Still unsure about something? Talk directly
                with our team and get guidance based on your
                situation.
              </p>

              <Link
                to="/contact"
                className="study-text-link"
              >
                Ask us a question
                <span>→</span>
              </Link>

            </div>

            <div className="study-faq-list">

              {faqs.map((faq, index) => (
                <div
                  className={`study-faq-item ${
                    activeFaq === index
                      ? "active"
                      : ""
                  }`}
                  key={faq.question}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(
                        activeFaq === index
                          ? null
                          : index
                      )
                    }
                  >

                    <span>
                      {faq.question}
                    </span>

                    <strong>
                      {activeFaq === index
                        ? "−"
                        : "+"}
                    </strong>

                  </button>

                  <div className="study-faq-answer">

                    <p>
                      {faq.answer}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        ref={ctaRef}
        className={`study-final-cta ${
          ctaInView ? "is-visible" : ""
        }`}
      >

        <div className="study-final-cta-pattern" />

        <div className="container">

          <div className="study-final-cta-content">

            <span className="study-eyebrow">
              YOUR NEXT STEP
            </span>

            <h2>
              Not sure where
              <span> to start?</span>
            </h2>

            <p>
              Tell us about your education, course interests
              and preferred destination. We'll help you
              understand your next steps.
            </p>

            <div className="study-final-actions">

              <Link
                to="/book-consultation"
                className="study-final-primary"
              >
                Book a Consultation
                <span>→</span>
              </Link>

              <Link
                to="/contact"
                className="study-final-secondary"
              >
                Contact WCI
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default StudyVisaPage;