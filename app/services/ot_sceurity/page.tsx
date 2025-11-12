// "use client";

// import ServiceContactSection from "@/component/ServiceContact";
// import Image from "next/image";
// import React from "react";

// const OtIotSecurity: React.FC = () => {
//   return (
//     <>
//       <section
//         className="page-title about_box"
//         style={{
//           backgroundImage:
//             "url(https://amfics.io/images/background/about_us.jpg)",
//         }}>
//         <div className="auto-container about_title">
//           <h1>OT/IOT Security</h1>
//           <span className="title_divider"></span>
//         </div>
//       </section>
//       <section className="case-study-section zero_ser soc_item ot_box">
//         <div className="auto-container">
//           <div className="sec-title text-center">
//             <h3>OT/IOT Security</h3>
//           </div>

//           <div className="text soc_text cloud">
//             <p>
//               <strong>OT/IT security</strong> refers to the protection of both
//               operational technology (OT) and information technology (IT)
//               systems from cyber threats. OT systems are responsible for
//               controlling and managing physical processes in industries such as
//               manufacturing, energy, and transportation, while IT systems handle
//               the processing, storage, and communication of digital data.
//             </p>

//             <p>
//               Protecting both OT and IT systems is crucial for maintaining the
//               security and continuity of critical infrastructure, as
//               cyber-attacks targeting either system can cause significant
//               disruption and damage. OT/IT security solutions typically involve
//               a combination of specialized hardware and software, as well as
//               personnel trained in both IT and OT security practices.
//             </p>
//           </div>

//           <div className="ciso_banner">
//             <Image
//               src="https://amfics.io/images/background/security_image.jpg"
//               alt="OT/IOT Security illustration"
//               width={1200}
//               height={600}
//               priority
//             />
//           </div>
//         </div>
//       </section>
//       <ServiceContactSection />;
//     </>
//   );
// };

// export default OtIotSecurity;

import Image from "next/image";
import parse from "html-react-parser";
import ServiceContactSection from "@/component/ServiceContact";
import { fetchPageData } from "@/app/action/page";

// Optional: Revalidate (ISR)
export const revalidate = 60; // Regenerate page every 60s if data changes

const OtIotSecurity = async () => {
  const uid = "5253a1e8-8a65-4eb6-800f-0d34c1929e52";

  let data;
  try {
    data = await fetchPageData(uid);
  } catch (error) {
    console.error("Error fetching OT/IOT Security page:", error);
    return (
      <div className="text-center py-20 text-xl font-semibold text-red-500">
        Failed to load OT/IOT Security data. Please try again later.
      </div>
    );
  }

  const page = data?.pagedata;
  const section = data?.pageItemdataWithSubsection?.[0];

  if (!page || !section) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        No data found for OT/IOT Security.
      </div>
    );
  }

  return (
    <>
      <section
        className="page-title about_box"
        style={{
          backgroundImage: `url(${page.cover_image_url})`,
        }}>
        <div className="auto-container about_title">
          <h1>{page.title}</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      <section className="case-study-section zero_ser soc_item ot_box">
        <div className="auto-container">
          {/* Section Title */}
          <div className="sec-title text-center">
            <h3>{section.title}</h3>
          </div>

          <div className="text soc_text cloud">
            {section.shortDescription ? parse(section.shortDescription) : ""}
          </div>

          {section.image && (
            <div className="ciso_banner">
              <Image
                src={section.image}
                alt={section.title || "OT/IOT Security Image"}
                width={1200}
                height={600}
                priority
              />
            </div>
          )}
        </div>
      </section>

      <ServiceContactSection />
    </>
  );
};

export default OtIotSecurity;
