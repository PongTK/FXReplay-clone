import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "/public/menu-icon.png";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(true);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <div className="navbar-section">
        <div className="container">
          <a href="#" className="brand">
            <img
              width="180"
              alt="FX Replay Logo"
              src="https://uploads-ssl.webflow.com/6424a815c888c02bfd0b7e47/6424c5fc28876dd0d9e32b6b_Logotype%20Complem-%20FX%20Replay.svg"
              loading="lazy"
            />
          </a>
          <button id="menu-icon" onClick={toggleDropdown}>
            <img src={MenuIcon} alt="MenuIcon" />
          </button>
          <div className="navigation">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Help center</a>
          </div>
          <div className="button-wrapper">
            <a href="#" className="sign-in">
              Sign in
            </a>
            <a href="#" className="get-start-btn">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div
        className={`dropdown-content ${dropdownVisible ? "hidden" : "show"}`}
      >
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Help center</a>
      </div>
    </>
  );
}

export default Navbar;
