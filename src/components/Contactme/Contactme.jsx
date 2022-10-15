import React from "react";
import "./Contactme.css";
import Email from "@iconscout/react-unicons/icons/uil-envelope";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

function Contactme({flexValue}) {
  return (
    <div className="cm-wrapper" style={{flex: flexValue}}>
      <h2>Contact me at</h2>
      <div className="sm-icons">
        <Email/>
        <Github/>
        <Twitter/>
        <Linkedin/>
      </div>
    </div>
  );
}

export default Contactme;
