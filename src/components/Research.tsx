import { MdArrowOutward } from "react-icons/md";
import "./styles/Research.css";

const Research = () => {
  return (
    <section className="research-section section-container" id="research">
      <h2>
        Research <span>Publication</span>
      </h2>

      <div className="research-card">
        <h3>"Intelligent Ticket Checker using QR Code"</h3>
        <p className="research-description">
          Published in an international journal (IJFMR).
        </p>

        <a
          className="research-button"
          href="https://www.ijfmr.com/research-paper.php?id=39000"
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
        >
          View Paper <MdArrowOutward />
        </a>
      </div>
    </section>
  );
};

export default Research;
