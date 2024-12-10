import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import HeroImg from "../assets/Images/hero-layout.png";
import TextLayout from "../components/TextLayout";
import Cards from "../components/Cards";
import timerlogo from "../assets/Images/FormLogos/timer.png";
import chatlogo from "../assets/Images/FormLogos/chat.png";
import dollarlogo from "../assets/Images/FormLogos/dollar.png";
import benefitlogo from "../assets/Images/FormLogos/benefit.png";
import CloudComponent from "../components/CloudComponent";
import FAQAccordion from "../components/FaqAccordion";
import LayoutTable from "../components/LayoutTable";
import AccessComponent from "../components/AccessComponent";
import Footer from "../components/Footer";
import PricingDeal from "../components/PricingDeal";
import FeatureCard from "../components/FeatureCard";
import conversationlogo from "../assets/Images/FormLogos/conversation.png";
import starlogo from "../assets/Images/FormLogos/star.png";
import updatelogo from "../assets/Images/FormLogos/update.png";
import chatboxlogo from "../assets/Images/FormLogos/chatbox.png";
import Unionlogo from "../assets/Images/FormLogos/Union.png";
import moneybacklogo from "../assets/Images/FormLogos/moneyback.png";
import TextImglayout from "../components/TextImglayout";
import Savingstable from "../components/Savingstable";
import LifetimeDeal from "../components/LifetimeDeal";

const Layout = () => {
  const features = [
    {
      label: "No Per-Character Charges",
      value: "Convert any number of books without additional costs",
    },
    {
      label: "No Minimum Deposits",
      value: "Forget about topping up your account",
    },
  ];
  const features2 = [
    {
      label: "All Voices and Languages",
      value: "Access every voice option available",
    },
    {
      label: "Future Features",
      value: "Receive all upcoming features at no extra charge",
    },
  ];
  const features3 = [
    {
      label: "Continuous Enhancements",
      value: "Enjoy new updates and improvements for life",
    },
    {
      label: "Upcoming Features",
      value:
        "Multi-language support, more file formats, background sounds, desktop & mobile apps",
    },
  ];
  const features4 = [
    {
      label: "Private Feedback Page",
      value: "Directly influence the development of AudioShelf",
    },
    {
      label: "Request Features and Changes",
      value: "Your ideas shape the software",
    },
    {
      label: "Priority Implementation",
      value: "Your suggestions are considered first",
    },
  ];
  const features5 = [
    {
      label: "Dedicated Assistance",
      value: "Get help faster with VIP customer service",
    },
    {
      label: "Exclusive Community",
      value: "Join a select group of lifetime members",
    },
  ];
  const features6 = [
    {
      label: "Risk-Free Investment",
      value:
        "If you're not satisfied within 30 days after launch, we'll refund your money—no questions asked",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection
        subheading="Your Go-To Audiobook Maker"
        heading={
          <>
            Pre-Launch Limited-Time Offer <br /> Lifetime Access to AudioShelf
            for Only $299!
          </>
        }
        description={
          "You’re one step away from unlimited audiobook creation. Act early to secure lifetime access and become a founding member of AudioShelf!"
        }
        buttonText="Get Lifetime Access"
        imageSrc={HeroImg}
      />
      <TextLayout />
      <LifetimeDeal />
      <PricingDeal />
      <Savingstable />
      <div className="max-w-[1200px] m-auto my-20">
        <h2 className="text-white text-4xl mb-10 text-center font-bold">
          Exciting Features Coming Soon!
        </h2>
        <div className="grid lg:grid-cols-3 gap-5 max-sm:p-5">
          <FeatureCard
            title="Unlimited Conversions (Upon Launch in Early 2025)"
            features={features}
            icon={conversationlogo}
          />
          <FeatureCard
            title="Full Access to All Features"
            features={features2}
            icon={starlogo}
          />
          <FeatureCard
            title="Lifetime Update"
            features={features3}
            icon={updatelogo}
          />
          <FeatureCard
            title="Exclusive Feedback Privileges"
            features={features4}
            icon={chatboxlogo}
          />
          <FeatureCard
            title="VIP Support"
            features={features5}
            icon={Unionlogo}
          />
          <FeatureCard
            title="30-Day Money-Back Guarantee (After Launch)"
            features={features6}
            icon={moneybacklogo}
          />
        </div>
      </div>
      <TextImglayout />
      <div>
        <h3 className="text-center mb-10 mt-20 text-white lg:text-4xl max-sm:text-2xl font-bold">
          Why You Need to Act Now
        </h3>
        <div className="mb-20 max-w-[1200px] m-auto max-sm:flex md:flex md:justify-center max-sm:justify-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 gap-4">
            <Cards
              img={timerlogo}
              heading="Limited Quantity"
              paragraph="Only 350 people will ever get this deal"
            />
            <Cards
              img={chatlogo}
              heading="Influence the Future"
              paragraph="Your feedback will directly shape AudioShelf"
            />
            <Cards
              img={dollarlogo}
              heading="Avoid Future Costs"
              paragraph="Regular users will have ongoing costs and minimum deposits"
            />
            <Cards
              img={benefitlogo}
              heading="Exclusive Benefits"
              paragraph="Lifetime access holders get perks that others won't"
            />
          </div>
        </div>
      </div>
      <LayoutTable />
      <AccessComponent />
      <FAQAccordion />
      <CloudComponent />
      <Footer />
    </>
  );
};

export default Layout;
