"use client";

import { submitFormData } from "@/lib/contact";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

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

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubscribe = async () => {
    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Please email field is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const newsletterData = { Email: email };
      const response = await submitFormData(
        {},
        "ed6683b6-181f-4e1d-8e59-988380cfb8d9",
        newsletterData
      );

      if (response?.success) {
        toast.success("Your email has been sent successfully!");
        // setMessage("Thank you for subscribing!");
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setError("Your email could not be sent. Please try again.");
      // toast.error("Your email could not be sent. Please try again.");
    }
  };

  useEffect(() => {
    if (message || error) {
      const timer = setTimeout(() => {
        setMessage("");
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, error]);

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

          <button type="button" className="theme-btn" onClick={handleSubscribe}>
            <span className="btn-title">Subscribe</span>
          </button>

          {/* Inline Messages */}
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
