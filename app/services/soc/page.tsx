// "use client";

// import ServiceContactSection from "@/component/ServiceContact";
// import Image from "next/image";
// import React, { useState } from "react";

// const SocServices: React.FC = () => {
//   // Simple contact form handler (React version of miniContact)
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     message: "",
//   });

//   return (
//     <>
//       {/* Page Title */}
//       <section
//         className="page-title about_box"
//         style={{
//           backgroundImage:
//             "url(https://amfics.io/images/background/about_us.jpg)",
//         }}>
//         <div className="auto-container about_title">
//           <h1>Services</h1>
//           <span className="title_divider"></span>
//           {/*
//           <ul className="page-breadcrumb">
//             <li><a href="https://amfics.io">Home</a></li>
//             <li>Soc</li>
//           </ul>
//           */}
//         </div>
//       </section>

//       {/* SOC Section */}
//       <section className="case-study-section zero_ser soc_item padd_all">
//         <div className="auto-container">
//           <div className="sec-title text-center soc_box">
//             <h3>Security Operations Center</h3>
//             <div className="text soc_text">
//               A Security Operations Center (SOC) is a centralized facility where
//               security analysts monitor, detect, and respond to cybersecurity
//               threats and incidents. The primary function of a SOC is to provide
//               real-time threat intelligence and visibility into the
//               organization's security posture. The SOC team is responsible for
//               the identification, analysis, and response to security incidents,
//               and for maintaining the organization's security infrastructure.
//               SOC is staffed with a team of security analysts, engineers, and
//               other security professionals who use a variety of tools and
//               technologies to monitor the organization's network, systems, and
//               applications for signs of suspicious activity.
//             </div>
//             <div className="soc_blog_bottom">
//               <Image
//                 src="https://amfics.io/images/SOC.png"
//                 alt=""
//                 width={400}
//                 height={400}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SOC Description Sections */}
//       <div className="container soc">
//         {/* Section 1 */}
//         <div className="row">
//           <div className="col-md-8" data-aos="fade-right">
//             <div className="soc_section">
//               <p>
//                 The SOC plays a critical role in an organization's cybersecurity
//                 strategy by providing 24/7 monitoring and response to potential
//                 security threats. By identifying and responding to security
//                 incidents in real-time, the SOC helps to minimize the impact of
//                 cyber-attacks and protect the organization's data, systems, and
//                 reputation. The key functions of a SOC include: Threat detection
//                 and response, Incident management, Vulnerability management,
//                 Threat intelligence, Security tool management to name a few.
//               </p>
//             </div>
//           </div>
//           <div className="col-md-4" data-aos="fade-left">
//             <div className="soc_img">
//               <Image
//                 src="https://amfics.io/images/background/soc_banner.png"
//                 alt=""
//                 width={400}
//                 height={400}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Section 2 */}
//         <div className="row mt-5 soc_page_box">
//           <div className="col-md-4" data-aos="fade-left">
//             <div className="soc_img">
//               <Image
//                 src="https://amfics.io/images/background/soc_banner2.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//               />
//             </div>
//           </div>
//           <div className="col-md-8" data-aos="fade-right">
//             <div className="soc_section">
//               <p>
//                 The SOC plays a critical role in an organization's cybersecurity
//                 strategy by providing 24/7 monitoring and response to potential
//                 security threats. By identifying and responding to security
//                 incidents in real-time, the SOC helps to minimize the impact of
//                 cyber-attacks and protect the organization's data, systems, and
//                 reputation. The key functions of a SOC include: Threat detection
//                 and response, Incident management, Vulnerability management,
//                 Threat intelligence, Security tool management to name a few.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Section 3 */}
//         <div className="row mt-5">
//           <div className="col-md-8" data-aos="fade-right">
//             <div className="soc_section">
//               <p>
//                 The SOC plays a critical role in an organization's cybersecurity
//                 strategy by providing 24/7 monitoring and response to potential
//                 security threats. By identifying and responding to security
//                 incidents in real-time, the SOC helps to minimize the impact of
//                 cyber-attacks and protect the organization's data, systems, and
//                 reputation. The key functions of a SOC include: Threat detection
//                 and response, Incident management, Vulnerability management,
//                 Threat intelligence, Security tool management to name a few.
//               </p>
//             </div>
//           </div>
//           <div className="col-md-4" data-aos="fade-left">
//             <div className="soc_img">
//               <Image
//                 src="https://amfics.io/images/background/soc_banner3.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Form Section */}
//       <ServiceContactSection />
//     </>
//   );
// };

// export default SocServices;
import ServiceContactSection from "@/component/ServiceContact";
import Image from "next/image";
import parse from "html-react-parser";
import { fetchPageData } from "@/app/action/page";

export default async function SocServices() {
  const uid = "48fe3910-4db5-43ea-949a-2ef385996d75";

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
  const subsections = section?.subsections || [];

  return (
    <>
      <section
        className="page-title about_box"
        style={{
          backgroundImage: `url(${page?.cover_image_url || ""})`,
        }}>
        <div className="auto-container about_title">
          {page?.description ? (
            <div>{parse(page.description)}</div>
          ) : (
            <h1>{page?.title || "Services"}</h1>
          )}
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
              {section.image && (
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

      <div className="auto-container soc" style={{ overflowX: "hidden" }}>
        {subsections.map((sub: any, index: number) => (
          <div
            key={sub.id}
            className={`row mt-${index === 0 ? 0 : 5} ${
              index === 1 ? "soc_page_box" : ""
            }`}>
            {index % 2 === 0 ? (
              <>
                <div className="col-md-8" data-aos="fade-right">
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
                <div className="col-md-8" data-aos="fade-right">
                  <div className="soc_section soc_fade_text">
                    {parse(sub.description || "")}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <ServiceContactSection />

      <script
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
      />
    </>
  );
}
