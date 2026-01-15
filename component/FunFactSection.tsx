// interface Fact {
//   icon: string;
//   count: string;
//   text: string;
//   color: string;
// }

// const FunFactSection: React.FC = () => {
//   const facts: Fact[] = [
//     {
//       icon: "fa fa-bullseye",
//       count: "20%",
//       text: "Credential Compromise",
//       color: "bg-blue-200",
//     },
//     {
//       icon: "fa fa-shield",
//       count: "10%",
//       text: "Ransomware upward trend",
//       color: "bg-pink-200",
//     },
//     {
//       icon: "fa fa-cog",
//       count: "$4.35M",
//       text: "Average total cost of a data breach",
//       color: "bg-blue-300",
//     },
//     {
//       icon: "fa fa-database",
//       count: "15%",
//       text: "More than one Data Breach",
//       color: "bg-orange-200",
//     },
//   ];

//   return (
//     <section className="fun-fact-section">
//       <div className="auto-container">
//         <div className="fact-counter">
//           <div className="row clearfix">
//             {/*Column*/}
//             <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
//               <div className="inner-column">
//                 <span className="icon  bg_sky">
//                   <img src="/images/target.png" alt="" />
//                 </span>
//                 <div className="count-box counted"><span className="count-text" data-speed={3000} data-stop={53}>53</span>%</div>
//                 <div className="text">Credential Compromise </div>
//               </div>
//             </div>
//             {/*Column*/}
//             <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="400ms" style={{ visibility: 'visible', animationDelay: '400ms', animationName: 'fadeInUp' }}>
//               <div className="inner-column">
//                 <span className="icon bg_pink">
//                   <img src="/images/pen-tool.png" alt="" />
//                 </span>
//                 <div className="count-box counted"><span className="count-text" data-speed={3000} data-stop={13}>13</span>%</div>
//                 <div className="text">Ransomware upward trend </div>
//               </div>
//             </div>
//             {/*Column*/}
//             <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="800ms" style={{ visibility: 'visible', animationDelay: '800ms', animationName: 'fadeInUp' }}>
//               <div className="inner-column">
//                 <span className="icon bg_blue">
//                 <img src="/images/customer-support.png" alt="" />
//                 </span>
//                 <div className="count-box counted"><span className="count-text">$ 4.35 </span> M</div>
//                 <div className="text">Average total cost of a data breach</div>
//               </div>
//             </div>
//             {/*Column*/}
//             <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="1200ms" style={{ visibility: 'visible', animationDelay: '1200ms', animationName: 'fadeInUp' }}>
//               <div className="inner-column">
//                 <span className="icon bg_orange">
//                   <img src="/images/space.png" alt="" />
//                   </span>
//                 <div className="count-box counted"><span className="count-text" data-speed={3000} data-stop={83}>83</span>%</div>
//                 <div className="text">More than one Data Breach </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*
//   <div class="row">
//     <div class="quot-column col-lg-6 col-md-12 col-sm-12">
//       <blockquote class="quote-style-one">
//         <span class="icon flaticon-lightbulb"></span>
//         <p>Businesses today cross borders and regions, so you need a service provider that goes where you.</p>
//         <a href="#" class="author">John Doe</a>
//       </blockquote>
//       <div class="divider"></div>
//     </div>
//     <div class="text-column col-lg-6 col-md-12 col-sm-12">
//       <div class="text">Assertively brand ethical meta-services after fully tested customer service. Completely orchestrate intuitive communities through superior markets. Efficiently leverage other’s out-of-the-box.</div>
//     </div>
//   </div> */}
//       </div>
//     </section>

//   );
// };

// export default FunFactSection;

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import parse from "html-react-parser";
// import { fetchPageData } from "@/app/action/page";

// interface Fact {
//   icon: string;
//   count: string;
//   text: string;
//   color: string;
// }

// const FunFactSection: React.FC = () => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const uid = "26cfc1fa-bf74-4ff2-b459-3935db569866";

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetchPageData(uid);
//         console.log("ResponceData&&&&&&&", response);
//         setData(response);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to load data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, [uid]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   // const page = data?.pagedata;
//   const section = data?.pageItemdataWithSubsection;
//   // const subsection = data?.pageItemdataWithSubsection?.subsections;
//   const subsection = section?.subsections;

