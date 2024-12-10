import React from "react";
import VSIMG from "../assets/Images/VS.png";

const PricingDeal = () => {
  return (
    <>
      <div className="max-w-[800px] m-auto pt-20">
        <h1 className="lg:text-4xl text-white uppercase text-center pb-10 font-bold ">
          AudioShelf Regular <br /> Pricing vs. Lifetime Deal
        </h1>
        <div className="grid lg:grid-cols-2 items-center mb-4 gap-5 relative max-sm:p-5">
          <div className="bg-[#262626] p-8 rounded-[10px] h-[430px] max-sm:h-[500px]">
            <h3 className="text-white text-[23px] font-semibold">
              Regular Pay-As-You-Go Users
            </h3>
            <div className="mt-5">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 512 512"
                  className="mr-3 h-[13px]"
                >
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    fill="#10b981"
                  />
                </svg>
                <p className="text-[#a3a3a3] font-bold text-[14px]">
                  Launch Date:
                  <span className="text-white font-semibold"> Early 2025</span>
                </p>
              </div>
              <div className="flex items-center pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 512 512"
                  className="mr-3 h-[13px]"
                >
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    fill="#10b981"
                  />
                </svg>
                <p className="text-[#a3a3a3] font-bold text-[14px]">
                  Minimum Deposit:
                  <span className="text-white font-semibold">
                    $25 per transaction
                  </span>
                </p>
              </div>
              <div className="flex items-center pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 512 512"
                  className="mr-3 h-[13px]"
                >
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    fill="#10b981"
                  />
                </svg>
                <p className="text-[#a3a3a3] font-bold text-[14px]">
                  Cost per Character:
                  <span className="text-white font-semibold"> $0.000025</span>
                </p>
              </div>
              <div className="flex items-center pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 512 512"
                  className="mr-3 h-[13px]"
                >
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    fill="#10b981"
                  />
                </svg>
                <p className="text-white font-bold text-[14px]">
                  Example Costs
                </p>
              </div>
              <ul className="p-5">
                <li className="list-disc text-[#a3a3a3]">
                  <p className="text-[#a3a3a3] font-bold">
                    Short Book (250,000 characters):
                    <span className="text-white font-semibold"> $6.25</span>
                  </p>
                </li>
                <li className="list-disc text-[#a3a3a3]">
                  <p className="text-[#a3a3a3] font-bold">
                    Medium Book (500,000 characters):
                    <span className="text-white font-semibold"> $12.50</span>
                  </p>
                </li>
                <li className="list-disc text-[#a3a3a3]">
                  <p className="text-[#a3a3a3] font-bold">
                    Long Book (750,000 characters):
                    <span className="text-white font-semibold"> $18.75</span>
                  </p>
                </li>
                <li className="list-disc text-[#a3a3a3]">
                  <p className="text-[#a3a3a3] font-bold">
                    Epic Read (1,000,000 characters):
                    <span className="text-white font-semibold"> $25</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute left-[375px] top-[130px]">
            <img src={VSIMG} alt="" />
          </div>
          <div className="bg-[#262626] p-8 rounded-[10px] h-[430px]">
            <h3 className="text-white text-[23px] font-semibold">
              Lifetime Deal Holders (You)
            </h3>
            <div className="mt-5">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 512 512"
                  className="mr-3 h-[13px]"
                >
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    fill="#10b981"
                  />
                </svg>
                <p className="text-[#a3a3a3] font-bold text-[16px]">
                  One-Time Payment:
                  <span className="text-white font-semibold"> $299</span>
                </p>
              </div>
              <div className="flex items-center pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 512 512"
                  className="mr-3 h-[13px]"
                >
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    fill="#10b981"
                  />
                </svg>
                <p className="text-[#a3a3a3] font-bold text-[16px]">
                  Unlimited Conversions:
                  <span className="text-white font-semibold">
                    No per- character costs
                  </span>
                </p>
              </div>
              <div className="flex items-center pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 512 512"
                  className="mr-3 h-[13px]"
                >
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    fill="#10b981"
                  />
                </svg>
                <p className="text-[#a3a3a3] font-bold text-[16px]">
                  No Minimum Deposits:
                  <span className="text-white font-semibold">
                    {" "}
                    Convert any book anytime after launch
                  </span>
                </p>
              </div>
              <div className="flex items-center pt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 512 512"
                  className="mr-3 h-[13px]"
                >
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    fill="#10b981"
                  />
                </svg>
                <p className="text-[#a3a3a3] font-bold text-[16px]">
                  No Minimum Deposits:
                  <span className="text-white font-semibold">
                    {" "}
                    Convert any book anytime after launch
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingDeal;
