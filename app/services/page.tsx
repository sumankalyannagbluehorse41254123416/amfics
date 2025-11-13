// "use client";

// import CallToAction from "@/component/CallToActions";
// import React from "react";

// const Services: React.FC = () => {
//   return (
//     <>
//       <section
//         className="page-title about_box"
//         style={{
//           backgroundImage:
//             "url(https://amfics.io/images/background/about_us.jpg)",
//         }}>
//         <div className="auto-container about_title">
//           <h1>Services</h1>
//           <span className="title_divider"></span>
//         </div>
//       </section>

//       {/* globa-section */}
//       <section className="news-section global_section global_section2">
//         <div className="auto-container">
//           <div className="sec-title text-center">
//             <span className="icon">
//               <img
//                 src="https://amfics.io/images/background/services_icon.png"
//                 alt=""
//               />
//             </span>
//             <h3>WHAT WE OFFER?</h3>
//             <div className="text">
//               The industry spanning platforms and services ranges from banking,
//               finance, insurance, consulting, telecommunications, research &
//               development to government. We have completed overall risk
//               management in recent years while consistently reducing costs. As a
//               global leader, we have the best talent in GIAC GSEC, CEH, CBCP,
//               PMP, ITIL, CoBIT, ISO 20000, ISO 27001 security standards, and
//               certifications.
//             </div>
//             <div className="global service_image">
//               <img
//                 src="https://amfics.io/images/background/zeroiz_services.jpg"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Case Study Section */}
//       <section className="case-study-section zero_ser zero_ser2">
//         <div className="auto-container">
//           <div className="sec-title text-center sec-title3">
//             <h3>ZEROIZ SERVICES</h3>
//             <div className="text">
//               The industry spanning platforms and services ranges from banking,
//               finance, insurance, consulting, telecommunications, research &
//               development to government. We have completed overall risk
//               management in recent years while consistently reducing costs. As a
//               global leader, we have the best talent in GIAC GSEC, CEH, CBCP,
//               PMP, ITIL, CoBIT, ISO 20000, ISO 27001 security standards, and
//               certifications.
//             </div>
//           </div>

//           <div className="row">
//             {/* Case Block 1 */}
//             <div className="case-block col-lg-4 col-md-6 col-sm-12">
//               <div className="inner-box about_inner">
//                 <div className="image-box">
//                   <figure className="image">
//                     <a href="#">
//                       <img
//                         src="https://amfics.io/images/resource/cloud_security.jpg"
//                         alt=""
//                       />
//                     </a>
//                   </figure>
//                   <span className="icon_img">
//                     <img
//                       src="https://amfics.io/images/icons/cloud_logo.png"
//                       alt=""
//                     />
//                   </span>
//                 </div>
//                 <div className="lower-content">
//                   <h4>
//                     <a href="#">Cloud Security</a>
//                   </h4>
//                   <div className="text">
//                     Cloud security refers to the technologies, policies,
//                     controls, and services that protect cloud data,
//                     applications, and infrastructure from threats.
//                   </div>
//                   <div className="btn-box">
//                     <a
//                       href="https://zeroiz.tezcommerce.com/services/cloud"
//                       className="theme-btn icon-btn-one">
//                       <span>View Services</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Case Block 2 */}
//             <div className="case-block col-lg-4 col-md-6 col-sm-12">
//               <div className="inner-box about_inner">
//                 <div className="image-box">
//                   <figure className="image">
//                     <a href="#">
//                       <img
//                         src="https://amfics.io/images/resource/simulate.jpg"
//                         alt=""
//                       />
//                     </a>
//                   </figure>
//                   <span className="icon_img">
//                     <img
//                       src="https://amfics.io/images/icons/simulate_icon.png"
//                       alt=""
//                     />
//                   </span>
//                 </div>
//                 <div className="lower-content">
//                   <h4>
//                     <a href="#">Simulate Real-world Attack</a>
//                   </h4>
//                   <div className="text">
//                     Attack your security posture using adversarial tactics from
//                     the MITRE ATT&CK framework. Simulate the latest attacks
//                     safely on your unique environment without exposing data.
//                   </div>
//                   <div className="btn-box">
//                     <a
//                       href="https://zeroiz.tezcommerce.com/services/simulate"
//                       className="theme-btn icon-btn-one">
//                       <span>View Services</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Case Block 3 */}
//             <div className="case-block col-lg-4 col-md-6 col-sm-12">
//               <div className="inner-box about_inner">
//                 <div className="image-box">
//                   <figure className="image">
//                     <a href="#">
//                       <img
//                         src="https://amfics.io/images/resource/ot_security.jpg"
//                         alt=""
//                       />
//                     </a>
//                   </figure>
//                   <span className="icon_img">
//                     <img
//                       src="https://amfics.io/images/icons/ot_icon.png"
//                       alt=""
//                     />
//                   </span>
//                 </div>
//                 <div className="lower-content">
//                   <h4>
//                     <a href="#">OT/IOT Security</a>
//                   </h4>
//                   <div className="text">
//                     Siemens Cybersecurity for Industry solutions for plant
//                     automation - more information! Protecting productivity with
//                     Plant Security Services by Siemens for your security!
//                   </div>
//                   <div className="btn-box">
//                     <a
//                       href="https://zeroiz.tezcommerce.com/services/ot_sceurity"
//                       className="theme-btn icon-btn-one">
//                       <span>View Services</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <CallToAction />
//     </>
//   );
// };

