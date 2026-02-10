import '../components/SkillsSection.css';

const SkillsPage = () => {
  return (
    <section className="section skills-section">
      <h2 className="section-title">What I'm Doing</h2>

      <div className="cards-grid">
        <div className="card">
          <div className="card-icon">💻</div>
          <h3 className="card-title">Business Computing</h3>
          <p className="card-description">
            Analyzing business processes and aligning technology solutions to improve efficiency,
            productivity, and organizational performance.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">🌐</div>
          <h3 className="card-title">Web Development</h3>
          <p className="card-description">
            Building responsive and scalable web applications using
            <strong> React</strong>, <strong>TypeScript</strong>, and <strong>MongoDB</strong>,
            with a focus on clean architecture and user-centered design.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">📱</div>
          <h3 className="card-title">Mobile Development</h3>
          <p className="card-description">
            Developing cross-platform mobile applications using
            <strong> React Native</strong>, ensuring smooth performance,
            intuitive interfaces, and real-world usability.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">🗄️</div>
          <h3 className="card-title">Information Systems</h3>
          <p className="card-description">
            Designing and managing information systems that support business operations,
            data flow, and informed decision-making.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">🔧</div>
          <h3 className="card-title">Network Administration</h3>
          <p className="card-description">
            Configuring, maintaining, and troubleshooting network infrastructure,
            with hands-on experience in Cisco networking and basic security practices.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">📊</div>
          <h3 className="card-title">Database Management</h3>
          <p className="card-description">
            Designing and managing databases to ensure data integrity,
            security, and efficient access for applications and systems.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">🤝</div>
          <h3 className="card-title">Business Analysis</h3>
          <p className="card-description">
            Translating business needs into technical requirements
            and delivering practical, technology-driven solutions.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">🎓</div>
          <h3 className="card-title">3rd Year Undergraduate</h3>
          <p className="card-description">
            Bachelor of Business Computing student at Bugema University,
            with a strong focus on information systems and applied technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
