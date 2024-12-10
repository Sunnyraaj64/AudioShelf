import { useRef } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Form from "../components/Form";
import WhyChoose from "../components/WhyChoose";
import ContentTable from "../components/ContentTable";
import SubscriptionTable from "../components/SubscriptionTable";
import AudioBook from "../components/AudioBook";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import ImageContent from "../components/ImageContent";

import LanguageLogo from "../assets/Images/FormLogos/language.png";
import CloudLogo from "../assets/Images/FormLogos/cloud-download.png";
import VectorLogo from "../assets/Images/FormLogos/Vector.png";
import MoniterLogo from "../assets/Images/FormLogos/monitor.png";
import HeroImg from "../assets/Images/heroImg.png";

const HomePage = () => {
  const whyChooseRef = useRef(null);
  const formRef = useRef(null);
  const pricingRef = useRef(null);
  const howItWorksRef = useRef(null);
  const featureRef = useRef(null);

  const scrollToWhyChoose = () => {
    if (whyChooseRef.current) {
      whyChooseRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToFeatures = () => {
    if (featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        scrollToWhyChoose={scrollToWhyChoose}
        scrollToPricing={scrollToPricing}
        scrollToHowItWorks={scrollToHowItWorks}
        scrollToFeatures={scrollToFeatures} 
      />
      <HeroSection
        subheading="Your Go-To Audiobook Maker"
        heading={
          <>
            Convert <span className="text-gray-300">.epub</span> books into
            high-quality
            <span className="text-gray-300">.mp3</span> audiobooks in minutes
          </>
        }
        description="With AudioShelf, you can convert any .epub book into an audiobook fast. Old books, new ones, or even self-published titles—you name it! It’s easy, quick, and you get to pick how you want to listen."
        buttonText="Join The Waitlist"
        buttonLink="#"
        waitlistText="Join the Waitlist for Early Access"
        imageSrc={HeroImg}
        scrollToForm={scrollToForm}
      />

      <div ref={formRef}>
        <Form />
      </div>
      <div ref={whyChooseRef}>
        <WhyChoose />
      </div>
      <div ref={pricingRef}>
        <ContentTable />
      </div>

      <SubscriptionTable />
      <div ref={howItWorksRef}>
        <AudioBook />
      </div>

      <div ref={featureRef}>
        <div>
          <h3 className="text-center mb-10 mt-20 text-white text-4xl font-bold">
            Exciting Features Coming Soon!
          </h3>
          <div className="mb-20 max-w-[1200px] m-auto max-sm:flex md:flex md:justify-center max-sm:justify-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 gap-4">
              <Cards
                img={LanguageLogo}
                heading="Multi-language Support"
                paragraph="Listen in Your Language: Upload books in many major languages."
              />
              <Cards
                img={CloudLogo}
                heading="More Download Options"
                paragraph="Different File Formats: Get your audiobooks in .m4a, .wav, .flac, and more."
              />
              <Cards
                img={VectorLogo}
                heading="More Upload Formats"
                paragraph="Not Just .epub: Soon you can upload .pdf, .docx, .txt files too."
              />
              <Cards
                img={MoniterLogo}
                heading="Desktop & Mobile App"
                paragraph="Listen Offline: Use the desktop & mobile app to enjoy your audiobooks anywhere."
              />
            </div>
          </div>
        </div>
      </div>
      <ImageContent />
      <Footer />
    </>
  );
};

export default HomePage;
