// "use client";

// import Newsletter from "@/component/BlogNewsletter";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const BlogDetails: React.FC = () => {
//   return (
//     <>
//       {/* Page Title Section */}
//       <section
//         className="page-title about-section"
//         style={{
//           backgroundImage:
//             "url(https://amfics.io/images/background/about_us.jpg)",
//         }}>
//         <div className="container about-title">
//           <h1>Blog Details</h1>
//           <span className="title-divider"></span>
//         </div>
//       </section>

//       {/* Sidebar Page Container */}
//       <div className="sidebar-page right-sidebar">
//         <div className="container">
//           <div className="row clearfix">
//             {/* Content Side */}
//             <div className="content-side col-lg-8 col-md-12 col-sm-12">
//               <div className="blog-post">
//                 {/* News Block */}
//                 <div className="news-block">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <blockquote className="post-quote">
//                         <span className="icon flaticon-cite"></span>
//                         “Strategies and Best Practices for Cybersecurity and
//                         Risk Mitigation”
//                         <cite>Sourav Maity</cite>
//                       </blockquote>
//                       <a href="#" className="date">
//                         <i className="far fa-calendar"></i> Feb 15, 2023
//                       </a>
//                     </div>

//                     <div className="lower-content">
//                       <p>
//                         Cybersecurity is a crucial aspect of protecting
//                         electronic data and systems from unauthorized access,
//                         theft, damage, or disruption. It involves a range of
//                         strategies, technologies, and practices designed to
//                         secure information and prevent cyberattacks. Risk
//                         mitigation, on the other hand, refers to the process of
//                         identifying, assessing, and reducing risks to an
//                         acceptable level. In the context of cybersecurity, risk
//                         mitigation involves implementing measures to minimize
//                         the likelihood and impact of cyber threats and attacks.
//                       </p>

//                       <p>
//                         Some common strategies and best practices for
//                         cybersecurity and risk mitigation include using strong
//                         passwords and multifactor authentication, keeping
//                         software and systems up-to-date, using firewalls and
//                         other security tools to monitor and protect networks and
//                         systems, training employees and users on safe computing
//                         practices, developing an incident response plan,
//                         regularly backing up data, and conducting security
//                         assessments and audits.
//                       </p>

//                       <p>
//                         By implementing these and other best practices,
//                         organizations can significantly reduce their risk of
//                         cyberattacks and mitigate the impact of any attacks that
//                         do occur. Cybersecurity and risk mitigation should be a
//                         top priority for any organization that handles sensitive
//                         or confidential data, as cyber threats continue to
//                         evolve and become more sophisticated.
//                       </p>

//                       <div className="two-column row">
//                         <figure className="column col-lg-6 col-md-6 col-sm-12">
//                           <Link
//                             href="https://wip.tezcommerce.com:3304/admin/module/68/1683123744779.jpg"
//                             className="lightbox-image">
//                             <Image
//                               src="https://wip.tezcommerce.com:3304/admin/module/68/1683123744779.jpg"
//                               alt="Cybersecurity Strategy"
//                               width={600}
//                               height={400}
//                             />
//                           </Link>
//                         </figure>

//                         <figure className="column col-lg-6 col-md-6 col-sm-12">
//                           <Link
//                             href="https://wip.tezcommerce.com:3304/admin/module/68/1683123744869.jpg"
//                             className="lightbox-image">
//                             <Image
//                               src="https://wip.tezcommerce.com:3304/admin/module/68/1683123744869.jpg"
//                               alt="Risk Mitigation Strategy"
//                               width={600}
//                               height={400}
//                             />
//                           </Link>
//                         </figure>
//                       </div>

