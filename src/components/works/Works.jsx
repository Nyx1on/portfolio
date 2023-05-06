import "./works.scss";

export default function Works() {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>

          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text load-hidden">
                <h3 className="project-wrapper__text-title">Project Title 0</h3>
                <div>
                  <p className="mb-4">
                    Describe the project being very specific, you can use the
                    Twitter standard: no more than 280 characters: complement
                    the information: the skills learned or reinforced in its
                    realization and how you faced it, prove to be proactive in
                    the search for solutions.
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
                      alt="Project Image"
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
                <h3 className="project-wrapper__text-title">Project Title 1</h3>
                <div>
                  <p className="mb-4">
                    Demonstrate in this description the skills of a programmer:
                    such as having commitment, having perseverance and accepting
                    alternative solutions. Remember that being a portfolio you
                    are not selling the project, you are selling yourself, it
                    reflects the resources used: Frameworks, libraries,
                    platforms, etc.
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
                      alt="Project Image"
                      className="img-fluid"
                      src="assets/project.jpg"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text load-hidden">
                <h3 className="project-wrapper__text-title">Project Title 2</h3>
                <div>
                  <p className="mb-4">
                    If the project was collaborative, reflect it in this
                    description, that will demonstrate communication and/or
                    leadership skills. Additionally, if you made use of the
                    mastery of a second language, it will reflect on you
                    professionalism.
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
                      alt="Project Image"
                      className="img-fluid"
                      src="assets/project.jpg"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
