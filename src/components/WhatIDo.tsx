import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const containers = containerRef.current.filter(
      (container): container is HTMLDivElement => Boolean(container)
    );
    const listeners = containers.map((container) => {
      const listener = () => handleClick(container);
      return { container, listener };
    });

    if (ScrollTrigger.isTouch) {
      listeners.forEach(({ container, listener }) => {
        container.classList.remove("what-noTouch");
        container.addEventListener("click", listener);
      });
    }
    return () => {
      listeners.forEach(({ container, listener }) => {
        container.removeEventListener("click", listener);
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FRONTEND</h3>
              <h4>Building Scalable Web Interfaces</h4>
              <p>
                Building responsive, production-ready interfaces with React.js and
                modern web standards. I focus on clean UX, performance, and
                API-driven user experiences.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">Bootstrap</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BACKEND</h3>
              <h4>Designing Reliable AI-Ready APIs</h4>
              <p>
                Developing secure REST APIs and scalable services with Node.js and
                Express.js. I also integrate ML pipelines for prediction, analysis,
                and real-time workflows where needed.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">JWT</div>
                <div className="what-tags">Redis</div>
                <div className="what-tags">Socket.io</div>
                <div className="what-tags">Python</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
