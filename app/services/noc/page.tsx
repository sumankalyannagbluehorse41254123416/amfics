// "use client";

// import ServiceContactSection from "@/component/ServiceContact";
// import Image from "next/image";
// import React from "react";

// const ServicesPage: React.FC = () => {
//   return (
//     <>
//       {/* Page Title Section */}
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
//       <section className="case-study-section zero_ser soc_item padd_all">
//         <div className="auto-container">
//           <div className="sec-title text-center">
//             {/*
//              */}
//             <h3>Network Operations Center</h3>
//             <div className="text soc_text">
//               A Network Operations Centre (NOC) is a centralized facility where
//               IT professionals monitor, manage, and maintain an organization's
//               network infrastructure. The primary function of a NOC is to ensure
//               that the network is running smoothly and efficiently, with minimal
//               downtime or interruptions. The NOC team is responsible for the
//               monitoring and maintenance of the network, including
//               troubleshooting and resolving issues as they arise.
//             </div>
//             <div className="soc_blog_bottom">
//               <Image
//                 src="https://amfics.io/images/NOC.png"
//                 alt=""
//                 width={400}
//                 height={400}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* End Case Study Section */}

//       {/* SOC Section */}
//       <div className="container soc">
//         <div className="row">
//           <div className="col-md-8" data-aos="fade-right">
//             <div className="soc_section">
//               <p>
//                 Typically, a NOC is staffed with a team of network engineers,
//                 administrators, and other IT professionals who use a variety of
//                 tools and technologies to monitor the organization's network
//                 infrastructure. This may include monitoring network traffic,
//                 reviewing logs, and performing network tests and diagnostics.
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4" data-aos="fade-left">
//             <div className="soc_img">
//               <Image
//                 src="https://amfics.io/images/background/noc_banner.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="row mt-5">
//           <div className="col-md-4" data-aos="fade-left">
//             <div className="soc_img">
//               <Image
//                 src="https://amfics.io/images/background/noc_banner2.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//               />
//             </div>
//           </div>
//           <div className="col-md-8" data-aos="fade-right">
//             <div className="soc_section">
//               <p>
//                 The key functions of a NOC include: Network monitoring and
//                 management, Incident management, Performance management,
//                 Configuration management, Change management to name a few.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="row mt-5">
//           <div className="col-md-8" data-aos="fade-right">
//             <div className="soc_section">
//               <p>
//                 The NOC plays a critical role in an organization's IT
//                 infrastructure by ensuring that the network is running
//                 efficiently and effectively. By monitoring and managing the
//                 network infrastructure, the NOC helps to minimize downtime and
//                 ensure that critical systems and applications are available to
//                 users when they need them.
//               </p>
//             </div>
//           </div>

//           <div className="col-md-4" data-aos="fade-left">
//             <div className="soc_img">
//               <Image
//                 src="https://amfics.io/images/background/noc_banner3.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <ServiceContactSection />
//     </>
//   );
// };

// export default ServicesPage;

import ServiceContactSection from "@/component/ServiceContact";
import Image from "next/image";
import parse from "html-react-parser";
import { fetchPageData } from "@/app/action/fetchPageData";
import ScrollAnimation from "@/component/animation/ScrollAnimation";

interface Subsection {
  id: number;
  title: string;
  description: string;
  image: string;
  [key: string]: unknown;
}

export default async function NocServices() {
  const uid = "90395f71-5d21-474b-8d49-dbc8692a830a";

  const data = await fetchPageData(uid);

  if (!data?.status) {
    return (
      <section className="page-title about_box">
        <div className="auto-container about_title">
          <h1>Page Not Found</h1>
        </div>
      </section>
    );
  }

  const page = data.pagedata;
  const section = data.pageItemdataWithSubsection?.[0];
  const subsections: Subsection[] = section?.subsections || [];

  return (
    <>
      <section
        className="page-title about_box"
        style={{
          backgroundImage: `url(${
            page?.cover_image_url ||
            "https://amfics.io/images/background/about_us.jpg"
          })`,
        }}>
        <div className="auto-container about_title">
          <h1>{page?.title || ""}</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      {section && (
        <section className="case-study-section zero_ser soc_item padd_all">
          <div className="auto-container">
            <div className="sec-title text-center soc_box">
              <h3>{section.title}</h3>
              <div className="text soc_text">
                {parse(section.shortDescription || "")}
              </div>
              {typeof section.image === "string" && section.image && (
                <div className="soc_blog_bottom">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="rounded-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <div className="container soc">
        {subsections.map((sub: Subsection, index: number) => (
          <div
            key={sub.id}
            className={`row mt-${index === 0 ? 0 : 5} ${
              index === 1 ? "soc_page_box" : ""
            }`}>
            {index % 2 === 0 ? (
              <>
                <div className="col-md-8" data-aos="fade-right b">
                  <div className="soc_section soc_fade_text">
                    {parse(sub.description || "")}
                  </div>
                </div>
                <div className="col-md-4" data-aos="fade-left">
                  <div className="soc_img soc_fade_img">
                    {sub.image && (
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        width={400}
                        height={400}
                        className="rounded-2xl"
                      />
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-4" data-aos="fade-left">
                  <div className="soc_img soc_fade_text">
                    {sub.image && (
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        width={400}
                        height={400}
                        className="rounded-2xl"
                      />
                    )}
                  </div>
                </div>
                <div className="col-md-8" data-aos="fade-right">
                  <div className="soc_section soc_fade_img">
                    {parse(sub.description || "")}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <ServiceContactSection />
      <ScrollAnimation />
      {/*  */}
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            function initScrollAnimations() {
              const textElements = document.querySelectorAll('.soc_fade_text');
              const imgElements = document.querySelectorAll('.soc_fade_img');
              
              function checkVisibility() {
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;
                
                textElements.forEach(function(el) {
                  const rect = el.getBoundingClientRect();
                  const elementTop = rect.top + scrollY;
                  const elementBottom = elementTop + rect.height;
                  const viewportTop = scrollY;
                  const viewportBottom = scrollY + windowHeight;
                  
                  if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateX(0)';
                  } else {
                    el.style.opacity = '0';
                    el.style.transform = 'translateX(-100px)';
                  }
                });
                
                imgElements.forEach(function(el) {
                  const rect = el.getBoundingClientRect();
                  const elementTop = rect.top + scrollY;
                  const elementBottom = elementTop + rect.height;
                  const viewportTop = scrollY;
                  const viewportBottom = scrollY + windowHeight;
                  
                  if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateX(0)';
                  } else {
                    el.style.opacity = '0';
                    el.style.transform = 'translateX(100px)';
                  }
                });
              }
              
              textElements.forEach(function(el) {
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                el.style.opacity = '0';
                el.style.transform = 'translateX(-100px)';
              });
              
              imgElements.forEach(function(el) {
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                el.style.opacity = '0';
                el.style.transform = 'translateX(100px)';
              });
              
              checkVisibility();
              
              window.addEventListener('scroll', checkVisibility);
              window.addEventListener('resize', checkVisibility);
            }
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initScrollAnimations);
            } else {
              initScrollAnimations();
            }
          })();
        `,
        }}
      /> */}
    </>
  );
}
