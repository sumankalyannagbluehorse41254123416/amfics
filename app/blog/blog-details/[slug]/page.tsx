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

// import { fetchBlogData } from "@/app/action/blog";
// import Newsletter from "@/component/BlogNewsletter";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// interface EditReview {
//   id: number;
//   website_id: number;
//   page_id: number;
//   author_name: string;
//   rating: string;
//   comment: string;
//   date: string;
//   created_by: string | null;
//   updated_by: string | null;
//   created_at: string;
//   updated_at: string;
// }

// interface Subsection {
//   id: number;
//   title: string;
//   shortDescription: string;
//   longDescription: string;
//   image: string | null;
// }

// interface ApiBlogPost {
//   id: number;
//   title: string;
//   slug: string;
//   uuid: string;
//   description: string;
//   cover_image_url: string;
//   created_at: string;
//   author_id: string | null;
//   editReviedata?: EditReview[];
//   pageItemdataWithSubsection?: Subsection[];
// }
// const BlogDetails: React.FC <{params: Promise<{ slug: string }>}>= ({
//   params
// }) => {
//     const [blogData, setBlogData] = useState<ApiBlogPost | null>(null);
//     const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const { slug: blogSlug } = use(params);
//     useEffect(() => {
//       window.scrollTo(0, 0);
//       const fetchData = async () => {
//         try {
//           setLoading(true);
//           const response = await fetchBlogData(blogSlug);
//           if (response?.status && response?.pagedata) {
//           setBlogData({
//             ...response.pagedata,
//             editReviedata: response.editReviedata || [],
//             pageItemdataWithSubsection:
//               response.pageItemdataWithSubsection || [],
//           });
//         } else {
//           setError("Failed to load blog data");
//         }
//         } catch (err) {
//           console.error(err);
//           setError("An error occurred while fetching the blog data");
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchData();
//     })
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

"use client";

import { fetchPageData } from "@/app/action/page";
import Newsletter from "@/component/BlogNewsletter";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { use } from "react";

interface Subsection {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string | null;
  subsections?: {
    id: number;
    title: string;
    description: string;
    image: string | null;
  }[];
}

interface ApiBlogPost {
  id: number;
  title: string;
  slug: string;
  uuid: string;
  description: string;
  cover_image_url: string;
  created_at: string;
  author_id: string | null;

  pageItemdataWithSubsection?: Subsection[];
}

interface BlogDetailsProps {
  params: Promise<{ slug: string }>;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ params }) => {
  const { slug: blogSlug } = use(params);

  const [blogData, setBlogData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchPageData(blogSlug);

        if (response?.status && response?.pagedata) {
          setBlogData({
            ...response.pagedata,
            pageItemdataWithSubsection:
              response.pageItemdataWithSubsection || [],
          });
        } else {
          setError("Failed to load blog data");
        }
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching the blog data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [blogSlug]);

  if (loading)
    return (
      <section className="page-title about-section">
        <div className="container about-title text-center">
          <h2>Loading Blog...</h2>
        </div>
      </section>
    );

  if (error)
    return (
      <section className="page-title about-section">
        <div className="container about-title text-center">
          <h2>{error}</h2>
        </div>
      </section>
    );

  if (!blogData) return null;

  const sections = blogData.pageItemdataWithSubsection || [];

  return (
    <>
      {/* Page Title Section */}
      <section
        className="page-title about-section"
        style={{
          backgroundImage: `url(${blogData.cover_image_url})`,
        }}>
        <div className="container about-title">
          <h1 dangerouslySetInnerHTML={{ __html: blogData.title }} />
          <span className="title-divider"></span>
        </div>
      </section>

      {/* Sidebar Page Container */}
      <div className="sidebar-page right-sidebar">
        <div className="container">
          <div className="row clearfix">
            {/* Main Blog Content */}
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-post">
                {sections.map((section: any) => (
                  <div key={section.id} className="news-block">
                    <div className="inner-box">
                      {/* Section Title */}
                      <div className="sec-title text-center">
                        <h3
                          dangerouslySetInnerHTML={{ __html: section.title }}
                        />
                      </div>
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: section.shortDescription || "",
                        }}
                      />
                      {section.image && (
                        <div className="image-box text-center my-3">
                          <Image
                            src={section.image}
                            alt={section.title}
                            width={600}
                            height={400}
                            className="img-fluid rounded"
                          />
                        </div>
                      )}
                      {section.subsections &&
                        section.subsections.map((sub: any) => (
                          <div key={sub.id} className="mt-4">
                            <h4
                              className="mb-2"
                              dangerouslySetInnerHTML={{ __html: sub.title }}
                            />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: sub.description || "",
                              }}
                            />
                            {sub.image && (
                              <div className="mt-3 text-center">
                                <Image
                                  src={sub.image}
                                  alt={sub.title}
                                  width={600}
                                  height={400}
                                  className="img-fluid rounded"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}

                {/* Author Section */}
                {sections.length > 1 && (
                  <div className="author-box mt-5">
                    <div className="inner-box text-center">
                      <div className="image-box mb-3">
                        {sections[1].image && (
                          <Image
                            src={sections[1].image}
                            alt={sections[1].title}
                            width={120}
                            height={120}
                            className="rounded-circle"
                          />
                        )}
                      </div>
                      <h3 className="name">{sections[1].title}</h3>
                      <div
                        className="text"
                        dangerouslySetInnerHTML={{
                          __html: sections[1].shortDescription || "",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Side */}
            <div className="sidebar-side sticky-container col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar">
                <div className="sticky-sidebar">
                  <Newsletter />

                  {/* Recent Posts */}
                  <div className="sidebar-widget recent-posts">
                    <div className="sidebar-title">
                      <h3>Recent Posts</h3>
                    </div>
                    <div className="widget-content">
                      {[
                        {
                          title: "Cybersecurity & Risk Mitigation",
                          date: "May 5, 2023",
                          link: "/blog/blog-details/1485",
                          img: "https://ik.imagekit.io/cj8p4og90/amfics/pages/1683123744779_Doy3351Me.jpg",
                        },
                        {
                          title: "Data Analytics in Cybersecurity",
                          date: "Apr 15, 2023",
                          link: "/blog/blog-details/1487",
                          img: "https://ik.imagekit.io/cj8p4og90/amfics/pages/1683124250871.jpg",
                        },
                        {
                          title: "Cyber Security Tabletop Exercise",
                          date: "Mar 12, 2023",
                          link: "/blog/blog-details/1486",
                          img: "https://ik.imagekit.io/cj8p4og90/amfics/pages/1683124007703.jpg",
                        },
                        {
                          title: "AI And Cybersecurity",
                          date: "Feb 21, 2023",
                          link: "/blog/blog-details/1488",
                          img: "https://ik.imagekit.io/cj8p4og90/amfics/pages/1683124372340.jpg",
                        },
                      ].map((post, index) => (
                        <article key={index} className="post">
                          <figure className="thumb">
                            <Image
                              src={post.img}
                              alt={post.title}
                              width={90}
                              height={90}
                            />
                          </figure>
                          <h5>{post.title}</h5>
                          <div className="post-info">{post.date}</div>
                          <Link
                            href={post.link}
                            className="overlay-link"></Link>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
