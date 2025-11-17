// "use client";

// import React from "react";
// import Image from "next/image";
// import ServiceContactSection from "@/component/ServiceContact";

// const ThreatModeling: React.FC = () => {
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
//           <h1>Threat Modelling & Risk Assessment</h1>
//           <span className="title_divider"></span>
//           {/*
//           <ul className="page-breadcrumb">
//             <li><a href="https://amfics.io">Home</a></li>
//             <li>Threat</li>
//           </ul>
//           */}
//         </div>
//       </section>

//       {/* Case Study Section */}
//       <section className="case-study-section zero_ser soc_item">
//         <div className="auto-container">
//           <div className="sec-title text-center">
//             {/*
//             <span className="icon">
//               <Image
//                 src="https://amfics.io/images/background/services_icon.png"
//                 alt="services icon"
//                 width={60}
//                 height={60}
//               />
//             </span>
//             */}
//             <h3>Threat Modelling & Risk Assessment</h3>
//             <div className="text soc_text">
//               Cybersecurity threat modeling and risk management are essential
//               processes for protecting digital assets and data from potential
//               cyber attacks. Threat modeling is a systematic approach to
//               identify and prioritize potential security threats to a system,
//               application, or network. Risk management, on the other hand,
//               involves identifying, assessing, and mitigating potential risks to
//               the system.
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section
//         className="process-section"
//         style={{
//           backgroundImage: "url(../images/background/2.jpg)",
//         }}>
//         <div className="auto-container">
//           <div className="row">
//             {/* Process Blocks */}
//             {[
//               {
//                 title: "PREPARE",
//                 img: "https://amfics.io/images/icons/risk_icon.png",
//                 text: "Incident preparedness is a two-part process that consists of setting up security configurations and testing for weaknesses",
//               },
//               {
//                 title: "IDENTIFY",
//                 img: "https://amfics.io/images/icons/risk_icon2.png",
//                 text: "Determine whether you’ve been breached. A breach, or incident, could originate from many different areas.",
//               },
//               {
//                 title: "CONTAIN",
//                 img: "https://amfics.io/images/icons/risk_icon3.png",
//                 text: "Implement short-term and long-term containment strategies so it doesn’t cause further damage to your business.",
//               },
//               {
//                 title: "ERADICATE",
//                 img: "https://amfics.io/images/icons/risk_icon4.png",
//                 text: "Find and eliminate the root cause of the breach. Malware is securely removed, systems patched, and updated.",
//               },
//               {
//                 title: "RECOVER",
//                 img: "https://amfics.io/images/icons/risk_icon5.png",
//                 text: "Restore and return affected systems and devices back into your business environment.",
//               },
//               {
//                 title: "LEARN",
//                 img: "https://amfics.io/images/icons/risk_icon6.png",
//                 text: "Analyze and document the breach response. Determine what worked well and what should be changed. Return to Prepare Phase.",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="process-block process-block2 threat_box col-lg-2 col-md-6 col-sm-12">
//                 <div className="inner-box active">
//                   <div className="icon-box">
//                     <span className="icon">
//                       <Image
//                         src={item.img}
//                         alt={item.title}
//                         width={60}
//                         height={60}
//                       />
//                     </span>
//                     <span className="roadmap-divider"></span>
//                   </div>
//                   <h4>{item.title}</h4>
//                   <p className="threat_text">{item.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bottom Section */}
//       <div className="container mt-2 mb-5">
//         <div className="row mt-5 threat_item">
//           <div className="col-md-8" data-aos="fade-right">
//             <div className="soc_section">
//               <p>
//                 Threat modeling is a process of identifying and analyzing
//                 potential security threats to an application, system, or
//                 organization. It involves identifying potential threats,
//                 assessing their likelihood and impact, and determining the
//                 countermeasures necessary to mitigate those threats.
//               </p>
//             </div>
//           </div>
//           <div className="col-md-4" data-aos="fade-left">
//             <div className="soc_img">
//               <Image
//                 src="https://amfics.io/images/background/threat_banner.jpg"
//                 alt="threat banner"
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

