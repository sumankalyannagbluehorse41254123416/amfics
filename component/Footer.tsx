// // "use client";

// // import React from "react";

// // const Footer: React.FC = () => {
// //   const subscribeNewsletters = () => {
// //     // TODO: Implement your newsletter logic here
// //     const emailInput = document.getElementById("subEmail") as HTMLInputElement;
// //     const email = emailInput?.value;
// //     if (email) {
// //       console.log("Subscribed with:", email);
// //       // Example: send email to API or handle state update
// //     }
// //   };

// //   return (
// //     <footer className="main-footer">
// //       <div className="auto-container">
// //         {/* Widgets Section */}
// //         <div className="widgets-section">
// //           <div className="row">
// //             <div className="big-column col-xl-12 col-lg-12 col-md-12">
// //               <div className="row">
// //                 {/* Footer Column - Logo */}
// //                 <div className="footer-column col-lg-4 col-md-12 col-sm-12">
// //                   <div className="logo">
// //                     <a href="/">
// //                       <img
// //                         src="../images/logo/Amfics Logo.png"
// //                         alt="Amfics Logo"
// //                       />
// //                     </a>
// //                   </div>
// //                 </div>

// //                 {/* Footer Column - Page Links */}
// //                 <div className="footer-column col-lg-4 col-md-4 col-sm-12">
// //                   <div className="footer-widget links-widget page_box">
// //                     <h2 className="widget-title">Page Links</h2>
// //                     <div className="widget-content">
// //                       <ul className="list">
// //                         <li>
// //                           <a href="/about-us">About Us</a>
// //                         </li>
// //                         <li>
// //                           <a href="/services">Services</a>
// //                         </li>
// //                         <li>
// //                           <a href="/blog">Blog</a>
// //                         </li>
// //                         <li>
// //                           <a href="/contact">Contact Us</a>
// //                         </li>
// //                       </ul>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Footer Column - Subscribe */}
// //                 <div className="footer-column col-lg-4 col-md-12 col-sm-12">
// //                   <div className="footer-widget links-widget">
// //                     <h2 className="widget-title">Subscribe</h2>

// //                     <div className="widget-content">
// //                       <div className="newsletter-form">
// //                         <form id="subscribe-form">
// //                           <div className="form-group">
// //                             <div className="response"></div>
// //                           </div>
// //                           <div className="form-group">
// //                             <input
// //                               type="email"
// //                               name="email"
// //                               className="email"
// //                               id="subEmail"
// //                               placeholder="Enter your email address.."
// //                               required
// //                             />
// //                             <button
// //                               type="button"
// //                               onClick={subscribeNewsletters}
// //                               className="theme-btn">
// //                               <i className="fa-solid fa-arrow-right"></i>
// //                             </button>
// //                             <div
// //                               id="msg"
// //                               className="text-info text-center hidden contact_gap"></div>
// //                             <div className="clearfix"></div>
// //                           </div>
// //                         </form>
// //                         <div className="text-danger text-center error-msg">
// //                           <ul></ul>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div className="social-link">
// //                       <a href="#" target="_blank" rel="noreferrer">
// //                         <i className="fab fa-facebook-f"></i>
// //                       </a>
// //                       <a href="#" target="_blank" rel="noreferrer">
// //                         <i className="fab fa-twitter"></i>
// //                       </a>
// //                       <a href="#" target="_blank" rel="noreferrer">
// //                         <i className="fab fa-linkedin-in"></i>
// //                       </a>
// //                     </div>

// //                     <a className="zero_mail" href="mailto:info@amfics.io">
// //                       <i className="fas fa-envelope"></i> info@amfics.io
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Footer Bottom */}
// //       <div className="footer-bottom">
// //         <div className="auto-container">
// //           <div className="copyright-text">
// //             Copyright © 2025 Powered By{" "}
// //             <a href="https://bluehorse.in/" target="_blank" rel="noreferrer">
// //               BlueHorse
// //             </a>{" "}
// //             | All rights reserved.
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;
// "use client";

// import React, { useState } from "react";

// const Footer: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);

//   const validateEmail = (email: string) => {
//     const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return pattern.test(email);
//   };

//   const subscribeNewsletters = () => {
//     if (!email) {
//       setIsError(true);
//       setMessage("Please enter your email address.");
//       return;
//     }

//     if (!validateEmail(email)) {
//       setIsError(true);
//       setMessage("Please enter a valid email address.");
//       return;
//     }

//     console.log("Subscribed with:", email);

//     setIsError(false);
//     setMessage("Thank you for subscribing!");
//     setEmail("");
//   };
//   setTimeout(() => {
//     setIsError(false);
//     setMessage("");
//   }, 3000);
//   return (
//     <footer className="main-footer">
//       <div className="auto-container">
//         {/* Widgets Section */}
//         <div className="widgets-section">
//           <div className="row">
//             <div className="big-column col-xl-12 col-lg-12 col-md-12">
//               <div className="row">
//                 {/* Footer Column - Logo */}
//                 <div className="footer-column col-lg-4 col-md-12 col-sm-12">
//                   <div className="logo">
//                     <a href="/">
//                       <img
//                         src="../images/logo/Amfics Logo.png"
//                         alt="Amfics Logo"
//                       />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Footer Column - Page Links */}
//                 <div className="footer-column col-lg-4 col-md-4 col-sm-12">
//                   <div className="footer-widget links-widget page_box">
//                     <h2 className="widget-title">Page Links</h2>
//                     <div className="widget-content">
//                       <ul className="list">
//                         <li>
//                           <a href="/about-us">About Us</a>
//                         </li>
//                         <li>
//                           <a href="/services">Services</a>
//                         </li>
//                         <li>
//                           <a href="/blog">Blog</a>
//                         </li>
//                         <li>
//                           <a href="/contact">Contact Us</a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Footer Column - Subscribe */}
//                 <div className="footer-column col-lg-4 col-md-12 col-sm-12">
//                   <div className="footer-widget links-widget">
//                     <h2 className="widget-title">Subscribe</h2>

