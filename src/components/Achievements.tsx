import "./styles/Achievements.css";

const Achievements = () => {
  const achievements = [
    "Solved 100+ DSA problems over GFG , Leetcode , Codechef , Codeforces",
    "GSoC Participant",
    "GSSoC Contributor",
    "Published a Research Paper",
    "Hackathon participant",
  ];

  return (
    <section className="achievements-section section-container" id="achievements">
      <h2>
        Key <span>Achievements</span>
      </h2>

      <ul className="achievements-list">
        {achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;

