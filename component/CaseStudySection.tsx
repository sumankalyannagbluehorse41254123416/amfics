// // const CaseStudySection: React.FC = () => {
// //   return (
// //     <section className="case-study-section">
// //       <div className="auto-container">
// //         <div className="sec-title text-center sec-title2">
// //           {/* <span class="icon flaticon-satchel"></span> */}
// //           <h3>It’s not about IF, It’s about WHEN</h3>
// //           {/* <h6>“ It’s not about IF, It’s about WHEN. ”
// //       </h6> */}
// //           <div className="text">
// //             It means that it's not a matter of if a company or organization will
// //             be targeted by a cyberattack, but rather when. Cyberattacks have
// //             become more sophisticated and frequent over the years, and no one is
// //             immune to them.
// //           </div>
// //           {/* <img src="images/zeroiz_ba.png" alt=""> */}
// //           <div className="banner_text">
// //             <p>
// //               {" "}
// //               According to Verizon Data Breach Investigations Report (DBIR),
// //               though there are many trends that has be considered for the study.
// //               It’s important to note the following.
// //             </p>
// //             <ul>
// //               <li>
// //                 There are four key paths leading to your estate: Credentials,
// //                 Phishing, Exploiting vulnerabilities and Botnets. These four
// //                 pervade all areas of the DBIR, and no organization is safe
// //                 without a plan to handle them all. The priority being to protect
// //                 the Credential information.
// //               </li>
// //               <li>
// //                 This year, Ransomware has continued its upward trend with an
// //                 almost 13% increase–a rise as big as the last five years
// //                 combined (for a total of 25% this year). It’s important to
// //                 remember, Ransomware by itself is just a model of monetizing an
// //                 organization’s access. Blocking the four key paths mentioned
// //                 above helps to block the most common routes Ransomware uses to
// //                 invade your network.
// //               </li>
// //               <li>
// //                 Error continues to be a dominant trend and is responsible for
// //                 13% of breaches. This finding is heavily influenced by
// //                 misconfigured cloud storage. While this is the second year in a
// //                 row that we have seen a slight levelling out for this pattern,
// //                 the fallibility of employees should not be discounted.
// //               </li>
// //             </ul>
// //             <p>
// //               Based on the IBM's Cost of a Data Breach report, the global
// //               average total cost of a data breach increased by USD 0.11 million
// //               to USD 4.35 million in 2022, the highest it’s been in the history
// //               of this report. The increase from USD 4.24 million in the 2021
// //               report to USD 4.35 million in the 2022 report represents a 2.6%
// //               increase. In the last two years, the average total cost has
// //               increased 12.7% from USD 3.86 million in the 2020 report.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default CaseStudySection;

// // "use client";

// // import React from "react";
// // import parse from "html-react-parser";

// // interface Subsection {
// //   id: number;
// //   title: string;
// //   description: string;
// // }

// // interface PageItem {
// //   id: number;
// //   title: string;
// //   shortDescription: string;
// //   subsections: Subsection[];
// // }

// // interface Props {
// //   data: PageItem | null;
// // }

// // const CaseStudySectionClient: React.FC<Props> = ({ data }) => {
// //   if (!data)
// //     return (
// //       <section className="case-study-section text-center">
// //         <p>No data available</p>
// //       </section>
// //     );

// //   return (
// //     <section className="case-study-section">
// //       <div className="auto-container">
// //         <div className="sec-title text-center sec-title2">
// //           <h3>{data.title}</h3>
// //           {/* <div className="text">{parse(data.shortDescription || "")}</div> */}
// //           {/* <div className="text">{data.shortDescription}</div> */}
// //           <div
// //             className="text"
// //             dangerouslySetInnerHTML={{
// //               __html: data.shortDescription || "",
// //             }}
// //           />
// //           <div className="banner_text">
// //             {data.subsections?.map((sub) => (
// //               <div key={sub.id}>
// //                 {/* Optionally render sub.title if needed, e.g., as <h4> */}
// //                 {/* For now, only description is rendered as in your static HTML */}
// //                 {parse(sub.description || "")}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default CaseStudySectionClient;

// "use client";

// import React from "react";
// import parse from "html-react-parser";

// interface Subsection {
//   id: number;
//   title: string;
//   description: string;
//   image?: string;
// }

// interface PageItem {
//   id: number;
//   title: string;
//   shortDescription: string;
//   subsections: Subsection[];
// }

// interface Props {
//   data: PageItem | null;
// }

// const CaseStudySectionClient: React.FC<Props> = ({ data }) => {
//   if (!data)
//     return (
//       <section className="case-study-section text-center">
//         <p>No data available</p>
//       </section>
//     );

//   return (
//     <section className="case-study-section">
//       <div className="auto-container">
//         <div className="sec-title text-center sec-title2">
//           <h3>{data.title}</h3>

//           <div
//             className="text"
//             dangerouslySetInnerHTML={{
//               __html: data.shortDescription || "",
//             }}
//           />

//           <div className="banner_text">
//             {data.subsections
//               ?.filter((sub) => !sub.image)
//               .map((sub) => (
//                 <div key={sub.id}>{parse(sub.description || "")}</div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudySectionClient;
"use client";

import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { fetchPageData } from "@/lib/page";

interface Subsection {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface PageItem {
  id: number;
  title: string;
  shortDescription: string;
  subsections: Subsection[];
}

const CaseStudySection: React.FC = () => {
  const [data, setData] = useState<PageItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const uid = "194f52e6-ffd8-4371-bea5-3c6fd72dbad5";

    const loadData = async () => {
      try {
        const res = await fetchPageData({ uid });

        if (
          Array.isArray(res?.pageItemdataWithSubsection) &&
          res.pageItemdataWithSubsection.length > 0
        ) {
          setData(res.pageItemdataWithSubsection[0] as PageItem);
        }
      } catch (error) {
        console.error("Error loading Case Study data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <section className="case-study-section text-center">
        <p>Loading...</p>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="case-study-section text-center">
        <p>No data available</p>
      </section>
    );
  }

  return (
    <section className="case-study-section Home_page">
      <div className="auto-container">
        <div className="sec-title text-center sec-title2">
          <h3>{data.title}</h3>

          <div
            className="text"
            dangerouslySetInnerHTML={{
              __html: data.shortDescription || "",
            }}
          />

          <div className="banner_text">
            {data.subsections
              ?.filter((sub) => !sub.image)
              .map((sub) => (
                <div key={sub.id}>{parse(sub.description || "")}</div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
