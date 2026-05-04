import "./styles/Work.css";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Work = () => {
  const projects = [
    {
      title: "Glide - Production-Ready Ride Booking Platform",
      description:
        "A full-stack Uber-like ride booking system designed for scalability and real-time operations.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB/MySQL",
        "Socket.io",
      ],
      achievements: [
        "Real-time ride tracking and matching system",
        "Scalable backend handling concurrent users",
        "Trip lifecycle and pricing logic implementation",
        "Authentication and booking workflow",
      ],
      githubUrl: "https://github.com/manish8941/glide-travel",
      liveUrl: "https://manish8941.github.io/glide-travel/",
    },
    {
      title: "AI Crop Price Prediction System",
      description:
        "Machine learning system predicting crop prices using weather and global data.",
      techStack: ["Python", "ML Models", "Pandas", "Scikit-learn"],
      achievements: [
        "Predicts crop price at cultivation time",
        "Uses weather + global trend analysis",
        "Data-driven insights for farmers",
      ],
      githubUrl: "https://github.com/manish8941/Crop-Price-Prediction-System.git",
      liveUrl: "https://manish8941.github.io/Crop-Price-Prediction-System/",
    },
    {
      title: "Advanced Authentication System (JWT + OTP)",
      description:
        "Secure authentication system using JWT and OTP verification.",
      techStack: ["Node.js", "Express.js", "JWT", "Redis", "Nodemailer"],
      achievements: [
        "JWT authentication with refresh tokens",
        "OTP-based verification",
        "Secure session management",
      ],
      githubUrl: "https://github.com/manish8941/authentication-system",
      liveUrl: "https://manish8941.github.io/authentication-system/",
    },
    {
      title: "GenAI Job Preparation Platform",
      description:
        "AI-powered platform for interview preparation and career growth.",
      techStack: ["React.js", "Node.js", "MongoDB", "OpenAI API", "LangChain"],
      achievements: [
        "AI mock interviews and feedback",
        "LLM-based question generation",
        "User dashboard and tracking",
      ],
      githubUrl: "https://github.com/manish8941/gen-AI",
      liveUrl: "https://manish8941.github.io/gen-AI/",
    },
    {
      title: "Banking Backend System",
      description:
        "Backend architecture simulating real-world banking systems.",
      techStack: ["Node.js", "Express.js", "MongoDB/PostgreSQL"],
      achievements: [
        "Account management system",
        "Transaction and ledger handling",
        "Secure API architecture",
      ],
      githubUrl: "https://github.com/manish8941/banking---backend-ledger",
      liveUrl: "https://manish8941.github.io/banking---backend-ledger/",
    },
  ];

  return (
    <div className="work-section section-container" id="work">
      <h2>
        Selected <span>Projects</span>
      </h2>

      <div className="project-grid" role="list">
        {projects.map((project) => (
          <article className="project-card" key={project.title} role="listitem">
            <header className="project-header">
              <h3 className="project-title">{project.title}</h3>
            </header>

            <p className="project-description">{project.description}</p>

            <div className="project-tech" aria-label="Tech stack">
              {project.techStack.map((tech) => (
                <span className="project-badge" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <ul className="project-achievements">
              {project.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>

            <div className="project-actions">
              <a
                className="project-action project-action-github"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                <FaGithub /> GitHub <MdArrowOutward />
              </a>
              <a
                className="project-action project-action-live"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Live <MdArrowOutward />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Work;
