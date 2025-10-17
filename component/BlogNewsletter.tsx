"use client";

import React, { useState } from "react";

interface NewsletterProps {
  title?: string;
  description?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({
  title = "Newsletter",
  description = "Enter your email address below to subscribe to my newsletter",
}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setError("Please enter your email address.");
      setMessage("");
      return;
    }

    try {
      setError("");
      setMessage("Subscribing...");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="sidebar-widget newsletter">
      <div className="sidebar-title">
        <h3>
          <span className="icon flaticon-rss-symbol"></span> {title}
        </h3>
      </div>

      <p>{description}</p>

      <form id="newsletterForm" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="newsletterEmail"
            placeholder="Your email address..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="button"
            className="theme-btn"
            onClick={handleSubscribe}
            disabled={!email}>
            <span className="btn-title">Subscribe</span>
          </button>

          {message && (
            <div className="msgblog text-success text-center contact-gap">
              {message}
            </div>
          )}
          {error && (
            <div className="msgblog text-danger text-center contact-gap">
              {error}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
