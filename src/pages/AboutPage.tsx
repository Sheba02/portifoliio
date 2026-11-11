import { Link } from 'react-router-dom';
import '../components/AboutSection.css';

const AboutPage = () => {
  return (
    <section className="section about-section">
      {/* Shown on small screens only, where the sidebar is tucked away */}
      <div className="about-intro">
        <img src="/shb.jpg" alt="Sheba Mugisha" />
        <div>
          <p className="about-intro-name">Sheba Mugisha</p>
          <p className="about-intro-role">Business Computing Professional</p>
        </div>
      </div>

      <h2 className="section-title">About Me</h2>

      <div className="about-text-wrapper">
        <p>
          I am a <strong>Business Computing graduate</strong> with a strong interest in how
          technology can be applied to solve real-world business problems. My academic background
          combines <strong>information systems</strong>, <strong>business analysis</strong>, and
          <strong> software fundamentals</strong>, enabling me to understand both technical systems
          and the business processes they support.
        </p>

        <p>
          I am recognized for my <strong>analytical mindset</strong>, structured approach to
          problem-solving, and ability to communicate clearly with both technical and non-technical
          stakeholders. I collaborate effectively within teams, adapt quickly to new tools and
          environments, and consistently maintain a high level of professionalism and reliability.
        </p>

        <p>
          I hold a <strong>Bachelor’s degree in Business Computing from Bugema University</strong>,
          and I am focused on strengthening my skills in system design, business process optimization,
          and modern web and mobile technologies.
        </p>

        <p className="about-goal">
          My goal is to build solutions that are practical, efficient, and aligned with real
          business needs.
        </p>

        <div className="about-actions">
          <Link to="/projects" className="btn btn-primary">View my projects</Link>
          <Link to="/contact" className="btn btn-secondary">Get in touch</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
