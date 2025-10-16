"use client";

import ServiceContactSection from "@/component/ServiceContact";
import Image from "next/image";
import React from "react";

const CloudSecurity = () => {
  return (
    <>
      <section
        className="page-title about_box"
        style={{
          backgroundImage:
            "url(https://amfics.io/images/background/about_us.jpg)",
        }}>
        <div className="auto-container about_title">
          <h1>Cloud Security</h1>
          <span className="title_divider"></span>
          {/* <ul className="page-breadcrumb">
              <li><a href="https://amfics.io">Home</a></li>
              <li>Cloud Security</li>
          </ul> */}
        </div>
      </section>
      {/* End Page Title */}
      {/* Case Study Section */}
      <section className="case-study-section zero_ser soc_item cloud_box">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="icon">
              <Image
                src="https://amfics.io/images/background/services_icon.png"
                alt=""
                width={64}
                height={64}
              />
            </span>
            <h3>Cloud Security</h3>
            <div className="text soc_text cloud">
              Cloud security refers to the set of policies, technologies, and
              practices that are used to protect data, applications, and
              infrastructure in cloud computing environments. Cloud security is
              critical because data and applications hosted in the cloud can be
              accessed from anywhere in the world and can be vulnerable to
              cyber-attacks. Some common cloud security measures include:
              <ul className="cloud_text">
                <li>
                  Access controls: Cloud service providers offer various access
                  control mechanisms, such as user authentication,
                  authorization, and identity management, to prevent
                  unauthorized access to data and applications.
                </li>
                <li>
                  Data encryption: Encryption is used to protect sensitive data
                  in transit and at rest. Cloud providers offer various
                  encryption technologies, including SSL/TLS, AES, and RSA, to
                  ensure data confidentiality.
                </li>
                <li>
                  Network security: Cloud service providers use various network
                  security mechanisms, such as firewalls and intrusion
                  detection/prevention systems, to protect against attacks such
                  as DDoS, malware, and other types of cyber threats.
                </li>
                <li>
                  Compliance and certification: Cloud providers adhere to
                  various security standards and regulations, such as SOC 2,
                  HIPAA, and GDPR, to ensure the security and privacy of data
                  and applications hosted in the cloud.
                </li>
                <li>
                  Disaster recovery and business continuity: Cloud providers
                  offer various disaster recovery and business continuity
                  mechanisms, such as data backup and replication, to ensure
                  data availability and to minimize downtime in the event of a
                  disaster.
                </li>
                <li>
                  Cloud security management: Cloud providers offer various cloud
                  security management tools and services, such as security
                  information and event management (SIEM), to monitor and manage
                  security incidents in the cloud environment.
                </li>
              </ul>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-3 col-sm-3">
              <div className="cloud_item">
                <h5>ACCESS CONTROLS</h5>
                <p>
                  User authentication, authorisation, and identity management,
                  to prevent unauthorised access to data and applications
                </p>
              </div>
              <div className="cloud_item">
                <h5>DATA ENCRYPTION</h5>
                <p>
                  Encryption is used to protect sensitive data in transit and at
                  rest.
                </p>
              </div>
              <div className="cloud_item">
                <h5>NETWORK SECURITY</h5>
                <p>
                  Firewalls and intrusion detection/prevention systems, to
                  protect against attacks such as DDoS, malware, and other types
                  of cyber threats.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <Image
                src="https://amfics.io/images/background/cloud_image.png"
                alt=""
                width={600}
                height={600}
              />
            </div>

            <div className="col-md-3 col-sm-3">
              <div className="cloud_item2">
                <h5>ACCESS CONTROLS</h5>
                <p>
                  User authentication, authorisation, and identity management,
                  to prevent unauthorised access to data and applications
                </p>
              </div>
              <div className="cloud_item2">
                <h5>DATA ENCRYPTION</h5>
                <p>
                  Encryption is used to protect sensitive data in transit and at
                  rest.
                </p>
              </div>
              <div className="cloud_item2">
                <h5>NETWORK SECURITY</h5>
                <p>
                  Firewalls and intrusion detection/prevention systems, to
                  protect against attacks such as DDoS, malware, and other types
                  of cyber threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceContactSection />;
    </>
  );
};

export default CloudSecurity;
