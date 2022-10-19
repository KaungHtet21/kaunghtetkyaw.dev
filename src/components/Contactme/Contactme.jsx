import React from "react";
import "./Contactme.css";
import Email from "@iconscout/react-unicons/icons/uil-envelope";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

function Contactme({ flexValue }) {
  return (
    <div className="cm-wrapper" style={{ flex: flexValue }}>
      <h2>Contact me at</h2>
      <div className="sm-icons">
        <a
          href="mailto:kaunghtetkyaw.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Email />
        </a>
        <a
          href="https://github.com/KaungHtet21"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://twitter.com/REM_016_21?t=WYgGN5e-0t7gHa4mLuEcmw&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="https://www.linkedin.com/in/kaung-htet-716305254"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  );
}

export default Contactme;
