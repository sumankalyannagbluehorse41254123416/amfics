// "use client";

// import ServiceContactSection from "@/component/ServiceContact";
// import Image from "next/image";
// import React from "react";

// const VaptSection: React.FC = () => {
//   return (
//     <>
//       {/* Page Title Section */}
//       <section
//         className="page-title about_box"
//         style={{
//           backgroundImage:
//             "url(https://amfics.io/images/background/about_us.jpg)",
//         }}>
//         <div className="auto-container about_title">
//           <h1>Vulnerability Assessment and Penetration Testing</h1>
//           <span className="title_divider"></span>
//           {/*
//           <ul className="page-breadcrumb">
//             <li><a href="https://amfics.io">Home</a></li>
//             <li>vapt</li>
//           </ul>
//           */}
//         </div>
//       </section>
//       {/* Case Study Section */}
//       <section className="case-study-section zero_ser soc_item vapt_box">
//         <div className="auto-container">
//           <div className="sec-title text-center">
//             <h3>Vulnerability Assessment and Penetration Testing</h3>
//             <div className="text soc_text">
//               amfics's Vulnerability Assessment and Penetration testing services
//               cover a range of assessments, including internal, external, and
//               web application testing. This comprehensive approach helps to
//               identify vulnerabilities and potential attack vectors that
//               malicious actors could exploit to gain unauthorized access to a
//               company's network and applications.
//             </div>
//           </div>

//           {/* Case Blocks */}
//           <div className="row">
//             {/* Case Block 1 */}
//             <div className="case-block col-lg-4 col-md-6 col-sm-12">
//               <div className="inner-box about_inner">
//                 <div className="image-box">
//                   <figure className="image">
//                     <a href="#">
//                       <Image
//                         src="https://amfics.io/images/resource/vapt_banner.jpg"
//                         alt="vapt banner"
//                         width={400}
//                         height={250}
//                       />
//                     </a>
//                   </figure>
//                   <span className="icon_img">
//                     <Image
//                       src="https://amfics.io/images/icons/vapt_icon.png"
//                       alt="icon"
//                       width={50}
//                       height={50}
//                     />
//                   </span>
//                 </div>
//                 <div className="lower-content">
//                   <h4>
//                     <a href="#">SECURITY TESTING</a>
//                   </h4>
//                   <div className="text vapt_text">
//                     Perform all remote and on-site tests, including social
//                     engineering and any additional security services.
//                   </div>
//                   <div className="btn-box">
//                     <a href="#" className="theme-btn icon-btn-one">
//                       <span>View More  <i className="fa-solid fa-arrow-right"></i></span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Case Block 2 */}
//             <div className="case-block col-lg-4 col-md-6 col-sm-12">
//               <div className="inner-box about_inner">
//                 <div className="image-box">
//                   <figure className="image">
//                     <a href="#">
//                       <Image
//                         src="https://amfics.io/images/resource/vapt_banner2.jpg"
//                         alt="vapt banner 2"
//                         width={400}
//                         height={250}
//                       />
//                     </a>
//                   </figure>
//                   <span className="icon_img">
//                     <Image
//                       src="https://amfics.io/images/icons/vapt_icon2.png"
//                       alt="icon"
//                       width={50}
//                       height={50}
//                     />
//                   </span>
//                 </div>
//                 <div className="lower-content">
//                   <h4>
//                     <a href="#">REPORT & REMEDIATION</a>
//                   </h4>
//                   <div className="text vapt_text">
//                     Provide detailed reports at the end of each test with
//                     technical tips to remediate the issues.
//                   </div>
//                   <div className="btn-box">
//                     <a href="#" className="theme-btn icon-btn-one">
//                       <span>View More <i className="fa-solid fa-arrow-right"></i></span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Case Block 3 */}
//             <div className="case-block col-lg-4 col-md-6 col-sm-12">
//               <div className="inner-box about_inner">
//                 <div className="image-box">
//                   <figure className="image">
//                     <a href="#">
//                       <Image
//                         src="https://amfics.io/images/resource/vapt_banner3.jpg"
//                         alt="vapt banner 3"
//                         width={400}
//                         height={250}
//                       />
//                     </a>
//                   </figure>
//                   <span className="icon_img">
//                     <Image
//                       src="https://amfics.io/images/icons/vapt_icon3.png"
//                       alt="icon"
//                       width={50}
//                       height={50}
//                     />
//                   </span>
//                 </div>
//                 <div className="lower-content">
//                   <h4>
//                     <a href="#">RE-TEST</a>
//                   </h4>
//                   <div className="text vapt_text">
//                     Re-test to confirm remediation is correctly implemented or
//                     risk has been accepted. With Auriesg re-tests are always
//                     included free of charge.
//                   </div>
//                   <div className="btn-box">
//                     <a href="#" className="theme-btn icon-btn-one">
//                       <span>View More <i className="fa-solid fa-arrow-right"></i></span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="row mt-md-5">
//             <div className="col-md-8" data-aos="fade-right">
//               <div className="soc_section left-text-soc">
//                 <p>
//                   The objectives of the testing, which include assessing the
//                   effectiveness of the threat and vulnerability management
//                   program, are aligned with industry best practices for
//                   cybersecurity risk management. By identifying vulnerabilities
//                   and providing recommendations to mitigate risks, the testing
//                   helps to improve the organization's overall information
//                   security posture and reduce the likelihood of a successful
//                   cyber-attack.
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-4" data-aos="fade-left">
//               <div className="soc_img right-img-soc">
//                 <Image
//                   src="https://amfics.io/images/background/vapt_b.jpg"
//                   alt="vapt background"
//                   width={400}
//                   height={400}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ServiceContactSection />
//     </>
//   );
// };

