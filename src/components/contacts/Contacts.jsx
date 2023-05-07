import "./contacts.scss";

export default function Contacts() {
  return (
    <>
      <section id="contact">
        <div class="container">
          <h2 class="section-title">Contact</h2>
          <div class="contact-wrapper load-hidden">
            <p class="contact-wrapper__text">[Put your call to action here]</p>
            <a
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--resume"
              href="mailto:example@email.com"
            >
              Call to Action
            </a>
          </div>
        </div>
      </section>
      <footer class="footer navbar-static-bottom">
        <div class="container">
          <a rel="noreferrer" href="#top" class="back-to-top">
            <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
          </a>
          <div class="social-links">
            <a rel="noreferrer" href="#!" target="_blank">
              <i class="fa fa-twitter fa-inverse"></i>
            </a>
            <a rel="noreferrer" href="#!" target="_blank">
              <i class="fa fa-linkedin fa-inverse"></i>
            </a>
            <a rel="noreferrer" href="#!" target="_blank">
              <i class="fa fa-github fa-inverse"></i>
            </a>
          </div>

          <hr />
          <p class="footer__text">
            © 2021 - Template developed by
            <a
              rel="noreferrer"
              href="https://github.com/cobiwave"
              target="_blank"
            >
              Jacobo Martínez
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
