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
            <Link to="aboutme">
              <li>About Me</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="n-right">
        <div className="n-icon-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Twitter size="1.2rem" />
            </li>
            <li>
              <Facebook size="1.2rem" />
            </li>
            <li>
              <Github size="1.2rem" />
            </li>
            <li>
              <LinkedIn size="1.2rem" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