//                       <p>
//                         Suspendisse potenti. Quisque risus sem, volutpat a
//                         sapien et, mattis condimentum est. Suspendisse feugiat
//                         cursus turpis, et porta lectus euismod accumsan. Nam
//                         felis ipsum, eleifend sit amet sodales pellentesque,
//                         commodo sit amet elit. Etiam convallis urna id justo
//                         faucibus tempor. Nunc volutpat sem nunc, at faucibus
//                         magna rutrum eget. Nullam bibendum convallis est, quis
//                         facilisis nibh ullamcorper in. Nunc elementum nisl
//                         mauris, sed molestie turpis convallis vel. Nam ut mi id
//                         justo efficitur finibus.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Author Box */}
//                 <div className="author-box">
//                   <div className="inner-box">
//                     <div className="image-box">
//                       <Image
//                         src="https://wip.tezcommerce.com:3304/admin/module/68/1683123811399.jpg"
//                         alt="Author - Sourav Maity"
//                         width={120}
//                         height={120}
//                       />
//                     </div>
//                     <h3 className="name">Sourav Maity</h3>
//                     <div className="text">
//                       Risk mitigation refers to the process of identifying,
//                       assessing, and reducing risks to an acceptable level. In
//                       the context of cybersecurity, risk mitigation involves
//                       implementing measures to minimize the likelihood and
//                       impact of cyber threats and attacks.
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sidebar Side */}
//             <div className="sidebar-side sticky-container col-lg-4 col-md-12 col-sm-12">
//               <aside className="sidebar">
//                 <div className="sticky-sidebar">
//                   {/* Newsletter */}
//                   {/* <div className="sidebar-widget newsletter">
//                     <div className="sidebar-title">
//                       <h3>
//                         <span className="icon flaticon-rss-symbol"></span>{" "}
//                         Newsletter
//                       </h3>
//                     </div>
//                     <p>
//                       Enter your email address below to subscribe to my
//                       newsletter
//                     </p>
//                     <form id="blogSidebar">
//                       <div className="form-group">
//                         <input
//                           type="email"
//                           name="email"
//                           id="blogEmail"
//                           placeholder="Your email address..."
//                           required
//                         />
//                         <button type="button" className="theme-btn">
//                           <span className="btn-title">Subscribe</span>
//                         </button>
//                         <div
//                           id="msgblog"
//                           className="msgblog text-info text-center hidden contact-gap"></div>
//                       </div>
//                     </form>
//                   </div> */}
//                   <Newsletter />

//                   <div className="sidebar-widget recent-posts">
//                     <div className="sidebar-title">
//                       <h3>Recent Posts</h3>
//                     </div>
//                     <div className="widget-content">
//                       {[
//                         {
//                           title: "Cybersecurity & Risk Mitigation",
//                           date: "May 5, 2023",
//                           link: "https://amfics.io/blog/blog-details/1485",
//                           img: "https://wip.tezcommerce.com:3304/admin/module/68/1683124022881.jpg",
//                         },
//                         {
//                           title: "Data Analytics in Cybersecurity",
//                           date: "Apr 15, 2023",
//                           link: "https://amfics.io/blog/blog-details/1487",
//                           img: "https://wip.tezcommerce.com:3304/admin/module/68/1683124250871.jpg",
//                         },
//                         {
//                           title: "Cyber Security Tabletop Exercise",
//                           date: "Mar 12, 2023",
//                           link: "https://amfics.io/blog/blog-details/1486",
//                           img: "https://wip.tezcommerce.com:3304/admin/module/68/1683124007703.jpg",
//                         },
//                         {
//                           title: "AI And Cybersecurity",
//                           date: "Feb 21, 2023",
//                           link: "https://amfics.io/blog/blog-details/1488",
//                           img: "https://wip.tezcommerce.com:3304/admin/module/68/1683124372340.jpg",
//                         },
//                       ].map((post, index) => (
//                         <article key={index} className="post">
//                           <figure className="thumb">
//                             <Image
//                               src={post.img}
//                               alt={post.title}
//                               width={90}
//                               height={90}
//                             />
//                           </figure>
//                           <h5>{post.title}</h5>
//                           <div className="post-info">{post.date}</div>
//                           <Link
//                             href={post.link}
//                             className="overlay-link"></Link>
//                         </article>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </aside>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetails;

// "use client";

// import React, { use, useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import parse from "html-react-parser";
// import Newsletter from "@/component/BlogNewsletter";
// import { fetchPageData } from "@/app/action/page";

// interface Subsection {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// interface PageItem {
//   id: number;
//   title: string;
//   shortDescription: string;
//   image?: string;
//   subsections: Subsection[];
// }

// interface PageData {
//   id: number;
//   title: string;
//   slug: string;
//   cover_image_url: string;
// }

