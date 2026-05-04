import "./styles/Education.css";

const Education = () => {
  return (
    <section className="education-section section-container" id="education">
      <h2>
        Education <span>Details</span>
      </h2>

      <div className="education-card">
        <h3>B.Tech in Computer Science (AI & ML)</h3>
        <p className="education-institute">VIT Bhopal</p>
        <div className="education-meta">
          <div className="education-meta-item">
            <span className="education-label">CGPA</span>
            <span className="education-value">8.2</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

