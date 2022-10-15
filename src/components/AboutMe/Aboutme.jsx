import React from "react";
import "./Aboutme.css";
import AboutmeHeader from "../AboutMeHeader/AboutmeHeader";
import AboutmeProfile from "../AboutmeProfile/AboutmeProfile";
import Quote from "../Quote/Quote";
import Myself from "../Myself/Myself";
import Services from "../Services/Services";
import Contactme from "../Contactme/Contactme";

function Aboutme() {
  return (
    <div className="a-wrapper">
      <AboutmeProfile flexValue={1}/>
      <AboutmeHeader flexValue={1}/>
      <Quote flexValue={1}/>
      <Myself flexValue={1}/>
      <Services flexValue={1}/>
      <Contactme flexValue={1}/>
    </div>
  );
}

export default Aboutme;
