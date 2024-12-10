import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../Assets/Images/AudioShelfLogo.png";
import "../css/navbar.css";
import PropTypes from 'prop-types';

const Navbar = ({
  scrollToWhyChoose,
  scrollToPricing,
  scrollToHowItWorks,
  scrollToFeatures,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="py-3 bg-[#242424] flex justify-center items-center">
        <p className="text-white text-center font-bold text-[12px]">
          Join the Waitlist for Early Access
        </p>
        <a href="">
          <button className="text-black bg-white border text-[12px] font-bold px-3 py-1 ml-3 rounded-[20px] hover:bg-black hover:border hover:border-white hover:text-white transition-all duration-300 ease-in-out hover:scale-x-110">
            Join The Waitlist
          </button>
        </a>
      </div>
      <div>
        <nav className="bg-black w-full start-0 z-2000">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={LogoImg} className="h-8" alt="" />
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
              <Link to="/signup">
                <button
                  type="button"
                  className="text-white rounded-[20px] bg-[#171717] cursor-pointer focus:outline-none font-bold  text-sm px-5 py-2 hover:scale-110 transition ease-in-out text-center max-sm:hidden"
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  type="button"
                  className="text-black rounded-[20px] bg-white cursor-pointer focus:outline-none font-bold  text-sm px-5 py-2 hover:scale-110 transition ease-in-out text-center max-sm:hidden"
                >
                  Signup
                </button>
              </Link>
              <button
                onClick={toggleNavbar}
                type="button"
                className="text-white bg-customBlue hover:bg-customBlue focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center md:hidden"
              >
                {isOpen ? (
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } items-center justify-between w-full md:flex md:w-auto md:order-1`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-md bg-customRed text-[#D4D4D4] rounded md:bg-transparent md:hover:text-customRed md:p-0 "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    onClick={scrollToWhyChoose}
                    className="block py-2 px-3 text-md bg-customRed text-[#D4D4D4] rounded md:bg-transparent md:hover:text-customRed md:p-0 "
                    aria-current="page"
                  >
                    Why Choose Us
                  </button>
                </li>

                <li>
                  <button
                    onClick={scrollToPricing}
                    className="block py-2 px-3 text-md text-[#D4D4D4] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customRed md:p-0"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollToHowItWorks}
                    className="block py-2 px-3 text-md text-[#D4D4D4]  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customRed md:p-0"
                  >
                    How does it work
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollToFeatures}
                    className="block py-2 px-3 text-md text-[#D4D4D4] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customRed md:p-0 md:dark:hover:text-blue-500"
                  >
                    Features
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};


Navbar.propTypes = {
  scrollToPricing: PropTypes.func.isRequired, 
  scrollToWhyChoose: PropTypes.func.isRequired,
  scrollToHowItWorks: PropTypes.func.isRequired,
  scrollToFeatures: PropTypes.func.isRequired,
};
export default Navbar;
