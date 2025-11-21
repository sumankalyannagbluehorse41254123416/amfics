// "use client";

// import Image from "next/image";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { fas } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { IoLogoWhatsapp } from "react-icons/io";
// // import { IoLogoWhatsapp } from "react-icons/io";

// const Header: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] =
//     useState<boolean>(false);
//   const mobileMenuRef = useRef<HTMLDivElement>(null);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//     const body = document.body;
//     if (!isMobileMenuOpen) {
//       body.classList.add("mobile-menu-visible");
//     } else {
//       body.classList.remove("mobile-menu-visible");
//     }
//   };

//   const toggleServicesDropdown = () => {
//     setIsServicesDropdownOpen((prev) => !prev);
//   };

//   const handleMouseEnter = () => {
//     setIsServicesDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsServicesDropdownOpen(false);
//   };

//   // Close mobile menu on backdrop click
//   const handleBackdropClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsMobileMenuOpen(false);
//     document.body.classList.remove("mobile-menu-visible");
//   };

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target as Node)
//       ) {
//         setIsMobileMenuOpen(false);
//         document.body.classList.remove("mobile-menu-visible");
//       }
//     };

//     if (isMobileMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMobileMenuOpen]);

//   // Cleanup body class on unmount
//   useEffect(() => {
//     return () => {
//       document.body.classList.remove("mobile-menu-visible");
//     };
//   }, []);

