import useScrollAnimation from '../hooks/useScrollAnimation';

const skillsData = [
  {
    title: 'Languages & Frameworks',
    icon: '💻',
    skills: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3/SCSS'],
  },
  {
    title: 'Databases & State',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redux Toolkit', 'Context API', 'Stored Procedures'],
  },
  {
    title: 'UI Libraries & Design',
    icon: '🎨',
    skills: ['Tailwind CSS', 'Bootstrap 5', 'Material UI', 'Shadcn UI', 'Framer Motion', 'Responsive Web Design', 'Mobile-First Design'],
  },
  {
    title: 'Tools & Architecture',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Postman', 'REST APIs', 'JWT Authentication', 'MVC Architecture', 'Role-Based Access Control', 'Formik + Yup'],
  },
  {
    title: 'DevOps & Testing',
    icon: '🚀',
    skills: [ 'React Testing Library', 'Docker Basics', 'GitHub Actions', 'Cross-Browser Testing', 'Performance Optimization'],
  },
  {
    title: 'Core Competencies',
    icon: '⚡',
    skills: ['Full Stack Development', 'CRUD Operations', 'API Integration', 'Database Design', 'Query Optimization', 'Agile Methodology', 'Version Control'],
  },
];

const softSkills = [
  { name: 'Problem Solving', icon: '🧩' },
  { name: 'Quick Learning', icon: '⚡' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Time Management', icon: '⏱️' },
  { name: 'Communication', icon: '💬' },
  { name: 'Adaptability', icon: '🔄' },
];

const Skills = () => {
  const animRef = useScrollAnimation();

  return (
    <section className="section" id="skills">
      <div className="container" ref={animRef}>
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">✦ My Toolkit</div>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A comprehensive set of modern tools and technologies I use to build
            robust, scalable web applications from database to deployment.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category glass-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
            Soft Skills
          </h3>
          <div className="soft-skills">
            {softSkills.map((skill, i) => (
              <div key={i} className="soft-skill-pill">
                <span>{skill.icon}</span>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
