import React from "react";
import "/src/App.css";

function GreenBar() {
  return (
    <div className="green-bar">
      <div className="logo-left logo-circle">
        <img className="leaf" src="/leaf.png" alt="Logo"></img>
      </div>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="search-icon">&#128269;</div>
      </div>
      <div className="logo-right logo-circle">
        <img className="profile" src="/profile.jpeg" alt="Logo"></img>
      </div>
    </div>
  );
}

export default GreenBar;
