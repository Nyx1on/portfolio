import "./works.scss";
import Fade from "react-reveal/Fade";
import Carousel from "react-bootstrap/Carousel";
import { Tilt } from "react-tilt";
import Typewriter from "typewriter-effect";
import DownArrow from "../../components/downArrow/DownArrow";

export default function Works({ menuOpen }) {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 30, // max tilt rotation (degrees)
    perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 10000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div>
      <Fade>
        <section
          className={"projects " + (menuOpen && "menu-active")}
          id="works"
        >
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
                            1. Snapify
                          </h3>
                          <div>
                            <p className="mb-4">
                              Snapify, a web application designed with
                              photographers in mind. Snapify is the brainchild
                              of a passionate photographer and technology
                              enthusiast who saw a need for a platform that not
                              only helps photographers tell compelling stories
                              through their images but also fosters a thriving
                              community of creative individuals.
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
                            href="https://github.com/Nyx1on/Snapify-application"
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
                          <a
                            rel="noreferrer"
                            href="assets/sean.png"
                            target="_blank"
                          >
                            <div className="thumbnail rounded">
                              <img
                                alt="Project"
                                className="img-fluid"
                                src="assets/snapify.png"
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
                            2. Sentiment Analysis
                          </h3>
                          <div>
                            <p className="mb-4">
                              Project Sean is a sentiment analysis project. It
                              utilizes machine learning techniques, including
                              TensorFlow and Keras, to analyze the sentiment of
                              comments or reviews. By entering a comment into
                              the prompt, users can gain valuable insights into
                              the emotional tone of the text. Though still a
                              work in progress, Project Sean aims to provide a
                              user-friendly platform for sentiment analysis,
                              leveraging the power of artificial intelligence
                              and natural language processing.
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
                            href="https://github.com/Nyx1on/project-sean-fs"
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
                          <a
                            rel="noreferrer"
                            href="assets/sean.png"
                            target="_blank"
                          >
                            <div className="thumbnail rounded">
                              <img
                                alt="Project"
                                className="img-fluid"
                                src="assets/sean.png"
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
                            3. Creativai-2.0
                          </h3>
                          <div>
                            <p className="mb-4">
                              CreativAI 2.0 is a web application developed using
                              the MERN stack, leveraging the OpenAI API to
                              empower users in generating AI-generated
                              photographs. This platform fosters a collaborative
                              environment where users can showcase their
                              creations. Users can easily find photographs by
                              searching for keywords, tags, styles, or specific
                              criteria, enhancing their ability to explore and
                              access the diverse range of AI-generated photos
                              within the platform.
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
                            href="https://github.com/Nyx1on/creativai-2.0"
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
                          <a
                            rel="noreferrer"
                            href="assets/sean.png"
                            target="_blank"
                          >
                            <div className="thumbnail rounded">
                              <img
                                alt="Project"
                                className="img-fluid"
                                src="assets/creativeai-2.0-2.png"
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
                            4. Pathfinding Vizualiser
                          </h3>
                          <div>
                            <p className="mb-4">
                              A web-based visualizer for Dijkstra's algorithm, a
                              popular shortest path algorithm, written in
                              JavaScript and HTML/CSS. This project allows users
                              to visualize the process of finding the shortest
                              path between two points on a grid, using
                              Dijkstra's algorithm. Users can also create walls
                              to obstruct the pathfinding algorithm, simply by
                              clicking on grid cells. This is a great tool for
                              anyone interested in learning about pathfinding
                              algorithms or looking to improve their
                              problem-solving skills.
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
                          <a
                            rel="noreferrer"
                            href="assets/pathfinding_v.png"
                            target="_blank"
                          >
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
                            5. Task Management Software
                          </h3>
                          <div>
                            <p className="mb-4">
                              Task Management Software (TMS) is a comprehensive
                              solution built with React, Firebase, and Sass.
                              With TMS, users can securely authenticate, create,
                              and efficiently manage tasks. This intuitive
                              software enables users to organize and prioritize
                              tasks, set deadlines, assign team members, and
                              track progress. Streamline your task management
                              process with TMS, offering a seamless user
                              experience and powerful features for enhanced
                              productivity.
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
                          <a
                            rel="noreferrer"
                            href="assets/tms.png"
                            target="_blank"
                          >
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
                            6. Crowd Funding App
                          </h3>
                          <div>
                            <p className="mb-4">
                              The crowdfunding application is built on Ethereum
                              blockchain technology and smart contracts. This
                              platform allows users to create and participate in
                              fundraising campaigns using cryptocurrency (ETH).
                              Through smart contracts, contributors can securely
                              pledge funds, and project creators can
                              transparently manage and distribute funds based on
                              predefined conditions. CrowdFundETH ensures a
                              decentralized and efficient crowdfunding
                              experience, empowering individuals to support and
                              launch projects while leveraging the benefits of
                              blockchain and smart contract technology.
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
                          <a
                            rel="noreferrer"
                            href="assets/pathfinding_v3.png"
                            target="_blank"
                          >
                            <div className="thumbnail rounded">
                              <img
                                alt="Project"
                                className="img-fluid"
                                src="assets/no_preview.png"
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
      <DownArrow nextPage="contacts" curPage="my-works" />
    </div>
  );
}
