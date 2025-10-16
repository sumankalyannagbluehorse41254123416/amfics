"use client";

import React from "react";
import Image from "next/image";
import ServiceContactSection from "@/component/ServiceContact";

const CisoAsAService: React.FC = () => {
  return (
    <>
      {/* Page Header Section */}
      <header
        className="page-title about_box"
        style={{
          backgroundImage:
            "url('https://amfics.io/images/background/about_us.jpg')",
        }}>
        <div className="auto-container about_title">
          <h1>CISO as a Service</h1>
          <span className="title_divider"></span>

          {/* Breadcrumb (optional) */}
          {/* <nav aria-label="breadcrumb">
            <ol className="page-breadcrumb">
              <li>
                <a href="https://amfics.io">Home</a>
              </li>
              <li aria-current="page">CISO as a Service</li>
            </ol>
          </nav> */}
        </div>
      </header>
      {/* Main Content Section */}
      <main>
        <section className="case-study-section zero_ser soc_item ciso_box">
          <div className="auto-container">
            <header className="sec-title text-center">
              <h2>CISO as a Service</h2>
            </header>

            <article className="soc_text cloud">
              <p>
                <strong>
                  CISO (Chief Information Security Officer) as a Service
                </strong>{" "}
                is a model of outsourcing a company's security leadership
                function to a third-party provider. This service allows
                organizations to leverage the expertise of experienced CISOs
                without having to hire a full-time executive.
              </p>

              <p>
                CISOs as a Service typically provide a range of services such as
                risk assessments, security program development, policy
                development, incident response planning, and security awareness
                training. This model can be particularly beneficial for small
                and medium-sized businesses that do not have the resources to
                hire a full-time CISO or need to supplement their existing
                security team with additional expertise.
              </p>
            </article>

            <figure className="ciso_banner">
              <Image
                src="https://amfics.io/images/background/ciso_banner.jpg"
                alt="CISO as a Service illustration"
                width={1200}
                height={600}
              />
            </figure>
          </div>
        </section>
      </main>
      <ServiceContactSection />;
    </>
  );
};

export default CisoAsAService;
