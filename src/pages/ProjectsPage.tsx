import './ProjectsPage.css';

interface Project {
  icon: string;
  name: string;
  category: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    icon: '🎓',
    name: 'BRAINAE',
    category: 'University platform',
    description:
      'A university platform for education, publication, and consultancy, bringing partner universities, degrees, short courses, journals, and research under one academic home.',
    url: 'https://brainae-v2-eight.vercel.app/',
  },
  {
    icon: '🚚',
    name: 'TumaNow',
    category: 'Courier & delivery',
    description:
      'A multi-company courier and delivery platform: shared logistics infrastructure with partner fleets, live tracking, and one shipment lifecycle for every operator.',
    url: 'https://tumanow-nu.vercel.app/',
  },
  {
    icon: '🌍',
    name: 'LéO Africa Institute',
    category: 'Organisation website',
    description:
      'Website for a pan-African leadership development institute nurturing ethical, entrepreneurial leaders for the continent’s transformation.',
    url: 'https://leoafricainstitute.org/',
  },
];

const displayUrl = (url: string) => new URL(url).hostname.replace(/^www\./, '');

const ProjectsPage = () => {
  return (
    <section className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <p className="section-lead">
        A selection of live products and websites I have worked on.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-card-head">
              <span className="project-icon">{project.icon}</span>
              <span className="project-category">{project.category}</span>
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <span className="project-link">
              {displayUrl(project.url)} <span aria-hidden="true">↗</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
