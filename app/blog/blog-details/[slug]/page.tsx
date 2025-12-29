"use client";

import Newsletter from "@/component/BlogNewsletter";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { fetchBlogData } from "@/app/action/blog";
import { fetchBlogPageData } from "@/app/action/blogSlug";

interface Subsection {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

interface PageItem {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string | null;
  subsections?: Subsection[];
  date?: string;
}

interface PageData {
  id: number;
  title: string;
  slug: string;
  uuid: string;
  description: string;
  cover_image_url: string;
}

interface BlogApiResponse {
  status: boolean;
  pagedata: PageData;
  pageItemdataWithSubsection: PageItem[];
  editReviedata: PageItem[];
}

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

interface BlogDetailsProps {
  params: Promise<{ slug: string }>;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ params }) => {
  const { slug: blogSlug } = use(params);
  const [data, setData] = useState<BlogApiResponse | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetchBlogPageData(blogSlug);
        if (res?.status) setData(res as unknown as BlogApiResponse);
      } catch (err) {
        console.error("Error loading blog:", err);
      } finally {
        setLoading(false);
      }
    };
    window.scrollTo(0, 0);
    getData();
  }, [blogSlug]);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await fetchBlogData();
        const activeBlogs = res.userPostdata.filter(
          (b: BlogPost) => b.status === "active"
        );
        setRecentPosts(activeBlogs.slice(0, 5));
      } catch (err) {
        console.error("Error loading blogs:", err);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const pagedata = data?.pagedata;
  const items = data?.pageItemdataWithSubsection || [];
  const mainItem = items[0];
  const authorItem = items.find((x) => x.title === "Sourav Maity");
  const subsection = mainItem?.subsections?.[0];

  return (
    <>
      <section
        className="page-title about_box"
        style={{
          backgroundImage: `url(${
            pagedata?.cover_image_url || "/images/images.jpeg"
          })`,
        }}>
        <div className="auto-container about_title">
          <h1>{pagedata?.title}</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      <div className="sidebar-page-container right-sidebar">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-post hover-stop">
                <div className="news-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <blockquote className="post-format-quote">
                        <span className="icon flaticon-cite"></span>
                        {mainItem?.title}
                        <cite>{authorItem?.title}</cite>
                      </blockquote>
                      <Link href="#" className="date">
                        <i className="far fa-calendar"></i> Feb 15, 2023
                      </Link>
                    </div>

                    <div className="lower-content">
                      {parse(mainItem?.shortDescription || "No description")}

                      <div className="two-column row">
                        <figure className="column col-lg-6 col-md-6 col-sm-12">
                          <Link
                            href={mainItem?.image || "/images/images.jpeg"}
                            className="lightbox-image">
                            <Image
                              src={mainItem?.image || "/images/images.jpeg"}
                              alt="Main Image"
                              width={400}
                              height={400}
                            />
                          </Link>
                        </figure>

                        <figure className="column col-lg-6 col-md-6 col-sm-12">
                          <Link
                            href={subsection?.image || "/images/images.jpeg"}
                            className="lightbox-image">
                            <Image
                              src={subsection?.image || "/images/images.jpeg"}
                              alt=""
                              width={400}
                              height={400}
                            />
                          </Link>
                        </figure>
                      </div>
                      {/* 
                      {subsection?.description
                        ? parse(subsection.description)
                        : parse(
                            `<p>suman 4567476845674967Suspendisse potenti. Quisque risus sem, volutpat a sapien...</p>`
                          )} */}
                    </div>
                  </div>
                </div>

                {/* Author Section */}
                <div className="author-box">
                  <div className="inner-box">
                    <div className="image-box">
                      <Image
                        src={authorItem?.image || "/images/images.jpeg"}
                        alt={authorItem?.title || "Author"}
                        width={400}
                        height={400}
                      />
                    </div>
                    <h3 className="name">{authorItem?.title}</h3>
                    <div className="text">
                      {parse(authorItem?.shortDescription || "No description")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="sidebar-side sticky-container col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar theiaStickySidebar">
                <div className="sticky-sidebar">
                  <div className="sidebar-widget newslatters">
                    <Newsletter />
                  </div>

                  <div className="sidebar-widget latest-news">
                    <div className="sidebar-title">
                      <h3>Recent Posts</h3>
                    </div>
                    <div className="widget-content">
                      {recentPosts.map((post, index) => (
                        <article key={index} className="post">
                          <figure className="thumb">
                            <Image
                              src={post.featured_image_url}
                              alt={post.title}
                              width={90}
                              height={90}
                            />
                          </figure>
                          <h5>{post.title}</h5>
                          <div className="post-info">
                            {post.tag || "No date"}
                          </div>
                          <Link
                            href={`/blog/blog-details/${post.slug}`}
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