// export default ThreatModeling;

// import Image from "next/image";
// import parse from "html-react-parser";
// import ServiceContactSection from "@/component/ServiceContact";
// import { fetchPageData } from "@/app/action/fetchPageData";

// export default async function ThreatModeling() {
//   const uid = "a2996208-f96d-4554-9581-2b2415a11ce9";
//   const data = await fetchPageData(uid);

//   if (!data?.status) {
//     return <div className="text-center py-5">Failed to load page data</div>;
//   }

//   const { pagedata, pageItemdataWithSubsection } = data;
//   const section1 = pageItemdataWithSubsection[0];
//   const section2 = pageItemdataWithSubsection[1];
//   const subsections = section1?.subsections || [];

//   return (
//     <div style={{ overflowX: "hidden" }}>
//       <section
//         className="page-title about_box"
//         style={{
//           backgroundImage: `url(${pagedata.cover_image_url})`,
//         }}>
//         <div className="auto-container about_title">
//           <h1>{pagedata.title}</h1>
//           <span className="title_divider"></span>
//         </div>
//       </section>

//       <section className="case-study-section zero_ser soc_item threat_soc">
//         <div className="auto-container">
//           <div className="sec-title text-center">
//             <h3>{section1?.title}</h3>
//             <div className="text soc_text">
//               {parse(section1?.shortDescription || "")}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         className="process-section"
//         style={{
//           backgroundImage: "url(/images/background/2.jpg)",
//         }}>
//         <div className="auto-container">
//           <div className="row">
//             {subsections.map((item) => (
//               <div
//                 key={item.id}
//                 className="process-block process-block2 threat_box col-lg-2 col-md-6 col-sm-12">
//                 <div className="inner-box active">
//                   <div className="icon-box">
//                     <span className="icon threat_page">
//                       <Image
//                         src={item.image}
//                         alt={item.title}
//                         width={400}
//                         height={400}
//                       />
//                     </span>
//                     <span className="roadmap-divider threat_divider">
//                       <i className="fa-solid fa-arrow-right"></i>
//                     </span>
//                   </div>
//                   <h4>{item.title}</h4>
//                   <div className="threat_text">
//                     {parse(item.description || "")}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {section2 && (
//         <div className="container mt-2 mb-5">
//           <div className="row mt-5 threat_item">
//             <div className="col-md-8" data-aos="fade-right">
//               <div className="soc_section soc_fade_text">
//                 {parse(section2?.shortDescription || "")}
//               </div>
//             </div>
//             <div className="col-md-4" data-aos="fade-left">
//               <div className="soc_img soc_fade_img">
//                 <Image
//                   src={section2.image}
//                   alt={section2.title}
//                   width={400}
//                   height={400}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <ServiceContactSection />
//       <script
//         dangerouslySetInnerHTML={{
//           __html: `
//           (function() {
//             function initScrollAnimations() {
//               const textElements = document.querySelectorAll('.soc_fade_text');
//               const imgElements = document.querySelectorAll('.soc_fade_img');

//               function checkVisibility() {
//                 const windowHeight = window.innerHeight;
//                 const scrollY = window.scrollY;

//                 textElements.forEach(function(el) {
//                   const rect = el.getBoundingClientRect();
//                   const elementTop = rect.top + scrollY;
//                   const elementBottom = elementTop + rect.height;
//                   const viewportTop = scrollY;
//                   const viewportBottom = scrollY + windowHeight;

//                   if (elementBottom > viewportTop && elementTop < viewportBottom) {
//                     el.style.opacity = '1';
//                     el.style.transform = 'translateX(0)';
//                   } else {
//                     el.style.opacity = '0';
//                     el.style.transform = 'translateX(-100px)';
//                   }
//                 });

//                 imgElements.forEach(function(el) {
//                   const rect = el.getBoundingClientRect();
//                   const elementTop = rect.top + scrollY;
//                   const elementBottom = elementTop + rect.height;
//                   const viewportTop = scrollY;
//                   const viewportBottom = scrollY + windowHeight;