// export default VaptSection;

// "use client";

// import React, { useEffect, useRef } from "react";
// import ServiceContactSection from "@/component/ServiceContact";

// const VaptSection: React.FC = () => {
//   const leftTextRef = useRef<HTMLDivElement>(null);
//   const rightImgRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const leftText = leftTextRef.current;
//       const rightImg = rightImgRef.current;

//       if (!leftText || !rightImg) return;

//       const rect = leftText.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Check if element is in viewport
//       const isInView = rect.top < windowHeight * 0.8 && rect.bottom > 0;

//       if (isInView) {
//         leftText.style.opacity = "1";
//         leftText.style.transform = "translateX(0)";
//         rightImg.style.opacity = "1";
//         rightImg.style.transform = "translateX(0)";
//       } else {
//         leftText.style.opacity = "0";
//         leftText.style.transform = "translateX(-100px)";
//         rightImg.style.opacity = "0";
//         rightImg.style.transform = "translateX(100px)";
//       }
//     };

//     // Initial check
//     handleScroll();

//     // Add scroll listener
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {/* Page Title Section */}
//       <section
//         className="page-title about_box"
//         style={{
//           backgroundImage:
//             "url(https://amfics.io/images/background/about_us.jpg)",
//         }}>
//         <div className="auto-container about_title">
//           <h1>Vulnerability Assessment and Penetration Testing</h1>
//           <span className="title_divider"></span>
//         </div>
//       </section>
//       {/* Case Study Section */}
//       <section
//         className="case-study-section zero_ser soc_item vapt_box"
//         style={{ overflowX: "hidden" }}>
//         <div className="auto-container">
//           <div className="sec-title text-center">
//             <h3>Vulnerability Assessment and Penetration Testing</h3>
//             <div className="text soc_text">
//               amfics's Vulnerability Assessment and Penetration testing services
//               cover a range of assessments, including internal, external, and
//               web application testing. This comprehensive approach helps to
//               identify vulnerabilities and potential attack vectors that
//               malicious actors could exploit to gain unauthorized access to a
//               company's network and applications.
//             </div>
//           </div>

