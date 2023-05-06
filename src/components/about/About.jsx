import "./about.scss";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <img
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src="assets/profile.jpg"
                alt="Profile"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              <p className="about-wrapper__info-text">
                Hello! My name is Nirnay, and I am a software developer with
                expertise in React, Express, NodeJS, and MongoDB as well as
                Smart Contracts using Ethereum .I have built a variety of
                full-stack web applications and my ability to work with both
                front-end and back-end technologies has enabled me to build
                complete applications of various needs.
              </p>
              <p className="about-wrapper__info-text">
                I am also an active open source contributor.I believe that open
                source software plays a crucial role in driving innovation and
                empowering individuals and communities around the world.
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
      </div>
    </section>
  );
}
