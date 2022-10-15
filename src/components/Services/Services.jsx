import React from "react";
import "./Services.css";
import Android from "@iconscout/react-unicons/icons/uil-android";
import Web from "@iconscout/react-unicons/icons/uil-globe";
import Vlog from "@iconscout/react-unicons/icons/uil-laptop";

function Services({ flexValue }) {
  return (
    <div className="s-wrapper" style={{ flex: flexValue }}>
      <h2>What I Do</h2>
      <div className="services">
        <Android />
        <span>Anroid Development</span>
      </div>
      <div className="services">
        <Web />
        <span>Web Development</span>
      </div>
      <div className="services">
        <Vlog />
        <span>Vlogging</span>
      </div>
      <hr />
    </div>
  );
}

export default Services;
