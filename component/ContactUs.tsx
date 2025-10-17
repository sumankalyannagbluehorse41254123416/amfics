"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSuccessMsg("");
  };

  const handleSubmit = () => {
    let valid = true;
    const newErrors = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    };

    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required";
      valid = false;
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      setSuccessMsg("");
      setTimeout(() => {
        setErrors({ firstname: "", lastname: "", email: "", message: "" });
      }, 3000);
      return;
    }

    setErrors({ firstname: "", lastname: "", email: "", message: "" });
    setSuccessMsg("Your message has been sent successfully!");
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccessMsg("");
    }, 3000);
  };

  return (
    <div className="row form-outer">
      <div className="image-column col-lg-6 col-md-12 col-sm-12 con_item">
        <div className="layer-image">
          <Image
            src="/images/contactus/Amficslogo.png"
            alt="Amfics Logo"
            width={300}
            height={300}
            className="img-fluid"
          />
        </div>
      </div>

      <div className="form-column col-lg-6 col-md-12 col-sm-12">
        <div className="default-form contact-form">
          <div className="title contact_text text-center mb-4">
            {successMsg && (
              <div className="text-success fw-bold mb-2">{successMsg}</div>
            )}
            <h4>Contact Us</h4>
          </div>

          <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="row mid-spacing">
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.firstname && (
                  <span className="text-danger">{errors.firstname}</span>
                )}
              </div>

              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.lastname && (
                  <span className="text-danger">{errors.lastname}</span>
                )}
              </div>

              <div className="form-group col-lg-12 col-md-6 col-sm-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>

              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"></textarea>
                {errors.message && (
                  <span className="text-danger">{errors.message}</span>
                )}
              </div>

              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                <button
                  className="theme-btn btn-style-four"
                  type="button"
                  onClick={handleSubmit}>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
