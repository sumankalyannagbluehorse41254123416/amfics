"use client";

import ServiceContactSection from "@/component/ServiceContact";
import Image from "next/image";
import React, { useState } from "react";

const SocServices: React.FC = () => {
  // Simple contact form handler (React version of miniContact)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Limit phone input to numbers only
    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  return (
    <>
      {/* Page Title */}
      <section
        className="page-title about_box"
        style={{
          backgroundImage:
            "url(https://amfics.io/images/background/about_us.jpg)",
        }}>
        <div className="auto-container about_title">
          <h1>Services</h1>
          <span className="title_divider"></span>
          {/* 
          <ul className="page-breadcrumb">
            <li><a href="https://amfics.io">Home</a></li>
            <li>Soc</li>
          </ul> 
          */}
        </div>
      </section>

      {/* SOC Section */}
      <section className="case-study-section zero_ser soc_item padd_all">
        <div className="auto-container">
          <div className="sec-title text-center soc_box">
            <h3>Security Operations Center</h3>
            <div className="text soc_text">
              A Security Operations Center (SOC) is a centralized facility where
              security analysts monitor, detect, and respond to cybersecurity
              threats and incidents. The primary function of a SOC is to provide
              real-time threat intelligence and visibility into the
              organization's security posture. The SOC team is responsible for
              the identification, analysis, and response to security incidents,
              and for maintaining the organization's security infrastructure.
              SOC is staffed with a team of security analysts, engineers, and
              other security professionals who use a variety of tools and
              technologies to monitor the organization's network, systems, and
              applications for signs of suspicious activity.
            </div>
            <div className="soc_blog_bottom">
              <Image
                src="https://amfics.io/images/SOC.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOC Description Sections */}
      <div className="container soc">
        {/* Section 1 */}
        <div className="row">
          <div className="col-md-8" data-aos="fade-right">
            <div className="soc_section">
              <p>
                The SOC plays a critical role in an organization's cybersecurity
                strategy by providing 24/7 monitoring and response to potential
                security threats. By identifying and responding to security
                incidents in real-time, the SOC helps to minimize the impact of
                cyber-attacks and protect the organization's data, systems, and
                reputation. The key functions of a SOC include: Threat detection
                and response, Incident management, Vulnerability management,
                Threat intelligence, Security tool management to name a few.
              </p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <div className="soc_img">
              <Image
                src="https://amfics.io/images/background/soc_banner.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row mt-5 soc_page_box">
          <div className="col-md-4" data-aos="fade-left">
            <div className="soc_img">
              <Image
                src="https://amfics.io/images/background/soc_banner2.jpg"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="col-md-8" data-aos="fade-right">
            <div className="soc_section">
              <p>
                The SOC plays a critical role in an organization's cybersecurity
                strategy by providing 24/7 monitoring and response to potential
                security threats. By identifying and responding to security
                incidents in real-time, the SOC helps to minimize the impact of
                cyber-attacks and protect the organization's data, systems, and
                reputation. The key functions of a SOC include: Threat detection
                and response, Incident management, Vulnerability management,
                Threat intelligence, Security tool management to name a few.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="row mt-5">
          <div className="col-md-8" data-aos="fade-right">
            <div className="soc_section">
              <p>
                The SOC plays a critical role in an organization's cybersecurity
                strategy by providing 24/7 monitoring and response to potential
                security threats. By identifying and responding to security
                incidents in real-time, the SOC helps to minimize the impact of
                cyber-attacks and protect the organization's data, systems, and
                reputation. The key functions of a SOC include: Threat detection
                and response, Incident management, Vulnerability management,
                Threat intelligence, Security tool management to name a few.
              </p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <div className="soc_img">
              <Image
                src="https://amfics.io/images/background/soc_banner3.jpg"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ServiceContactSection />
    </>
  );
};

export default SocServices;
