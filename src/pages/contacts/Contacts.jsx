import React, { useState, useRef } from "react";
import "./contacts.scss";
import Fade from "react-reveal/Fade";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "@emailjs/browser";

export default function Contacts({ menuOpen }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Fade>
        <section className={"contact " + (menuOpen && "menu-active")} id="contacts">
          <div className="container">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-wrapper load-hidden">
              {isSubmitted ? (
                <div className="thank-you-message">
                  Thank you for your message. I will get back to you as soon as
                  possible.
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    class="form-control"
                    id="your-name"
                    name="user_name"
                    placeholder="Full Name"
                    disabled={menuOpen}
                    required
                  />
                  <input
                    type="email"
                    class="form-control"
                    name="user_email"
                    placeholder="Your Email"
                    disabled={menuOpen}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder=" Hii, Please enter your message here..."
                    className="form-control description-box"
                    disabled={menuOpen}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    disabled={menuOpen}
                    className={!menuOpen && "cta-btn cta-btn--resume"}
                  >
                    Let's Talk!
                  </button>
                </form>
              )}
            </div>
          </div>
          <footer>
            <div className="container-fluid">
              <p>Designed & Built by Nirnay</p>
              <div>
                <a
                  href="https://github.com/Nyx1on/portfolio"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub Repo
                  <GitHubIcon className="icons" />
                </a>
              </div>
            </div>
          </footer>
        </section>
      </Fade>
    </>
  );
}
