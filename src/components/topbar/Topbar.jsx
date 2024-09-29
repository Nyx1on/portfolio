import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Slide from "react-reveal/Slide";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <>
      <Slide top>
        <div className={"topbar " + (menuOpen && "active")}>
          <div className="wrapper">
            <div className="left">
              <a href="https://github.com/Nyx1on" className="logo">
                Nyx1on
              </a>
              <div className="itemContainer">
                <PersonIcon className="icons" />
                <span>9777820797</span>
              </div>
              <div className="itemContainer">
                <EmailIcon className="icons" />
                <span>nirnay.1behera@gmail.com</span>
              </div>
            </div>
            <div className="right">
              <Button
                variant="outlined"
                href="assets/resume.pdf"
                target="_blank"
                rel="no opener no referrer"
                className="btn"
              >
                Resume
              </Button>
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
}
