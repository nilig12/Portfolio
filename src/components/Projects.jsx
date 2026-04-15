import useScrollAnimation from '../hooks/useScrollAnimation';

const projectsData = [
  {
    number: '01',
    icon: '🚚',
    title: 'Maheshwari Logistics ERP System (MLL)',
    description:
      'Built and maintained a large-scale ERP platform serving 500+ daily logistics and dispatch operations. Developed responsive dashboards with React.js and Material UI, engineered backend services in Node.js using MVC architecture with MySQL Stored Procedures for optimized query performance. Implemented 15+ complex forms with Formik + Yup validation, JWT authentication with role-based access control, and real-time data workflows.',
    tech: ['React.js', 'Material UI', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'Stored Procedures', 'Formik', 'JWT', 'RBAC'],
    color: '#6c63ff',
  },
  {
    number: '02',
    icon: '🍽️',
    title: 'Goverdhan Thal',
    description:
      'Developed a full-stack restaurant management application supporting customers, instructors, and admin roles with separate panels. Built a dynamic cart system, instructor management panel, and real-time stock tracking module. Implemented REST APIs with Express.js, MongoDB integration for flexible data models, and responsive mobile-first UI achieving cross-browser compatibility.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Mobile-First Design'],
    color: '#00d4ff',
  },
  {
    number: '03',
    icon: '📊',
    title: 'Polls and Survey System',
    description:
      'Designed and built a full-featured polling platform with secure JWT authentication, enabling users to create polls, collect responses, and view real-time analytics. Implemented dynamic result visualization with interactive charts, scalable MySQL database architecture, and role-based access for poll creators vs participants.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'JWT Auth', 'Real-Time Analytics'],
    color: '#ff6b9d',
  },
  {
    number: '04',
    icon: '📝',
    title: 'BlogNest',
    description:
      'Built a full-stack blogging platform using the MERN stack where users can create, edit, and delete blog posts with rich text content. Implemented JWT-based authentication, user profiles, comment system, and category-based filtering. Designed a clean responsive UI with React.js and Tailwind CSS, backed by a RESTful Express.js API and MongoDB for flexible content storage.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
    color: '#f59e0b',
  },
];

const Projects = () => {
  const animRef = useScrollAnimation();

  return (
    <section className="section" id="projects">
      <div className="container" ref={animRef}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-label">✦ Portfolio</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Production-grade applications built with the MERN stack, featuring
            authentication, role-based access, and real-time features.
          </p>
        </div>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div key={index} className="project-row" style={{ '--project-color': project.color }}>
              <div className="project-row-left">
                <div className="project-row-icon">{project.icon}</div>
                <div className="project-row-number">{project.number}</div>
              </div>
              <div className="project-row-body">
                <h3 className="project-row-title">{project.title}</h3>
                <p className="project-row-desc">{project.description}</p>
                <div className="project-row-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
