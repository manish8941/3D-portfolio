import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:manish.productive@gmail.com" data-cursor="disable">
                manish.productive@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/manish8941"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <FaGithub /> Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/manish-yadav-23967b255"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <FaLinkedinIn /> LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Manish Yadav</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
