import React, { useRef } from "react";
import "./contacts.scss";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import {
  My_SERVICE_ID,
  YOUR_TEMPLATE_ID,
  YOUR_PUBLIC_KEY,
} from "../../emailJsConfig";

export default function Contacts({ menuOpen }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        My_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Fade>
        <section className={"contact " + (menuOpen && "menu-active")}>
          <div className="container">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-wrapper load-hidden">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  class="form-control"
                  id="your-name"
                  name="user_name"
                  placeholder="Full Name"
                  disabled={menuOpen}
                />
                <input
                  type="email"
                  class="form-control"
                  name="user_email"
                  placeholder="Your Email"
                  disabled={menuOpen}
                />
                <textarea
                  name=""
                  placeholder=" Hii, I’ll try my best to get back to you!"
                  className="form-control description-box"
                  disabled={menuOpen}
                ></textarea>
                <button
                  type="submit"
                  disabled={menuOpen}
                  className={!menuOpen && "cta-btn cta-btn--resume"}
                >
                  Let's Talk!
                </button>
              </form>
            </div>
          </div>
          <footer>
            <div class="container-fluid">Designed & Built by Nirnay</div>
          </footer>
        </section>
      </Fade>
    </>
  );
}
