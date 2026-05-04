import "./styles/Career.css";

type Experience = {
  role: string;
  company: string;
  points: string[];
};

const Career = () => {
  const experiences: Experience[] = [
    {
      role: "IT Intern",
      company: "AIS Distribution Services Ltd",
      points: [
        "Improved system performance by 15%",
        "Worked across multiple distribution systems",
        "worked for multiple webdev project ",
      ],
    },
    {
      role: "Internshala Student Partner",
      company: "Internshala",
      points: [
        "Reached 500+ students",
        "85% conversion rate",
        "Increased outreach by 50%",
      ],
    },
    {
      role: "Core Member",
      company: "Vitronix Club",
      points: [
        "Led events with 200+ participants",
        "Improved engagement by 40%",
        "Mentored junior developers",
      ],
    },
  ];

  return (
    <div className="career-section section-container" id="experience">
      <h2>
        My Experience <span>&</span>
      </h2>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <article className="experience-card" key={exp.role + exp.company}>
            <div className="experience-header">
              <h4>{exp.role}</h4>
              <h5>{exp.company}</h5>
            </div>

            <ul className="experience-points">
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Career;
