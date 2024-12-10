import ThanksImg from "../assets/Images/Thanks.png";
import vectorImg from "../assets/Images/VectorImg.png";

const Thankyou = () => {
  return (
    <>
      <div className="lg:my-20 max-sm:my-10">
        <div className="grid lg:grid-cols-2 max-w-[1200px] max-sm:p-5 m-auto lg:gap-[14rem] max-sm:gap-20">
          <div className=" items-center">
            <h2 className="text-white text-5xl font-bold">
              Thank You for <br /> Letting Us Be Part <br /> of Your Story!
            </h2>
            <p className="text-white mt-7">
              Every great story begins with a single step. We’re excited to help{" "}
              <br />
              you discover yours.
            </p>
            <div className="flex justify-end lg:mt-20">
              <img src={vectorImg} alt="" />
            </div>
            <button>
              <a
                href="#"
                className="bg-white text-black border border-black font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl mb-4 inline-block hover:bg-black hover:text-white hover:border-white transition-all duration-300 ease-in-out hover:scale-x-110"
              >
                Join The Waitlist
              </a>
            </button>
          </div>
          <div className="flex justify-end">
            <img className="h-[500px] max-sm:h-auto" src={ThanksImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
