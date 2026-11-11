interface StackGroup {
  label: string;
  items: string[];
}

interface Stack {
  icon: string;
  title: string;
  groups: StackGroup[];
}

const stacks: Stack[] = [
  {
    icon: '💻',
    title: 'Web Application Development',
    groups: [
      { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
      {
        label: 'Backend',
        items: [
          'Node.js / Express.js',
          'Next.js',
          'JWT authentication',
          'Swagger (API docs)',
          'MongoDB',
          'PostgreSQL / MySQL',
          'Cloudinary',
        ],
      },
    ],
  },
  {
    icon: '📱',
    title: 'Mobile Application Development',
    groups: [
      {
        label: 'Frontend',
        items: ['React Native', 'Flutter + Dart', 'Kotlin', 'Swift', 'TypeScript', 'Tailwind CSS (mobile)'],
      },
      { label: 'Backend', items: ['Node.js / Express.js', 'Next.js', 'JWT authentication'] },
    ],
  },
];

const SkillsPage = () => {
  return (
    <section className="section skills-section">
      <h2 className="section-title">What I Do</h2>
      <p className="section-lead">
        The areas where I combine business understanding with hands-on technical work.
      </p>

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
            Developing native and cross-platform mobile applications using
            <strong> Kotlin</strong>, <strong>Swift</strong>, <strong>Flutter</strong>, and
            <strong> React Native</strong>, ensuring smooth performance,
            intuitive interfaces, and real-world usability.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">⚙️</div>
          <h3 className="card-title">Backend Development</h3>
          <p className="card-description">
            Designing RESTful APIs and server-side logic with
            <strong> Node.js</strong>, <strong>Express.js</strong>, and <strong>Next.js</strong>,
            including JWT authentication, API documentation, and database integration.
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
          <h3 className="card-title">Business Computing Graduate</h3>
          <p className="card-description">
            Bachelor of Business Computing graduate from Bugema University,
            with a strong focus on information systems and applied technology.
          </p>
        </div>
      </div>

      <h2 className="section-title stack-heading">Tech Stack</h2>
      <p className="section-lead">The tools I use across web, mobile, and backend work.</p>

      <div className="stack-grid">
        {stacks.map((stack) => (
          <div className="stack-card" key={stack.title}>
            <h3 className="stack-title">
              <span aria-hidden="true">{stack.icon}</span> {stack.title}
            </h3>
            {stack.groups.map((group) => (
              <div className="stack-group" key={group.label}>
                <span className="stack-label">{group.label}</span>
                <ul className="stack-chips">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
