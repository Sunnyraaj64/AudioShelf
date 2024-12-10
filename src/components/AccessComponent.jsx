import React from "react";
import SideImg from "../assets/Images/image.png";

const AccessComponent = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto bg-[#111] my-20 rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-between text-white">
          <div className="md:w-1/2 max-sm:mt-10 space-y-4 px-7">
            <h1 className="text-[1.9rem] font-bold">
              Ready to Transform Your Audiobook Experience Forever?
            </h1>
            <p className="text-lg text-gray-300">
              Secure Your Lifetime Access Now
            </p>
            <div className="mt-14">
              <a
                href="#"
                className="bg-white text-black font-bold border border-black py-2 px-6 rounded-full shadow-lg hover:shadow-xl mb-4 inline-block hover:bg-black hover:text-white hover:border-white transition-all duration-300 ease-in-out hover:scale-x-110"
              >
                👉 YES! I Want Lifetime Access 👈
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full rounded-lg overflow-hidden">
              <img
                src={SideImg}
                alt="Dashboard Preview"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessComponent;
