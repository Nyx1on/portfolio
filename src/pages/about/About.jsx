import "./about.scss";
import Fade from "react-reveal/Fade";
import { Tilt } from "react-tilt";
import DownArrow from "../../components/downArrow/DownArrow";

export default function About({ menuOpen }) {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 30, // max tilt rotation (degrees)
    perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 5000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div>
      <section className={"about " + (menuOpen && "menu-active")} id="about">
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
                      Hello, my name is Nirnay and I'm a software developer
                      having experience in full-stack web application building.
                      Keeping updated with the latest trends of this industry is
                      a sort of commitment and a way to ensure that my skills
                      are always striving for excellence. I have experience in{" "}
                      <strong>Java, Python, C++ Javascript, HTML, CSS</strong> ,
                      libraries/frameworks such as
                      <strong>
                        {" "}
                        NextJs, ReactJs, Springboot, ExpressJs, REST API,
                        GraphQL, Django, Flask Sass{" "}
                      </strong>
                      etc. and database systems like{" "}
                      <strong>MongoDB, MsSQL, PostgreSQL</strong>
                    </p>
                    <p className="about-wrapper__info-text">
                      I do, at my leisure, occasionally participate in
                      open-source projects. It is a privilege as a learner to be
                      able to work alongside some of the most talented
                      developers out there and to be so excited to learn even
                      more while contributing positively to the open-source
                      community.
                    </p>
                    <span className="d-flex mt-3">
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn cta-btn--resume"
                        href="assets/resume.pdf"
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
      <DownArrow nextPage="works" curPage="about-me" />
    </div>
  );
}
