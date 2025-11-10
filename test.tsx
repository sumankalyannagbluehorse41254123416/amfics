"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, use, useEffect, useState } from "react";
import { fetchBlogData } from "@/app/action/fetchBlogData";
import { fetchBlogs, BlogPost } from "@/lib/blog";

// Types
interface EditReview {
  id: number;
  website_id: number;
  page_id: number;
  author_name: string;
  rating: string;
  comment: string;
  date: string;
  created_by: string | null;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
}

interface Subsection {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string | null;
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
  editReviedata?: EditReview[];
  pageItemdataWithSubsection?: Subsection[];
}

const BlogDetailPage: FC<{ params: Promise<{ slug: string }> }> = ({
  params,
}) => {
  const [blogData, setBlogData] = useState<ApiBlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { slug: blogSlug } = use(params);

  // Fetch main blog data
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchBlogData(blogSlug);

        if (response?.status && response?.pagedata) {
          setBlogData({
            ...response.pagedata,
            editReviedata: response.editReviedata || [],
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
  useEffect(() => {
    const loadRecentPosts = async () => {
      try {
        const posts = await fetchBlogs();
        const filtered = posts.filter((p) => p.id !== blogData?.id);
        setRecentPosts(filtered.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    };

    if (blogData) loadRecentPosts();
  }, [blogData]);

  if (loading) return <div>Loading...</div>;
  if (error || !blogData) return <div>{error || "Blog post not found"}</div>;

  const authorName =
    blogData.editReviedata?.[0]?.author_name || "Unknown Author";

  const formattedDate =
    blogData.editReviedata?.[0]?.date ||
    new Date(blogData.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <>
      <section
        className="page-title about_box"
        style={{
          backgroundImage: "",
        }}>
        <div className="auto-container about_title">
          <h1>{}</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      <div className="sidebar-page-container right-sidebar">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-post hover-stop">
                {/* News Block */}
                <div className="news-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <blockquote className="post-format-quote">
                        <span className="icon flaticon-cite"></span>
                        &quot;Strategies and Best Practices for Cybersecurity
                        and Risk Mitigation&quot;
                        <cite>Sourav Maity</cite>
                      </blockquote>
                      <a href="#" className="date">
                        <i className="far fa-calendar"></i>Feb 15, 2023
                      </a>
                    </div>

                    <div className="lower-content">
                      <p>
                        Cybersecurity is a crucial aspect of protecting
                        electronic data and systems from unauthorized access,
                        theft, damage, or disruption. It involves a range of
                        strategies, technologies, and practices designed to
                        secure&nbsp;information and prevent cyberattacks. Risk
                        mitigation, on the other hand, refers to the process of
                        identifying, assessing, and reducing risks to an
                        acceptable level. In the context of cybersecurity, risk
                        mitigation&nbsp; involves implementing measures to
                        minimize the likelihood and impact of cyber threats and
                        attacks.
                      </p>
                      <p>
                        Some common strategies and best practices for
                        cybersecurity and risk mitigation include using strong
                        passwords and multifactor authentication, keeping
                        software and systems up-to-date, using firewalls and
                        other security&nbsp;tools to monitor and protect
                        networks and systems, training employees and users on
                        safe computing practices, developing an incident
                        response plan, regularly backing up data, and conducting
                        security assessments and audits.
                      </p>
                      <p>
                        By implementing these and other best practices,
                        organizations can significantly reduce their risk of
                        cyberattacks and mitigate the impact of any attacks that
                        do occur. Cybersecurity and risk mitigation should be a
                        top priority for any organization that handles sensitive
                        or confidential data, as cyber threats continue to
                        evolve and become more sophisticated.
                      </p>

                      <div className="two-column row">
                        <figure className="column col-lg-6 col-md-6 col-sm-12">
                          <a
                            href="https://wip.tezcommerce.com:3304/admin/module/68/1683123744779.jpg"
                            className="lightbox-image">
                            <img
                              src="https://wip.tezcommerce.com:3304/admin/module/68/1683123744779.jpg"
                              alt=""
                            />
                          </a>
                        </figure>
                        <figure className="column col-lg-6 col-md-6 col-sm-12">
                          <a
                            href="https://wip.tezcommerce.com:3304/admin/module/68/1683123744869.jpg"
                            className="lightbox-image">
                            <img
                              src="https://wip.tezcommerce.com:3304/admin/module/68/1683123744869.jpg"
                              alt=""
                            />
                          </a>
                        </figure>
                      </div>

                      <p>
                        Suspendisse potenti. Quisque risus sem, volutpat a
                        sapien et, mattis condimentum est. Suspendisse feugiat
                        cursus turpis, et porta lectus euismod accumsan. Nam
                        felis ipsum, eleifend sit amet sodales
                        pellentesque,&nbsp;commodo sit amet elit. Etiam
                        convallis urna id justo faucibus tempor. Nunc volutpat
                        sem nunc, at faucibus magna rutrum eget. Nullam bibendum
                        convallis est, quis facilisis nibh ullamcorper in. Nunc
                        elementum nisl mauris, sed molestie turpis convallis
                        vel. Nam ut mi id justo efficitur finibus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="author-box">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        src="https://wip.tezcommerce.com:3304/admin/module/68/1683123811399.jpg"
                        alt=""
                      />
                    </div>
                    <h3 className="name">Sourav Maity</h3>
                    <div className="text">
                      Risk mitigation refers to the process of identifying,
                      assessing, and reducing risks to an acceptable level. In
                      the context of cybersecurity, risk mitigation involves
                      implementing measures to minimize the likelihoodand impact
                      of cyber threats and attacks.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Side */}
            <div className="sidebar-side sticky-container col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar theiaStickySidebar">
                <div className="sticky-sidebar">
                  <div className="sidebar-widget newslatters">
                    <div className="sidebar-title">
                      <h3>
                        <span className="icon flaticon-rss-symbol"></span>
                        Newsletter
                      </h3>
                    </div>
                    <div className="text">
                      Enter your email address below to subscribe to my
                      newsletter
                    </div>
                    <form id="blogSidebar">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="blogEmail"
                          placeholder="Your email address..."
                          required
                        />
                        <button
                          type="button"
                          onClick={() => console.log("subscribe")}
                          className="theme-btn">
                          <span className="btn-title">Subscribe</span>
                        </button>
                        <div
                          id="msgblog"
                          className="msgblog text-info text-center hidden contact_gap"></div>
                        <div className="clearfix"></div>
                      </div>
                    </form>

                    <div
                      className="text-danger text-center print-error-msg"
                      style={{ display: "none" }}>
                      <ul></ul>
                    </div>
                  </div>

                  {/* Latest News */}
                  <div className="sidebar-widget latest-news">
                    <div className="sidebar-title">
                      <h3>Recent Posts</h3>
                    </div>
                    <div className="widget-content">
                      <article className="post">
                        <figure className="thumb">
                          <img
                            src="https://wip.tezcommerce.com:3304/admin/module/68/1683124022881.jpg"
                            alt=""
                          />
                        </figure>
                        <h5>Cybersecurity &amp; Risk Mitigation</h5>
                        <div className="post-info">May 5, 2023</div>
                        <a
                          href="https://amfics.io/blog/blog-details/1485"
                          className="overlay-link"></a>
                      </article>

                      <article className="post">
                        <figure className="thumb">
                          <img
                            src="https://wip.tezcommerce.com:3304/admin/module/68/1683124250871.jpg"
                            alt=""
                          />
                        </figure>
                        <h5>Data Analytics in Cybersecurity</h5>
                        <div className="post-info">Apr 15, 2023</div>
                        <a
                          href="https://amfics.io/blog/blog-details/1487"
                          className="overlay-link"></a>
                      </article>

                      <article className="post">
                        <figure className="thumb">
                          <img
                            src="https://wip.tezcommerce.com:3304/admin/module/68/1683124007703.jpg"
                            alt=""
                          />
                        </figure>
                        <h5>Cyber Security Tabletop Exercise</h5>
                        <div className="post-info">Mar 12, 2023</div>
                        <a
                          href="https://amfics.io/blog/blog-details/1486"
                          className="overlay-link"></a>
                      </article>

                      <article className="post">
                        <figure className="thumb">
                          <img
                            src="https://wip.tezcommerce.com:3304/admin/module/68/1683124372340.jpg"
                            alt=""
                          />
                        </figure>
                        <h5>AI And Cybersecurity</h5>
                        <div className="post-info">Feb 21, 2023</div>
                        <a
                          href="https://amfics.io/blog/blog-details/1488"
                          className="overlay-link"></a>
                      </article>
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

export default BlogDetailPage;
