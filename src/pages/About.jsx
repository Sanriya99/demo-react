import { useState } from 'react';
import { Link } from 'react-router-dom';

const ABOUT_IMAGE = '/images/about.jpg';

// Each sentence of the intro becomes one stop on the roadmap
const ROADMAP = [
  'I’m Sandra — a Computer Science graduate, a Python developer, and someone whose career has taken a few unexpected turns.',
  'From starting out as a Java developer intern to stepping into cloud infrastructure and finding my way into AI engineering, it’s been quite a roller coaster.',
  'But somewhere along the way, I’ve learned that you don’t always need a perfect plan; you just need to keep moving toward what you want.',
  'Sometimes, the journey introduces you to the right people, opens doors you never expected, and gives you chances you just have to be brave enough to take.',
  'I’m still learning, still building, and still figuring things out — one project, one challenge, and one opportunity at a time.',
];

// Add or change your projects here (link = GitHub URL for the "Click me" button)
const projects = [
  {
    title: 'Let’s Enhance Your Roadmap',
    description: `Not sure what to learn next or which skills to build? Let’s turn that confusion into clarity. This project helps identify skill gaps and create a personalized roadmap to guide you toward your goals, one step at a time.`,
    link: 'https://github.com/Sanriya99/AI-Resume-Enhancer',
  },
  {
    title: 'Let’s Build an AI Agent Together',
    description: `Let’s build a simple chatbot agent and explore what LangChain has to offer. From understanding how agents work to connecting tools and handling user queries, we’ll take it step by step. A simple project, a hands-on approach, and a great place to start exploring the world of AI agents.`,
    link: 'https://github.com/Sanriya99/Langchain-Agent',
  },
];

const accents = ['card-blue', 'card-purple'];

export default function About() {
  const [activeStop, setActiveStop] = useState(0);

  return (
    <section
      className="page-bg"
      style={{
        backgroundImage: `url(${ABOUT_IMAGE})`,
      }}
    >
      <div className="page">
        <h1 className="page-title">A Little About Me</h1>

        <div className="roadmap">
          <div
            className="roadmap-track"
            style={{ '--progress': (activeStop / (ROADMAP.length - 1)) * 100 }}
          >
            {ROADMAP.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`roadmap-stop ${index <= activeStop ? 'reached' : ''}`}
                onClick={() => setActiveStop(index)}
                aria-label={`Stop ${index + 1}`}
                aria-pressed={index === activeStop}
              >
                {index === activeStop && <span key={activeStop} className="roadmap-ball" />}
                {String(index + 1).padStart(2, '0')}
              </button>
            ))}
          </div>

          <p key={activeStop} className="roadmap-text">
            {ROADMAP[activeStop]}
          </p>
        </div>

        <h2 className="section-title">My Projects</h2>
        <div className="card-grid">
          {projects.map((project, index) => (
            <article key={project.title} className={`card ${accents[index % accents.length]}`}>
              <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
              <h2>{project.title}</h2>
              <p className="about-text">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="click-me"
              >
                Click me
              </a>
            </article>
          ))}
        </div>

        <div className="button-row center">
          <Link to="/contact" className="btn btn-primary">Contact Me</Link>
        </div>
      </div>
    </section>
  );
}
