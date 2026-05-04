import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";
import { setSmoother, smoother } from "./utils/scrollSmoother";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const smootherInstance = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });
    setSmoother(smootherInstance);

    smootherInstance.scrollTop(0);
    smootherInstance.paused(true);

    const links = document.querySelectorAll(".header ul a");
    const handleClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const elem = e.currentTarget as HTMLAnchorElement;
        const section = elem.getAttribute("data-href");
        smoother?.scrollTo(section, true, "top top");
      }
    };
    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", handleClick);
    });
    window.addEventListener("resize", handleResize);

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", handleClick);
      });
      window.removeEventListener("resize", handleResize);
      smootherInstance.kill();
      setSmoother(null);
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          MY
        </a>
        <a
          href="mailto:manish.productive@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          manish.productive@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
