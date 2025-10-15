import Link from "next/link";

const CallToAction: React.FC = () => {
  return (
    <section
      className="call-to-action py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url(https://amfics.io/images/background/4.jpg)",
      }}>
      <div className="auto-container container mx-auto px-4 text-center">
        <div className="content">
          <div className="sec-title-two">
            <span className="icon fa fa-question-circle text-4xl text-white"></span>
            <h3 className="text-3xl font-bold text-white mt-4">
              We’re Here To Help
            </h3>
          </div>
          <div className="btn-box mt-6">
            <Link
              href="/contact"
              className="theme-btn bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
              Get help here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
