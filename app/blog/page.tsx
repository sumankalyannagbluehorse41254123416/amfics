// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const BlogPage: React.FC = () => {
//   const blogs = [
//     {
//       id: 1485,
//       title: "Cybersecurity & Risk Mitigation",
//       date: "May 5, 2023",
//       image:
//         "https://wip.tezcommerce.com:3304/admin/module/68/1683124022881.jpg",
//       authorImg:
//         "https://wip.tezcommerce.com:3304/admin/module/68/1683219320266.png",
//       author: "Animesh Samanta",
//       text: "Cybersecurity refers to the practice of protecting computer systems, networks, and sensitive information from unauthorized access, theft, and damage.",
//     },
//     {
//       id: 1487,
//       title: "Data Analytics in Cybersecurity",
//       date: "Apr 15, 2023",
//       image:
//         "https://wip.tezcommerce.com:3304/admin/module/68/1683124250871.jpg",
//       authorImg:
//         "https://wip.tezcommerce.com:3304/admin/module/68/1683219343222.png",
//       author: "Mr. A Rahaman",
//       text: "Data analytics plays a crucial role in cybersecurity, as it can help detect and prevent cyber attacks, identify potential vulnerabilities, and improve overall security posture.",
//     },
//     {
//       id: 1486,
//       title: "Cyber Security Tabletop Exercise",
//       date: "Mar 12, 2023",
//       image:
//         "https://wip.tezcommerce.com:3304/admin/module/68/1683124007703.jpg",
//       authorImg:
//         "https://wip.tezcommerce.com:3304/admin/module/68/1683220040914.png",
//       author: "Mr. S Adhikary",
//       text: "A tabletop exercise is a simulation of a hypothetical security incident that allows organizations to test their incident response plan and procedures in a controlled environment.",
//     },
//     {
//       id: 1488,
//       title: "AI And Cybersecurity",
//       date: "Feb 21, 2023",
//       image:
//         "https://wip.tezcommerce.com:3304/admin/module/68/1683124372340.jpg",
//       authorImg:
//         "https://wip.tezcommerce.com:3304/admin/module/68/1683219493202.png",
//       author: "Sudip Chakraborty",
//       text: "AI and cybersecurity are two fields that are becoming increasingly intertwined. AI has the potential to significantly improve cybersecurity by automating threat detection and response, identifying and analyzing patterns in large datasets, and predicting potential attacks.",
//     },
//   ];

//   return (
//     <>
//       {/* Page Title Section */}
//       <section className="page-title about_box" style={{ backgroundImage: "" }}>
//         <div className="auto-container about_title">
//           <h1>Blog</h1>
//           <span className="title_divider"></span>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section className="news-section blog-small-images">
//         <div className="auto-container">
//           <div className="row">
//             {blogs.map((blog) => (
//               <div key={blog.id} className="news-block style-two-even">
//                 <div className="inner-box">
//                   <div className="image-box">
//                     <figure className="image">
//                       <Link
//                         href={`/blog/blog-details/${blog.id}`}
//                         target="_blank">
//                         <Image
//                           src={blog.image}
//                           alt={blog.title}
//                           width={400}
//                           height={250}
//                         />
//                       </Link>
//                     </figure>
//                     <Link
//                       href={`/blog/blog-details/${blog.id}`}
//                       className="date"
//                       target="_blank">
//                       <i className="far fa-calendar"></i> {blog.date}
//                     </Link>
//                   </div>

//                   <div className="lower-content">
//                     <h4>
//                       <Link
//                         href={`/blog/blog-details/${blog.id}`}
//                         target="_blank">
//                         {blog.title}
//                       </Link>
//                     </h4>
//                     <div className="text">{blog.text}</div>
//                     <Link
//                       href={`/blog/blog-details/${blog.id}`}
//                       className="theme-btn icon-btn-two read-more-btn"
//                       target="_blank">
//                       <span>Read More</span>
//                     </Link>

//                     <div className="post-info">
//                       <div className="post-author">
//                         <Image
//                           src={blog.authorImg}
//                           alt={blog.author}
//                           width={40}
//                           height={40}
//                         />{" "}
//                         {blog.author}
//                       </div>

