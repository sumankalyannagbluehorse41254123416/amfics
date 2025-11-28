// !client component
// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import parse from "html-react-parser";
// import ServiceContactSection from "@/component/ServiceContact";
// import { fetchPageData } from "@/app/action/fetchPageData";

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
//   image?: string;
//   subsections: Subsection[];
// }

// interface PageResponse {
//   status: boolean;
//   pagedata: {
//     title: string;
//     cover_image_url: string;
//     description: string;
//   };
//   pageItemdataWithSubsection: PageItem[];
// }

// const PrivacyRegulations: React.FC = () => {
//   const [pageData, setPageData] = useState<PageResponse | null>(null);
//   const [loading, setLoading] = useState(true);

//   const uid = "7e0c25ec-9197-43f1-adce-1948280c7669";

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = (await fetchPageData(uid)) as PageResponse;
//         setPageData(res);
//       } catch (err) {
//         console.error("Error fetching privacy data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getData();
//   }, []);

//   if (loading) {
//     return <h1>Loading Privacy Regulations...</h1>;
//   }

//   if (!pageData) {
//     return (
//       <section className="page-title about_box">
//         <div className="auto-container about_title">
//           <h1>No data found</h1>
//         </div>
//       </section>
//     );
//   }

//   const { pagedata, pageItemdataWithSubsection } = pageData;

//   return (
//     <>
//       <section
//         className="page-title about_box"
//         style={{
//           backgroundImage: `url(${pagedata.cover_image_url || ""})`,
//         }}>
//         <div className="auto-container about_title">
//           <h1>{pagedata.title}</h1>
//           <span className="title_divider"></span>
//         </div>
//       </section>

//       <section className="case-study-section zero_ser privacy_box">
//         <div className="auto-container">
//           <div className="sec-title text-center privacy_box_text">
//             <h3>{pagedata.title}</h3>
//             <div className="text">{parse(pagedata.description || "")}</div>
//           </div>

//           <div className="row privacy_item">
//             {pageItemdataWithSubsection?.map((item) => (
//               <div
//                 key={item.id}
//                 className="case-block col-lg-4 col-md-6 col-sm-12 mb-4">
//                 <div className="inner-box about_inner">
//                   <div className="image-box">
//                     <figure className="image">
//                       <Link href="#">
//                         <Image
//                           src={item.image || "No images"}
//                           alt={item.title}
//                           width={500}
//                           height={300}
//                           className="rounded-lg object-cover"
//                         />
//                       </Link>
//                     </figure>

//                     {/* 🔹 Show First Subsection Icon if Exists */}
//                     {item.subsections?.[0]?.image && (
//                       <span className="icon_img">
//                         <Image
//                           src={item.subsections[0].image!}
//                           alt={item.subsections[0].title}
//                           width={60}
//                           height={60}
//                           className="rounded-full"
//                         />
//                       </span>
//                     )}
//                   </div>

//                   <div className="lower-content">
//                     <h4>
//                       <Link href="#">{item.title}</Link>
//                     </h4>
//                     <div className="text privacy_text privacy_text2">
//                       {parse(item.shortDescription || "")}
//                     </div>
//                     <div className="btn-box">
//                       <Link href="#" className="theme-btn icon-btn-one">
//                         <span>
//                           View Privacy{" "}
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <ServiceContactSection />
//     </>
//   );
// };

// export default PrivacyRegulations;
// ! server component

import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import ServiceContactSection from "@/component/ServiceContact";
import { fetchPageData } from "@/app/action/fetchPageData";

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
  image?: string;
  subsections: Subsection[];
}

interface PageResponse {
  status: boolean;
  pagedata: {
    title: string;
    cover_image_url: string;
    description: string;
  };
  pageItemdataWithSubsection: PageItem[];
}

export default async function PrivacyRegulations() {
  const uid = "7e0c25ec-9197-43f1-adce-1948280c7669";

  // 🔹 Server-side data fetching
  let pageData: PageResponse | null = null;

  try {
    pageData = (await fetchPageData(uid)) as PageResponse;
  } catch (error) {
    console.error("Server error fetching privacy data:", error);
  }

  if (!pageData) {
    return (
      <section className="page-title about_box">
        <div className="auto-container about_title">
          <h1>No data found</h1>
        </div>
      </section>
    );
  }

  const { pagedata, pageItemdataWithSubsection } = pageData;

  return (
    <>
      <section
        className="page-title about_box"
        style={{
          backgroundImage: `url(${pagedata.cover_image_url || ""})`,
        }}>
        <div className="auto-container about_title">
          <h1>{pagedata.title}</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      <section className="case-study-section zero_ser privacy_box">
        <div className="auto-container">
          <div className="sec-title text-center privacy_box_text">
            <h3>{pagedata.title}</h3>
            <div className="text">{parse(pagedata.description || "")}</div>
          </div>

          <div className="row privacy_item">
            {pageItemdataWithSubsection?.map((item) => (
              <div
                key={item.id}
                className="case-block col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="inner-box about_inner">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="#">
                        <Image
                          src={item.image || "/no-image.png"}
                          alt={item.title}
                          width={500}
                          height={300}
                          className="rounded-lg object-cover"
                        />
                      </Link>
                    </figure>

                    {/* First Subsection Icon */}
                    {item.subsections?.[0]?.image && (
                      <span className="icon_img">
                        <Image
                          src={item.subsections[0].image!}
                          alt={item.subsections[0].title}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </span>
                    )}
                  </div>

                  <div className="lower-content">
                    <h4>
                      <Link href="#">{item.title}</Link>
                    </h4>
                    <div className="text privacy_text privacy_text2">
                      {parse(item.shortDescription || "")}
                    </div>
                    <div className="btn-box">
                      <Link href="#" className="theme-btn icon-btn-one">
                        <span>
                          View Privacy{" "}
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Component */}
      <ServiceContactSection />
    </>
  );
}
