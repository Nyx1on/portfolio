import "./sidebar.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Slide from "react-reveal/Slide";

export default function SideBar() {
  return (
    <Slide bottom>
      <div orientation="right" className="side-bar ">
        <ul>
          <li>
            <a
              href="https://github.com/Nyx1on"
              rel="noreferrer"
              target="_blank"
              className="text-color-main"
            >
              <GitHubIcon className="icons" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/nyx1on/"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon className="icons" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/n1rnay/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon className="icons" />
            </a>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
