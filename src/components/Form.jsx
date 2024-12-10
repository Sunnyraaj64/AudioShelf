const Form = () => {
  return (
    <>
      <div className='bg-[#171717] max-w-[1200px] m-auto w-full mb-20 rounded-lg p-8 shadow-lg '>
        <div className=' max-w-[700px] m-auto text-white w-full'>
          <h2 className='text-4xl font-bold text-center pt-4 mb-4'>
            Join the Waitlist for Early Access
            <span className='animate-bounce'>👇</span>
          </h2>
          <p className='text-[#E5E5E5] text-center mb-6'>
            Join the waitlist now to be one of the first to try AudioShelf.
            Turning your favorite books into audiobooks has never been this
            easy.
          </p>
          <form className='flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex items-center bg-[#262626] rounded-lg px-4 py-2 w-full md:w-auto flex-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    d='M5.121 19.121A4.002 4.002 0 017 17h10a4.002 4.002 0 011.879 2.121M15 11a4 4 0 10-8 0 4 4 0z'
                  />
                </svg>
                <input
                  required
                  type='text'
                  placeholder='First Name'
                  className='bg-transparent text-white placeholder-gray-500 focus:outline-none w-full'
                />
              </div>
              <div className='flex items-center bg-[#262626] rounded-lg px-4 py-2 w-full md:w-auto flex-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    d='M16 12c2.28 0 4-1.716 4-4s-1.72-4-4-4-4 1.716-4 4 1.72 4 4 4zm0 0v6m0 4v-4H8a6 6 0 01-6-6V4a6 6 0 016-6h8a6 6 0 016 6v8a6 6 0 01-6 6z'
                  />
                </svg>
                <input
                  type='email'
                  required
                  placeholder='Enter email address'
                  className='bg-transparent text-white placeholder-gray-500 focus:outline-none w-full'
                />
              </div>
            </div>
            <div className='flex justify-center items-center my-5'>
              <button
                type='submit'
                className='bg-white text-black rounded-[30px] px-8 py-2 font-medium w-full md:w-auto hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:scale-x-110 hover:border-none'
              >
                Join The Waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
