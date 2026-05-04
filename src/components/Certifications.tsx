import "./styles/Certifications.css";

const Certifications = () => {
  const certifications = [
    "AI Engineering - IBM",
    "Machine Learning - IBM",
    "Cloud Computing - IIT Kharagpur",
    "Microsoft Cloud Certification",
  ];

  return (
    <section className="certifications-section section-container" id="certifications">
      <h2>
        Certifications <span>&</span> Training
      </h2>

      <div className="certifications-grid">
        {certifications.map((c) => (
          <div key={c} className="certification-card">
            {c}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
