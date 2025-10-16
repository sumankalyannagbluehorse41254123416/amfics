"use client";

import React from "react";
import Image from "next/image";
import ServiceContactSection from "@/component/ServiceContact";

const BusinessContinuityPlan: React.FC = () => {
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
          <h1>Business Continuity Plan</h1>
          <span className="title_divider"></span>
        </div>
      </section>
      {/* Case Study Section */}
      <section className="case-study-section zero_ser soc_item business_com">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h3>Business Continuity Plan</h3>
            <div className="text soc_text cloud">
              Amfics offers a Business Continuity Plan and Disaster Recovery
              Plan review using <strong>ISO 22301</strong>. This standard
              provides a framework for managing and ensuring the continuity of
              critical business operations in the face of disruptions, such as
              natural disasters, cyber-attacks, and other unexpected events.
              <br />
              <br />
              A holistic assessment of the Business Continuity Plan and Disaster
              Recovery Plan can help to identify potential vulnerabilities and
              areas for improvement. This may include reviewing the existing
              plans, policies, and procedures, as well as conducting risk
              assessments to identify potential threats and the impact they
              could have on business operations.
              <br />
              <br />
              This can help to minimize the impact of unexpected events on
              business operations, reduce downtime, and ultimately improve the
              organization&apos;s overall resilience to cyber threats.
            </div>

            <div className="col-md-12">
              <div className="business_box">
                <Image
                  src="https://amfics.io/images/background/business_img.jpg"
                  alt="Business Continuity"
                  width={900}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceContactSection />;
    </>
  );
};

export default BusinessContinuityPlan;
