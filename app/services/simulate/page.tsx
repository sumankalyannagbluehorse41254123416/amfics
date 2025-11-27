// "use client";

// import React from "react";
// import Image from "next/image";
// import ServiceContactSection from "@/component/ServiceContact";

// const SimulateRealWorldAttack = () => {
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
//           <h1>Simulate Real World Attack</h1>
//           <span className="title_divider"></span>
//           {/*
//           <ul className="page-breadcrumb">
//             <li><a href="https://amfics.io">Home</a></li>
//             <li>Simulate Real World Attack</li>
//           </ul>
//           */}
//         </div>
//       </section>
//       {/* End Page Title */}
//       {/* Case Study Section */}
//       <section className="case-study-section zero_ser soc_item simulate_box">
//         <div className="auto-container">
//           <div className="sec-title text-center">
//             {/*
//             <span className="icon">
//               <Image
//                 src="https://amfics.io/images/background/services_icon.png"
//                 alt=""
//                 width={64}
//                 height={64}
//               />
//             </span>
//             */}
//             <h3>Simulate Real World Attack</h3>
//             <div className="text soc_text cloud">
//               The activity amfics is referring to is commonly known as a{" "}
//               <strong>"Red Team vs. Blue Team Exercise"</strong>. In this
//               exercise, a team of security professionals, known as the{" "}
//               <strong>Red Team</strong>, attempt to penetrate the organization’s
//               security defenses to identify vulnerabilities and weaknesses. The
//               Red Team uses a variety of tactics, such as social engineering,
//               penetration testing, and vulnerability scanning, to simulate
//               real-world attacks and test the organization’s security posture.
//               <br />
//               <br />
//               The <strong>Blue Team</strong> is the defending team that is
//               responsible for detecting and responding to the attacks launched
//               by the Red Team. The Blue Team monitors the network for suspicious
//               activity, investigates potential security incidents, and
//               implements security controls to prevent future attacks.
//               <br />
//               <br />
//               The goal of a Red Team vs. Blue Team exercise is to identify
//               vulnerabilities in the organization’s security defenses and
//               improve its overall security posture. By simulating real-world
//               attacks, organizations can identify weaknesses in their security
//               controls and take proactive steps to address them before they are
//               exploited by malicious actors.
//             </div>
//           </div>

//           <div className="row mb-5">
//             {/* Left Column */}
//             <div className="col-md-3 col-sm-3">
//               <div className="sim_item">
//                 <h5>WHO</h5>
//                 <p>
//                   Blue teams are defensive security professionals responsible
//                   for maintaining internal network defences against all cyber
//                   attacks and threats.
//                 </p>
//               </div>
//               <div className="sim_item">
//                 <h5>WHAT</h5>
//                 <p>
//                   Blue teams use a variety of methods and tools as
//                   countermeasures to protect a network from cyber attacks.
//                 </p>
//               </div>
//               <div className="sim_item">
//                 <h5>HOW</h5>
//                 <p>
//                   Examples of blue team exercises include installing endpoint
//                   security software, confirming firewall access controls,
//                   analyzing logs, segregating networks, vulnerability scans,
//                   risk assessments, and security hardening measures.
//                 </p>
//               </div>
//             </div>

//             {/* Center Image */}
//             <div className="col-md-6 col-sm-6">
//               <Image
//                 src="https://amfics.io/images/background/simulate_img.png"
//                 alt="Simulate Real World Attack"
//                 width={600}
//                 height={600}
//               />
//             </div>

//             {/* Right Column */}
//             <div className="col-md-3 col-sm-3">
//               <div className="sim_item">
//                 <h5>WHO</h5>
//                 <p>
//                   Red teams are offensive security professionals who are experts
//                   in attacking systems and breaking into defences.
//                 </p>
//               </div>
//               <div className="sim_item">
//                 <h5>WHAT</h5>
//                 <p>
//                   Red teams utilize all available techniques to find weaknesses
//                   in people, processes, and tech to gain unauthorised access to
//                   assets.
//                 </p>
//               </div>
//               <div className="sim_item">
//                 <h5>HOW</h5>
//                 <p>
//                   Examples of red team exercises include penetration testing
//                   (network, application, mobile, device), social engineering
//                   (onsite, phishing, fishing, SMSishing, spearphishing),
//                   communications interception, insider threat evaluation, and
//                   physical intrusion.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ServiceContactSection />;
//     </>
//   );
// };

// export default SimulateRealWorldAttack;

// import Image from "next/image";
// import parse from "html-react-parser";
// import ServiceContactSection from "@/component/ServiceContact";
// import { fetchPageData } from "@/app/action/fetchPageData";
// interface PageData {
//   title?: string;
//   cover_image_url?: string;
//   description?: string;
// }

