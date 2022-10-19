import React from "react";
import "./Navbar.css";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-list">
          <ul className="nav-link" style={{ listStyleType: "none" }}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/aboutme">
              <li>About Me</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="n-right">
        <div className="n-icon-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a
                href="https://twitter.com/REM_016_21?t=WYgGN5e-0t7gHa4mLuEcmw&s=09"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size="1.2rem" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/kaunghtet.kyaw.3154"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook size="1.2rem" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/KaungHtet21"
                target="_blank"
                rel="noreferrer"
              >
                <Github size="1.2rem" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kaung-htet-716305254"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn size="1.2rem" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
