import rightlayout from "../assets/Images/right-layout.png";

const TextLayout = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto lg:py-14">
        <div className="grid lg:grid-cols-3 gap-10 max-sm:p-4">
          <div className="lg:col-span-1 text-white">
            <h1 className="text-[2.10rem] font-bold">
              Why Keep Paying for Audiobooks?{" "}
            </h1>
            <p className="py-2">Pay Once — Enjoy Unlimited Use Forever</p>
            <ul>
              <li>
                <div className="flex items-center pt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 512 512"
                    className="mr-3"
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      fill="#10b981"
                    />
                  </svg>
                  <span>Unlimited Audiobook Conversions Upon Launch</span>
                </div>
              </li>
              <li>
                <div className="flex items-center pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 512 512"
                    className="mr-3"
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      fill="#10b981"
                    />
                  </svg>
                  <span>Full Access to All Current and Future Features</span>
                </div>
              </li>
              <li>
                <div className="flex items-center pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 512 512"
                    className="mr-3"
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      fill="#10b981"
                    />
                  </svg>
                  <span>Exclusive Influence on Software Development</span>
                </div>
              </li>
              <li>
                <div className="flex items-center pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 512 512"
                    className="mr-3"
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      fill="#10b981"
                    />
                  </svg>
                  <span>Lifetime Updates and Enhancements</span>
                </div>
              </li>
              <li>
                <div className="flex items-center pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 512 512"
                    className="mr-3"
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      fill="#10b981"
                    />
                  </svg>
                  <span>30-Day Money-Back Guarantee (After Launch)</span>
                </div>
              </li>
            </ul>
            <div className="mt-14">
              <button>
                <a
                  href="#"
                  className="bg-white text-black font-bold border border-black py-3 px-6 rounded-xl shadow-lg hover:shadow-xl mb-4 inline-block hover:bg-black hover:text-white hover:border-white transition-all duration-300 ease-in-out hover:scale-x-110"
                >
                  👉 YES! I Want Lifetime Access 👈
                </a>
              </button>
              <p>Secure Your Lifetime Access Now</p>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-end">
            <img className="h-[500px] max-sm:h-auto" src={rightlayout} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextLayout;