// export default Services;

"use client";

import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import CallToAction from "@/component/CallToActions";
import { fetchPageData } from "../action/page";
import { fetchBannerData } from "../action/banner";
import Image from "next/image";

const Services: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [bannerData, setBannerData] = useState<any>(null);

  useEffect(() => {
    const getBannerData = async () => {
      const uid = "6ab20de5-df9c-49fb-bb61-b387d7472cea";
      const res = await fetchBannerData(uid);
      console.log("Banner Data: ", res);
      if (res?.status) setBannerData(res);
    };
    getBannerData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const uid = "2b3e4bf2-4c22-4860-b5a4-69ef1400dec6";
      const res = await fetchPageData(uid);
      console.log("Page Data: ", res);
      if (res?.status) setData(res);
    };
    getData();
  }, []);

  if (!data || !bannerData)
    return (
      <div className="text-center py-20">
        <h3>Loading...</h3>
      </div>
    );

  // const banner = bannerData;
  // const page = data.pagedata;
  // console.log("aaaaaaaaaaaaaaaaaaaaaaaa", banner);
  const page = data.pagedata;
  const sections = data.pageItemdataWithSubsection || [];
  const subSection = data.pageItemdataWithSubsection?.subsections;
  console.log("Subsection Data: ", subSection);
  // const whatWeOffer = sections.find((sec: any) => sec.title === "");
  // const zeroizServices = sections.find((sec: any) => sec.title === "");
  // console.log("Banner Data: ", banner);
  // console.log("Page Data: ", page);
  return (
    <>
      <section
        className="page-title about_box"
        style={{
          backgroundImage: `url(${bannerData.desktopImage})`,
        }}>
        <div className="auto-container about_title">
          <h1>{bannerData.title}</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      <section className="news-section global_section global_section2">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="icon">
              <img src="../../images/services/services_icon.png" alt="" />
            </span>

            <h3>{page.title}</h3>
            <div className="text">{parse(page.description || "")}</div>
            <div className="global service_image">
              <img src={page.cover_image_url} alt={""} />
            </div>
          </div>
        </div>
      </section>

      <section className="case-study-section zero_ser zero_ser2">
        <div className="auto-container">
          <div className="sec-title text-center sec-title3">
            <h3>{sections[0]?.subsections?.[0]?.title || ""}</h3>
            <div className="text">{parse(page.description || "")}</div>
          </div>
          <div className="row">
            {sections.map((section: any, index: number) => (
              <div
                className="case-block col-lg-4 col-md-6 col-sm-12"
                key={section.id || index}>
                <div className="inner-box about_inner">
                  <div className="image-box">
                    <figure className="image">
                      <a href="#">
                        <Image
                          src={section.image}
                          alt={section.title}
                          height={400}
                          width={400}
                        />
                      </a>
                    </figure>
                    {section.subsections?.length > 0 && (
                      <div className="subsection-list mt-3">
                        {section.subsections.map(
                          (sub: any, subIndex: number) => (
                            <div key={sub.id || subIndex} className="icon_img">
                              <Image
                                src={sub.image}
                                alt={sub.title}
                                height={100}
                                width={100}
                              />
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                  <div className="lower-content">
                    <h4>
                      <a href="#">{section.title}</a>
                    </h4>
                    <div className="text">
                      {parse(section.shortDescription || "")}
                    </div>

                    <div className="btn-box mt-3">
                      <a href="#" className="theme-btn icon-btn-one">
                        <span>View Services
                        <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Services;
