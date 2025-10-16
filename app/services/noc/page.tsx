"use client";

import ServiceContactSection from "@/component/ServiceContact";
import Image from "next/image";
import React from "react";

const ServicesPage: React.FC = () => {
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
          <h1>Services</h1>
          <span className="title_divider"></span>
        </div>
      </section>
      <section className="case-study-section zero_ser soc_item padd_all">
        <div className="auto-container">
          <div className="sec-title text-center">
            {/*
             */}
            <h3>Network Operations Center</h3>
            <div className="text soc_text">
              A Network Operations Centre (NOC) is a centralized facility where
              IT professionals monitor, manage, and maintain an organization's
              network infrastructure. The primary function of a NOC is to ensure
              that the network is running smoothly and efficiently, with minimal
              downtime or interruptions. The NOC team is responsible for the
              monitoring and maintenance of the network, including
              troubleshooting and resolving issues as they arise.
            </div>
            <div className="soc_blog_bottom">
              <Image
                src="https://amfics.io/images/NOC.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Case Study Section */}

      {/* SOC Section */}
      <div className="container soc">
        <div className="row">
          <div className="col-md-8" data-aos="fade-right">
            <div className="soc_section">
              <p>
                Typically, a NOC is staffed with a team of network engineers,
                administrators, and other IT professionals who use a variety of
                tools and technologies to monitor the organization's network
                infrastructure. This may include monitoring network traffic,
                reviewing logs, and performing network tests and diagnostics.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-left">
            <div className="soc_img">
              <Image
                src="https://amfics.io/images/background/noc_banner.jpg"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4" data-aos="fade-left">
            <div className="soc_img">
              <Image
                src="https://amfics.io/images/background/noc_banner2.jpg"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="col-md-8" data-aos="fade-right">
            <div className="soc_section">
              <p>
                The key functions of a NOC include: Network monitoring and
                management, Incident management, Performance management,
                Configuration management, Change management to name a few.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-8" data-aos="fade-right">
            <div className="soc_section">
              <p>
                The NOC plays a critical role in an organization's IT
                infrastructure by ensuring that the network is running
                efficiently and effectively. By monitoring and managing the
                network infrastructure, the NOC helps to minimize downtime and
                ensure that critical systems and applications are available to
                users when they need them.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-left">
            <div className="soc_img">
              <Image
                src="https://amfics.io/images/background/noc_banner3.jpg"
                alt=""
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

export default ServicesPage;
