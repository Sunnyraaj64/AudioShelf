import React from "react";
import TextImg from "../assets/Images/ImageText.png";

const TextImglayout = () => {
  return (
    <>
      <div>
        <div className="grid lg:grid-cols-2 max-sm:p-5">
          <div className="max-w-[432px] m-auto">
            <h2 className="text-white text-[29px] font-bold">
              This Exclusive Offer Won't Come Again—Secure Unlimited Audiobook
              Access Now!
            </h2>
            <p className="text-white pt-5">
              With only 350 lifetime licenses available, time is ticking. Once
              they're gone, this opportunity vanishes forever.
            </p>
            <div className="mt-14">
              <button>
                <a
                  href="#"
                  className="bg-white text-black text-[13px] font-bold border border-black py-3 px-6 rounded-xl shadow-lg hover:shadow-xl mb-4 inline-block hover:bg-black hover:text-white hover:border-white transition-all duration-300 ease-in-out hover:scale-x-110"
                >
                  👉 YES! I Want Lifetime Access 👈
                </a>
              </button>
              <p className="text-white">Secure Your Lifetime Access Now</p>
            </div>
          </div>
          <div className="flex justify-end">
            <img className="h-[600px] w-[100%] max-sm:h-auto max-sm:mt-10" src={TextImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextImglayout;
