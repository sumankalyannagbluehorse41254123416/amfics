// "use client";

// import CallToAction from "@/component/CallToActions";
// import React from "react";

// const About: React.FC = () => {
//   return (
//     <>
//       <section
//         className="page-title about_box"
//         style={{
//           backgroundImage:
//             "url('https://amfics.io/images/background/about_us.jpg')",
//         }}>
//         <div className="auto-container about_title">
//           <h1>About</h1>
//           <span className="title_divider"></span>
//         </div>
//       </section>

//       <section className="services-section style-two services-section2">
//         <div className="auto-container">
//           <div className="row">
//             <div className="text-column col-lg-12 col-md-12 col-sm-12 order-2">
//               <div className="inner-column who about_text_item">
//                 <div className="sec-title sec-title2 sec_title_section">
//                   <h3>WHO ARE WE?</h3>
//                   <div className="text">
//                     <h4>
//                       Welcome to Amfics Pvt Ltd, your trusted partner for all
//                       your IT needs.
//                     </h4>
//                   </div>
//                 </div>
//                 <p>
//                   Amfics Pvt Ltd is your go-to provider for all things IT,
//                   specializing in delivering high-quality solutions in
//                   cybersecurity, managed services, and IT.
//                   <br />
//                   <br />
//                   Our journey began in 2020, when a team of passionate
//                   consultants in Bengaluru started offering their expertise to
//                   businesses. Since then, we have grown exponentially, bringing
//                   over 50 years of combined experience in managed services,
//                   sales, strategy, and security domains, gained from top
//                   companies like Juniper Networks, Wipro, McAfee, CISCO and
//                   SentinelOne.
//                   <br />
//                   <br />
//                   Our delivery partner is a CERT-IN/ISO 27001 certified
//                   cybersecurity company and certified security consultant,
//                   enabling us to provide tailored advisory services to
//                   businesses of all sizes across India, the United States,
//                   Europe, the United Kingdom, the Middle East, and East Asia.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="news-section why_section">
//         <div className="auto-container">
//           <div className="services-area">
//             <div className="row">
//               <a
//                 className="feature-block-three col-lg-12 col-md-6 col-sm-12"
//                 href="#"
//                 data-toggle="modal"
//                 data-target="#largeModal">
//                 <div className="inner-box">
//                   <div className="content">
//                     <span className="icon flaticon-clock-1"></span>
//                     <h4>Amfics Mission and Vision</h4>
//                     <p>
//                       Mission of Amfics is to protect computer systems,
//                       networks, and sensitive information from unauthorized
//                       access, use, theft, damage, or destruction. Amfics aims to
//                       prevent cyberattacks, detect, and respond to security
//                       incidents, and ensure the confidentiality, integrity, and
//                       availability of information.
//                       <br />
//                       <br />
//                       The vision for Amfics is to create a secure and resilient
//                       cyberspace that enables individuals, organizations, and
//                       societies to pursue their goals and aspirations without
//                       fear of cyber threats. This includes creating a culture of
//                       security that emphasizes the importance of cybersecurity
//                       at all levels, from individuals to organizations to
//                       governments.
//                       <br />
//                       <br />
//                       To achieve this vision, cybersecurity must be a
//                       collaborative effort that involves stakeholders from
//                       across sectors and geographies. This includes industry,
//                       government, academia, and civil society, all working
//                       together to promote cybersecurity best practices, develop
//                       innovative technologies and solutions, and foster a
//                       skilled cybersecurity workforce. Overall, the mission and
//                       vision for Amfics is to protect against cyber threats
//                       while enabling individuals, organizations, and societies
//                       to fully realize the benefits of the digital age.
//                     </p>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//         <CallToAction />
//       </section>
//     </>
//   );
// };

// export default About;
// "use client";

import CallToAction from "@/component/CallToActions";
import Image from "next/image";
import React from "react";
import { fetchPageData } from "../action/fetchPageData";

interface PageData {
  status: boolean;
  pagedata: {
    id: number | string;
    title: string;
    slug: string;
    uuid: string;
    description: string;
    cover_image_url: string;
    status: string;
    [key: string]: unknown;
  };
  pageItemdataWithSubsection: Array<{
    id: number;
    title: string;
    shortDescription: string;
    subsections: Array<{
      id: number;
      title: string;
      description: string;
      image: string;
      [key: string]: unknown;
    }>;
    [key: string]: unknown;
  }>;
}

const About: React.FC = async () => {
  const data: PageData = await fetchPageData(
    "b94b200d-15ed-44ba-baa4-582416eed6e0"
  );

  if (
    !data ||
    !data.pagedata ||
    !Array.isArray(data.pageItemdataWithSubsection) ||
    data.pageItemdataWithSubsection.length === 0
  ) {
    return <div>Loading...</div>;
  }

  const { pagedata, pageItemdataWithSubsection } = data;
  const firstItem = pageItemdataWithSubsection[0];
  const subsections = Array.isArray(firstItem.subsections)
    ? firstItem.subsections
    : [];

  return (
    <>
      {/* Hero Section */}
      <section
        className="page-title about_box"
        style={{
          backgroundImage: pagedata.cover_image_url
            ? `url(${JSON.stringify(pagedata.cover_image_url)})`
            : "none",
        }}>
        <div className="auto-container about_title">
          <h1>{pagedata.title}</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      {/* Main Content */}
      <section className="services-section style-two services-section2">
        <div className="auto-container">
          <div className="row">
            {pageItemdataWithSubsection.map((item) => (
              <div
                key={item.id}
                className="text-column col-lg-12 col-md-12 col-sm-12 order-2">
                <div className="inner-column who about_text_item">
                  <div className="sec-title sec-title2 sec_title_section">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: pagedata.description || "",
                      }}
                    />
                    <div className="text">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.shortDescription || "",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsections with Icons */}
      <section className="news-section why_section">
        <div className="auto-container">
          <div className="services-area">
            <div className="row">
              {subsections.map((subsection) => (
                <a
                  key={subsection.id}
                  className="feature-block-three col-lg-12 col-md-12 col-sm-12"
                  href="#"
                  data-toggle="modal"
                  data-target="#largeModal">
                  <div className="inner-box">
                    <div className="content">
                      {subsection.image ? (
                        <div className="icon-wrapper">
                          <Image
                            src={subsection.image}
                            alt={""}
                            width={40}
                            height={40}
                            className="icon flaticon-clock-1"
                          />
                        </div>
                      ) : null}

                      <h4>{subsection.title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: subsection.description || "",
                        }}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default About;
