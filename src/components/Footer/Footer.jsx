import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top-wrapper">
        <div className="footer-top-content">
          <img
            width="198"
            alt="FX Replay Logo"
            src="https://uploads-ssl.webflow.com/6424a815c888c02bfd0b7e47/6424c5fc28876dd0d9e32b6b_Logotype%20Complem-%20FX%20Replay.svg"
            loading="lazy"
          />
          <div className="links-wrapper">
            <div class="links-container">
              <div class="footer-heading-wrapper">
                <h4 class="footer-heading">FX Replay</h4>
              </div>
              <a href="#" class="footer-link">
                <div class="small-p">About</div>
              </a>
              <a href="#" class="footer-link">
                <div class="small-p">Community</div>
              </a>
              <a href="#" class="footer-link">
                <div class="small-p">Pricing</div>
              </a>
              <a href="#" class="footer-link">
                <div class="small-p">Privacy policy</div>
              </a>
              <a href="#" class="footer-link">
                <div class="small-p">Terms and conditions</div>
              </a>
            </div>
            <div class="links-container">
              <div class="footer-heading-wrapper">
                <h4 class="footer-heading">Features</h4>
              </div>
              <a href="#" class="footer-link">
                <div class="small-p">Analytics</div>
              </a>
              <a href="#" class="footer-link">
                <div class="small-p">Easy order management</div>
              </a>
              <a href="#" class="footer-link">
                <div class="small-p">Strategy creation</div>
              </a>
            </div>
            <div class="links-container">
              <div class="footer-heading-wrapper">
                <h4 class="footer-heading">Contact us</h4>
              </div>
              <a href="#" class="footer-link">
                <div class="small-p">FAQ</div>
              </a>
              <a href="#" class="footer-link">
                <div class="small-p">Support</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrapper">
        <div className="footer-bottom-content">
          <div class="social-icons-wrapper">
            <a href="#" target="_blank" class="social-icon">
              <img src="public\Twitter-icon.svg" loading="lazy" alt="" />
            </a>
            <a href="#" target="_blank" class="social-icon">
              <img src="public\Youtube-icon.svg" loading="lazy" alt="" />
            </a>
            <a href="#" target="_blank" class="social-icon">
              <img src="public\instagram-icon.svg" loading="lazy" alt="" />
            </a>
            <a href="#" target="_blank" class="social-icon">
              <img src="public\TikTok-icon.svg" loading="lazy" alt="" />
            </a>
            <a href="#" target="_blank" class="social-icon">
              <img src="public\facebook-icon.svg" loading="lazy" alt="" />
            </a>
          </div>
          <div class="footer-copyright-wrapper">
            <div class="small-p copyright">Copyright © FXReplay</div>
            <div class="footer-logo-wrapper">
              <div class="trading-view-wrapper">
                <div class="small-p">Charts by</div>
                <img
                  src="public\tradingview-logo.svg"
                  loading="lazy"
                  height="28"
                  alt="Trading-view-Logo"
                  class="Trading-view-Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
