"use client";

import React from "react";

const Footer: React.FC = () => {
  const subscribeNewsletters = () => {
    // TODO: Implement your newsletter logic here
    const emailInput = document.getElementById("subEmail") as HTMLInputElement;
    const email = emailInput?.value;
    if (email) {
      console.log("Subscribed with:", email);
      // Example: send email to API or handle state update
    }
  };

  return (
    <footer className="main-footer">
      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row">
            <div className="big-column col-xl-12 col-lg-12 col-md-12">
              <div className="row">
                {/* Footer Column - Logo */}
                <div className="footer-column col-lg-4 col-md-12 col-sm-12">
                  <div className="logo">
                    <a href="https://amfics.io">
                      <img
                        src="https://amfics.io/images/Amfics Logo.png"
                        alt="Amfics Logo"
                      />
                    </a>
                  </div>
                </div>

                {/* Footer Column - Page Links */}
                <div className="footer-column col-lg-4 col-md-4 col-sm-12">
                  <div className="footer-widget links-widget page_box">
                    <h2 className="widget-title">Page Links</h2>
                    <div className="widget-content">
                      <ul className="list">
                        <li>
                          <a href="https://amfics.io/about-us">About Us</a>
                        </li>
                        <li>
                          <a href="https://amfics.io/services">Services</a>
                        </li>
                        <li>
                          <a href="https://amfics.io/blog">Blog</a>
                        </li>
                        <li>
                          <a href="https://amfics.io/contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Column - Subscribe */}
                <div className="footer-column col-lg-4 col-md-12 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h2 className="widget-title">Subscribe</h2>

                    <div className="widget-content">
                      <div className="newsletter-form">
                        <form id="subscribe-form">
                          <div className="form-group">
                            <div className="response"></div>
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              className="email"
                              id="subEmail"
                              placeholder="Enter your email address.."
                              required
                            />
                            <button
                              type="button"
                              onClick={subscribeNewsletters}
                              className="theme-btn">
                             <i className="fa-solid fa-arrow-right"></i>
                            </button>
                            <div
                              id="msg"
                              className="text-info text-center hidden contact_gap"></div>
                            <div className="clearfix"></div>
                          </div>
                        </form>
                        <div className="text-danger text-center error-msg">
                          <ul></ul>
                        </div>
                      </div>
                    </div>

                    <div className="social-link">
                      <a href="#" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>

                    <a className="zero_mail" href="mailto:info@amfics.io">
                      <i className="fas fa-envelope"></i> info@amfics.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="copyright-text">
            Copyright © 2023 Powered By{" "}
            <a href="https://bluehorse.in/" target="_blank" rel="noreferrer">
              BlueHorse
            </a>{" "}
            | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
