// "use client";

// import React from "react";
// import Image from "next/image";
// import ServiceContactSection from "@/component/ServiceContact";

// const CyberSecurityReadiness: React.FC = () => {
//   return (
//     <>
//       <section
//         className="page-title about_box"
//         style={{
//           backgroundImage:
//             "url(https://amfics.io/images/background/about_us.jpg)",
//         }}>
//         <div className="auto-container about_title">
//           <h1>Cyber Security Readiness Program</h1>
//           <span className="title_divider"></span>
//         </div>
//       </section>
//       <section className="case-study-section zero_ser soc_item">
//         <div className="cyber_box text-info cyber_title text-center">
//           <h3>Cyber Security Readiness Program</h3>
//           <div className="section-border"></div>
//         </div>
//         <div className="container soc">
//           {/* Row 1 */}
//           <div className="row">
//             <div className="col-md-8" data-aos="fade-right">
//               <div className="soc_section">
//                 <p>
//                   A Cybersecurity Readiness Assessment is an important step in
//                   understanding an organization's current security posture and
//                   identifying areas for improvement. Amfics&apos;s approach to
//                   this assessment involves comparing an organization&apos;s
//                   security practices to those of peer organizations and leading
//                   industry frameworks such as NIST 800-53, ISF or ISO.
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-4" data-aos="fade-left">
//               <div className="soc_img">
//                 <Image
//                   src="https://amfics.io/images/background/Cyber_Security3.jpg"
//                   alt="Cyber Security Readiness"
//                   width={500}
//                   height={300}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Row 2 */}
//           <div className="row mt-5">
//             <div className="col-md-4" data-aos="fade-left">
//               <div className="soc_img">
//                 <Image
//                   src="https://amfics.io/images/background/Cyber_Security2.jpg"
//                   alt="Cyber Security Frameworks"
//                   width={500}
//                   height={300}
//                 />
//               </div>
//             </div>
//             <div className="col-md-8" data-aos="fade-right">
//               <div className="soc_section">
//                 <p>
//                   By using these frameworks as a benchmark, Amfics can help
//                   organizations identify gaps in their security practices and
//                   prioritize areas for improvement. This can include assessing
//                   the effectiveness of existing security controls, identifying
//                   vulnerabilities and risks, and evaluating the
//                   organization&apos;s ability to respond to and recover from
//                   security incidents.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Row 3 */}
//           <div className="row mt-5">
//             <div className="col-md-8" data-aos="fade-right">
//               <div className="soc_section">
//                 <p>
//                   By conducting a Cybersecurity Readiness Assessment,
//                   organizations can gain a better understanding of their overall
//                   security posture and make informed decisions about how to
//                   improve their cybersecurity practices and ultimately improve
//                   the organization&apos;s overall resilience to cyber threats.
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-4" data-aos="fade-left">
//               <div className="soc_img">
//                 <Image
//                   src="https://amfics.io/images/background/Cyber_Security4.jpg"
//                   alt="Cyber Threat Protection"
//                   width={500}
//                   height={300}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ServiceContactSection />;
//     </>
//   );
// };

// export default CyberSecurityReadiness;







// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import parse from "html-react-parser";
// import ServiceContactSection from "@/component/ServiceContact";
// import { fetchPageData } from "@/app/action/fetchPageData";

// interface Subsection {
//   id: number;
//   title: string;
//   description: string;
//   image?: string;
//   [key: string]: unknown;
// }

// interface PageItem {
//   id: number;
//   title: string;
//   shortDescription: string;
//   image?: string;
//   subsections?: Subsection[];
//   [key: string]: unknown;
// }

// interface PageData {
//   id: number;
//   title: string;
//   cover_image_url: string;
//   description: string;
//   [key: string]: unknown;
// }

// const CyberSecurityReadiness: React.FC = () => {
//   const [pageData, setPageData] = useState<PageData | null>(null);
//   const [pageItems, setPageItems] = useState<PageItem[]>([]);

//   const uid = "bee8f955-321b-45d3-8b17-a4de9a1d2a80";

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const res = await fetchPageData(uid);

//         if (res?.status && res?.pagedata) {
//           setPageData(res.pagedata as PageData);
//           setPageItems(res.pageItemdataWithSubsection || []);
//         }
//       } catch (error) {
//         console.error("Error fetching Cyber Security Readiness data:", error);
//       }
//     };

//     loadData();
//   }, []);

//   if (!pageData) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <>
//       <section
//         className="page-title about_box"
//         style={{
//           backgroundImage: `url(${pageData.cover_image_url})`,
//         }}>
//         <div className="auto-container about_title">
//           <h1>{pageData.title}</h1>
//           <span className="title_divider"></span>
//         </div>
//       </section>
//       <section className="case-study-section zero_ser soc_item">
//         <div className="cyber_box text-info cyber_title text-center">
//           <h3>{pageData.title}</h3>
//           <div className="section-border"></div>
//         </div>

