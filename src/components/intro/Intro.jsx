import "./intro.scss";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

export default function Intro() {
  return (
    <>
      <section id="hero" className="jumbotron">
        <Fade left cascade>
          <div className="container">
            <h1 className="hero-title load-hidden">
              Hi there, I'm
              <span className="text-color-main"> Nirnay Behera</span>
              <br />
              <span className="typewriter">
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter.loop = true;
                    typewriter
                      .pauseFor(2000)
                      .typeString("Designer :)")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Full Stack Developer .")
                      .pauseFor(2000)
                      .start();
                  }}
                />
              </span>
            </h1>
            <p className="hero-cta load-hidden">
              <a
                rel="noreferrer"
                className="cta-btn cta-btn--hero"
                href="#about"
              >
                Know more
              </a>
            </p>
          </div>
        </Fade>
      </section>
    </>
  );
}
