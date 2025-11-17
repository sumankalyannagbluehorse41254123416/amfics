import Slider from "../component/Slider";
import FunFactSection from "../component/FunFactSection";
// import CaseStudySection from "../component/CaseStudySection";
// import ProcessSection from "../component/ProcessSection";
import CallToAction from "../component/CallToActions";
// import CaseStudySectionServer from "@/component/serverComponent/CaseStudySectionServer";
import ProcessSectionServer from "@/component/serverComponent/ProcessSectionServer";
import Script from "next/script";
import Head from "next/head";
import CaseStudySection from "@/component/CaseStudySection";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="csrf-token"
          content="M3URPsHZD60yCOvG8lvzaJMqYUQGmjvUdJ5uunxP"
        />
        <title>Zeroiz | Protecting Your Business from Cyber Threats</title>
        <meta
          name="description"
          content="At Zeroiz, we offer a comprehensive range of network security services to protect your business from cyber threats. Our experienced team of security experts uses the latest technology to ensure your business stays secure. Contact us to learn more."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
        <link
          rel="shortcut icon"
          href="https://amfics.io/Amfics Fav Icon.png"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="https://amfics.io/favicon.ico"
          type="image/x-icon"
        />

        <meta
          name="google-site-verification"
          content="tqhCCXxZy5GsKp2H0C7WA_XAq53QdeDJyVCgAOdvWr8"
        />
      </Head>
      <Script
        id=""
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1YFM90GDJJ"
      />
      <Script
        id=""
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1YFM90GDJJ');
            `,
        }}
      />
      {/* <Header /> */}
      <Slider />
      <FunFactSection />
      {/* <CaseStudySection /> */}
      {/* <CaseStudySectionServer /> */}
      <CaseStudySection />
      {/* <ProcessSection /> */}
      <ProcessSectionServer />
      <CallToAction />
      {/* <Footer /> */}
      <div className="whatsapp fixed bottom-4 right-4">
        <a
          href="https://wa.me/9632012564"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-whatsapp text-4xl text-green-500"></i>
        </a>
      </div>
    </div>
  );
}
