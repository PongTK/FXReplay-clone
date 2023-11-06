import React from "react";
import "./Orders.css";

function Orders() {
  return (
    <div className="orders-section">
      <div className="orders-container">
        <div className="features-order-content">
          <h2 class="heading-hero">Place orders with drawings</h2>
          <p class="large-p">
            You can place limit, market, or stop orders right from the chart.
          </p>
        </div>
        <div className="features-gif-wrapper">
          <img src="public\GIF-drawing-orders.gif" alt="GIF-drawing-orders" />
        </div>
        <div className="order-grid-layout">
          <div className="drawing-wrapper-feature">
            <h3 class="heading-left-align">Save drawing templates</h3>
            <p class="paragraph">
              Our intuitive, hassle-free platform allows you to focus on what
              matters: technical analysis.
            </p>
            <img
              src="public\Save-drawing-templates.gif"
              alt="Save-drawing-templates"
            />
          </div>
          <div className="tdv-wrapper-feature">
            <img src="public\TradingView-charts.png" alt="TradingView-charts" />
            <h3 class="heading-left-align">TradingView charts</h3>
            <p class="paragraph">
              Backtesting with familiar tools never felt so real.
            </p>
          </div>
          <div className="replay-wrapper-feature">
            <h3 class="heading-left-align">
              Never miss a moment with our replay feature!
            </h3>
            <p class="paragraph">
              Our replay feature helps you ensure that all opportunities are
              studied and accounted for.
            </p>
          </div>
          <div className="econ-wrapper-feature">
            <h3 class="heading-left-align">Economic calendar</h3>
            <p class="paragraph">
              Our platform seamlessly incorporates an economic calendar,
              empowering you to elevate your backtesting and trade with informed
              precision.
            </p>
            <img src="public\Economic-calendar.png" alt="Economic-calendar" />
          </div>
          <div className="timeframe-wrapper-feature">
            <h3 class="heading-left-align">Multiple timeframes</h3>
            <p class="paragraph">
              analyze price action across various timeframes simultaneously,
              gaining a comprehensive view of trends and patterns.
            </p>
            <img src="public\Multitimeframe.png" alt="Multitimeframe" />
          </div>
        </div>
        <div className="order-blog4">
          <div className="order-blog4-container">
            <div className="order-blog4-grid">
              <div className="card-wrapper">
                <img src="public\auto-risk-culc.png" alt="auto-risk-culc" />
                <div className="card-content">
                  <h4>Automatic risk calculation</h4>
                  <p class="paragraph-2">
                    Optimize your trading strategy with our risk calculation
                    feature.
                  </p>
                </div>
              </div>
              <div className="card-wrapper">
                <img src="public\con-adding-indy.png" alt="con-adding-indy" />
                <div className="card-content">
                  <h4>Continously adding new indicators</h4>
                  <p class="paragraph-2">
                    Get the most out of your backtesting sessions with our
                    always updated custom indicators.
                  </p>
                </div>
              </div>
              <div className="card-wrapper">
                <img
                  src="public\save-chart-layout.png"
                  alt="save-chart-layout"
                />
                <div className="card-content">
                  <h4>Save chart layout</h4>
                  <p class="paragraph-2">
                    Save and load your preferred chart layouts so you don't
                    waste time setting up.
                  </p>
                </div>
              </div>
              <div className="card-wrapper">
                <img src="public\statistics.png" alt="statistics" />
                <div className="card-content">
                  <h4>statistics</h4>
                  <p class="paragraph-2">
                    Get insights into your trading performance with FX Replay's
                    powerful metrics and analytics feature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
