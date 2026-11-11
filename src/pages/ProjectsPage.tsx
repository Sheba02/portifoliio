import './ProjectsPage.css';

interface Project {
  icon: string;
  name: string;
  category: string;
  description: string;
  tech?: string[];
  url?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    icon: '🛡️',
    name: 'Shield Kids App',
    category: 'Mobile app',
    description:
      'A parental control and child safety application developed for Shield Tech Hub. It uses real-time GPS tracking and geofencing to notify parents when children leave safe zones, sends SOS alerts with live location during emergencies, applies screen time limits by restricting device access after daily usage limits, and blocks unsafe websites to support safer browsing.',
    tech: ['Flutter', 'Kotlin', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT authentication'],
    featured: true,
  },
  {
    icon: '🎓',
    name: 'BRAINAE',
    category: 'University platform',
    description:
      'A university platform for education, publication, and consultancy, bringing partner universities, degrees, short courses, journals, and research under one academic home.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    url: 'https://brainae-v2-eight.vercel.app/',
  },
  {
    icon: '🚚',
    name: 'TumaNow',
    category: 'Courier & delivery',
    description:
      'A multi-company courier and delivery platform: shared logistics infrastructure with partner fleets, live tracking, and one shipment lifecycle for every operator.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    url: 'https://tumanow-nu.vercel.app/',
  },
  {
    icon: '🌍',
    name: 'LéO Africa Institute',
    category: 'Organisation website',
    description:
      'Website for a pan-African leadership development institute nurturing ethical, entrepreneurial leaders for the continent’s transformation.',
    tech: ['Laravel', 'Alpine.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    url: 'https://leoafricainstitute.org/',
  },
];

const ProjectsPage = () => {
  return (
    <section className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <p className="section-lead">
        A selection of products and websites I have worked on.
      </p>

      <div className="projects-grid">
        {projects.map((project) => {
          const body = (
            <>
              <div className="project-card-head">
                <span className="project-icon">{project.icon}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              {project.tech && (
                <ul className="project-tech">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </>
          );

          const cardClass = project.featured ? 'project-card project-card-featured' : 'project-card';

          return project.url ? (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} (opens the live site in a new tab)`}
              className={`${cardClass} project-card-link`}
            >
              {body}
            </a>
          ) : (
            <div key={project.name} className={cardClass}>
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsPage;
