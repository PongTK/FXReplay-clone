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
            <a href="#" class="social-icon">
              <img
                src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/650cb548935874e4f915a4bc_Twitter.svg"
                loading="lazy"
                alt="Twitter"
              />
            </a>
            <a href="#" class="social-icon">
              <img
                src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/650cb54839fa69b26bf5b586_Youtube.svg"
                loading="lazy"
                alt="Youtube"
              />
            </a>
            <a href="#" class="social-icon">
              <img
                src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/650cb543a4440da3f8aafb30_instagram-fill.svg"
                loading="lazy"
                alt="instagram"
              />
            </a>
            <a href="#" class="social-icon">
              <img
                src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/650cb5430ba00ca038f1b02b_TikTok.svg"
                loading="lazy"
                alt="TikTok"
              />
            </a>
            <a href="#" class="social-icon">
              <img
                src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/650cb543e60146b7229c0d75_facebook-circle-fill.svg"
                loading="lazy"
                alt="facebook"
              />
            </a>
          </div>
          <div class="footer-copyright-wrapper">
            <div class="small-p copyright">Copyright © FXReplay</div>
            <div class="footer-logo-wrapper">
              <div class="trading-view-wrapper">
                <div class="small-p">Charts by</div>
                <img
                  src="https://assets-global.website-files.com/6424a815c888c02bfd0b7e47/642618d7e6690c2e1ebc1f62_Vectors-Wrapper.svg"
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
