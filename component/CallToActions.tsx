import React from "react";

const CallToAction: React.FC = () => {
  return (
 <section className="call-to-action" style={{backgroundImage: 'url(https://amfics.io/images/background/4.jpg)'}}>
  <div className="auto-container">
    <div className="content">
      <div className="sec-title-two">
        {/* <span className="icon flaticon-question-1" /> */}
       <span><img src="/images/communication.png" alt="" /></span> 
        <h3>We’re Here To Help</h3>
        {/* <div class="text">Power your team with Zeroiz’s</div> */}
      </div>
      <div className="btn-box">
        <a href="contact" className="theme-btn icon-btn-two"><span>Get help here</span><i className="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
</section>

  );
};

export default CallToAction;
