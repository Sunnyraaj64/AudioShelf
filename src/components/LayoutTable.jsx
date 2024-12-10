const LayoutTable = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 text-[#E5E5E5] mb-20">
        <h1 className="text-4xl text-white font-bold text-center mb-10">
          Feature Comparison
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border-b border-gray-700">
            <thead>
              <tr className="w-1/3 ">
                <th className="text-left py-4 text-sm font-semibold border-b border-gray-700">
                  Feature/Benefit
                </th>
                <th className="text-left py-4 text-sm font-semibold border-b border-gray-700">
                  AudioShelf
                </th>
                <th className="text-left py-4 text-sm font-semibold border-b border-gray-700">
                  Regular Pay-As-You-Go Users
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  One-Time payment
                </td>
                <td className="border-b border-gray-700">
                  <div className="flex items-center">
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
                    <span>Yes</span>
                  </div>
                </td>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>No</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  Pay Per Conversion
                </td>
                <td className="border-b border-gray-700">
                  <div className="flex items-center">
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
                    <span>Yes</span>
                  </div>
                </td>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  <div className="flex items-center">
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
                    <span>Yes ($0.000025 per character)</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  Minimum Deposit Required
                </td>
                <td className="border-b border-gray-700">
                  <div className="flex items-center">
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
                    <span>Full customization</span>
                  </div>
                </td>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  <div className="flex items-center">
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
                    <span>Yes ($25 minimum)</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  Unlimited Conversions
                </td>
                <td className="border-b border-gray-700">
                  <div className="flex items-center">
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
                    <span>Download as chapters or full .mp3</span>
                  </div>
                </td>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>No</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  Full Feature Access
                </td>
                <td className="border-b border-gray-700">
                  <div className="flex items-center">
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
                    <span>Yes</span>
                  </div>
                </td>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  <div className="flex items-center">
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
                    <span>Yes</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  Lifetime update
                </td>
                <td className="border-b border-gray-700">
                  <div className="flex items-center">
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
                    <span>Yes</span>
                  </div>
                </td>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  <div className="flex items-center">
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
                    <span>Yes</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  Exclusive Feedback Privileges
                </td>
                <td className="border-b border-gray-700">
                  <div className="flex items-center">
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
                    <span>Yes</span>
                  </div>
                </td>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>No</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  Priority Support
                </td>
                <td className="border-b border-gray-700">
                  <div className="flex items-center">
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
                    <span>Yes</span>
                  </div>
                </td>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>No</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  Limited Availability
                </td>
                <td className="border-b border-gray-700">
                  <div className="flex items-center">
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
                    <span>Only 350 licenses</span>
                  </div>
                </td>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>Unlimited</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  30-Day Money-Back Guarantee
                </td>
                <td className="border-b border-gray-700">
                  <div className="flex items-center">
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
                    <span>Yes</span>
                  </div>
                </td>
                <td className="py-4 border-b border-gray-700 w-1/3 ">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>No</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LayoutTable;
