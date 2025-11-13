// "use client";

// import ContactFormSection from "@/component/ContactUs";
// import Image from "next/image";
// import React from "react";

// const ContactPage: React.FC = () => {
//   return (
//     <>
//       {/* Page Title */}
//       <section
//         className="page-title about_box"
//         style={
//           {
//             // backgroundImage: "url(/images/background/about_us.jpg)",
//           }
//         }>
//         <div className="auto-container about_title">
//           <h1>Contact</h1>
//           <span className="title_divider"></span>
//         </div>
//       </section>

//       {/* Global Section */}
//       <section className="news-section global_section">
//         <div className="auto-container">
//           <div className="sec-title text-center">
//             <span className="icon">
//               <Image src="" alt="" width={64} height={64} />
//             </span>
//             <h3>Global Footprint</h3>
//             <div className="text footprint_text">
//               Cyber security is the practice of defending computers, servers,
//               mobile devices, electronic systems, networks, and data from
//               malicious attacks. It's also known as information technology
//               security or electronic information security. The term applies in a
//               variety of contexts, from business to mobile computing, and can be
//               divided into a few common categories.
//             </div>
//             {/*
//             <div className="global">
//               <Image
//                 src="/images/background/globe.png"
//                 alt="Global Map"
//                 width={600}
//                 height={400}
//               />
//             </div>
//             */}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="contact-form-section">
//         <div className="auto-container">
//           <div className="row info-outer">
//             <div className="contact-info-block col-lg-12">
//               <div className="inner-box">
//                 {/*
//                 <div className="thumb">
//                   <Image
//                     src="/images/resource/profile_image.jpg"
//                     alt="Profile"
//                     width={200}
//                     height={200}
//                   />
//                 </div>
//                 */}
//                 <span className="name">Amfics Cybersecurity</span>
//                 <span className="info">
//                   #159, Ground Floor, 2nd Cross Veeranapalya, Bengaluru,
//                   Karnataka, India - 560045,
//                   <br /> +91 9980789911
//                 </span>

//                 <div className="map_box">
//                   <p>
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0361656221644!2d77.59573587897032!3d13.033368954509891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a665a7e941%3A0xb7412c12063d17f3!2s2nd%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560045!5e0!3m2!1sen!2sin!4v1681820933271!5m2!1sen!2sin"
//                       width="100%"
//                       height="300"
//                       style={{ border: 0 }}
//                       allowFullScreen
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"></iframe>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <ContactFormSection />
//         </div>
//       </section>
//     </>
//   );
// };

// export default ContactPage;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactFormSection from "@/component/ContactUs";
import { fetchPageData } from "../action/page";

interface PageData {
  status: boolean;
  pagedata: {
    id: number;
    title: string;
    cover_image_url: string;
  };
  pageItemdataWithSubsection: Array<{
    id: number;
    title: string;
    shortDescription: string;
    image: string;
    subsections: unknown[];
  }>;
}

const ContactPage: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPageData = async () => {
      try {
        const uid = "6b3b4b52-c7f2-465f-94b9-480b7a3a595b";
        const data = await fetchPageData(uid);
        if (data && data.status) {
          setPageData(
            (data as unknown as PageData) || pageItemdataWithSubsection
          );
        } else {
          setPageData(null);
        }
      } catch (err) {
        console.error("Error fetching Contact page:", err);
        setPageData(null);
      } finally {
        setLoading(false);
      }
    };

    loadPageData();
  }, []);

  if (loading) return <p className="text-center py-5">Loading...</p>;
  if (!pageData) return <p className="text-center py-5">No page data found.</p>;

  const { pagedata, pageItemdataWithSubsection } = pageData;

  return (
    <>
      {/* Page Title Section */}
      <section
        className="page-title about_box"
        style={{
          backgroundImage: `url(${pagedata.cover_image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="auto-container about_title">
          <h1>{pagedata.title}</h1>
          <span className="title_divider"></span>
        </div>
      </section>
      {pageItemdataWithSubsection.map((section) =>
        section.title === "Global Footprint" ? (
          <section
            key={section.id}
            className="news-section global_section py-5">
            <div className="auto-container">
              <div className="sec-title text-center">
                {section.image && (
                  <span className="icon">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={64}
                      height={64}
                    />
                  </span>
                )}
                <h3>{section.title}</h3>
                {section.shortDescription && (
                  <div
                    className="text footprint_text"
                    dangerouslySetInnerHTML={{
                      __html: section.shortDescription,
                    }}
                  />
                )}
              </div>
            </div>
          </section>
        ) : (
          ""
        )
      )}

      {/* Contact Form Section */}
      <section className="contact-form-section py-5">
        <div className="auto-container">
          <div className="row info-outer">
            {pageItemdataWithSubsection
              .filter((s) => s.title.toLowerCase().includes("cybersecurity"))
              .map((info) => (
                <div key={info.id} className="contact-info-block col-lg-12">
                  <div className="inner-box">
                    <span className="name">{info.title}</span>
                    <span
                      className="info"
                      dangerouslySetInnerHTML={{
                        __html: info.shortDescription,
                      }}
                    />
                    <div className="map_box mt-3">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0361656221644!2d77.59573587897032!3d13.033368954509891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a665a7e941%3A0xb7412c12063d17f3!2s2nd%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka%20560045!5e0!3m2!1sen!2sin!4v1681820933271!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <ContactFormSection />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
