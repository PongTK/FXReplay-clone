import React from "react";
import "./Navbar.css";
import ManuBtn from "./ManuBtn";

function Navbar() {
  return (
    <div className="navbar-section">
      <div className="container">
        <ManuBtn />
        <a href="" className="brand">
          <img
            width="180"
            alt="FX Replay Logo"
            src="https://uploads-ssl.webflow.com/6424a815c888c02bfd0b7e47/6424c5fc28876dd0d9e32b6b_Logotype%20Complem-%20FX%20Replay.svg"
            loading="lazy"
          />
        </a>
        <div className="navigation">
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">About</a>
          <a href="">Help center</a>
        </div>
        <div className="button-wrapper">
          <a href="" className="sign-in">
            Sign in
          </a>
          <a href="" className="get-start-btn">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