//         <div className="container soc">
//           {pageItems.map((item, index) => (
//             <div className={`row ${index > 0 ? "mt-5" : ""}`} key={item.id}>
//               {index % 2 === 0 ? (
//                 <>
//                   <div className="col-md-8" data-aos="fade-right">
//                     <div className="soc_section">
//                       {parse(item.shortDescription || "")}
//                     </div>
//                   </div>
//                   <div className="col-md-4" data-aos="fade-left">
//                     <div className="soc_img">
//                       <Image
//                         src={item.image || "/images/default.jpg"}
//                         alt={item.title}
//                         width={500}
//                         height={300}
//                       />
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="col-md-4" data-aos="fade-left">
//                     <div className="soc_img">
//                       <Image
//                         src={item.image || "/images/default.jpg"}
//                         alt={item.title}
//                         width={500}
//                         height={300}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-8" data-aos="fade-right">
//                     <div className="soc_section">
//                       {parse(item.shortDescription || "")}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       <ServiceContactSection />
//     </>
//   );
// };

// export default CyberSecurityReadiness;






"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import ServiceContactSection from "@/component/ServiceContact";
import { fetchPageData } from "@/app/action/fetchPageData";

interface Subsection {
  id: number;
  title: string;
  description: string;
  image?: string;
  [key: string]: unknown;
}

interface PageItem {
  id: number;
  title: string;
  shortDescription: string;
  image?: string;
  subsections?: Subsection[];
  [key: string]: unknown;
}

interface PageData {
  id: number;
  title: string;
  cover_image_url: string;
  description: string;
  [key: string]: unknown;
}

const CyberSecurityReadiness: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [pageItems, setPageItems] = useState<PageItem[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const uid = "bee8f955-321b-45d3-8b17-a4de9a1d2a80";

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchPageData(uid);

        if (res?.status && res?.pagedata) {
          setPageData(res.pagedata as PageData);
          setPageItems(res.pageItemdataWithSubsection || []);
        }
      } catch (error) {
        console.error("Error fetching Cyber Security Readiness data:", error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          entry.target.classList.remove("animate-out");
        } else {
          entry.target.classList.remove("animate-in");
          entry.target.classList.add("animate-out");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [pageItems]);

  if (!pageData) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div style={{overflowX:"hidden"}}>
      <style jsx global>{`
        .scroll-animate-wrapper {
          opacity: 0;
        }

        .scroll-animate-left {
          transform: translateX(-100px);
          transition: all 0.8s ease-out;
        }

        .scroll-animate-right {
          transform: translateX(100px);
          transition: all 0.8s ease-out;
        }

        .animate-in .scroll-animate-left,
        .animate-in .scroll-animate-right {
          opacity: 1;
          transform: translateX(0);
        }

        .animate-in .scroll-animate-wrapper {
          opacity: 1;
        }

        .animate-out .scroll-animate-left {
          opacity: 0;
          transform: translateX(-100px);
        }

        .animate-out .scroll-animate-right {
          opacity: 0;
          transform: translateX(100px);
        }

        .animate-out .scroll-animate-wrapper {
          opacity: 0;
        }
      `}</style>

      <section
        className="page-title about_box"
        style={{
          backgroundImage: `url(${pageData.cover_image_url})`,
        }}>
        <div className="auto-container about_title">
          <h1>{pageData.title}</h1>
          <span className="title_divider"></span>
        </div>
      </section>
      
      <section className="case-study-section zero_ser soc_item cyber_security">
        <div className="cyber_box text-info cyber_title text-center">
          <h3>{pageData.title}</h3>
          <div className="section-border"></div>
        </div>

        <div className="container soc">
          {pageItems.map((item, index) => (
            <div
              className={`row ${index > 0 ? "mt-5" : ""}`}
              key={item.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}>
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-8">
                    <div className="soc_section scroll-animate-wrapper scroll-animate-left">
                      {parse(item.shortDescription || "")}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="soc_img scroll-animate-wrapper scroll-animate-right">
                      <Image
                        src={item.image || "/images/default.jpg"}
                        alt={item.title}
                        width={500}
                        height={300}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-4">
                    <div className="soc_img scroll-animate-wrapper scroll-animate-left">
                      <Image
                        src={item.image || "/images/default.jpg"}
                        alt={item.title}
                        width={500}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="soc_section scroll-animate-wrapper scroll-animate-right">
                      {parse(item.shortDescription || "")}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <ServiceContactSection />
    </div>
  );
};

export default CyberSecurityReadiness;
