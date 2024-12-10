const ContentTable = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid lg:grid-cols-2 lg:gap-10 mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Simple and Affordable Pricing
            </h2>
            <p className="text-lg mb-8 text-[#E5E5E5]">
              Tired of overpriced audiobooks and confusing subscriptions? With
              AudioShelf, you only pay for what you use.
            </p>
          </div>
          <div className="grid justify-end">
            <div className="flex items-center pt-2">
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
                Know Before You Pay:
                <span className="text-white font-semibold">
                  Our tool lets you see the exact cost of your <br /> audiobook
                  before you start the conversion.
                </span>
              </p>
            </div>
            <div className="flex items-center pt-2">
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
                Affordable:
                <span className="text-white font-semibold">
                  Convert an epic 1,000,000-character book for just $25!
                </span>
              </p>
            </div>
            <div className="flex items-center pt-2">
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
                No Surprises:
                <span className="text-white font-semibold">
                  You'll know exactly what you're spending.
                </span>
              </p>
            </div>
            <div className="flex items-center pt-2">
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
                Compare That:
                <span className="text-white font-semibold">
                  Why pay $30 or more for a average length audiobook elsewhere?
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-[7px]">
          <table className="min-w-full text-white text-left border-collapse bg-[#111111]">
            <thead className="bg-[#111111]">
              <tr>
                <th className="py-4 px-6 text-sm font-semibold border-b border-gray-700">
                  Book Size
                </th>
                <th className="py-4 px-6 text-sm font-semibold border-b border-gray-700">
                  Characters
                </th>
                <th className="py-4 px-6 text-sm font-semibold border-b border-gray-700">
                  Approx. Pages
                </th>
                <th className="py-4 px-6 text-sm font-semibold border-b border-gray-700">
                  Price
                </th>
                <th className="py-4 px-6 text-sm font-semibold border-b border-gray-700">
                  Average Listening Time
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-700 transition">
                <td className="py-4 px-6 border-b border-gray-700">
                  Short Story
                </td>
                <td className="py-4 px-6 border-b border-gray-700">25,000</td>
                <td className="py-4 px-6 border-b border-gray-700">15–20</td>
                <td className="py-4 px-6 border-b border-gray-700">$0.63</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  0.5–1 hour
                </td>
              </tr>
              <tr className="hover:bg-gray-700 transition">
                <td className="py-4 px-6 border-b border-gray-700">Novella</td>
                <td className="py-4 px-6 border-b border-gray-700">50,000</td>
                <td className="py-4 px-6 border-b border-gray-700">30–40</td>
                <td className="py-4 px-6 border-b border-gray-700">$1.25</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  1–2 hours
                </td>
              </tr>
              <tr className="hover:bg-gray-700 transition">
                <td className="py-4 px-6 border-b border-gray-700">
                  Short Novel
                </td>
                <td className="py-4 px-6 border-b border-gray-700">100,000</td>
                <td className="py-4 px-6 border-b border-gray-700">60–80</td>
                <td className="py-4 px-6 border-b border-gray-700">$2.50</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  2–3 hours
                </td>
              </tr>
              <tr className="hover:bg-gray-700 transition">
                <td className="py-4 px-6 border-b border-gray-700">
                  Average Book
                </td>
                <td className="py-4 px-6 border-b border-gray-700">250,000</td>
                <td className="py-4 px-6 border-b border-gray-700">153–200</td>
                <td className="py-4 px-6 border-b border-gray-700">$6.25</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  4.93–6.41 hours
                </td>
              </tr>
              <tr className="hover:bg-gray-700 transition">
                <td className="py-4 px-6 border-b border-gray-700">
                  Medium Book
                </td>
                <td className="py-4 px-6 border-b border-gray-700">500,000</td>
                <td className="py-4 px-6 border-b border-gray-700">307–400</td>
                <td className="py-4 px-6 border-b border-gray-700">$12.50</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  9.86–12.82 hours
                </td>
              </tr>
              <tr className="hover:bg-gray-700 transition">
                <td className="py-4 px-6 border-b border-gray-700">
                  Long Book
                </td>
                <td className="py-4 px-6 border-b border-gray-700">750,000</td>
                <td className="py-4 px-6 border-b border-gray-700">460–600</td>
                <td className="py-4 px-6 border-b border-gray-700">$18.75</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  15–19 hours
                </td>
              </tr>
              <tr className="hover:bg-gray-700 transition">
                <td className="py-4 px-6 ">Epic Read</td>
                <td className="py-4 px-6">1,000,000</td>
                <td className="py-4 px-6">615–800</td>
                <td className="py-4 px-6">$25</td>
                <td className="py-4 px-6">20–25.6 hours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContentTable;
