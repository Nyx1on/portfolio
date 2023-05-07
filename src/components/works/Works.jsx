import "./works.scss";
import Fade from "react-reveal/Fade";

export default function Works() {
  return (
    <Fade>
      <section id="projects">
        <div className="container">
          <div className="project-wrapper">
            <h2 className="section-title dark-blue-text">Projects</h2>
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="project-wrapper__text load-hidden">
                  <h3 className="project-wrapper__text-title">
                    Pathfinding Vizualiser
                  </h3>
                  <div>
                    <p className="mb-4">
                      Describe the project - Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--hero"
                    href="#!"
                  >
                    See Live
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn text-color-main"
                    href="https://github.com/Nyx1on/Pathfinding-Visualizer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <div className="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="#!" target="_blank">
                    <div
                      data-tilt
                      data-tilt-max="4"
                      data-tilt-glare="true"
                      data-tilt-max-glare="0.5"
                      className="thumbnail rounded js-tilt"
                    >
                      <img
                        alt="Project"
                        className="img-fluid"
                        src="assets/pathfinding_v.png"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="project-wrapper__text load-hidden">
                  <h3 className="project-wrapper__text-title">
                    Task Management Software
                  </h3>
                  <div>
                    <p className="mb-4">
                      Describe the project - Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--hero"
                    href="#!"
                  >
                    See Live
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn text-color-main"
                    href="https://github.com/Nyx1on/task-management-system"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <div className="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="#!" target="_blank">
                    <div
                      data-tilt
                      data-tilt-max="4"
                      data-tilt-glare="true"
                      data-tilt-max-glare="0.5"
                      className="thumbnail rounded js-tilt"
                    >
                      <img
                        alt="Project"
                        className="img-fluid"
                        src="assets/tms.png"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="project-wrapper__text load-hidden">
                  <h3 className="project-wrapper__text-title">
                    Crowd Funding App
                  </h3>
                  <div>
                    <p className="mb-4">
                      Describe the project - Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </div>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--hero"
                    href="#!"
                  >
                    See Live
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn text-color-main"
                    href="#!"
                  >
                    Source Code
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12">
                <div className="project-wrapper__image load-hidden">
                  <a rel="noreferrer" href="#!" target="_blank">
                    <div
                      data-tilt
                      data-tilt-max="4"
                      data-tilt-glare="true"
                      data-tilt-max-glare="0.5"
                      className="thumbnail rounded js-tilt"
                    >
                      <img
                        alt="Project"
                        className="img-fluid"
                        src="assets/stock.jpg"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
