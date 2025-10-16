"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage: React.FC = () => {
  const blogs = [
    {
      id: 1485,
      title: "Cybersecurity & Risk Mitigation",
      date: "May 5, 2023",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/68/1683124022881.jpg",
      authorImg:
        "https://wip.tezcommerce.com:3304/admin/module/68/1683219320266.png",
      author: "Animesh Samanta",
      text: "Cybersecurity refers to the practice of protecting computer systems, networks, and sensitive information from unauthorized access, theft, and damage.",
    },
    {
      id: 1487,
      title: "Data Analytics in Cybersecurity",
      date: "Apr 15, 2023",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/68/1683124250871.jpg",
      authorImg:
        "https://wip.tezcommerce.com:3304/admin/module/68/1683219343222.png",
      author: "Mr. A Rahaman",
      text: "Data analytics plays a crucial role in cybersecurity, as it can help detect and prevent cyber attacks, identify potential vulnerabilities, and improve overall security posture.",
    },
    {
      id: 1486,
      title: "Cyber Security Tabletop Exercise",
      date: "Mar 12, 2023",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/68/1683124007703.jpg",
      authorImg:
        "https://wip.tezcommerce.com:3304/admin/module/68/1683220040914.png",
      author: "Mr. S Adhikary",
      text: "A tabletop exercise is a simulation of a hypothetical security incident that allows organizations to test their incident response plan and procedures in a controlled environment.",
    },
    {
      id: 1488,
      title: "AI And Cybersecurity",
      date: "Feb 21, 2023",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/68/1683124372340.jpg",
      authorImg:
        "https://wip.tezcommerce.com:3304/admin/module/68/1683219493202.png",
      author: "Sudip Chakraborty",
      text: "AI and cybersecurity are two fields that are becoming increasingly intertwined. AI has the potential to significantly improve cybersecurity by automating threat detection and response, identifying and analyzing patterns in large datasets, and predicting potential attacks.",
    },
  ];

  return (
    <>
      {/* Page Title Section */}
      <section
        className="page-title about_box"
        style={{ backgroundImage: "url(images/background/about_us.jpg)" }}>
        <div className="auto-container about_title">
          <h1>Blog</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      {/* Blog Section */}
      <section className="news-section blog-small-images">
        <div className="auto-container">
          <div className="row">
            {blogs.map((blog) => (
              <div key={blog.id} className="news-block style-two-even">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link
                        href={`https://amfics.io/blog/blog-details/${blog.id}`}
                        target="_blank">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={400}
                          height={250}
                        />
                      </Link>
                    </figure>
                    <Link
                      href={`https://amfics.io/blog/blog-details/${blog.id}`}
                      className="date"
                      target="_blank">
                      <i className="far fa-calendar"></i> {blog.date}
                    </Link>
                  </div>

                  <div className="lower-content">
                    <h4>
                      <Link
                        href={`https://amfics.io/blog/blog-details/${blog.id}`}
                        target="_blank">
                        {blog.title}
                      </Link>
                    </h4>
                    <div className="text">{blog.text}</div>
                    <Link
                      href={`https://amfics.io/blog/blog-details/${blog.id}`}
                      className="theme-btn icon-btn-two read-more-btn"
                      target="_blank">
                      <span>Read More</span>
                    </Link>

                    <div className="post-info">
                      <div className="post-author">
                        <Image
                          src={blog.authorImg}
                          alt={blog.author}
                          width={40}
                          height={40}
                        />{" "}
                        {blog.author}
                      </div>

                      <div className="post-option">
                        <div className="coments_count">
                          <Link href="#">
                            <i className="fa fa-comment"></i>
                          </Link>
                        </div>
                        <ul className="social-share">
                          <li>
                            <Link
                              href={`https://www.facebook.com/sharer.php?u=https://amfics.io/blog/blog-details/${blog.id}`}
                              target="_blank">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={`https://www.linkedin.com/shareArticle?url=https://amfics.io/blog/blog-details/${blog.id}`}
                              target="_blank">
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={`https://twitter.com/share?url=https://amfics.io/blog/blog-details/${blog.id}`}
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
