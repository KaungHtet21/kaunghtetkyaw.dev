import React from 'react'
import profile from "../../img/profile1.jpg";
import './AboutmeProfile.css'

function AboutmeProfile({flexValue}) {
  return (
    <div className="ap-wrapper" style={{flex: flexValue}}>
        <div className="ap-image">
        <img src={profile} alt="" />
      </div>
      <div className="color-bg"></div>
    </div>
  )
}

export default AboutmeProfile
