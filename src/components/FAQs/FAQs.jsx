import React from "react";
import "./FAQs.css";

function FAQs() {
  return (
    <div className="faqs-section">
      <div className="faqs-container">
        <div className="faqs-content">
          <div class="faqs-heading">
            <h2 class="heading">Frequently asked questions</h2>
          </div>
          <p class="large-p left">
            Have a question that is not answered? You can contact us at{" "}
            <a href="#" className="mail-link">
              contactus@fxreplay.com
            </a>
          </p>
        </div>
        <div className="faqs-list">
          <div className="accordion-wrapper">
            <div className="accordion">
              <input type="checkbox" name="accordion-1" id="cb1" />
              <label for="cb1" class="faq-question">
                How far back does the data go? Can I trade the 1m far back?
              </label>
              <div className="faq-answer">
                <p>
                  We have data from 2016 to the current week. You can actively
                  trade on 1m as far back as 2016!
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-wrapper">
            <div className="accordion">
              <input type="checkbox" name="accordion-2" id="cb2" />
              <label for="cb2" class="faq-question">
                Can I cancel my FX Replay subscription?
              </label>
              <div className="faq-answer">
                <p>Yes! You can cancel your subscription anytime.</p>
              </div>
            </div>
          </div>
          <div className="accordion-wrapper">
            <div className="accordion">
              <input type="checkbox" name="accordion-3" id="cb3" />
              <label for="cb3" class="faq-question">
                Can I request a refund?
              </label>
              <div className="faq-answer">
                <p>
                  To request a refund, please send an email to{" "}
                  <a href="#" className="mail-link">
                    contactus@fxreplay.com
                  </a>{" "}
                  with the following:
                  <br />
                  - The email address associated with your FX Replay account
                  <br />- Proof of payment
                  <br />- The reason you are requesting a refund
                  <br />
                  Our customer support team will process your request as soon as
                  possible.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-wrapper">
            <div className="accordion">
              <input type="checkbox" name="accordion-4" id="cb4" />
              <label for="cb4" class="faq-question">
                Can I add my own custom indicators from TradingView?
              </label>
              <div className="faq-answer">
                <p>
                  Unfortunately, adding custom indicators is not currenly
                  supported by FXReplay; however, we are constantly developing
                  new and highly requested indicators to add to FXReplay for
                  you!
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-wrapper">
            <div className="accordion">
              <input type="checkbox" name="accordion-5" id="cb5" />
              <label for="cb5" class="faq-question">
                Is an affiliate program available?
              </label>
              <div className="faq-answer">
                <p>
                  At the moment, we do not have an affiliate program available.
                  However, we are always looking to collaborate with communities
                  that share our values and mission. If you are an admin of a
                  community and are interested in partnering with us, please
                  send us an email at{" "}
                  <a href="#" className="mail-link">
                    contactus@fxreplay.com
                  </a>{" "}
                  with proof of your admin status and screenshots of your
                  presence on social media platforms such as Discord or
                  Instagram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