//   return (
//     <div>
//       <header className="main-header">
//         <div className="main-box">
//           <div className="menu-box">
//             <div className="logo">
//               <a
//                 href="/"
//                 className="main-logo"
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 <Image
//                   src="/images/logo/Amfics Logo.png"
//                   alt="Amfics Logo"
//                   title="Amfics Logo"
//                   height={400}
//                   width={400}
//                 />
//               </a>
//             </div>
//             <div className="nav-outer">
//               <nav className="main-menu navbar-expand-md navbar-light">
//                 <div
//                   className="collapse navbar-collapse"
//                   id="navbarSupportedContent">
//                   <ul className="navigation clearfix">
//                     <li>
//                       <a href="/">Home</a>
//                     </li>
//                     <li>
//                       <a href="/about-us">About Us</a>
//                     </li>
//                     <li
//                       className="dropdown"
//                       onMouseEnter={handleMouseEnter}
//                       onMouseLeave={handleMouseLeave}>
//                       <a
//                         href="/services"
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "0px",
//                         }}>
//                         <span>Services</span>
//                         <i
//                           className="fa-solid fa-chevron-down"
//                           style={{ fontSize: "9px" }}></i>
//                       </a>
//                       <ul
//                         style={{
//                           display: isServicesDropdownOpen ? "block" : "none",
//                           height: "571px",
//                           paddingTop: "17px",
//                           marginTop: "8px",
//                           paddingBottom: "17px",
//                           marginBottom: "0px",
//                         }}>
//                         <li>
//                           <a href="/services/soc">SOC</a>
//                         </li>
//                         <li>
//                           <a href="/services/noc">NOC</a>
//                         </li>
//                         <li>
//                           <a href="/services/vapt">VAPT</a>
//                         </li>
//                         <li>
//                           <a href="/services/threat">
//                             Threat Modelling & Risk Management
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/services/cloud">Cloud Security</a>
//                         </li>
//                         <li>
//                           <a href="/services/simulate">
//                             Simulate Real-world Attack
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/services/ciso">CISO As A Service</a>
//                         </li>
//                         <li>
//                           <a href="/services/ot_sceurity">OT/IOT Security</a>
//                         </li>
//                         <li>
//                           <a href="/services/privacy">
//                             Privacy, Regulation & Compliance
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/services/cyber_security">
//                             Cyber Security Readiness Program
//                           </a>
//                         </li>
//                         <li>
//                           <a href="/services/business_continuity">
//                             Business Continuity Plan
//                           </a>
//                         </li>
//                       </ul>
//                       <div className="dropdown-btn">
//                         <span className="flaticon-arrow-right"></span>
//                       </div>
//                     </li>
//                     <li>
//                       <a href="/blog">Blog</a>
//                     </li>
//                     <li>
//                       <a href="/partners">Partners</a>
//                     </li>
//                     <li>
//                       <a href="/contact">Contact Us</a>
//                     </li>
//                   </ul>
//                 </div>
//               </nav>
//             </div>
//             <div className="service_wrapper">
//               <p>Have Any Questions?</p>
//               <Link
//                 href="https://wa.me/+919980789911"
//                 target="_blank"
//                 className="icon flaticon-whatsapp"
//                 rel="noopener noreferrer">
//                 {/* <IoLogoWhatsapp /> */}
//                 <IoLogoWhatsapp />
//               </Link>
//               {/* <a
//                 href="https://wa.me/+919980789911"
//                 target="_blank"
//                 className="icon flaticon-whatsapp"
//                 rel="noopener noreferrer">
//                 <i className="fa fa-whatsapp"></i>
//                 <IoLogoWhatsapp />
//               </a> */}
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="sticky-header">
//         <div className="main-box">
//           <div className="menu-box">
//             <div className="logo">
//               <a
//                 href="/"
//                 className="sticky-logo"
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 <Image
//                   src="https://amfics.io/images/Amfics Fav Icon.png"
//                   alt="Amfics Fav Icon"
//                   title="Amfics Fav Icon"
//                   height={400}
//                   width={400}
//                 />
//               </a>
//             </div>
//             <nav className="main-menu navbar-expand-md navbar-light">
//               <div
//                 className="collapse navbar-collapse"
//                 id="navbarSupportedContent">
//                 <ul className="navigation clearfix">
//                   <li>
//                     <a href="/">Home</a>
//                   </li>
//                   <li>
//                     <a href="/about-us">About Us</a>
//                   </li>
//                   <li
//                     className="dropdown"
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}>
//                     <a href="/services">
//                       <span>Services</span>
//                     </a>
//                     <ul
//                       style={{
//                         display: isServicesDropdownOpen ? "block" : "none",
//                         height: "571px",
//                         paddingTop: "17px",
//                         marginTop: "8px",
//                         paddingBottom: "17px",
//                         marginBottom: "0px",
//                       }}>
//                       <li>
//                         <a href="/services/soc">SOC</a>
//                       </li>
//                       <li>
//                         <a href="/services/noc">NOC</a>
//                       </li>
//                       <li>
//                         <a href="/services/vapt">VAPT</a>
//                       </li>
//                       <li>
//                         <a href="/services/threat">
//                           Threat Modelling & Risk Management
//                         </a>
//                       </li>
//                       <li>
//                         <a href="/services/cloud">Cloud Security</a>
//                       </li>
//                       <li>
//                         <a href="/services/simulate">
//                           Simulate Real-world Attack
//                         </a>
//                       </li>
//                       <li>
//                         <a href="/services/ciso">CISO As A Service</a>
//                       </li>
//                       <li>
//                         <a href="/services/ot_sceurity">OT/IOT Security</a>
//                       </li>
//                       <li>
//                         <a href="/services/privacy">
//                           Privacy, Regulation & Compliance
//                         </a>
//                       </li>
//                       <li>
//                         <a href="/services/cyber_security">
//                           Cyber Security Readiness Program
//                         </a>
//                       </li>
//                       <li>
//                         <a href="/services/business_continuity">
//                           Business Continuity Plan
//                         </a>
//                       </li>
//                     </ul>
//                     <div className="dropdown-btn">
//                       <span className="flaticon-arrow-right"></span>
//                     </div>
//                   </li>
//                   <li>
//                     <a href="/blog">Blog</a>
//                   </li>
//                   <li>
//                     <a href="/partners">Partners</a>
//                   </li>
//                   <li>
//                     <a href="/contact">Contact Us</a>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//       <div className="mobile-header">
//         <div className="logo">
//           <a href="/">
//             <Image
//               src="https://amfics.io/images/Amfics Logo.png"
//               alt=""
//               height={400}
//               width={400}
//             />
//           </a>
//         </div>
//         {/*Nav Box*/}
//         <div className="nav-outer clearfix">
//           <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
//             <span className="icon fa fa-bars" />
//           </div>
//         </div>
//       </div>

