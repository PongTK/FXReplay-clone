import React from "react";
import "./Hero.css";
import heroContentImg1 from "public/hero-content-img1.png";
import easyOrder from "public/easyorder.png";
import strategyCreation from "public/strategy creation.png";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="feature-hero-content">
          <h1 class="heading-hero">
            Discover the power of realistic backtesting
          </h1>
          <p class="large-p">
            Unlock your trading potential with FX Replay's cutting-edge features
            and tools. With our platform, you can easily analyze your
            performance, refine your strategies, and take your trading to the
            next level.
          </p>
        </div>
        <div className="main-hero-wrapper">
          <div className="main-hero-layout1">
            <div className="analitycs-content">
              <div class="features-head-analitycs">
                <h2 class="heading">
                  Get detailed performance metrics for your strategies.
                </h2>
                <p class="large-p-left">
                  With FX Replay's analytics, you can track your progress,
                  identify patterns and trends, and optimize your trading
                  strategies for success.
                </p>
              </div>
            </div>
            <div className="feature-img">
              <img src={heroContentImg1} alt="feature-img" />
            </div>
          </div>
          <div className="main-hero-layout2">
            <div className="easyorder-wrapper-features">
              <h3 class="heading-left-align">Easy order management</h3>
              <img src={easyOrder} alt="easyorder" />
            </div>
            <div className="strategy-wrapper-features">
              <img src={strategyCreation} alt="strategy-creation" />
              <h3 class="heading-left-align">Multiple strategy creation</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
