import React from "react";
import "./Timeframes.css";
import ForexContentTab from "./ForexContentTab";
import IndexContentTab from "./IndexContentTab";
import EnergyContentTab from "./EnergyContentTab";
import CryptoContentTab from "./CryptoContentTab";
import AgriculturalContentTab from "./AgriculturalContentTab";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function Timeframes() {
  return (
    <div className="timeframes-section">
      <div className="timeframes-container">
        <h2 class="heading hero">
          Check out our available pairs and timeframes
        </h2>
        <div className="tabs-wrapper">
          <BrowserRouter>
            <div className="tabs-menu">
              <NavLink
                exact
                to="/"
                className="tab-link"
                activeClassName=".tab-link2"
              >
                Forex
              </NavLink>
              <NavLink exact to="/IdxContentTab" className="tab-link">
                Index
              </NavLink>
              <NavLink exact to="/EngyContentTab" className="tab-link">
                Energy
              </NavLink>
              <NavLink exact to="/CrypContentTab" className="tab-link">
                Crypto
              </NavLink>
              <NavLink exact to="/AgriContentTab" className="tab-link">
                Agricultural
              </NavLink>
            </div>
            <div className="tabs-content">
              <Routes>
                <Route index element={<ForexContentTab />} />
                <Route path="IdxContentTab" element={<IndexContentTab />} />
                <Route path="EngyContentTab" element={<EnergyContentTab />} />
                <Route path="CrypContentTab" element={<CryptoContentTab />} />
                <Route
                  path="AgriContentTab"
                  element={<AgriculturalContentTab />}
                />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default Timeframes;