//       <div className="mobile-sticky-header">
//         <div className="logo">
//           <a href="/">
//             <Image
//               src="https://amfics.io/images/Amfics Logo.png"
//               alt=""
//               height={400}
//               width={400}
//             />
//           </a>
//         </div>
//         {/*Nav Box*/}
//         <div className="nav-outer clearfix">
//           <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
//             <span className="icon fa fa-bars" />
//           </div>
//         </div>
//       </div>

//       <div className="mobile-menu" ref={mobileMenuRef}>
//         <span className="mobile-menu-back-drop" onClick={handleBackdropClick} />
//         <div className="menu-outer">
//           <nav className="menu-box">
//             <div className="nav-logo">
//               <a href="/">
//                 <Image
//                   src="https://amfics.io/images/Amfics Logo.png"
//                   alt=""
//                   height={400}
//                   width={400}
//                 />
//               </a>
//             </div>
//             <div
//               className="collapse navbar-collapse show"
//               id="navbarSupportedContent">
//               <ul className="navigation clearfix">
//                 <li>
//                   <a href="/">Home</a>
//                 </li>
//                 <li>
//                   <a href="/about-us">About Us</a>
//                 </li>
//                 <li className="dropdown">
//                   <a href="/services">
//                     <span>Services</span>
//                   </a>
//                   <ul>
//                     <li>
//                       <a href="/services/soc">SOC</a>
//                     </li>
//                     <li>
//                       <a href="/services/noc">NOC</a>
//                     </li>
//                     <li>
//                       <a href="/services/vapt">VAPT</a>
//                     </li>
//                     <li>
//                       <a href="/services/threat">
//                         Threat Modelling &amp; Risk Management
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/services/cloud">Cloud Security</a>
//                     </li>
//                     <li>
//                       <a href="/services/simulate">
//                         Simulate Real-world Attack
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/services/ciso">CISO As A Service</a>
//                     </li>
//                     <li>
//                       <a href="/services/ot_sceurity">OT/IOT Security</a>
//                     </li>
//                     <li>
//                       <a href="/services/privacy">
//                         Privacy, Regulation &amp; Compliance
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/services/cyber_security">
//                         Cyber Security Readiness Program
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/services/business_continuity">
//                         Business Continuity Plan
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="/blog">Blog</a>
//                 </li>
//                 <li>
//                   <a href="/partners">Partners</a>
//                 </li>
//                 <li>
//                   <a href="/contact">Contact Us</a>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] =
    useState<boolean>(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] =
    useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    const body = document.body;
    if (!isMobileMenuOpen) {
      body.classList.add("mobile-menu-visible");
    } else {
      body.classList.remove("mobile-menu-visible");
    }
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen((prev) => !prev);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  // Close mobile menu on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    document.body.classList.remove("mobile-menu-visible");
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
        document.body.classList.remove("mobile-menu-visible");
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Cleanup body class on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove("mobile-menu-visible");
    };
  }, []);

  return (
    <div>
      <header className="main-header">
        <div className="main-box">
          <div className="menu-box">
            <div className="logo">
              <Link
                href="/"
                className="main-logo"
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src="/images/logo/Amfics Logo.png"
                  alt="Amfics Logo"
                  title="Amfics Logo"
                  height={400}
                  width={400}
                />
              </Link>
            </div>
            <div className="nav-outer">
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li
                      className="dropdown"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      <Link
                        href="/services"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0px",
                        }}
                        onClick={(e) => {
                          // Prevent default only if dropdown is open to allow navigation when closed
                          if (isServicesDropdownOpen) {
                            e.preventDefault();
                          }
                        }}>
                        <span>Services</span>
                        <i
                          className="fa-solid fa-chevron-down"
                          style={{ fontSize: "9px" }}></i>
                      </Link>
                      <ul
                        style={{
                          display: isServicesDropdownOpen ? "block" : "none",
                          height: "571px",
                          paddingTop: "17px",
                          marginTop: "8px",
                          paddingBottom: "17px",
                          marginBottom: "0px",
                        }}>
                        <li>
                          <Link href="/services/soc">SOC</Link>
                        </li>
                        <li>
                          <Link href="/services/noc">NOC</Link>
                        </li>
                        <li>
                          <Link href="/services/vapt">VAPT</Link>
                        </li>
                        <li>
                          <Link href="/services/threat">
                            Threat Modelling & Risk Management
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/cloud">Cloud Security</Link>
                        </li>
                        <li>
                          <Link href="/services/simulate">
                            Simulate Real-world Attack
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/ciso">CISO As A Service</Link>
                        </li>
                        <li>
                          <Link href="/services/ot_sceurity">
                            OT/IOT Security
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/privacy">
                            Privacy, Regulation & Compliance
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/cyber_security">
                            Cyber Security Readiness Program
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/business_continuity">
                            Business Continuity Plan
                          </Link>
                        </li>
                      </ul>
                      <div className="dropdown-btn">
                        <span className="flaticon-arrow-right"></span>
                      </div>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/partners">Partners</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="service_wrapper">
              <p>Have Any Questions?</p>
              <Link
                href="https://wa.me/+919980789911"
                target="_blank"
                className="icon flaticon-whatsapp"
                rel="noopener noreferrer">
                <IoLogoWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="sticky-header">
        <div className="main-box">
          <div className="menu-box">
            <div className="logo">
              <Link
                href="/"
                className="sticky-logo"
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src="https://amfics.io/images/Amfics Fav Icon.png"
                  alt="Amfics Fav Icon"
                  title="Amfics Fav Icon"
                  height={400}
                  width={400}
                />
              </Link>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li
                    className="dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <Link
                      href="/services"
                      onClick={(e) => {
                        if (isServicesDropdownOpen) {
                          e.preventDefault();
                        }
                      }}>
                      <span>Services</span>
                    </Link>
                    <ul
                      style={{
                        display: isServicesDropdownOpen ? "block" : "none",
                        height: "571px",
                        paddingTop: "17px",
                        marginTop: "8px",
                        paddingBottom: "17px",
                        marginBottom: "0px",
                      }}>
                      <li>
                        <Link href="/services/soc">SOC</Link>
                      </li>
                      <li>
                        <Link href="/services/noc">NOC</Link>
                      </li>
                      <li>
                        <Link href="/services/vapt">VAPT</Link>
                      </li>
                      <li>
                        <Link href="/services/threat">
                          Threat Modelling & Risk Management
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cloud">Cloud Security</Link>
                      </li>
                      <li>
                        <Link href="/services/simulate">
                          Simulate Real-world Attack
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/ciso">CISO As A Service</Link>
                      </li>
                      <li>
                        <Link href="/services/ot_sceurity">
                          OT/IOT Security
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/privacy">
                          Privacy, Regulation & Compliance
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cyber_security">
                          Cyber Security Readiness Program
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/business_continuity">
                          Business Continuity Plan
                        </Link>
                      </li>
                    </ul>
                    <div className="dropdown-btn">
                      <span className="flaticon-arrow-right"></span>
                    </div>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/partners">Partners</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="mobile-header">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo/Amfics Logo.png"
              alt="Amfics Logo"
              height={400}
              width={400}
            />
          </Link>
        </div>
        <div className="nav-outer clearfix">
          <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
            <span className="icon fa fa-bars" />
          </div>
        </div>
      </div>

      <div className="mobile-sticky-header">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo/Amfics Logo.png"
              alt="Amfics Logo"
              height={400}
              width={400}
            />
          </Link>
        </div>
        <div className="nav-outer clearfix">
          <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
            <span className="icon fa fa-bars" />
          </div>
        </div>
      </div>

      <div className="mobile-menu" ref={mobileMenuRef}>
        <span className="mobile-menu-back-drop" onClick={handleBackdropClick} />
        <div className="menu-outer">
          <nav className="menu-box">
            <div className="nav-logo">
              <Link href="/">
                <Image
                  src="/images/logo/Amfics Logo.png"
                  alt="Amfics Logo"
                  height={400}
                  width={400}
                />
              </Link>
            </div>
            <div
              className="collapse navbar-collapse show"
              id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li>
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    onClick={() => setIsMobileMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                {/* <li
                  className={`dropdown ${isMobileServicesOpen ? "open" : ""}`}>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMobileServices();
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <span>Services</span>
                    <span className="dropdown-icon">
                      {isMobileServicesOpen ? "▲" : "▼"}
                    </span>
                  </a>
                  <ul
                    style={{
                      display: isMobileServicesOpen ? "block" : "none",
                      paddingLeft: "20px",
                    }}>
                    <li>
                      <a
                        href="/services/soc"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        SOC
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/noc"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        NOC
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/vapt"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        VAPT
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/threat"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        Threat Modelling &amp; Risk Management
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/cloud"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        Cloud Security
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/simulate"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        Simulate Real-world Attack
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/ciso"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        CISO As A Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/ot_sceurity"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        OT/IOT Security
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/privacy"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        Privacy, Regulation &amp; Compliance
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/cyber_security"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        Cyber Security Readiness Program
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/business_continuity"
                        onClick={() => setIsMobileMenuOpen(false)}>
                        Business Continuity Plan
                      </a>
                    </li>
                  </ul>
                </li> */}

                <li
                  className={`dropdown ${isMobileServicesOpen ? "open" : ""}`}>
                  <a
                    // href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMobileServices();
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}>
                    <span>Services</span>
                    <span className="dropdown-icon">
                      {/* {isMobileServicesOpen ? "▲" : "▼"} */}
                      {isMobileServicesOpen ? "▲" : "▼"}
                    </span>
                  </a>
                  <ul
                    style={{
                      display: isMobileServicesOpen ? "block" : "none",
                      paddingLeft: "20px",
                    }}>
                    <li>
                      <Link
                        href="/services"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href = "/services";
                          }, 100);
                        }}
                        style={{ fontWeight: "bold", color: "#007bff" }}>
                        Services Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/soc"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href = "/services/soc";
                          }, 100);
                        }}>
                        SOC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/noc"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href = "/services/noc";
                          }, 100);
                        }}>
                        NOC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/vapt"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href = "/services/vapt";
                          }, 100);
                        }}>
                        VAPT
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/threat"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href = "/services/threat";
                          }, 100);
                        }}>
                        Threat Modelling &amp; Risk Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/cloud"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href = "/services/cloud";
                          }, 100);
                        }}>
                        Cloud Security
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/simulate"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href = "/services/simulate";
                          }, 100);
                        }}>
                        Simulate Real-world Attack
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/ciso"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href = "/services/ciso";
                          }, 100);
                        }}>
                        CISO As A Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/ot_sceurity"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href = "/services/ot_sceurity";
                          }, 100);
                        }}>
                        OT/IOT Security
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/privacy"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href = "/services/privacy";
                          }, 100);
                        }}>
                        Privacy, Regulation &amp; Compliance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/cyber_security"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href = "/services/cyber_security";
                          }, 100);
                        }}>
                        Cyber Security Readiness Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/business_continuity"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setTimeout(() => {
                            window.location.href =
                              "/services/business_continuity";
                          }, 100);
                        }}>
                        Business Continuity Plan
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    onClick={() => setIsMobileMenuOpen(false)}>
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
