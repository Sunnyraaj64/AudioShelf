import SideImg from '../assets/Images/image.png'

const ImageContent = () => {
  return (
    <>
      <div className='max-w-[1200px] mx-auto bg-[#111] my-20 rounded-xl'>
        <div className='flex flex-col md:flex-row items-center justify-between text-white'>
          <div className='md:w-1/2 max-sm:mt-10 space-y-4 px-7'>
            <h1 className='text-4xl font-bold'>Don&apos;t Miss Out!</h1>
            <p className='text-lg text-gray-300'>
              Join the waitlist now to be one of the first to try AudioShelf.
              Turning your favorite books into audiobooks has never been this
              easy.
            </p>
            <form action=''>
              <div className='space-y-4 max-w-[350px]'>
                <div className='flex items-center space-x-2 bg-[#262626] rounded-lg px-4 py-3'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g>
                      <path
                        d='M6.66699 5.83333C6.66699 6.71739 7.01818 7.56523 7.6433 8.19036C8.26842 8.81548 9.11627 9.16667 10.0003 9.16667C10.8844 9.16667 11.7322 8.81548 12.3573 8.19036C12.9825 7.56523 13.3337 6.71739 13.3337 5.83333C13.3337 4.94928 12.9825 4.10143 12.3573 3.47631C11.7322 2.85119 10.8844 2.5 10.0003 2.5C9.11627 2.5 8.26842 2.85119 7.6433 3.47631C7.01818 4.10143 6.66699 4.94928 6.66699 5.83333Z'
                        stroke='#E5E5E5'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                      />
                      <path
                        d='M5 17.5V15.8333C5 14.9493 5.35119 14.1014 5.97631 13.4763C6.60143 12.8512 7.44928 12.5 8.33333 12.5H11.6667C12.5507 12.5 13.3986 12.8512 14.0237 13.4763C14.6488 14.1014 15 14.9493 15 15.8333V17.5'
                        stroke='#E5E5E5'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_17_182'>
                        <rect width='20' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>

                  <input
                    type='text'
                    required
                    placeholder='Joshua Cyril'
                    className='bg-transparent text-white focus:outline-none flex-1 placeholder-gray-400'
                  />
                </div>
                <div className='flex items-center space-x-2 bg-[#262626] rounded-lg px-4 py-3'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g>
                      <path
                        d='M2.5 5.83317C2.5 5.39114 2.67559 4.96722 2.98816 4.65466C3.30072 4.3421 3.72464 4.1665 4.16667 4.1665H15.8333C16.2754 4.1665 16.6993 4.3421 17.0118 4.65466C17.3244 4.96722 17.5 5.39114 17.5 5.83317V14.1665C17.5 14.6085 17.3244 15.0325 17.0118 15.345C16.6993 15.6576 16.2754 15.8332 15.8333 15.8332H4.16667C3.72464 15.8332 3.30072 15.6576 2.98816 15.345C2.67559 15.0325 2.5 14.6085 2.5 14.1665V5.83317Z'
                        stroke='#E5E5E5'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                      />
                      <path
                        d='M2.5 5.8335L10 10.8335L17.5 5.8335'
                        stroke='#E5E5E5'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_17_189'>
                        <rect width='20' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <input
                    type='email'
                    required
                    placeholder='Enter email address...'
                    className='bg-transparent text-white focus:outline-none flex-1 placeholder-gray-400'
                  />
                </div>

                <button
                  className='text-black bg-white text-[12px] font-bold px-10 py-2 ml-3 rounded-[20px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:scale-x-110 hover:border-none'
                  type='submit'
                >
                  Join The Waitlist
                </button>
              </div>
            </form>
          </div>

          <div className='md:w-1/2 mt-8 md:mt-0'>
            <div className='relative w-full rounded-lg overflow-hidden'>
              <img
                src={SideImg}
                alt='Dashboard Preview'
                className='rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageContent
