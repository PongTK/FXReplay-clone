import React, { useState } from "react";
import "./ManuBtn.css";

function ManuBtn() {
  const [open, setOpen] = useState(false);
  return (
    <div className="manu-button">
      <a onclick={() => setOpen(!open)} type="button" class="dropbtn">
        <img src="public\menu-icon.png" alt="menu-icon" />
      </a>
      {open && (
        <div id="myDropdown" class="dropdown-content">
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">About</a>
          <a href="">Help center</a>
        </div>
      )}
    </div>
  );
}

export default ManuBtn;
