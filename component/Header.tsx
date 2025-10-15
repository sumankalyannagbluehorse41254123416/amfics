"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] =
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
              <a
                href="https://amfics.io"
                className="main-logo"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="https://amfics.io/images/Amfics Logo.png"
                  alt="Amfics Logo"
                  title="Amfics Logo"
                />
              </a>
            </div>
            <div className="nav-outer">
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li>
                      <a href="https://amfics.io">Home</a>
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li
                      className="dropdown"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                       <a href="https://amfics.io/services" style={{display:"flex"}}>
                        <span>Services</span>
                        <i className="fa-solid fa-chevron-down"></i>
                      </a>
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
                          <a href="https://amfics.io/services/soc">SOC</a>
                        </li>
                        <li>
                          <a href="https://amfics.io/services/noc">NOC</a>
                        </li>
                        <li>
                          <a href="https://amfics.io/services/vapt">VAPT</a>
                        </li>
                        <li>
                          <a href="https://amfics.io/services/threat">
                            Threat Modelling & Risk Management
                          </a>
                        </li>
                        <li>
                          <a href="https://amfics.io/services/cloud">
                            Cloud Security
                          </a>
                        </li>
                        <li>
                          <a href="https://amfics.io/services/simulate">
                            Simulate Real-world Attack
                          </a>
                        </li>
                        <li>
                          <a href="https://amfics.io/services/ciso">
                            CISO As A Service
                          </a>
                        </li>
                        <li>
                          <a href="https://amfics.io/services/ot_sceurity">
                            OT/IOT Security
                          </a>
                        </li>
                        <li>
                          <a href="https://amfics.io/services/privacy">
                            Privacy, Regulation & Compliance
                          </a>
                        </li>
                        <li>
                          <a href="https://amfics.io/services/cyber_security">
                            Cyber Security Readiness Program
                          </a>
                        </li>
                        <li>
                          <a href="https://amfics.io/services/business_continuity">
                            Business Continuity Plan
                          </a>
                        </li>
                      </ul>
                      <div className="dropdown-btn">
                        <span className="flaticon-arrow-right"></span>
                      </div>
                    </li>
                    <li>
                      <a href="https://amfics.io/blog">Blog</a>
                    </li>
                    <li>
                      <a href="https://amfics.io/patrons">Partners</a>
                    </li>
                    <li>
                      <a href="https://amfics.io/contact">Contact Us</a>
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
              {/* <a
                href="https://wa.me/+919980789911"
                target="_blank"
                className="icon flaticon-whatsapp"
                rel="noopener noreferrer">
                <i className="fa fa-whatsapp"></i>
                <IoLogoWhatsapp />
              </a> */}
            </div>
          </div>
        </div>
      </header>

      <div className="sticky-header">
        <div className="main-box">
          <div className="menu-box">
            <div className="logo">
              <a
                href="https://amfics.io"
                className="sticky-logo"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="https://amfics.io/images/Amfics Fav Icon.png"
                  alt="Amfics Fav Icon"
                  title="Amfics Fav Icon"
                />
              </a>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navigation clearfix">
                  <li>
                    <a href="https://amfics.io">Home</a>
                  </li>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li
                    className="dropdown"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <a href="https://amfics.io/services">
                      <span>Services</span>
                    </a>
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
                        <a href="https://amfics.io/services/soc">SOC</a>
                      </li>
                      <li>
                        <a href="https://amfics.io/services/noc">NOC</a>
                      </li>
                      <li>
                        <a href="https://amfics.io/services/vapt">VAPT</a>
                      </li>
                      <li>
                        <a href="https://amfics.io/services/threat">
                          Threat Modelling & Risk Management
                        </a>
                      </li>
                      <li>
                        <a href="https://amfics.io/services/cloud">
                          Cloud Security
                        </a>
                      </li>
                      <li>
                        <a href="https://amfics.io/services/simulate">
                          Simulate Real-world Attack
                        </a>
                      </li>
                      <li>
                        <a href="https://amfics.io/services/ciso">
                          CISO As A Service
                        </a>
                      </li>
                      <li>
                        <a href="https://amfics.io/services/ot_sceurity">
                          OT/IOT Security
                        </a>
                      </li>
                      <li>
                        <a href="https://amfics.io/services/privacy">
                          Privacy, Regulation & Compliance
                        </a>
                      </li>
                      <li>
                        <a href="https://amfics.io/services/cyber_security">
                          Cyber Security Readiness Program
                        </a>
                      </li>
                      <li>
                        <a href="https://amfics.io/services/business_continuity">
                          Business Continuity Plan
                        </a>
                      </li>
                    </ul>
                    <div className="dropdown-btn">
                      <span className="flaticon-arrow-right"></span>
                    </div>
                  </li>
                  <li>
                    <a href="https://amfics.io/blog">Blog</a>
                  </li>
                  <li>
                    <a href="https://amfics.io/patrons">Partners</a>
                  </li>
                  <li>
                    <a href="https://amfics.io/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="mobile-header">
        <div className="logo">
          <a href="https://amfics.io">
            <img src="https://amfics.io/images/Amfics Logo.png" />
          </a>
        </div>
        {/*Nav Box*/}
        <div className="nav-outer clearfix">
          <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
            <span className="icon fa fa-bars" />
            {/* <span className="icon flaticon-target" /> */}
            {/* Icon Family Classic Select an Icon Style */}
            {/* <FontAwesomeIcon icon={fas["bars"]} /> */}
          </div>
        </div>
      </div>

      <div className="mobile-sticky-header">
        <div className="logo">
          <a href="https://amfics.io">
            <img src="https://amfics.io/images/Amfics Logo.png" />
          </a>
        </div>
        {/*Nav Box*/}
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
              <a href="https://amfics.io">
                <img src="https://amfics.io/images/Amfics Logo.png" />
              </a>
            </div>
            <div
              className="collapse navbar-collapse show"
              id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li>
                  <a href="https://amfics.io">Home</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li className="dropdown">
                  <a href="https://amfics.io/services">
                    <span>Services</span>
                  </a>
                  <ul>
                    <li>
                      <a href="https://amfics.io/services/soc">SOC</a>
                    </li>
                    <li>
                      <a href="https://amfics.io/services/noc">NOC</a>
                    </li>
                    <li>
                      <a href="https://amfics.io/services/vapt">VAPT</a>
                    </li>
                    <li>
                      <a href="https://amfics.io/services/threat">
                        Threat Modelling &amp; Risk Management
                      </a>
                    </li>
                    <li>
                      <a href="https://amfics.io/services/cloud">
                        Cloud Security
                      </a>
                    </li>
                    <li>
                      <a href="https://amfics.io/services/simulate">
                        Simulate Real-world Attack
                      </a>
                    </li>
                    <li>
                      <a href="https://amfics.io/services/ciso">
                        CISO As A Service
                      </a>
                    </li>
                    <li>
                      <a href="https://amfics.io/services/ot_sceurity">
                        OT/IOT Security
                      </a>
                    </li>
                    <li>
                      <a href="https://amfics.io/services/privacy">
                        Privacy, Regulation &amp; Compliance
                      </a>
                    </li>
                    <li>
                      <a href="https://amfics.io/services/cyber_security">
                        Cyber Security Readiness Program
                      </a>
                    </li>
                    <li>
                      <a href="https://amfics.io/services/business_continuity">
                        Business Continuity Plan
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://amfics.io/blog">Blog</a>
                </li>
                <li>
                  <a href="https://amfics.io/patrons">Partners</a>
                </li>
                <li>
                  <a href="https://amfics.io/contact">Contact Us</a>
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
