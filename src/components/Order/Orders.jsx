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
          <img
            src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/6441bb782465003a9983ebd3_Place-order-with-drawing-2.gif"
            alt="GIF-drawing-orders"
          />
        </div>
        <div className="order-grid-layout">
          <div className="drawing-wrapper-feature">
            <h3 class="heading-left-align">Save drawing templates</h3>
            <p class="paragraph">
              Our intuitive, hassle-free platform allows you to focus on what
              matters: technical analysis.
            </p>
            <img
              src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/6441cb79dfbc2d7e8a3b7e7b_Save-templates.gif"
              alt="Save-drawing-templates"
            />
          </div>
          <div className="tdv-wrapper-feature">
            <img
              src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/6441ce67dfbc2d320b3bc0cb_Trading%20view%20-%20Feature.png"
              alt="TradingView-charts"
            />
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
            <img
              src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/64d2b0b67f14f6ed633f66f2_Calendar%20feature.png"
              alt="Economic-calendar"
            />
          </div>
          <div className="timeframe-wrapper-feature">
            <h3 class="heading-left-align">Multiple timeframes</h3>
            <p class="paragraph">
              analyze price action across various timeframes simultaneously,
              gaining a comprehensive view of trends and patterns.
            </p>
            <img
              src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/64ecec207913e34e13d0b134_Multitimeframe%20feature%202.png"
              alt="Multitimeframe"
            />
          </div>
        </div>
        <div className="order-blog4">
          <div className="order-blog4-container">
            <div className="order-blog4-grid">
              <div className="card-wrapper">
                <img
                  src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/6442ff8e96494e0c5cf8898e_Automatic%20Risk%20Calculator.png"
                  alt="auto-risk-culc"
                />
                <div className="card-content">
                  <h4>Automatic risk calculation</h4>
                  <p class="paragraph-2">
                    Optimize your trading strategy with our risk calculation
                    feature.
                  </p>
                </div>
              </div>
              <div className="card-wrapper">
                <img
                  src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/6442ffa1ec30b665dfc31d91_Custom%20Indicators.png"
                  alt="con-adding-indy"
                />
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
                  src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/6442ffb5733e83665c781b0f_Save%20Chart%20Layout.png"
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
                <img
                  src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/64513f9dcbf616cf8e0cbe17_Statistics.png"
                  alt="statistics"
                />
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
