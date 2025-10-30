"use client";

import ServiceContactSection from "@/component/ServiceContact";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrivacyRegulations: React.FC = () => {
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
          <h1>Privacy Regulations and Compliance</h1>
          <span className="title_divider"></span>
        </div>
      </section>
      {/* Case Study Section */}
      <section className="case-study-section zero_ser privacy_box">
        <div className="auto-container">
          <div className="sec-title text-center privacy_box_text">
            <h3>Privacy Regulations and Compliance</h3>
            <div className="text">
              Privacy regulations are laws and policies that aim to protect the
              privacy of individuals and their personal information. These
              regulations establish rules and requirements that organizations
              must follow in order to collect, use, store, and share personal
              information. Compliance with privacy regulations is essential for
              organizations that handle personal information to avoid legal
              consequences, reputation damage, and loss of consumer trust.
            </div>
          </div>

          {/* Row 1 */}
          <div className="row">
            {/* Block 1 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <Image
                        src="https://amfics.io/images/resource/privacy_image.jpg"
                        alt="Privacy Awareness"
                        width={500}
                        height={300}
                      />
                    </Link>
                  </figure>
                  <span className="icon_img">
                    <Image
                      src="https://amfics.io/images/icons/privacy_icon.png"
                      alt="Privacy Icon"
                      width={60}
                      height={60}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <Link href="#">AWARENESS & COMMUNICATION</Link>
                  </h4>
                  <div className="text privacy_text">
                    Amfics can develop an Information Security Policy so that
                    all employees understand privacy regulations as well as the
                    proper communication channels to ensure proper data
                    handling.
                  </div>
                  <div className="btn-box">
                    <Link href="#" className="theme-btn icon-btn-one">
                      <span>View Privacy</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <Image
                        src="https://amfics.io/images/resource/privacy_image2.jpg"
                        alt="Audit and Analysis"
                        width={500}
                        height={300}
                      />
                    </Link>
                  </figure>
                  <span className="icon_img">
                    <Image
                      src="https://amfics.io/images/icons/privacy_icon2.png"
                      alt="Privacy Icon 2"
                      width={60}
                      height={60}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <Link href="#">AUDIT & ANALYSIS OF PERSONAL DATA</Link>
                  </h4>
                  <div className="text privacy_text">
                    Amfics can help you analyse and track sensitive data through
                    storage and processing, as well as determine data ownership
                    roles.
                  </div>
                  <div className="btn-box">
                    <Link href="#" className="theme-btn icon-btn-one">
                      <span>View Privacy</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <Image
                        src="https://amfics.io/images/resource/privacy_image3.jpg"
                        alt="Protect Private Data"
                        width={500}
                        height={300}
                      />
                    </Link>
                  </figure>
                  <span className="icon_img">
                    <Image
                      src="https://amfics.io/images/icons/privacy_icon3.png"
                      alt="Privacy Icon 3"
                      width={60}
                      height={60}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <Link href="#">PROTECT PRIVATE DATA</Link>
                  </h4>
                  <div className="text privacy_text privacy_text2">
                    We can help develop an IT strategy to implement data
                    protections, backups and a rescue plan to guarantee business
                    continuity in case of a data breach.
                  </div>
                  <div className="btn-box">
                    <Link href="#" className="theme-btn icon-btn-one">
                      <span>View Privacy</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row privacy_item">
            {/* Block 4 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <Image
                        src="https://amfics.io/images/resource/privacy_image4.jpg"
                        alt="Access Rights"
                        width={500}
                        height={300}
                      />
                    </Link>
                  </figure>
                  <span className="icon_img">
                    <Image
                      src="https://amfics.io/images/icons/privacy_icon4.png"
                      alt="Privacy Icon 4"
                      width={60}
                      height={60}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <Link href="#">ACCESS RIGHTS & CUSTOMER CONSENT</Link>
                  </h4>
                  <div className="text privacy_text">
                    Guidance in obtaining proper and legally valid consent from
                    your customers. Our legal partners help guarantee that data
                    is gathered correctly and is fully compliant with privacy
                    guidelines.
                  </div>
                  <div className="btn-box">
                    <Link href="#" className="theme-btn icon-btn-one">
                      <span>View Privacy</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 5 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <Image
                        src="https://amfics.io/images/resource/privacy_image5.jpg"
                        alt="Data Protection Officer"
                        width={500}
                        height={300}
                      />
                    </Link>
                  </figure>
                  <span className="icon_img">
                    <Image
                      src="https://amfics.io/images/icons/privacy_officer_icon.png"
                      alt="Privacy Officer Icon"
                      width={60}
                      height={60}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <Link href="#">APPOINT A DATA PROTECTION OFFICER</Link>
                  </h4>
                  <div className="text privacy_text">
                    Many firms experience difficulty with creating this new
                    mandated role. Amfics can help select the best internal
                    resources to act as DPO as well as assist in building a
                    supporting team.
                  </div>
                  <div className="btn-box">
                    <Link href="#" className="theme-btn icon-btn-one">
                      <span>View Privacy</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 6 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <Image
                        src="https://amfics.io/images/resource/privacy_image6.jpg"
                        alt="Impact Assessment"
                        width={500}
                        height={300}
                      />
                    </Link>
                  </figure>
                  <span className="icon_img">
                    <Image
                      src="https://amfics.io/images/icons/privacy_impact_icon.png"
                      alt="Privacy Impact Icon"
                      width={60}
                      height={60}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <Link href="#">IMPACT ASSESSMENTS</Link>
                  </h4>
                  <div className="text privacy_text privacy_text2">
                    We can carry out a data protection impact assessment, and
                    help you with threat modeling and risk aversion. We can also
                    assist in making this assessment part of an overall business
                    continuity program.
                  </div>
                  <div className="btn-box">
                    <Link href="#" className="theme-btn icon-btn-one">
                      <span>View Privacy</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceContactSection />;
    </>
  );
};

export default PrivacyRegulations;
