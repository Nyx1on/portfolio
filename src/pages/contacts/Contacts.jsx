import "./contacts.scss";
import Fade from "react-reveal/Fade";

export default function Contacts() {
  return (
    <>
      <Fade>
        <section id="contact">
          <div className="container">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-wrapper load-hidden">
              <form>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                />
                <textarea
                  name=""
                  placeholder="Message"
                  className="form-elements"
                ></textarea>
                <button type="submit" className="cta-btn cta-btn--resume">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
}