//           {/* Case Blocks */}
//           <div className="row">
//             {/* Case Block 1 */}
//             <div className="case-block col-lg-4 col-md-6 col-sm-12">
//               <div className="inner-box about_inner">
//                 <div className="image-box">
//                   <figure className="image">
//                     <a href="#">
//                       <img
//                         src="https://amfics.io/images/resource/vapt_banner.jpg"
//                         alt="vapt banner"
//                         width={400}
//                         height={250}
//                       />
//                     </a>
//                   </figure>
//                   <span className="icon_img">
//                     <img
//                       src="https://amfics.io/images/icons/vapt_icon.png"
//                       alt="icon"
//                       width={50}
//                       height={50}
//                     />
//                   </span>
//                 </div>
//                 <div className="lower-content">
//                   <h4>
//                     <a href="#">SECURITY TESTING</a>
//                   </h4>
//                   <div className="text vapt_text">
//                     Perform all remote and on-site tests, including social
//                     engineering and any additional security services.
//                   </div>
//                   <div className="btn-box">
//                     <a href="#" className="theme-btn icon-btn-one">
//                       <span>
//                         View More <i className="fa-solid fa-arrow-right"></i>
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Case Block 2 */}
//             <div className="case-block col-lg-4 col-md-6 col-sm-12">
//               <div className="inner-box about_inner">
//                 <div className="image-box">
//                   <figure className="image">
//                     <a href="#">
//                       <img
//                         src="https://amfics.io/images/resource/vapt_banner2.jpg"
//                         alt="vapt banner 2"
//                         width={400}
//                         height={250}
//                       />
//                     </a>
//                   </figure>
//                   <span className="icon_img">
//                     <img
//                       src="https://amfics.io/images/icons/vapt_icon2.png"
//                       alt="icon"
//                       width={50}
//                       height={50}
//                     />
//                   </span>
//                 </div>
//                 <div className="lower-content">
//                   <h4>
//                     <a href="#">REPORT & REMEDIATION</a>
//                   </h4>
//                   <div className="text vapt_text">
//                     Provide detailed reports at the end of each test with
//                     technical tips to remediate the issues.
//                   </div>
//                   <div className="btn-box">
//                     <a href="#" className="theme-btn icon-btn-one">
//                       <span>
//                         View More <i className="fa-solid fa-arrow-right"></i>
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Case Block 3 */}
//             <div className="case-block col-lg-4 col-md-6 col-sm-12">
//               <div className="inner-box about_inner">
//                 <div className="image-box">
//                   <figure className="image">
//                     <a href="#">
//                       <img
//                         src="https://amfics.io/images/resource/vapt_banner3.jpg"
//                         alt="vapt banner 3"
//                         width={400}
//                         height={250}
//                       />
//                     </a>
//                   </figure>
//                   <span className="icon_img">
//                     <img
//                       src="https://amfics.io/images/icons/vapt_icon3.png"
//                       alt="icon"
//                       width={50}
//                       height={50}
//                     />
//                   </span>
//                 </div>
//                 <div className="lower-content">
//                   <h4>
//                     <a href="#">RE-TEST</a>
//                   </h4>
//                   <div className="text vapt_text">
//                     Re-test to confirm remediation is correctly implemented or
//                     risk has been accepted. With Auriesg re-tests are always
//                     included free of charge.
//                   </div>
//                   <div className="btn-box">
//                     <a href="#" className="theme-btn icon-btn-one">
//                       <span>
//                         View More <i className="fa-solid fa-arrow-right"></i>
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="row mt-md-5">
//             <div className="col-md-8" data-aos="fade-right">
//               <div
//                 ref={leftTextRef}
//                 className="soc_section left-text-soc"
//                 style={{
//                   opacity: 0,
//                   transform: "translateX(-100px)",
//                   transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
//                 }}>
//                 <p>
//                   The objectives of the testing, which include assessing the
//                   effectiveness of the threat and vulnerability management
//                   program, are aligned with industry best practices for
//                   cybersecurity risk management. By identifying vulnerabilities
//                   and providing recommendations to mitigate risks, the testing
//                   helps to improve the organization's overall information
//                   security posture and reduce the likelihood of a successful
//                   cyber-attack.
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-4" data-aos="fade-left">
//               <div
//                 ref={rightImgRef}
//                 className="soc_img right-img-soc"
//                 style={{
//                   opacity: 0,
//                   transform: "translateX(100px)",
//                   transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
//                 }}>
//                 <img
//                   src="https://amfics.io/images/background/vapt_b.jpg"
//                   alt="vapt background"
//                   width={400}
//                   height={400}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <ServiceContactSection />
//     </>
//   );
// };

// export default VaptSection;

"use client";

import React, { useEffect, useRef, useState } from "react";
import ServiceContactSection from "@/component/ServiceContact";
import parse from "html-react-parser";
import { fetchBannerData } from "@/app/action/banner";
interface BannerData {
  id: number;
  title: string;
  description: string;
  desktopImage: string;
}

