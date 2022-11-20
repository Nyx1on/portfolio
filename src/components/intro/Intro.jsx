import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/me.JPG" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Nirnay Behera</h1>
          <h3>Freelance <span><Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Designer :)")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Full Stack Developer")
                .start();
              }}
            />
          </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
