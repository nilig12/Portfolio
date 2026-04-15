import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const animRef = useScrollAnimation();

  return (
    <section className="section about" id="about">
      <div className="container" ref={animRef}>
        <div className="about-text">
          <div className="section-label">✦ About Me</div>
          <h2 className="section-title">
            Passionate about building <span className="gradient-text">digital experiences</span>
          </h2>
          <p className="section-subtitle">
            MERN Stack Developer with 1+ years of professional experience delivering
            full-stack web applications across logistics, hospitality, and survey domains.
            Proficient in React.js, Node.js, Express.js, MongoDB, MySQL, and PostgreSQL,
            with hands-on experience integrating REST APIs, implementing JWT authentication
            systems, and building responsive UIs using Tailwind CSS and Material UI.
          </p>
          <p className="section-subtitle" style={{ marginTop: '16px' }}>
            Proven ability to work across the stack — from database design and query
            optimization to pixel-perfect frontends — in fast-paced team environments.
            Experienced with MVC architecture, Redux Toolkit, role-based access control,
            and performance optimization for production applications.
          </p>

          <div className="about-info-cards">
            <a href="mailto:niligarala@gmail.com" className="about-info-card glass-card">
              <div className="card-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>niligarala@gmail.com</p>
              </div>
            </a>
            <a href="tel:+918160465896" className="about-info-card glass-card">
              <div className="card-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <p>+91 8160465896</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/nili-garala-480884234/" target="_blank" rel="noopener noreferrer" className="about-info-card glass-card">
              <div className="card-icon">🔗</div>
              <div>
                <h4>LinkedIn</h4>
                <p>nili-garala</p>
              </div>
            </a>
            <a href="https://github.com/nilig12/" target="_blank" rel="noopener noreferrer" className="about-info-card glass-card">
              <div className="card-icon">🐙</div>
              <div>
                <h4>GitHub</h4>
                <p>nilig12</p>
              </div>
            </a>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-code-block">
            <div className="code-header">
              <div className="code-dot"></div>
              <div className="code-dot"></div>
              <div className="code-dot"></div>
            </div>
            <div>
              <span className="code-comment">// about-me.js</span><br/>
              <span className="code-keyword">const</span> <span className="code-property">developer</span> <span className="code-bracket">=</span> {'{'}<br/>
              &nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">"Nili Garala"</span>,<br/>
              &nbsp;&nbsp;<span className="code-property">role</span>: <span className="code-string">"Full Stack Dev"</span>,<br/>
              &nbsp;&nbsp;<span className="code-property">stack</span>: <span className="code-string">"MERN + SQL"</span>,<br/>
              &nbsp;&nbsp;<span className="code-property">auth</span>: <span className="code-string">"JWT + RBAC"</span>,<br/>
              &nbsp;&nbsp;<span className="code-property">architecture</span>: <span className="code-string">"MVC"</span>,<br/>
              &nbsp;&nbsp;<span className="code-property">available</span>: <span className="code-value">true</span>,<br/>
              {'}'}<br/><br/>
              <span className="code-keyword">export default</span> <span className="code-property">developer</span>;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
