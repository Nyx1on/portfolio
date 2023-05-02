import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="https://github.com/Nyx1on" className="logo">Nirnay.</a>
          <div className="itemContainer">
            <Person className="icons"/>
              <span>9777820797</span>
              </div>
            <div className="itemContainer">
              <Mail className="icons"/>
              <span>nirnay.1behera@gmail.com</span>
          </div>
        </div>
        <div className="right">
        <a href="assets/Nirnay_Behera.pdf" className="btn" target="_blank"rel="no opener no referrer">Resume</a>
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
