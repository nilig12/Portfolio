import useScrollAnimation from '../hooks/useScrollAnimation';

const experienceData = [
  {
    role: 'MERN Stack Developer',
    company: 'Mysticore InfoTech Pvt. Ltd',
    date: 'Feb 2026 – Present',
    points: [
      'Architect and deliver end-to-end features for a logistics ERP serving 500+ daily operations, using React.js, Node.js, and MySQL Stored Procedures.',
      'Built scalable RESTful APIs with Express.js and implemented JWT-based authentication with role-based access control (RBAC) for multi-user workflows.',
      'Optimized MySQL query performance using Stored Procedures, reducing average response times by ~40% for complex reporting endpoints.',
      'Implemented efficient form handling with Formik + Yup validation, streamlining data entry across 15+ forms in the ERP system.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'ShivAurica',
    date: 'Sep 2025 – Jan 2026',
    points: [
      'Built reusable component library using Shadcn UI and Framer Motion, reducing UI development time by ~30% across 3 concurrent projects.',
      'Developed responsive, mobile-first interfaces with Tailwind CSS and Bootstrap, achieving cross-browser compatibility across Chrome, Firefox, and Safari.',
      'Integrated MongoDB with Express.js backend services, implementing CRUD operations and RESTful API patterns following MVC architecture.',
      'Collaborated in Agile sprints to deliver features on schedule, participating in code reviews and daily standups.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Excelsior Technologies',
    date: 'Jan 2025 – Sep 2025',
    points: [
      'Built and maintained 5+ full-stack projects using the MERN stack (MongoDB, Express.js, React.js, Node.js) and MySQL with REST API integration.',
      'Developed dynamic, responsive UIs with React.js Hooks and Context API, implementing state management patterns for complex data flows.',
      'Gained hands-on experience with database design, authentication systems, and full-stack deployment workflows using Git and GitHub.',
      'Collaborated with senior developers to understand version control best practices, code review processes, and Agile methodology.',
    ],
  },
];

const Experience = () => {
  const animRef = useScrollAnimation();

  return (
    <section className="section experience" id="experience">
      <div className="container" ref={animRef}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div className="section-label">✦ Career Path</div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My professional journey building production-grade web applications and growing as a full-stack developer.
          </p>
        </div>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">{exp.company}</div>
                </div>
                <div className="timeline-date">{exp.date}</div>
              </div>
              <ul className="timeline-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
