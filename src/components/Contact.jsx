import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const animRef = useScrollAnimation();

  return (
    <section className="section" id="contact">
      <div className="container" ref={animRef}>
        <div className="section-label">✦ Get in Touch</div>
        <h2 className="section-title">
          Let's Work <span className="gradient-text">Together</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto 0' }}>
          I'm always open to discussing new opportunities, collaborations, and exciting projects.
          Feel free to reach out!
        </p>

        <div className="contact-cards">
          <a
            href="mailto:niligarala@gmail.com"
            className="contact-card glass-card"
            id="contact-email"
          >
            <div className="contact-card-icon">📧</div>
            <div className="contact-card-label">Email</div>
            <div className="contact-card-value">niligarala@gmail.com</div>
          </a>

          <a
            href="tel:+918160465896"
            className="contact-card glass-card"
            id="contact-phone"
          >
            <div className="contact-card-icon">📱</div>
            <div className="contact-card-label">Phone</div>
            <div className="contact-card-value">+91 8160465896</div>
          </a>

          <a
            href="https://www.linkedin.com/in/nili-garala-480884234"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card glass-card"
            id="contact-linkedin"
          >
            <div className="contact-card-icon">🔗</div>
            <div className="contact-card-label">LinkedIn</div>
            <div className="contact-card-value">nili-garala</div>
          </a>
        </div>

        <div className="contact-cta">
          <a href="mailto:niligarala@gmail.com" className="btn-primary">
            <span>✉️ Send Me an Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
