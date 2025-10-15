interface Fact {
  icon: string;
  count: string;
  text: string;
  color: string;
}

const FunFactSection: React.FC = () => {
  const facts: Fact[] = [
    {
      icon: "fa fa-bullseye",
      count: "20%",
      text: "Credential Compromise",
      color: "bg-blue-200",
    },
    {
      icon: "fa fa-shield",
      count: "10%",
      text: "Ransomware upward trend",
      color: "bg-pink-200",
    },
    {
      icon: "fa fa-cog",
      count: "$4.35M",
      text: "Average total cost of a data breach",
      color: "bg-blue-300",
    },
    {
      icon: "fa fa-database",
      count: "15%",
      text: "More than one Data Breach",
      color: "bg-orange-200",
    },
  ];

  return (
    <section className="fun-fact-section">
      <div className="auto-container">
        <div className="fact-counter">
          <div className="row clearfix">
            {/*Column*/}
            <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              <div className="inner-column">
                <span className="icon  bg_sky">
                  <img src="/images/target.png" alt="" />
                </span>
                <div className="count-box counted"><span className="count-text" data-speed={3000} data-stop={53}>53</span>%</div>
                <div className="text">Credential Compromise </div>
              </div>
            </div>
            {/*Column*/}
            <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="400ms" style={{ visibility: 'visible', animationDelay: '400ms', animationName: 'fadeInUp' }}>
              <div className="inner-column">
                <span className="icon bg_pink">
                  <img src="/images/pen-tool.png" alt="" />
                </span>
                <div className="count-box counted"><span className="count-text" data-speed={3000} data-stop={13}>13</span>%</div>
                <div className="text">Ransomware upward trend </div>
              </div>
            </div>
            {/*Column*/}
            <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="800ms" style={{ visibility: 'visible', animationDelay: '800ms', animationName: 'fadeInUp' }}>
              <div className="inner-column">
                <span className="icon bg_blue">
                <img src="/images/customer-support.png" alt="" />
                </span>
                <div className="count-box counted"><span className="count-text">$ 4.35 </span> M</div>
                <div className="text">Average total cost of a data breach</div>
              </div>
            </div>
            {/*Column*/}
            <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="1200ms" style={{ visibility: 'visible', animationDelay: '1200ms', animationName: 'fadeInUp' }}>
              <div className="inner-column">
                <span className="icon bg_orange">
                  <img src="/images/space.png" alt="" />
                  </span>
                <div className="count-box counted"><span className="count-text" data-speed={3000} data-stop={83}>83</span>%</div>
                <div className="text">More than one Data Breach </div>
              </div>
            </div>
          </div>
        </div>
        {/*
  <div class="row">
    <div class="quot-column col-lg-6 col-md-12 col-sm-12">
      <blockquote class="quote-style-one">
        <span class="icon flaticon-lightbulb"></span>
        <p>Businesses today cross borders and regions, so you need a service provider that goes where you.</p>
        <a href="#" class="author">John Doe</a>
      </blockquote>
      <div class="divider"></div>
    </div>
    <div class="text-column col-lg-6 col-md-12 col-sm-12">
      <div class="text">Assertively brand ethical meta-services after fully tested customer service. Completely orchestrate intuitive communities through superior markets. Efficiently leverage other’s out-of-the-box.</div>
    </div>
  </div> */}
      </div>
    </section>

  );
};

export default FunFactSection;
