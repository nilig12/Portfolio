import profilePic from '../assets/nili.jpeg';
import resumePdf from '../assets/Resume updated.pdf';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="gradient-orb"></div>
        <div className="gradient-orb"></div>
        <div className="gradient-orb"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Available for Opportunities
          </div>

          <h1 className="hero-name">Nili Garala</h1>
          <p className="hero-title">Full Stack MERN Developer</p>

          <p className="hero-description">
            Building scalable full-stack web applications across logistics, hospitality,
            and survey domains. Proficient in React.js, Node.js, Express.js, MongoDB,
            MySQL &amp; PostgreSQL with hands-on REST API integration and authentication systems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>View Projects ↓</span>
            </a>
            <a href={resumePdf} download="Nili_Garala_Resume.pdf" className="btn-secondary">
              Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">1+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">3+</div>
              <div className="hero-stat-label">Projects Delivered</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">15+</div>
              <div className="hero-stat-label">Technologies</div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring"></div>
            <div className="hero-avatar-ring"></div>
            <div className="hero-avatar">
              <img src={profilePic} alt="Nili Garala" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="hero-floating-cards">
              <div className="floating-card"><span className="icon">⚛️</span> React.js</div>
              <div className="floating-card"><span className="icon">🟢</span> Node.js</div>
              <div className="floating-card"><span className="icon">🍃</span> MongoDB</div>
              <div className="floating-card"><span className="icon">🐘</span> PostgreSQL</div>
              <div className="floating-card"><span className="icon">🐬</span> MySQL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
