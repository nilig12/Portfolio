import useScrollAnimation from '../hooks/useScrollAnimation';

const Education = () => {
  const animRef = useScrollAnimation();

  return (
    <section className="section education" id="education">
      <div className="container" ref={animRef}>
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">✦ Education</div>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '48px' }}>
          <div className="education-card glass-card">
            <div className="education-icon">🎓</div>
            <h3 className="education-degree">Bachelor of Engineering (Computer)</h3>
            <p className="education-school">Government Engineering College, Modasa (GTU)</p>
            <div className="education-meta">
              <span>📅 2021 – 2025</span>
              <span>📊 8.61 CGPA</span>
              <span>🏛️ Gujarat Technological University</span>
            </div>
          </div>

          <div className="education-card glass-card">
            <div className="education-icon">🏫</div>
            <h3 className="education-degree">High School</h3>
            <p className="education-school">Delta Science School</p>
            <div className="education-meta">
              <span>📅 2019 – 2021</span>
              <span>📊 88%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
