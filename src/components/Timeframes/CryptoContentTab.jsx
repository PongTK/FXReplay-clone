import React from "react";

function CryptoContentTab() {
  return (
    <div id="crypto-content-tab">
      <div className="content-tab">
        <div className="accordion-pair-wrapper">
          <div className="accordion-pair">
            <input type="checkbox" id="crypcb1" />
            <label for="crypcb1" class="pair">
              LTCUSD
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
            <input type="checkbox" id="crypcb2" />
            <label for="crypcb2" class="pair">
              LNKUSD
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
            <input type="checkbox" id="crypcb3" />
            <label for="crypcb3" class="pair">
              ETHUSD
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
            <input type="checkbox" id="crypcb4" />
            <label for="crypcb4" class="pair">
              BTCUSD
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
            <input type="checkbox" id="crypcb5" />
            <label for="crypcb5" class="pair">
              ADAUSD
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

export default CryptoContentTab;