const VaptSection: React.FC = () => {
  const [banner, setBanner] = useState<BannerData | null>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);

  // ✅ Fetch Banner using UID
  useEffect(() => {
    const getBanner = async () => {
      try {
        const res = await fetchBannerData(
          "cf4d3dee-9bc9-47ca-9df2-fcf8fd6ab709"
        );
        const singleBanner = (res as any)?.singlebannerData?.[0];
        if (singleBanner) {
          setBanner({
            id: singleBanner.id,
            title: singleBanner.title,
            description: singleBanner.description,
            desktopImage: singleBanner.desktopImage,
          });
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };
    getBanner();
  }, []);

  // ✅ Scroll Animation
  useEffect(() => {
    const handleScroll = () => {
      const leftText = leftTextRef.current;
      const rightImg = rightImgRef.current;
      if (!leftText || !rightImg) return;

      const rect = leftText.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isInView = rect.top < windowHeight * 0.8 && rect.bottom > 0;

      if (isInView) {
        leftText.style.opacity = "1";
        leftText.style.transform = "translateX(0)";
        rightImg.style.opacity = "1";
        rightImg.style.transform = "translateX(0)";
      } else {
        leftText.style.opacity = "0";
        leftText.style.transform = "translateX(-100px)";
        rightImg.style.opacity = "0";
        rightImg.style.transform = "translateX(100px)";
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Dynamic Banner Section */}
      <section
        className="page-title about_box"
        style={{
          backgroundImage: `url(${banner?.desktopImage || ""})`,
        }}>
        <div className="auto-container about_title">
          <h1>{banner?.title || ""}</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      {/* ✅ Case Study Section */}
      <section
        className="case-study-section zero_ser soc_item vapt_box"
        style={{ overflowX: "hidden" }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <h3>
              {banner?.title ||
                "Vulnerability Assessment and Penetration Testing"}
            </h3>
            <div className="text soc_text">
              {banner?.description
                ? parse(banner.description)
                : `amfics's Vulnerability Assessment and Penetration testing services cover a range of assessments, including internal, external, and web application testing. This comprehensive approach helps to identify vulnerabilities and potential attack vectors that malicious actors could exploit to gain unauthorized access to a company's network and applications.`}
            </div>
          </div>

          {/* ✅ Case Blocks (same static structure) */}
          <div className="row">
            {/* Case Block 1 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <a href="#">
                      <img
                        src="https://amfics.io/images/resource/vapt_banner.jpg"
                        alt="vapt banner"
                        width={400}
                        height={250}
                      />
                    </a>
                  </figure>
                  <span className="icon_img">
                    <img
                      src="https://amfics.io/images/icons/vapt_icon.png"
                      alt="icon"
                      width={50}
                      height={50}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <a href="#">SECURITY TESTING</a>
                  </h4>
                  <div className="text vapt_text">
                    Perform all remote and on-site tests, including social
                    engineering and any additional security services.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn icon-btn-one">
                      <span>
                        View More <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Block 2 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <a href="#">
                      <img
                        src="https://amfics.io/images/resource/vapt_banner2.jpg"
                        alt="vapt banner 2"
                        width={400}
                        height={250}
                      />
                    </a>
                  </figure>
                  <span className="icon_img">
                    <img
                      src="https://amfics.io/images/icons/vapt_icon2.png"
                      alt="icon"
                      width={50}
                      height={50}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <a href="#">REPORT & REMEDIATION</a>
                  </h4>
                  <div className="text vapt_text">
                    Provide detailed reports at the end of each test with
                    technical tips to remediate the issues.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn icon-btn-one">
                      <span>
                        View More <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Block 3 */}
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box about_inner">
                <div className="image-box">
                  <figure className="image">
                    <a href="#">
                      <img
                        src="https://amfics.io/images/resource/vapt_banner3.jpg"
                        alt="vapt banner 3"
                        width={400}
                        height={250}
                      />
                    </a>
                  </figure>
                  <span className="icon_img">
                    <img
                      src="https://amfics.io/images/icons/vapt_icon3.png"
                      alt="icon"
                      width={50}
                      height={50}
                    />
                  </span>
                </div>
                <div className="lower-content">
                  <h4>
                    <a href="#">RE-TEST</a>
                  </h4>
                  <div className="text vapt_text">
                    Re-test to confirm remediation is correctly implemented or
                    risk has been accepted. With Auriesg re-tests are always
                    included free of charge.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn icon-btn-one">
                      <span>
                        View More <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Bottom Section with Scroll Animation */}
          <div className="row mt-md-5">
            <div className="col-md-8" data-aos="fade-right">
              <div
                ref={leftTextRef}
                className="soc_section left-text-soc"
                style={{
                  opacity: 0,
                  transform: "translateX(-100px)",
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                }}>
                <p>
                  The objectives of the testing, which include assessing the
                  effectiveness of the threat and vulnerability management
                  program, are aligned with industry best practices for
                  cybersecurity risk management. By identifying vulnerabilities
                  and providing recommendations to mitigate risks, the testing
                  helps to improve the organization's overall information
                  security posture and reduce the likelihood of a successful
                  cyber-attack.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left">
              <div
                ref={rightImgRef}
                className="soc_img right-img-soc"
                style={{
                  opacity: 0,
                  transform: "translateX(100px)",
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                }}>
                <img
                  src="https://amfics.io/images/background/vapt_b.jpg"
                  alt="vapt background"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceContactSection />
    </>
  );
};

export default VaptSection;
