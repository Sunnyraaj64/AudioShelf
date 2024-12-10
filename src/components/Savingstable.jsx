import React from "react";

const Savingstable = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          Savings Over Time (Depending On Length Of Book)
        </h2>

        <div className="overflow-x-auto rounded-[7px]">
          <table className="min-w-full text-white text-left border-collapse bg-[#111111]">
            <thead className="bg-[#111111]">
              <tr>
                <th className="py-4 px-6 text-sm font-semibold border-b border-gray-700">
                  Number of Books Converted
                </th>
                <th className="py-4 px-6 text-sm font-semibold border-b border-gray-700">
                  Total Cost as Regular User
                </th>
                <th className="py-4 px-6 text-sm font-semibold border-b border-gray-700">
                  Total Cost with Lifetime Deal
                </th>
                <th className="py-4 px-6 text-sm font-semibold border-b border-gray-700">
                  Your Savings
                </th>
                <th className="py-4 px-6 text-sm font-semibold border-b border-gray-700">
                  Total Audio Created
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#262626] transition">
                <td className="py-4 px-6 border-b border-gray-700">10 Books</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  $62.50 - $250
                </td>
                <td className="py-4 px-6 border-b border-gray-700">$299</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  Up to $187.50 saved
                </td>
                <td className="py-4 px-6 border-b border-gray-700">
                  50 - 200 hours of audio
                </td>
              </tr>
              <tr className="hover:bg-[#262626] transition">
                <td className="py-4 px-6 border-b border-gray-700">25 Books</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  $156.25 - $625
                </td>
                <td className="py-4 px-6 border-b border-gray-700">$299</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  Up to $326.25 saved
                </td>
                <td className="py-4 px-6 border-b border-gray-700">
                  125 - 500 hours of audio
                </td>
              </tr>
              <tr className="hover:bg-[#262626] transition">
                <td className="py-4 px-6 border-b border-gray-700">50 Books</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  $312.50 - $1,250
                </td>
                <td className="py-4 px-6 border-b border-gray-700">$299</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  Up to $951.00 saved
                </td>
                <td className="py-4 px-6 border-b border-gray-700">
                  250 - 1,000 hours of audio
                </td>
              </tr>
              <tr className="hover:bg-[#262626] transition">
                <td className="py-4 px-6 border-b border-gray-700">
                  100 Books
                </td>
                <td className="py-4 px-6 border-b border-gray-700">
                  $625.00 - $2,500
                </td>
                <td className="py-4 px-6 border-b border-gray-700">$299</td>
                <td className="py-4 px-6 border-b border-gray-700">
                  Up to $2,201.00 saved
                </td>
                <td className="py-4 px-6 border-b border-gray-700">
                  4.93–6.41 hours
                </td>
              </tr>
              <tr className="hover:bg-[#262626] transition">
                <td className="py-4 px-6">Unlimited</td>
                <td className="py-4 px-6">Costs Keep Adding Up</td>
                <td className="py-4 px-6">$299 One-Time</td>
                <td className="py-4 px-6">Infinite Savings!</td>
                <td className="py-4 px-6">Unlimited audio hours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Savingstable;