//   console.log("subsection", subsection);
//   return (
//     <section className="fun-fact-section">
//       <div className="auto-container">
//         <div className="fact-counter">
//           <div className="row clearfix">
//             {/*Column*/}
//             <div
//               className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
//               style={{ visibility: "visible", animationName: "fadeInUp" }}>
//               <div className="inner-column">
//                 <span className="icon  bg_sky">
//                   <img src="/images/target.png" alt="" />
//                 </span>
//                 <div className="count-box counted">
//                   <span className="count-text" data-speed={3000} data-stop={53}>
//                     {section[0].title}
//                   </span>
//                   <span>{section[0]?.subsections.title || "No"}</span>
//                 </div>
//                 <div className="text">
//                   {parse(section[0].shortDescription || "")}{" "}
//                 </div>
//               </div>
//             </div>
//             {/*Column*/}
//             <div
//               className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
//               data-wow-delay="400ms"
//               style={{
//                 visibility: "visible",
//                 animationDelay: "400ms",
//                 animationName: "fadeInUp",
//               }}>
//               <div className="inner-column">
//                 <span className="icon bg_pink">
//                   <img src="/images/pen-tool.png" alt="" />
//                 </span>
//                 <div className="count-box counted">
//                   <span className="count-text" data-speed={3000} data-stop={13}>
//                     {section[1].title}
//                   </span>
//                   <span>%</span>
//                 </div>
//                 <div className="text">
//                   {parse(section[1].shortDescription || "")}{" "}
//                 </div>
//               </div>
//             </div>
//             {/*Column*/}
//             <div
//               className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
//               data-wow-delay="800ms"
//               style={{
//                 visibility: "visible",
//                 animationDelay: "800ms",
//                 animationName: "fadeInUp",
//               }}>
//               <div className="inner-column">
//                 <span className="icon bg_blue">
//                   <img src="/images/customer-support.png" alt="" />
//                 </span>
//                 <div className="count-box counted">
//                   <span className="count-text">{section[2].title}</span>
//                 </div>
//                 <div className="text">
//                   {parse(section[2].shortDescription) || ""}
//                 </div>
//               </div>
//             </div>
//             {/*Column*/}
//             <div
//               className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
//               data-wow-delay="1200ms"
//               style={{
//                 visibility: "visible",
//                 animationDelay: "1200ms",
//                 animationName: "fadeInUp",
//               }}>
//               <div className="inner-column">
//                 <span className="icon bg_orange">
//                   <img src="/images/space.png" alt="" />
//                 </span>
//                 <div className="count-box counted">
//                   <span className="count-text" data-speed={3000} data-stop={83}>
//                     {section[3].title}
//                   </span>
//                 </div>
//                 <div className="text">
//                   {parse(section[3].shortDescription) || ""}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FunFactSection;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { fetchPageData } from "@/app/action/fetchPageData";
import CountUp from "./CountUpProps";

interface SubSection {
  title: string;
  description: string;
}

interface Section {
  id: number;
  title: string;
  shortDescription: string;
  subsections: SubSection[];
}

const FunFactSection: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const uid = "26cfc1fa-bf74-4ff2-b459-3935db569866";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchPageData(uid);
        console.log("Response Data:", response);
        setSections(response?.pageItemdataWithSubsection || []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [uid]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!sections.length) return <p>No data available</p>;

  sections.forEach((item, index) => {
    console.log(`section[${index}].subsections:`, item.subsections);
  });

  return (
    <section className="fun-fact-section">
      <div className="auto-container">
        <div className="fact-counter">
          <div className="row clearfix">
            {sections.map((item, index) => (
              <div
                key={item.id}
                className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated"
                data-wow-delay={`${index * 400}ms`}
                style={{
                  visibility: "visible",
                  animationDelay: `${index * 400}ms`,
                  animationName: "fadeInUp",
                }}>
                <div className="inner-column">
                  <span
                    className={`icon ${
                      ["bg_sky", "bg_pink", "bg_blue", "bg_orange"][index] ||
                      "bg_sky"
                    }`}>
                    <img
                      src={
                        [
                          "/images/target.png",
                          "/images/pen-tool.png",
                          "/images/customer-support.png",
                          "/images/space.png",
                        ][index] || "/images/target.png"
                      }
                      alt=""
                    />
                  </span>
                  <div className="count-box counted">
                    {/* <span className="count-text">{item.title}</span> */}
                     <CountUp value={item.title} />
                    <span>{item.subsections?.[0]?.title || ""}</span>
                  </div>
                  <div className="text">
                    {parse(item.shortDescription || "")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactSection;
