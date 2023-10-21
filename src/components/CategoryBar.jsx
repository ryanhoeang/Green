import React from "react";
import "/src/App.css";

function CategoryBar() {
  return (
    <div className="button-row">
      <div className="spacer1"></div>
      <button className="button-left">Category</button>
      <button className="button">Services</button>
      <button className="button-right">Price</button>
      <div className="spacer2"></div>
      <button className="button1 location-button">Location</button>
      <div className="spacer3"></div>
      <button className="button1 redo-search-button">Redo Search</button>
    </div>
  );
}

export default CategoryBar;
