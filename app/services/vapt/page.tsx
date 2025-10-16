"use client";

import ServiceContactSection from "@/component/ServiceContact";
import Image from "next/image";
import React from "react";

const VaptSection: React.FC = () => {
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
          <h1>Vulnerability Assessment and Penetration Testing</h1>
          <span className="title_divider"></span>
          {/* 
          <ul className="page-breadcrumb">
            <li><a href="https://amfics.io">Home</a></li>
            <li>vapt</li>
          </ul> 
          */}
        </div>
      </section>
      {/* Case Study Section */}
      <section className="case-study-section zero_ser soc_item vapt_box">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h3>Vulnerability Assessment and Penetration Testing</h3>
            <div className="text soc_text">
              amfics's Vulnerability Assessment and Penetration testing services
              cover a range of assessments, including internal, external, and
              web application testing. This comprehensive approach helps to
              identify vulnerabilities and potential attack vectors that
              malicious actors could exploit to gain unauthorized access to a
              company's network and applications.
            </div>
          </div>

          {/* Case Blocks */}
          <div className="row">
            {/* Case Block 1 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <a href="#">
                      <Image
                        src="https://amfics.io/images/resource/vapt_banner.jpg"
                        alt="vapt banner"
                        width={400}
                        height={250}
                      />
                    </a>
                  </figure>
                  <span className="icon_img">
                    <Image
                      src="https://amfics.io/images/icons/vapt_icon.png"
                      alt="icon"
                      width={50}
                      height={50}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <a href="#">SECURITY TESTING</a>
                  </h4>
                  <div className="text vapt_text">
                    Perform all remote and on-site tests, including social
                    engineering and any additional security services.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn icon-btn-one">
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Block 2 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <a href="#">
                      <Image
                        src="https://amfics.io/images/resource/vapt_banner2.jpg"
                        alt="vapt banner 2"
                        width={400}
                        height={250}
                      />
                    </a>
                  </figure>
                  <span className="icon_img">
                    <Image
                      src="https://amfics.io/images/icons/vapt_icon2.png"
                      alt="icon"
                      width={50}
                      height={50}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <a href="#">REPORT & REMEDIATION</a>
                  </h4>
                  <div className="text vapt_text">
                    Provide detailed reports at the end of each test with
                    technical tips to remediate the issues.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn icon-btn-one">
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Block 3 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <a href="#">
                      <Image
                        src="https://amfics.io/images/resource/vapt_banner3.jpg"
                        alt="vapt banner 3"
                        width={400}
                        height={250}
                      />
                    </a>
                  </figure>
                  <span className="icon_img">
                    <Image
                      src="https://amfics.io/images/icons/vapt_icon3.png"
                      alt="icon"
                      width={50}
                      height={50}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <a href="#">RE-TEST</a>
                  </h4>
                  <div className="text vapt_text">
                    Re-test to confirm remediation is correctly implemented or
                    risk has been accepted. With Auriesg re-tests are always
                    included free of charge.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn icon-btn-one">
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="row mt-5">
            <div className="col-md-8" data-aos="fade-right">
              <div className="soc_section">
                <p>
                  The objectives of the testing, which include assessing the
                  effectiveness of the threat and vulnerability management
                  program, are aligned with industry best practices for
                  cybersecurity risk management. By identifying vulnerabilities
                  and providing recommendations to mitigate risks, the testing
                  helps to improve the organization's overall information
                  security posture and reduce the likelihood of a successful
                  cyber-attack.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left">
              <div className="soc_img">
                <Image
                  src="https://amfics.io/images/background/vapt_b.jpg"
                  alt="vapt background"
                  width={400}
                  height={400}
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

export default VaptSection;
