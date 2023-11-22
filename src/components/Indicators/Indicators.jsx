import React, { useState } from "react";
import "./Indicators.css";

const indies = [
  { indyName: "Silver Bullet by FX Replay", id: 1 },
  { indyName: "Order Blocks with signals by FX Replay", id: 2 },
  { indyName: "DMNS ICT AMD by FX Replay", id: 3 },
  { indyName: "SFL Session Opens by FX Replay", id: 4 },
  { indyName: "50% body candle by FX Replay", id: 5 },
  { indyName: "FVG Indicator by FX Replay", id: 6 },
  { indyName: "Round Number by FX Replay", id: 7 },
  { indyName: "MentFx Structure by FX Replay", id: 8 },
  { indyName: "DR/IDR by FX Replay", id: 9 },
  { indyName: "ZigZag", id: 10 },
  { indyName: "Williams Fractal", id: 11 },
  { indyName: "Williams %R", id: 12 },
  { indyName: "Williams Alligator", id: 13 },
  { indyName: "Volume", id: 14 },
  { indyName: "Vortex Indicator", id: 15 },
  { indyName: "Volume Profile Fixed Range", id: 16 },
  { indyName: "Volume Profile Visible Range", id: 17 },
  { indyName: "Volume Oscillator", id: 18 },
  { indyName: "VWMA", id: 19 },
  { indyName: "VWAP", id: 20 },
  { indyName: "Volatility Index", id: 21 },
  { indyName: "Volatility O-H-L-C", id: 22 },
  { indyName: "Volatility Close-to-Close", id: 23 },
  { indyName: "Volatility Zero Trend Close-to-Close", id: 24 },
  { indyName: "Ultimate Oscillator", id: 25 },
  { indyName: "True Strength Indicator", id: 26 },
  { indyName: "TRIX", id: 27 },
  { indyName: "Typical Price", id: 28 },
  { indyName: "Trend Strength Index", id: 29 },
  { indyName: "Triple EMA", id: 30 },
  { indyName: "Spread", id: 31 },
  { indyName: "Stochastic RSI", id: 32 },
  { indyName: "SuperTrend", id: 33 },
  { indyName: "Standard Deviation", id: 34 },
  { indyName: "Stochastic", id: 35 },
  { indyName: "Smoothed Moving Average", id: 36 },
  { indyName: "SMI Ergodic Indicator/Oscillator", id: 37 },
  { indyName: "Standard Error Bands", id: 38 },
  { indyName: "Price Volume Trend", id: 39 },
  { indyName: "Relative Volatility Index", id: 40 },
  { indyName: "Standard Error", id: 41 },
  { indyName: "Relative Vigor Index", id: 42 },
  { indyName: "Relative Strength Index", id: 43 },
  { indyName: "Ratio", id: 44 },
  { indyName: "Moving Average Multiple", id: 45 },
  { indyName: "Rate Of Change", id: 46 },
  { indyName: "Price Oscillator", id: 47 },
  { indyName: "Price Channel", id: 48 },
  { indyName: "Pivot Points Standard", id: 49 },
  { indyName: "McGinley Dynamic", id: 50 },
  { indyName: "Parabolic SAR", id: 51 },
  { indyName: "On Balance Volume", id: 52 },
  { indyName: "Net Volume", id: 53 },
  { indyName: "Majority Rule", id: 54 },
  { indyName: "Moving Average Hamming", id: 55 },
  { indyName: "Moving Average Double", id: 56 },
  { indyName: "Moving Average Adaptive", id: 57 },
  { indyName: "Moving Average Triple", id: 58 },
  { indyName: "Moving Average Exponential", id: 59 },
  { indyName: "Moving Average Weighted", id: 60 },
  { indyName: "Ichimoku Cloud", id: 61 },
  { indyName: "MACD", id: 62 },
  { indyName: "Moving Average Channel", id: 63 },
  { indyName: "Moving Average", id: 64 },
  { indyName: "Money Flow Index", id: 65 },
  { indyName: "Momentum", id: 66 },
  { indyName: "Median Price", id: 67 },
  { indyName: "Mass Index", id: 68 },
  { indyName: "MA with EMA Cross", id: 69 },
  { indyName: "Linear Regression Slope", id: 70 },
  { indyName: "MA Cross", id: 71 },
  { indyName: "Linear Regression Curve", id: 72 },
  { indyName: "Least Squares Moving Average", id: 73 },
  { indyName: "Know Sure Thing", id: 74 },
  { indyName: "Klinger Oscillator", id: 75 },
  { indyName: "Keltner Channels", id: 76 },
  { indyName: "Guppy Multiple Moving Average", id: 77 },
  { indyName: "Hull Moving Average", id: 78 },
  { indyName: "Historical Volatility", id: 79 },
  { indyName: "Fisher Transform", id: 80 },
  { indyName: "Envelopes", id: 81 },
  { indyName: "EMA Cross", id: 82 },
  { indyName: "Elder's Force Index", id: 83 },
  { indyName: "Ease of Movement", id: 84 },
  { indyName: "Coppock Curve", id: 85 },
  { indyName: "Double EMA", id: 86 },
  { indyName: "Directional Movement", id: 87 },
  { indyName: "Donchian Channels", id: 88 },
  { indyName: "Detrended Price Oscillator", id: 89 },
  { indyName: "Correlation Coefficient", id: 90 },
  { indyName: "Correlation - Log", id: 91 },
  { indyName: "Connors RSI", id: 92 },
  { indyName: "Commodity Channel Index", id: 93 },
  { indyName: "Choppiness Index", id: 94 },
  { indyName: "Chande Momentum Oscillator", id: 95 },
  { indyName: "Chop Zone", id: 96 },
  { indyName: "Chande Kroll Stop", id: 97 },
  { indyName: "Chaikin Volatility", id: 98 },
  { indyName: "Chaikin Oscillator", id: 99 },
  { indyName: "Chaikin Money Flow", id: 100 },
];

function indicators() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredIndies, setFilteredIndies] = useState(indies);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = indies.filter((indies) =>
      indies.indyName
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );

    setFilteredIndies(filteredItems);
  };

  return (
    <div className="indicators-section">
      <div className="indicators-container">
        <div className="indicators-content">
          <h2 class="heading-hero">Explore our wide range of indicators</h2>
          <p class="large-p">
            Take your trading experience to the next level with FX Replay.
          </p>
        </div>
        <div className="search-indicators-container">
          <div className="indicators-block">
            <h3 class="indicator-heading">Indicators</h3>
            <div className="indicators-form">
              <input
                className="mySearch"
                type="text"
                value={searchItem}
                onChange={handleInputChange}
                placeholder="Search for indicators..."
              />
            </div>
            <div className="indicators-wrapper">
              <div className="indicators-list">
                <ul className="indicators-items">
                  {filteredIndies.map((indies) => (
                    <li key={indies.id}>{indies.indyName}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <img
            src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/64430aa27e177f2ccd2a04de_Ellipse%204.svg"
            alt="gradient-PNG"
            loading="lazy"
            className="gradient-image-top"
          />
          <img
            src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/64430aa27e177f2ccd2a04de_Ellipse%204.svg"
            alt="gradient-PNG"
            loading="lazy"
            className="gradient-image-bottom"
          />
        </div>
      </div>
    </div>
  );
}

export default indicators;
