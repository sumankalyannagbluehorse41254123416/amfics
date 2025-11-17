// "use client";

// import React from "react";
// import Image from "next/image";
// import ServiceContactSection from "@/component/ServiceContact";

// const CisoAsAService: React.FC = () => {
//   return (
//     <>
//       {/* Page Header Section */}
//       <header
//         className="page-title about_box"
//         style={{
//           backgroundImage:
//             "url('https://amfics.io/images/background/about_us.jpg')",
//         }}>
//         <div className="auto-container about_title">
//           <h1>CISO as a Service</h1>
//           <span className="title_divider"></span>

//           {/* Breadcrumb (optional) */}
//           {/* <nav aria-label="breadcrumb">
//             <ol className="page-breadcrumb">
//               <li>
//                 <a href="https://amfics.io">Home</a>
//               </li>
//               <li aria-current="page">CISO as a Service</li>
//             </ol>
//           </nav> */}
//         </div>
//       </header>
//       {/* Main Content Section */}
//       <main>
//         <section className="case-study-section zero_ser soc_item ciso_box">
//           <div className="auto-container">
//             <header className="sec-title text-center">
//               <h2>CISO as a Service</h2>
//             </header>

//             <article className="soc_text cloud">
//               <p>
//                 <strong>
//                   CISO (Chief Information Security Officer) as a Service
//                 </strong>{" "}
//                 is a model of outsourcing a company's security leadership
//                 function to a third-party provider. This service allows
//                 organizations to leverage the expertise of experienced CISOs
//                 without having to hire a full-time executive.
//               </p>

//               <p>
//                 CISOs as a Service typically provide a range of services such as
//                 risk assessments, security program development, policy
//                 development, incident response planning, and security awareness
//                 training. This model can be particularly beneficial for small
//                 and medium-sized businesses that do not have the resources to
//                 hire a full-time CISO or need to supplement their existing
//                 security team with additional expertise.
//               </p>
//             </article>

//             <figure className="ciso_banner">
//               <Image
//                 src="https://amfics.io/images/background/ciso_banner.jpg"
//                 alt="CISO as a Service illustration"
//                 width={1200}
//                 height={600}
//               />
//             </figure>
//           </div>
//         </section>
//       </main>
//       <ServiceContactSection />;
//     </>
//   );
// };

// export default CisoAsAService;

import Image from "next/image";
import parse from "html-react-parser";
import ServiceContactSection from "@/component/ServiceContact";
import { fetchPageData } from "@/app/action/fetchPageData";

export interface Section {
  id: number;

  title: string;

  shortDescription: string;

  image?: string;

  // subsections: Subsection[];

  [key: string]: unknown;
}
export default async function CisoAsAService() {
  // 🔹 UUID from your API
  const uid = "72c1e332-fc82-457d-84bb-9e6458c5ae2d";

  const data = await fetchPageData(uid);

  if (!data?.status) {
    return (
      <section className="py-20 text-center">
        <h2>CISO as a Service data not found.</h2>
      </section>
    );
  }

  const page = data.pagedata;
  const item = data.pageItemdataWithSubsection?.[0] as Section | undefined;
  return (
    <>
      <header
        className="page-title about_box"
        style={{
          backgroundImage: `url(${page.cover_image_url})`,
        }}>
        <div className="auto-container about_title">
          <h1>{page.title}</h1>
          <span className="title_divider"></span>
        </div>
      </header>

      <main>
        <section className="case-study-section zero_ser soc_item ciso_box">
          <div className="auto-container">
            <div className="sec-title text-center">
              <h3>{item?.title || "CISO as a Service"}</h3>

              <div className="text soc_text cloud">
                {item?.shortDescription ? (
                  parse(item.shortDescription)
                ) : (
                  <p>No description available.</p>
                )}
              </div>

              {item?.image && (
                <div className="ciso_banner">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={600}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ✅ Contact Section */}
      <ServiceContactSection />
    </>
  );
}