// const BlogDetails = ({ params }: any) => {
//   const [page, setPage] = useState<PageData | null>(null);
//   const [sections, setSections] = useState<PageItem[]>([]);
//   const { slug } = use<any>(params);
//   console.log("sections", slug);
//   useEffect(() => {
//     console.log("sluggggggggggggggggggggggggggggggg", slug);
//     const loadBlog = async () => {
//       try {
//         const data = await fetchPageData(slug);
//         if (data?.status) {
//           setPage(data.pagedata);
//           setSections(data.pageItemdataWithSubsection);
//         }
//       } catch (err) {
//         console.error("Error fetching blog details:", err);
//       }
//     };
//     loadBlog();
//   }, [slug]);

//   if (!page) {
//     return (
//       <section className="page-title">
//         <div className="container text-center">
//           <h1>Loading...</h1>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <>
//       <section
//         className="page-title about-section"
//         style={{
//           backgroundImage: `url(${page?.cover_image_url})`,
//         }}>
//         <div className="container about-title">
//           <h1>{page.title}</h1>
//           <span className="title-divider"></span>
//         </div>
//       </section>

//       <div className="sidebar-page right-sidebar">
//         <div className="container">
//           <div className="row clearfix">
//             {/* Left side - Blog Content */}
//             <div className="content-side col-lg-8 col-md-12 col-sm-12">
//               <div className="blog-post">
//                 {sections.map((item, idx) => (
//                   <div key={item.id} className="news-block mb-5">
//                     <div className="inner-box">
//                       <div className="image-box">
//                         {idx === 0 && (
//                           <blockquote className="post-quote">
//                             <span className="icon flaticon-cite"></span>
//                             {parse(item.title)}
//                             <cite>Sourav Maity</cite>
//                           </blockquote>
//                         )}
//                       </div>

//                       <div className="lower-content">
//                         {parse(item.shortDescription || "")}

//                         {/* Images & subsections */}
//                         {item.subsections?.length > 0 && (
//                           <div className="two-column row mt-4">
//                             {item?.image && (
//                               <figure className="column col-lg-6 col-md-6 col-sm-12">
//                                 <Image
//                                   src={item?.image}
//                                   alt={item.title}
//                                   width={600}
//                                   height={400}
//                                 />
//                               </figure>
//                             )}
//                             {item.subsections[0]?.image && (
//                               <figure className="column col-lg-6 col-md-6 col-sm-12">
//                                 <Image
//                                   src={item.subsections[0]?.image}
//                                   alt={item.subsections[0].title}
//                                   width={600}
//                                   height={400}
//                                 />
//                               </figure>
//                             )}
//                           </div>
//                         )}

//                         {item.subsections?.map((sub) => (
//                           <div key={sub.id} className="mt-3">
//                             {parse(sub.description || "")}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 {sections.length > 1 && (
//                   <div className="author-box">
//                     <div className="inner-box">
//                       <div className="image-box">
//                         <Image
//                           src={sections[1]?.image || ""}
//                           alt={sections[1]?.title || "Author"}
//                           width={120}
//                           height={120}
//                         />
//                       </div>
//                       <h3 className="name">{sections[1]?.title}</h3>
//                       <div className="text">
//                         {parse(sections[1]?.shortDescription || "")}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Sidebar */}
//             <div className="sidebar-side sticky-container col-lg-4 col-md-12 col-sm-12">
//               <aside className="sidebar">
//                 <div className="sticky-sidebar">
//                   {/* <Newsletter /> */}

//                   <div className="sidebar-widget recent-posts">
//                     <div className="sidebar-title">
//                       <h3>Recent Posts</h3>
//                     </div>
//                     <div className="widget-content">
//                       {[
//                         {
//                           title: "Cybersecurity & Risk Mitigation",
//                           date: "May 5, 2023",
//                           link: "/blog/blog-details/1485",
//                           img: "https://wip.tezcommerce.com:3304/admin/module/68/1683124022881.jpg",
//                         },
//                         {
//                           title: "Data Analytics in Cybersecurity",
//                           date: "Apr 15, 2023",
//                           link: "/blog/blog-details/1487",
//                           img: "https://wip.tezcommerce.com:3304/admin/module/68/1683124250871.jpg",
//                         },
//                       ].map((post, index) => (
//                         <article key={index} className="post">
//                           <figure className="thumb">
//                             <Image
//                               src={post.img}
//                               alt={post.title}
//                               width={90}
//                               height={90}
//                             />
//                           </figure>
//                           <h5>{post.title}</h5>
//                           <div className="post-info">{post.date}</div>
//                           <Link
//                             href={post.link}
//                             className="overlay-link"></Link>
//                         </article>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </aside>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetails;
