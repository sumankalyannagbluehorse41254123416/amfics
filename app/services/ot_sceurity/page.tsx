"use client";

import ServiceContactSection from "@/component/ServiceContact";
import Image from "next/image";
import React from "react";

const OtIotSecurity: React.FC = () => {
  return (
    <>
      <section
        className="page-title about_box"
        style={{
          backgroundImage:
            "url(https://amfics.io/images/background/about_us.jpg)",
        }}>
        <div className="auto-container about_title">
          <h1>OT/IOT Security</h1>
          <span className="title_divider"></span>
        </div>
      </section>
      <section className="case-study-section zero_ser soc_item ot_box">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h3>OT/IOT Security</h3>
          </div>

          <div className="text soc_text cloud">
            <p>
              <strong>OT/IT security</strong> refers to the protection of both
              operational technology (OT) and information technology (IT)
              systems from cyber threats. OT systems are responsible for
              controlling and managing physical processes in industries such as
              manufacturing, energy, and transportation, while IT systems handle
              the processing, storage, and communication of digital data.
            </p>

            <p>
              Protecting both OT and IT systems is crucial for maintaining the
              security and continuity of critical infrastructure, as
              cyber-attacks targeting either system can cause significant
              disruption and damage. OT/IT security solutions typically involve
              a combination of specialized hardware and software, as well as
              personnel trained in both IT and OT security practices.
            </p>
          </div>

          <div className="ciso_banner">
            <Image
              src="https://amfics.io/images/background/security_image.jpg"
              alt="OT/IOT Security illustration"
              width={1200}
              height={600}
              priority
            />
          </div>
        </div>
      </section>
      <ServiceContactSection />;
    </>
  );
};

export default OtIotSecurity;
