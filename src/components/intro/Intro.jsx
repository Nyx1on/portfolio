import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/profile.JPG" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Nirnay Behera</h1>
          <h3>
            <span>
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.loop = true;
                  typewriter
                    .typeString("Designer :)")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Full Stack Developer")
                    .pauseFor(2000)
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
