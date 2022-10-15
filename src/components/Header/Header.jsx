import React from "react";
import "./Header.css";
import profile from "../../img/profile3.jpg";

function Header() {
  return (
    <div className="header">
      <div className="h-wrapper">
        <div className="h-left">
          <img src={profile} alt="" />
        </div>
        <div className="h-right">
          <span>Kaung Htet's Paradise</span>
          <span>Android Dev ☠️, Melophile 🎼</span>
          <span>Nerd 👽</span>
        </div>
      </div>
      <hr style={{ height: "2px", color: "gray", backgroundColor: "gray", marginLeft: '10rem', marginRight: '10rem'}} />
    </div>
  );
}

export default Header;
