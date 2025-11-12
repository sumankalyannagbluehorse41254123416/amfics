import Image from "next/image";
import Link from "next/link";
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section
      className="call-to-action"
      style={{
        backgroundImage: "url(../images/4.jpg)",
      }}>
      <div className="auto-container">
        <div className="content">
          <div className="sec-title-two">
            {/* <span className="icon flaticon-question-1" /> */}
            <span>
              <Image
                src="/images/communication.png"
                alt=""
                width={400}
                height={400}
              />
            </span>
            <h3>We’re Here To Help</h3>
            {/* <div class="text">Power your team with Zeroiz’s</div> */}
          </div>
          <div className="btn-box">
            <Link href="contact" className="theme-btn icon-btn-two">
              <span>Get help here</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