//                   if (elementBottom > viewportTop && elementTop < viewportBottom) {
//                     el.style.opacity = '1';
//                     el.style.transform = 'translateX(0)';
//                   } else {
//                     el.style.opacity = '0';
//                     el.style.transform = 'translateX(100px)';
//                   }
//                 });
//               }

//               textElements.forEach(function(el) {
//                 el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
//                 el.style.opacity = '0';
//                 el.style.transform = 'translateX(-100px)';
//               });

//               imgElements.forEach(function(el) {
//                 el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
//                 el.style.opacity = '0';
//                 el.style.transform = 'translateX(100px)';
//               });

//               checkVisibility();

//               window.addEventListener('scroll', checkVisibility);
//               window.addEventListener('resize', checkVisibility);
//             }

//             if (document.readyState === 'loading') {
//               document.addEventListener('DOMContentLoaded', initScrollAnimations);
//             } else {
//               initScrollAnimations();
//             }
//           })();
//         `,
//         }}
//       />
//     </div>
//   );
// }
import Image from "next/image";
import parse from "html-react-parser";
import ServiceContactSection from "@/component/ServiceContact";
import { fetchPageData } from "@/app/action/fetchPageData";

// ----------------------
// Interfaces (Types)
// ----------------------

interface Subsection {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface PageSection {
  id?: number;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface PageData {
  title?: string;
  cover_image_url?: string;
}

interface FetchPageResponse {
  status: boolean;
  pagedata: PageData;
  pageItemdataWithSubsection: PageSection[];
}

// ----------------------
// Component
// ----------------------

export default async function ThreatModeling() {
  const uid = "a2996208-f96d-4554-9581-2b2415a11ce9";

  const data: FetchPageResponse = await fetchPageData(uid);

  // Error state
  if (!data?.status || !data.pageItemdataWithSubsection?.length) {
    return <div className="text-center py-5">Failed to load page data</div>;
  }

  const { pagedata, pageItemdataWithSubsection } = data;

  const section1 = pageItemdataWithSubsection[0];
  const section2 = pageItemdataWithSubsection[1];

  const subsections: Subsection[] = section1?.subsections ?? [];

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Page Title Section */}
      <section
        className="page-title about_box"
        style={{
          backgroundImage: `url(${pagedata.cover_image_url})`,
        }}>
        <div className="auto-container about_title">
          <h1>{pagedata.title}</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      {/* Section 1 */}
      <section className="case-study-section zero_ser soc_item threat_soc">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h3>{section1?.title}</h3>
            <div className="text soc_text">
              {section1?.shortDescription && parse(section1.shortDescription)}
            </div>
          </div>
        </div>
      </section>

      {/* Subsection List / Steps */}
      <section
        className="process-section"
        style={{
          backgroundImage: "url(/images/background/2.jpg)",
        }}>
        <div className="auto-container">
          <div className="row">
            {subsections.map((item) => (
              <div
                key={item.id}
                className="process-block process-block2 threat_box col-lg-2 col-md-6 col-sm-12">
                <div className="inner-box active">
                  <div className="icon-box">
                    <span className="icon threat_page">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={400}
                        />
                      )}
                    </span>

                    <span className="roadmap-divider threat_divider">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>

                  <h4>{item.title}</h4>

                  <div className="threat_text">
                    {item.description && parse(item.description)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 (Optional) */}
      {section2 && (
        <div className="container mt-2 mb-5">
          <div className="row mt-5 threat_item">
            <div className="col-md-8" data-aos="fade-right">
              <div className="soc_section soc_fade_text">
                {section2.shortDescription && parse(section2.shortDescription)}
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-left">
              <div className="soc_img soc_fade_img">
                {section2.image && (
                  <Image
                    src={section2.image}
                    alt={section2.title || "Threat Modeling"}
                    width={400}
                    height={400}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
}