//                     <div className="widget-content">
//                       <div className="newsletter-form">
//                         <form
//                           id="subscribe-form"
//                           onSubmit={(e) => e.preventDefault()}>
//                           <div className="form-group">
//                             <input
//                               type="email"
//                               name="email"
//                               className="email"
//                               id="subEmail"
//                               placeholder="Enter your email address..."
//                               value={email}
//                               onChange={(e) => setEmail(e.target.value)}
//                               required
//                             />
//                             <button
//                               type="button"
//                               onClick={subscribeNewsletters}
//                               className="theme-btn">
//                               <i className="fa-solid fa-arrow-right"></i>
//                             </button>
//                           </div>

//                           {/* Message */}
//                           {message && (
//                             <div
//                               id="msg"
//                               className={`text-center mt-2 ${
//                                 isError ? "text-danger" : "text-success"
//                               }`}>
//                               {message}
//                             </div>
//                           )}
//                         </form>
//                       </div>
//                     </div>

//                     <div className="social-link">
//                       <a href="#" target="_blank" rel="noreferrer">
//                         <i className="fab fa-facebook-f"></i>
//                       </a>
//                       <a href="#" target="_blank" rel="noreferrer">
//                         <i className="fab fa-twitter"></i>
//                       </a>
//                       <a href="#" target="_blank" rel="noreferrer">
//                         <i className="fab fa-linkedin-in"></i>
//                       </a>
//                     </div>

//                     <a className="zero_mail" href="mailto:info@amfics.io">
//                       <i className="fas fa-envelope"></i> info@amfics.io
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="footer-bottom">
//         <div className="auto-container">
//           <div className="copyright-text">
//             Copyright © 2025 Powered By{" "}
//             <a href="https://bluehorse.in/" target="_blank" rel="noreferrer">
//               BlueHorse
//             </a>{" "}
//             | All rights reserved.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";

import { submitFormData } from "@/lib/contact";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [statusCode, setStatusCode] = useState<number | null>(null);

  // const formUid = "027feae6-fad4-44fe-be71-7724e9593d8d";

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const subscribeNewsletters = async () => {
    if (!email) {
      setIsError(true);
      setMessage("Please enter your email address.");
      // setStatusCode(400);
      return;
    }

    if (!validateEmail(email)) {
      setIsError(true);
      setMessage("Please enter a valid email address.");
      // setStatusCode(400);
      return;
    }
    try {
      const formData = { Email: email };
      const response = await submitFormData(
        {},
        "027feae6-fad4-44fe-be71-7724e9593d8d",
        formData
      );

      if (response?.status === 200 || response?.success) {
        setIsError(false);
        // setMessage("Thank you for subscribing!");
        toast.success("Your email has been sent successfully!");
        // setStatusCode(200);
        setEmail("");
      }
    } catch (error: any) {
      console.error("Newsletter submission error:", error);
      toast.error("Your email could not be sent. Please try again.");
      setIsError(true);
    }
  };
  setTimeout(() => {
    setIsError(false);
    setMessage("");
    setStatusCode(null);
  }, 5000);
  return (
    <footer className="main-footer">
      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row">
            <div className="big-column col-xl-12 col-lg-12 col-md-12">
              <div className="row">
                {/* Footer Column - Logo */}
                <div className="footer-column col-lg-4 col-md-12 col-sm-12">
                  <div className="logo">
                    <a href="/">
                      <Image
                        src="/images/logo/Amfics Logo.png"
                        alt="Amfics Logo"
                        width={400}
                        height={400}
                      />
                    </a>
                  </div>
                </div>

                {/* Footer Column - Page Links */}
                <div className="footer-column col-lg-4 col-md-4 col-sm-12">
                  <div className="footer-widget links-widget page_box">
                    <h2 className="widget-title">Page Links</h2>
                    <div className="widget-content">
                      <ul className="list">
                        <li>
                          <a href="/about-us">About Us</a>
                        </li>
                        <li>
                          <a href="/services">Services</a>
                        </li>
                        <li>
                          <a href="/blog">Blog</a>
                        </li>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Column - Subscribe */}
                <div className="footer-column col-lg-4 col-md-12 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h2 className="widget-title">Subscribe</h2>

                    <div className="widget-content">
                      <div className="newsletter-form">
                        <form
                          id="subscribe-form"
                          onSubmit={(e) => e.preventDefault()}>
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              className="email"
                              id="subEmail"
                              placeholder="Enter your email address..."
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <button
                              type="button"
                              onClick={subscribeNewsletters}
                              className="theme-btn">
                              <i className="fa-solid fa-arrow-right"></i>
                            </button>
                          </div>

                          {/* Message */}
                          {message && (
                            <div
                              id="msg"
                              className={`text-center mt-2 ${
                                isError ? "text-danger" : "text-success"
                              }`}>
                              {message}{" "}
                              {statusCode && (
                                <span className="status">
                                  (Status: {statusCode})
                                </span>
                              )}
                            </div>
                          )}
                        </form>
                        <div className="text-danger text-center error-msg">
                          <ul></ul>
                        </div>
                      </div>
                    </div>

                    <div className="social-link">
                      <a href="#" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>

                    <a className="zero_mail" href="mailto:info@amfics.io">
                      <i className="fas fa-envelope"></i> info@amfics.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="copyright-text">
            Copyright © 2025 Powered By{" "}
            <a href="https://bluehorse.in/" target="_blank" rel="noreferrer">
              BlueHorse
            </a>{" "}
            | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
