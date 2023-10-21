import React, { useState } from "react";
import "/src/App.css";
import { Link } from "react-router-dom";

function CategoryBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="button-row">
      <div className="spacer1"></div>

      <div className="dropdown">
        <button
          className={`button-left ${dropdownOpen ? "active" : ""}`}
          onClick={toggleDropdown}
        >
          Category
        </button>

        {dropdownOpen && (
          <ul className="menu">
            <button className="menu-item button">
              <button>Food</button>
            </button>
            <button className="menu-item button">
              <button>Food</button>
            </button>
            <button className="menu-item button">
              <button>Food</button>
            </button>
          </ul>
        )}
      </div>

      <Link to="/services" style={{ textDecoration: "none" }}>
        <button className="button">Food</button>
      </Link>

      <button className="button-right">Filters</button>
      <div className="spacer2"></div>
      <button className="button1 location-button">Cupertino</button>
      <div className="spacer3"></div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="button1 redo-search-button">Map</button>
      </Link>
    </div>
  );
}

export default CategoryBar;
