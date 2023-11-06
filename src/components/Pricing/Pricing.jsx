import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing-section">
      <div className="container-flex-vertical">
        <h1 class="heading">Ready to get started?</h1>
        <p class="large-p">
          Join the best backtesting software now to see how intuitive
          backtesting can be.
        </p>
        <div className="payment-methods-wrapper">
          <div class="large-p">Accepted Payment Methods</div>
          <img src="public\payment.png" alt="payment-icon" />
        </div>
        <div className="saving-badge">
          <h5 class="savings-heading">
            Up to 16% Off yearly, it's two months free!
          </h5>
        </div>
        <img
          src="public\curve pointdown arrow.svg"
          alt="curve-pointdown-arrow"
          className="curve-pointdown-arrow"
        />
        <div className="pricing-wrapper">
          <div className="pricing-card">
            <div class="header-card">
              <h2 class="special-subtitle">Monthly</h2>
              <h3 class="heading-5 period">Billed monthly</h3>
              <div class="pricing-value-wrap">
                <h3 class="price-title">
                  $ 35.00 USD<span class="period">/month</span>
                </h3>
              </div>
              <a href="#" class="pricing-button">
                Start your 5-day free trial
              </a>
            </div>
            <div className="content-card">
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">
                  Access to 14 pairs / instruments
                </p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">
                  Historical intraday data for the entire session
                </p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">Backtesting session analytics</p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">Up to 3 strategies</p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">Up to 20 backtesting sessions</p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">Up to 5 indicators</p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">
                  1 pair/instrument per backtesting session
                </p>
              </div>
            </div>
          </div>
          <div className="pricing-card">
            <div class="header-card">
              <h2 class="special-subtitle">Yearly</h2>
              <h3 class="heading-5 period">Billed $350 yearly</h3>
              <div class="pricing-value-wrap">
                <h3 class="price-title">
                  $ 29.17 USD<span class="period">/month</span>
                </h3>
              </div>
              <a href="#" class="pricing-button">
                Start your 5-day free trial
              </a>
            </div>
            <div className="content-card">
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">
                  Access to 14 pairs / instruments
                </p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">
                  Historical intraday data for the entire session
                </p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">Backtesting session analytics</p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">Up to 3 strategies</p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">Up to 20 backtesting sessions</p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">Up to 5 indicators</p>
              </div>
              <div class="feature-list-item">
                <img
                  src="public\check-line.svg"
                  alt="check-line"
                  class="check-line"
                />
                <p class="feature-list-item">
                  1 pair/instrument per backtesting session
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
