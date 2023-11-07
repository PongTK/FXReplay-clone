import React from "react";
import "./Hero.css";

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
              <img
                src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/64513ef385e6772c849a9594_Analytics%20image%20features.png"
                alt="feature-img"
              />
            </div>
          </div>
          <div className="main-hero-layout2">
            <div className="easyorder-wrapper-features">
              <h3 class="heading-left-align">Easy order management</h3>
              <img
                src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/6446d48c1fb457c87de20abe_Features%20Easy%20order-image.png"
                alt="easyorder"
              />
            </div>
            <div className="strategy-wrapper-features">
              <img
                src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/646fed3ad2977ff306ba7eee_Create%20Strategies%20image.png"
                alt="strategy-creation"
              />
              <h3 class="heading-left-align">Multiple strategy creation</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
