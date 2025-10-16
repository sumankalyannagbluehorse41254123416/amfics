"use client";

import React from "react";
import Image from "next/image";
import ServiceContactSection from "@/component/ServiceContact";

const ThreatModeling: React.FC = () => {
  return (
    <>
      {/* Page Title Section */}
      <section
        className="page-title about_box"
        style={{
          backgroundImage:
            "url(https://amfics.io/images/background/about_us.jpg)",
        }}>
        <div className="auto-container about_title">
          <h1>Threat Modelling & Risk Assessment</h1>
          <span className="title_divider"></span>
          {/* 
          <ul className="page-breadcrumb">
            <li><a href="https://amfics.io">Home</a></li>
            <li>Threat</li>
          </ul> 
          */}
        </div>
      </section>

      {/* Case Study Section */}
      <section className="case-study-section zero_ser soc_item">
        <div className="auto-container">
          <div className="sec-title text-center">
            {/* 
            <span className="icon">
              <Image
                src="https://amfics.io/images/background/services_icon.png"
                alt="services icon"
                width={60}
                height={60}
              />
            </span> 
            */}
            <h3>Threat Modelling & Risk Assessment</h3>
            <div className="text soc_text">
              Cybersecurity threat modeling and risk management are essential
              processes for protecting digital assets and data from potential
              cyber attacks. Threat modeling is a systematic approach to
              identify and prioritize potential security threats to a system,
              application, or network. Risk management, on the other hand,
              involves identifying, assessing, and mitigating potential risks to
              the system.
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="process-section"
        style={{
          backgroundImage: "url(https://amfics.io/images/background/2.jpg)",
        }}>
        <div className="auto-container">
          <div className="row">
            {/* Process Blocks */}
            {[
              {
                title: "PREPARE",
                img: "https://amfics.io/images/icons/risk_icon.png",
                text: "Incident preparedness is a two-part process that consists of setting up security configurations and testing for weaknesses",
              },
              {
                title: "IDENTIFY",
                img: "https://amfics.io/images/icons/risk_icon2.png",
                text: "Determine whether you’ve been breached. A breach, or incident, could originate from many different areas.",
              },
              {
                title: "CONTAIN",
                img: "https://amfics.io/images/icons/risk_icon3.png",
                text: "Implement short-term and long-term containment strategies so it doesn’t cause further damage to your business.",
              },
              {
                title: "ERADICATE",
                img: "https://amfics.io/images/icons/risk_icon4.png",
                text: "Find and eliminate the root cause of the breach. Malware is securely removed, systems patched, and updated.",
              },
              {
                title: "RECOVER",
                img: "https://amfics.io/images/icons/risk_icon5.png",
                text: "Restore and return affected systems and devices back into your business environment.",
              },
              {
                title: "LEARN",
                img: "https://amfics.io/images/icons/risk_icon6.png",
                text: "Analyze and document the breach response. Determine what worked well and what should be changed. Return to Prepare Phase.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="process-block process-block2 threat_box col-lg-2 col-md-6 col-sm-12">
                <div className="inner-box active">
                  <div className="icon-box">
                    <span className="icon">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={60}
                        height={60}
                      />
                    </span>
                    <span className="roadmap-divider"></span>
                  </div>
                  <h4>{item.title}</h4>
                  <p className="threat_text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <div className="container mt-2 mb-5">
        <div className="row mt-5 threat_item">
          <div className="col-md-8" data-aos="fade-right">
            <div className="soc_section">
              <p>
                Threat modeling is a process of identifying and analyzing
                potential security threats to an application, system, or
                organization. It involves identifying potential threats,
                assessing their likelihood and impact, and determining the
                countermeasures necessary to mitigate those threats.
              </p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <div className="soc_img">
              <Image
                src="https://amfics.io/images/background/threat_banner.jpg"
                alt="threat banner"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <ServiceContactSection />
    </>
  );
};

export default ThreatModeling;
