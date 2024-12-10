const SubscriptionTable = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 text-[#E5E5E5] lg:mt-10 max-sm:mt-12">
        <h1 className="text-4xl text-white font-bold text-center mb-10">
          Why AudioShelf is the Best Choice
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border-b border-gray-700">
            <thead>
              <tr>
                <th className="text-left py-4  text-sm font-semibold border-b border-gray-700">
                  Feature/Benefit
                </th>
                <th className="text-left py-4  text-sm font-semibold border-b border-gray-700">
                  AudioShelf
                </th>
                <th className="text-left py-4  text-sm font-semibold border-b border-gray-700">
                  Standard Audiobooks
                </th>
                <th className="text-left py-4  text-sm font-semibold border-b border-gray-700">
                  DIY TTS Conversion
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4  border-b border-gray-700">
                  Convert any .epub file
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
                <td className="py-4  border-b border-gray-700">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>Limited to available titles</span>
                  </div>
                </td>
                <td className="py-4  border-b border-gray-700">
                  ⚠️ Requires coding knowledge
                </td>
              </tr>
              <tr>
                <td className="py-4  border-b border-gray-700">
                  Preview cost and quality
                </td>
                <td className="py-4  border-b border-gray-700">
                  {" "}
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
                <td className="py-4  border-b border-gray-700">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>No</span>
                  </div>{" "}
                </td>
                <td className="py-4  border-b border-gray-700">
                  ⚠️ Not available
                </td>
              </tr>
              <tr>
                <td className="py-4  border-b border-gray-700">
                  Choose voice, gender, speed
                </td>
                <td className="py-4  border-b border-gray-700">
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
                <td className="py-4  border-b border-gray-700">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>Fixed narrationo</span>
                  </div>
                </td>
                <td className="py-4  border-b border-gray-700">
                  ⚠️ Limited customization
                </td>
              </tr>
              <tr>
                <td className="py-4  border-b border-gray-700">
                  Output format flexibility
                </td>
                <td className="py-4  border-b border-gray-700">
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
                <td className="py-4  border-b border-gray-700">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>Requires special apps/software</span>
                  </div>
                </td>
                <td className="py-4  border-b border-gray-700">
                  ⚠️ Limited options
                </td>
              </tr>
              <tr>
                <td className="py-4  border-b border-gray-700">
                  High-quality sound
                </td>
                <td className="py-4  border-b border-gray-700">
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
                    <span>Crystal-clear, human-like TTS</span>
                  </div>
                </td>
                <td className="py-4  border-b border-gray-700">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>Professional-grade</span>
                  </div>
                </td>
                <td className="py-4  border-b border-gray-700">
                  ⚠️ Low-quality robotic voices
                </td>
              </tr>
              <tr>
                <td className="py-4  border-b border-gray-700">
                  Affordable pricing
                </td>
                <td className="py-4  border-b border-gray-700">
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
                    <span>Starts as low as $0.63</span>
                  </div>
                </td>
                <td className="py-4  border-b border-gray-700">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>High price per audiobook</span>
                  </div>
                </td>
                <td className="py-4  border-b border-gray-700">
                  ⚠️ Free, but time-intensive
                </td>
              </tr>
              <tr>
                <td className="py-4  border-b border-gray-700">Ease of use</td>
                <td className="py-4  border-b border-gray-700">
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
                    <span>Very easy, no setup needed</span>
                  </div>
                </td>
                <td className="py-4  border-b border-gray-700">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>Simple, but limited choices</span>
                  </div>
                </td>
                <td className="py-4  border-b border-gray-700">
                  ⚠️ Hard, needs coding
                </td>
              </tr>
              <tr>
                <td className="py-4  border-b border-gray-700">
                  Access to unlimited ebooks
                </td>
                <td className="py-4  border-b border-gray-700">
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
                    <span> Any .epub file supported</span>
                  </div>
                </td>
                <td className="py-4  border-b border-gray-700">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 512 512"
                      className="mr-2"
                    >
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        fill="#ef4444"
                      />
                    </svg>
                    <span>Limited selection</span>
                  </div>
                </td>
                <td className="py-4  border-b border-gray-700">
                  ⚠️ Limited selection
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SubscriptionTable;