// interface PageSection {
//   title?: string;
//   image?: string;
//   shortDescription?: string;
// }

// interface FetchPageResponse {
//   status: boolean;
//   pagedata: PageData;
//   pageItemdataWithSubsection?: PageSection[];
// }
// export default async function SimulateRealWorldAttack() {
//   const uid = "366d7531-fa37-4f7a-9b90-8c90fbc60ecd";
//   const data = await fetchPageData(uid);
//   if (!data?.status) {
//     return (
//       <section className="py-20 text-center">
//         <h2>Simulate Real World Attack data not found.</h2>
//       </section>
//     );
//   }

//   // Extract relevant data
//   const page = data.pagedata;
//   const item = data.pageItemdataWithSubsection?.[0];
//   const subsections = item?.subsections || [];

//   return (
//     <>
//       {/* Page Title */}
//       <section
//         className="page-title about_box"
//         style={{ backgroundImage: `url(${page.cover_image_url})` }}>
//         <div className="auto-container about_title">
//           <h1>{page.title}</h1>
//           <span className="title_divider"></span>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="case-study-section zero_ser soc_item simulate_box">
//         <div className="auto-container">
//           <div className="sec-title text-center">
//             <h3>{item?.title}</h3>

//             {/* Main Text from CMS */}
//             <div className="text soc_text cloud">
//               {item?.shortDescription && parse(item.shortDescription)}
//             </div>
//           </div>

//           <div className="row mb-5 align-items-center">
//             <div className="col-md-3 col-sm-3">
//               {subsections.slice(0, 3).map((sub) => (
//                 <div className="sim_item" key={sub.id}>
//                   <h5>{sub.title}</h5>
//                   {parse(sub.description || "")}
//                 </div>
//               ))}
//             </div>

//             <div className="col-md-6 col-sm-6 text-center">
//               {item?.image && (
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={600}
//                   height={600}
//                 />
//               )}
//             </div>

//             <div className="col-md-3 col-sm-3">
//               {subsections.slice(0, 3).map((sub, index) => (
//                 <div className="sim_item" key={`right-${sub.id}-${index}`}>
//                   <h5>{sub.title}</h5>
//                   {parse(sub.description || "")}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <ServiceContactSection />
//     </>
//   );
// }
import Image from "next/image";
import parse from "html-react-parser";
import ServiceContactSection from "@/component/ServiceContact";
import { fetchPageData } from "@/app/action/fetchPageData";

// ----------------------
// Type Definitions
// ----------------------

interface PageData {
  title?: string;
  cover_image_url?: string;
  description?: string;
}

interface Subsection {
  id: number;
  title: string;
  description: string;
}

interface PageSection {
  id?: number;
  title?: string;
  image?: string;
  shortDescription?: string;
  subsections?: Subsection[];
}

interface FetchPageResponse {
  status: boolean;
  pagedata: PageData;
  pageItemdataWithSubsection?: PageSection[];
}

// ----------------------
// Component
// ----------------------

export default async function SimulateRealWorldAttack() {
  const uid = "366d7531-fa37-4f7a-9b90-8c90fbc60ecd";

  const data: FetchPageResponse = await fetchPageData(uid);

  if (!data?.status) {
    return (
      <section className="py-20 text-center">
        <h2>Simulate Real World Attack data not found.</h2>
      </section>
    );
  }

  const page = data.pagedata;
  const item = data.pageItemdataWithSubsection?.[0];

  // Safe fallback
  const subsections: Subsection[] = item?.subsections ?? [];

  return (
    <>
      {/* Page Title Section */}
      <section
        className="page-title about_box"
        style={{ backgroundImage: `url(${page.cover_image_url})` }}>
        <div className="auto-container about_title">
          <h1>{page.title}</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="case-study-section zero_ser soc_item simulate_box">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h3>{item?.title}</h3>

            <div className="text soc_text cloud">
              {item?.shortDescription && parse(item.shortDescription)}
            </div>
          </div>

          <div className="row mb-5 align-items-center">
            {/* Left 3 Items */}
            <div className="col-md-3 col-sm-12">
              {subsections.slice(0, 3).map((sub) => (
                <div className="sim_item" key={sub.id}>
                  <h5>{sub.title}</h5>
                  {parse(sub.description)}
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="col-md-6 col-sm-12 text-center">
              {item?.image && (
                <Image
                  src={item.image}
                  alt={item.title || "Simulate Real World Attack"}
                  width={600}
                  height={600}
                />
              )}
            </div>

            {/* Right 3 Items */}
            <div className="col-md-3 col-sm-12">
              {subsections.slice(0, 3).map((sub) => (
                <div className="sim_item" key={sub.id}>
                  <h5>{sub.title}</h5>
                  {parse(sub.description)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceContactSection />
    </>
  );
}
