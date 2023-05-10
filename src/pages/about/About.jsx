import "./about.scss";
import Fade from "react-reveal/Fade";
import { Tilt } from "react-tilt";

export default function About({ menuOpen }) {
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
    <section className={"about " + (menuOpen && "menu-active")}>
      <Fade>
        <div className="container">
          <Fade right>
            <h2 className="section-title load-hidden">About me</h2>
          </Fade>
          <Fade left>
            <div className="row about-wrapper">
              <Tilt options={defaultOptions} className="col-md-6 col-sm-12">
                <div className="about-wrapper__image load-hidden">
                  <img
                    className="img-fluid rounded shadow-lg"
                    height="auto"
                    width="300px"
                    src="assets/profile.jpg"
                    alt="Profile"
                  />
                </div>
              </Tilt>
              <div className="col-md-6 col-sm-12">
                <div className="about-wrapper__info load-hidden">
                  <p className="about-wrapper__info-text">
                    Hello, my name is Nirnay. I'm a software developer with
                    experience in building full-stack web applications. I'm
                    dedicated to staying up-to-date with the latest industry
                    trends and constantly improving my skills. I have experience
                    in{" "}
                    <strong>
                      HTML, CSS, Javascript, Solidity, Python, C++
                    </strong>{" "}
                    , libraries/frameworks such as
                    <strong>
                      {" "}
                      ReactJs, Redux, ExpressJs, NodeJs, REST API, GraphQL, Sass{" "}
                    </strong>
                    etc. and database systems like{" "}
                    <strong>MongoDB, NoSQL, PostgreSQL</strong>
                  </p>
                  <p className="about-wrapper__info-text">
                    I've also recently started contributing to open source
                    projects. While I'm still learning, I'm grateful for the
                    opportunity to collaborate with other developers and excited
                    to continue growing as a developer and contributing to open
                    source community in meaningful ways.
                  </p>
                  <span className="d-flex mt-3">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cta-btn cta-btn--resume"
                      href="assets/dio.jpg"
                    >
                      View Resume
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
    </section>
  );
}