//                       <div className="post-option">
//                         <div className="coments_count">
//                           <Link href="#">
//                             <i className="fa fa-comment"></i>
//                           </Link>
//                         </div>
//                         <ul className="social-share">
//                           <li>
//                             <Link
//                               href={`https://www.facebook.com/sharer.php?u=https://amfics.io/blog/blog-details/${blog.id}`}
//                               target="_blank">
//                               <i className="fab fa-facebook-f"></i>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href={`https://www.linkedin.com/shareArticle?url=https://amfics.io/blog/blog-details/${blog.id}`}
//                               target="_blank">
//                               <i className="fab fa-linkedin-in"></i>
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href={`https://twitter.com/share?url=https://amfics.io/blog/blog-details/${blog.id}`}
//                               target="_blank">
//                               <i className="fab fa-twitter"></i>
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BlogPage;
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { fetchBlogData } from "@/app/action/blog";
import { fetchPageData } from "../action/page";

interface BlogPost {
  title: string;
  slug: string;
  uuid: string;
  excerpt: string;
  featured_image_url: string;
  author_image_url: string;
  cta: string;
  status: string;
  author_name: string;
  tag: string;
}

interface PageData {
  title: string;
  description: string;
  cover_image_url: string;
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    const loadPageData = async () => {
      try {
        const uid = "a731283e-c8e3-4ea0-aeb4-95a101eb6d29";
        const data = await fetchPageData(uid);
        if (data && data.status) {
          setPage(data.pagedata);
        } else {
          setPage(null);
        }
        // console.log("Page Data&&&&&&&&&&&&&&&&&&&&&&: ", data);
      } catch (err) {
        console.error("Error loading page data:", err);
        setPage(null);
      } finally {
        setPageLoading(false);
      }
    };

    loadPageData();
  }, []);
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await fetchBlogData();
        const activeBlogs = res.userPostdata.filter(
          (b: BlogPost) => b.status === "active"
        );
        setBlogs(activeBlogs);
        // console.log("res&&&&&&&&&&&&&&&&&&&&&&&&&: ", res);
      } catch (err) {
        console.error("Error loading blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (pageLoading) {
    return (
      <div className="auto-container text-center py-10">
        <p>Loading page...</p>
      </div>
    );
  }
  if (!page) {
    return (
      <div className="auto-container text-center py-10">
        <p>Blog Page not found.</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="auto-container text-center py-10">
        <p>Loading blogs...</p>
      </div>
    );
  }
  return (
    <>
      <section
        className="page-title about_box"
        style={{
          backgroundImage: `url(${page.cover_image_url || ""})`,
        }}>
        <div className="auto-container about_title">
          <h1>{page.title}</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      {/* Blog Section */}
      <section className="news-section blog-small-images">
        <div className="auto-container">
          <div className="row">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div key={index} className="news-block style-two-even">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link
                          href={`/blog/blog-details/${blog.slug}`}
                          target="_blank">
                          <Image
                            src={blog.featured_image_url}
                            alt={blog.title}
                            width={400}
                            height={250}
                          />
                        </Link>
                      </figure>
                      <Link
                        href={`/blog/blog-details/${blog.slug}`}
                        className="date"
                        target="_blank">
                        <i className="far fa-calendar"></i> {blog.tag}
                      </Link>
                    </div>

                    <div className="lower-content">
                      <h4>
                        <Link
                          href={`/blog/blog-details/${blog.slug}`}
                          target="_blank">
                          {blog.title}
                        </Link>
                      </h4>
                      <div className="text">{parse(blog.excerpt || "")}</div>
                      {/* <Link
                        href={`/${blog.cta}`}
                        className="theme-btn icon-btn-two read-more-btn"
                        target="_blank">
                        <span>Read More</span>
                      </Link> */}
                      <div className="btn-box">
                        <Link
                          href={`/blog/blog-details/${blog.slug}`}
                          className="theme-btn icon-btn-two read-more-btn">
                          <span>Read More</span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>

                      <div className="post-info">
                        <div className="post-author">
                          <Image
                            src={blog.author_image_url}
                            alt={blog.author_name}
                            width={40}
                            height={40}
                          />{" "}
                          {blog.author_name}
                        </div>

                        <div className="post-option">
                          <ul className="social-share">
                            <li>
                              <Link
                                href={`https://www.facebook.com/sharer.php?u=https://amfics.io/${blog.slug}`}
                                target="_blank">
                                <i className="fab fa-facebook-f"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`https://www.linkedin.com/shareArticle?url=https://amfics.io/${blog.slug}`}
                                target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`https://twitter.com/share?url=https://amfics.io/${blog.slug}`}
                                target="_blank">
                                <i className="fab fa-twitter"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center w-full py-10">No blogs available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
