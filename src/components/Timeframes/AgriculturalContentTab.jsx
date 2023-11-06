import React from "react";

function AgriculturalContentTab() {
  return (
    <div id="agri-content-tab">
      <div className="content-tab">
        <div className="accordion-pair-wrapper">
          <div className="accordion-pair">
            <input type="checkbox" id="agri1" />
            <label for="agri1" class="pair">
              Soy Bean
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

export default AgriculturalContentTab;
