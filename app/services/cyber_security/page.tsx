"use client";

import React from "react";
import Image from "next/image";
import ServiceContactSection from "@/component/ServiceContact";

const CyberSecurityReadiness: React.FC = () => {
  return (
    <>
      <section
        className="page-title about_box"
        style={{
          backgroundImage:
            "url(https://amfics.io/images/background/about_us.jpg)",
        }}>
        <div className="auto-container about_title">
          <h1>Cyber Security Readiness Program</h1>
          <span className="title_divider"></span>
        </div>
      </section>
      <section className="case-study-section zero_ser soc_item">
        <div className="cyber_box text-info cyber_title text-center">
          <h3>Cyber Security Readiness Program</h3>
          <div className="section-border"></div>
        </div>
        <div className="container soc">
          {/* Row 1 */}
          <div className="row">
            <div className="col-md-8" data-aos="fade-right">
              <div className="soc_section">
                <p>
                  A Cybersecurity Readiness Assessment is an important step in
                  understanding an organization's current security posture and
                  identifying areas for improvement. Amfics&apos;s approach to
                  this assessment involves comparing an organization&apos;s
                  security practices to those of peer organizations and leading
                  industry frameworks such as NIST 800-53, ISF or ISO.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left">
              <div className="soc_img">
                <Image
                  src="https://amfics.io/images/background/Cyber_Security3.jpg"
                  alt="Cyber Security Readiness"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row mt-5">
            <div className="col-md-4" data-aos="fade-left">
              <div className="soc_img">
                <Image
                  src="https://amfics.io/images/background/Cyber_Security2.jpg"
                  alt="Cyber Security Frameworks"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            <div className="col-md-8" data-aos="fade-right">
              <div className="soc_section">
                <p>
                  By using these frameworks as a benchmark, Amfics can help
                  organizations identify gaps in their security practices and
                  prioritize areas for improvement. This can include assessing
                  the effectiveness of existing security controls, identifying
                  vulnerabilities and risks, and evaluating the
                  organization&apos;s ability to respond to and recover from
                  security incidents.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="row mt-5">
            <div className="col-md-8" data-aos="fade-right">
              <div className="soc_section">
                <p>
                  By conducting a Cybersecurity Readiness Assessment,
                  organizations can gain a better understanding of their overall
                  security posture and make informed decisions about how to
                  improve their cybersecurity practices and ultimately improve
                  the organization&apos;s overall resilience to cyber threats.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left">
              <div className="soc_img">
                <Image
                  src="https://amfics.io/images/background/Cyber_Security4.jpg"
                  alt="Cyber Threat Protection"
                  width={500}
                  height={300}
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

export default CyberSecurityReadiness;
