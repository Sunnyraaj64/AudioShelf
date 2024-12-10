import "../css/main.css"

const AudioBook = () => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto text-white mt-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-4'>
            How Does It Work?
          </h2>
          <p className='text-gray-400 mb-10'>
            Making an audiobook is easy!
          </p>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
            <div className='flex flex-col'>
              <div className="border-center-before">
                <div className='w-10 h-10 flex items-center justify-center bg-[#262626] text-white rounded-full font-bold'>
                  1
                </div>
              </div>
              <h3 className='text-lg font-semibold mt-4'>
                Create Your Account
              </h3>
              <p className='text-sm text-gray-400 mt-2'>
                Sign up to get started.
              </p>
            </div>
            <div className='flex flex-col'>
              <div className="border-center-before">
                <div className='w-10 h-10 flex items-center justify-center bg-[#262626] text-white rounded-full font-bold'>
                  2
                </div>
              </div>
              <h3 className='text-lg font-semibold mt-4'>Add Funds</h3>
              <p className='text-sm text-gray-400 mt-2'>
                Deposit at least $25 to begin.
              </p>
            </div>
            <div className='flex flex-col'>
              <div className="border-center-before">
                <div className='w-10 h-10 flex items-center justify-center bg-[#262626] text-white rounded-full font-bold'>
                  3
                </div>
              </div>
              <h3 className='text-lg font-semibold mt-4'>Upload Your Book</h3>
              <p className='text-sm text-gray-400 mt-2'>
                Click Create New Audiobook and upload your .epub file.
              </p>
            </div>
            <div className='flex flex-col'>
              <div className="border-center-before">
                <div className='w-10 h-10 flex items-center justify-center bg-[#262626] text-white rounded-full font-bold'>
                  4
                </div>
              </div>
              <h3 className='text-lg font-semibold mt-4'>Pick Your Settings</h3>
              <ul className='text-sm text-gray-400 mt-2 list-disc ms-6'>
                <li>Choose the voice.</li>
                <li>Set the reading speed.</li>
                <li>Select other options you like.</li>
              </ul>
            </div>
            <div className='flex flex-col'>
              <div className="border-center-before">
                <div className='w-10 h-10 flex items-center justify-center bg-[#262626] text-white rounded-full font-bold'>
                  5
                </div>
              </div>
              <h3 className='text-lg font-semibold mt-4'>
                Preview and Confirm
              </h3>
              <ul className='text-sm text-gray-400 mt-2 list-disc ms-6'>
                <li>Preview Cost: See exactly how much it will cost.</li>
                <li>Sample Audio: Listen to a short preview.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AudioBook
