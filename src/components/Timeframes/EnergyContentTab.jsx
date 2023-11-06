import React from "react";

function EnergyContentTab() {
  return (
    <div id="energy-content-tab">
      <div className="content-tab">
        <div className="accordion-pair-wrapper">
          <div className="accordion-pair">
            <input type="checkbox" id="engycb1" />
            <label for="engycb1" class="pair">
              Natural Gas
            </label>
            <div className="pair-tf-detail">
              <p>
                1-30min, 45min, 1-12h, 1D, 1W, 1M
                <br />
                Inital date: Jan3. 2016
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-pair-wrapper">
          <div className="accordion-pair">
            <input type="checkbox" id="engycb2" />
            <label for="engycb2" class="pair">
              Brent Crude Oil
            </label>
            <div className="pair-tf-detail">
              <p>
                1-30min, 45min, 1-12h, 1D, 1W, 1M
                <br />
                Inital date: Jan3. 2016
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnergyContentTab;
