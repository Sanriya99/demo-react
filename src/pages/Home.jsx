import { Link } from 'react-router-dom';

const HERO_IMAGE = '/images/home.png';

const TECH_STACK = ['Python', 'LangChain', 'FastAPI', 'React'];

// Featured projects: titles and links match the About page
const FEATURED = [
  {
    icon: '📄',
    title: 'Let’s Enhance Your Roadmap',
    description: 'Identifies skill gaps and builds a personalized roadmap toward your goals.',
    tags: ['Python', 'AI'],
    link: 'https://github.com/Sanriya99/AI-Resume-Enhancer',
  },
  {
    icon: '🤖',
    title: 'Let’s Build an AI Agent Together',
    description: 'A chatbot agent that connects tools and handles user queries with LangChain.',
    tags: ['Python', 'LangChain'],
    link: 'https://github.com/Sanriya99/Langchain-Agent',
  },
];

export default function Home() {
  return (
    <div className="home">
      <section className="home-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="home-hero-text">
          <h6 className="eyebrow">              Python Developer | AI Enthusiast </h6>
          <h3 className="home-title">
            Hi, I'm <span className="accent">Sandra Mariya.</span>
          </h3>
          <p className="home-subtitle">
            Developer who turns messy problems into practical solutions. From building Python projects and AI agents to exploring new technologies, I’m driven by curiosity, simplicity, and finding better ways to solve problems.
          </p>

          <div className="button-row">
            <Link to="/about" className="btn btn-green">View Projects →</Link>
            <Link to="/contact" className="btn btn-green-outline">Contact Me</Link>
          </div>

          <ul className="chip-row">
            {TECH_STACK.map((tech) => (
              <li key={tech} className="chip">{tech}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-work">
        <p className="eyebrow">My Work</p>
        <div className="work-head">
          <h2>Featured Projects</h2>
          <Link to="/about" className="view-all">View All Projects →</Link>
        </div>

        <div className="project-grid">
          {FEATURED.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-icon" aria-hidden="true">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-arrow"
                aria-label={`Open ${project.title} on GitHub`}
              >
                →
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <span className="footer-brand">Sandra.</span>
        <span>Python Developer | AI Enthusiast | Always Learning</span>
        <span className="footer-links">
          <a href="https://github.com/Sanriya99" target="_blank" rel="noopener noreferrer">GitHub</a>
        </span>
      </footer>
    </div>
  );
}
