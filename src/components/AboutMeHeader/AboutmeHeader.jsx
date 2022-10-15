import React from "react";
import "./AboutmeHeader.css";

function AboutmeHeader({flexValue}) {
  return (
    <div className="ah-wrapper" style={{flex: flexValue}}>
      <span>Mingalar par 👋</span>
      <span>I'm Kaung Htet</span>
    </div>
  );
}

export default AboutmeHeader;
