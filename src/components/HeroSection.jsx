import PropTypes from "prop-types";

const HeroSection = ({
  heading,
  subheading,
  description,
  buttonText,
  buttonLink,
  waitlistText,
  imageSrc,
}) => {
  return (
    <>
      <div className="bg-black text-white flex items-center justify-center mt-28 mb-20">
        <div className="text-center max-w-2xl px-6">
          <div className="bg-[#141414] text-sm text-gray-300 px-4 py-2 rounded-full inline-block mb-6">
            {subheading}
          </div>
          <h1 className="text-4xl font-bold mb-6">{heading}</h1>
          <p className="text-white mb-8 max-w-[570px] m-auto">{description}</p>
          <button>
            <a
              href={buttonLink}
              className="bg-white text-black border border-black font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl mb-4 inline-block hover:bg-black hover:text-white hover:border-white transition-all duration-300 ease-in-out hover:scale-x-110"
            >
              {buttonText}
            </a>
          </button>
          <p className="text-gray-400 text-sm">
            {waitlistText} <span className="animate-pulse">🔥</span>
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto lg:my-20 max-sm:mb-10 max-sm:p-5">
        <img height="auto" src={imageSrc} alt="Hero Image" />
      </div>
    </>
  );
};

HeroSection.propTypes = {
  heading: PropTypes.node.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  waitlistText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default HeroSection;
