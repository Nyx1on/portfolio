import "./works.scss";
import Fade from "react-reveal/Fade";
import Carousel from "react-bootstrap/Carousel";
import { Tilt } from "react-tilt";
import Typewriter from "typewriter-effect";

export default function Works({menuOpen}) {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 30, // max tilt rotation (degrees)
    perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Fade>
      <section className={"projects " + (menuOpen && "menu-active")} id="works">
        <div className="container">
          <div className="project-wrapper">
            <h2 className="section-title dark-blue-text">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2000)
                    .typeString("Some things that I've built...")
                    .start();
                }}
              />
            </h2>
            <Carousel variant="dark" controls={false} interval={5000}>
              <Carousel.Item>
                <Fade>
                  <div className="row">
                    <div className="col-lg-4 col-sm-12">
                      <div className="project-wrapper__text load-hidden">
                        <h3 className="project-wrapper__text-title text-color-main">
                          1. Pathfinding Vizualiser
                        </h3>
                        <div>
                          <p className="mb-4">
                            A web-based visualizer for Dijkstra's algorithm, a
                            popular shortest path algorithm, written in
                            JavaScript and HTML/CSS. This project allows users
                            to visualize the process of finding the shortest
                            path between two points on a grid, using Dijkstra's
                            algorithm. Users can also create walls to obstruct
                            the pathfinding algorithm, simply by clicking on
                            grid cells. This is a great tool for anyone
                            interested in learning about pathfinding algorithms
                            or looking to improve their problem-solving skills.
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
                    <Tilt
                      options={defaultOptions}
                      className="col-lg-8 col-sm-12"
                    >
                      <div className="project-wrapper__image load-hidden">
                        <a rel="noreferrer" href="#!" target="_blank">
                          <div className="thumbnail rounded">
                            <img
                              alt="Project"
                              className="img-fluid"
                              src="assets/pathfinding_v.png"
                            />
                          </div>
                        </a>
                      </div>
                    </Tilt>
                  </div>
                </Fade>
              </Carousel.Item>
              <Carousel.Item>
                <Fade>
                  <div className="row">
                    <div className="col-lg-4 col-sm-12">
                      <div className="project-wrapper__text load-hidden">
                        <h3 className="project-wrapper__text-title text-color-main">
                          2. Task Management Software
                        </h3>
                        <div>
                          <p className="mb-4">
                            Describe the project - Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
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
                    <Tilt
                      options={defaultOptions}
                      className="col-lg-8 col-sm-12"
                    >
                      <div className="project-wrapper__image load-hidden">
                        <a rel="noreferrer" href="#!" target="_blank">
                          <div className="thumbnail rounded">
                            <img
                              alt="Project"
                              className="img-fluid"
                              src="assets/tms.png"
                            />
                          </div>
                        </a>
                      </div>
                    </Tilt>
                  </div>
                </Fade>
              </Carousel.Item>
              <Carousel.Item>
                <Fade>
                  <div className="row">
                    <div className="col-lg-4 col-sm-12">
                      <div className="project-wrapper__text load-hidden">
                        <h3 className="project-wrapper__text-title text-color-main">
                          3. Crowd Funding App
                        </h3>
                        <div>
                          <p className="mb-4">
                            Describe the project - Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
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
                    <Tilt
                      options={defaultOptions}
                      className="col-lg-8 col-sm-12"
                    >
                      <div className="project-wrapper__image load-hidden">
                        <a rel="noreferrer" href="#!" target="_blank">
                          <div className="thumbnail rounded">
                            <img
                              alt="Project"
                              className="img-fluid"
                              src="assets/pathfinding_v3.png"
                            />
                          </div>
                        </a>
                      </div>
                    </Tilt>
                  </div>
                </Fade>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </Fade>
  );
}
