import { useState, useEffect } from 'react'
import DepositImg from '../assets/images/deposit.png'
import SavingImg from '../assets/images/massive.png'

const LifetimeDeal = () => {
  const [counter, setCounter] = useState(248) // Initial counter value

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => {
        setCounter(prev => prev - 1)
      }, 1000)

      // Cleanup the timer when the component unmounts or when counter updates
      return () => clearTimeout(timer)
    }
  }, [counter])

  // Convert counter to a zero-padded string
  const paddedCounter = String(counter).padStart(3, '0')
  return (
    <>
      <div className='max-w-[1200px] m-auto'>
          <h2 className='text-white text-center text-4xl max-sm:text-3xl max-sm:p-5 max-sm:mt-10 font-bold mb-10'>
            Why Seize the Lifetime Deal Now?
          </h2>
        <div className='grid lg:grid-cols-3 max-sm:p-5 gap-5'>
          <div className='bg-[#171717] p-8 rounded-[10px]  '>
            <div className='icon-svg-div'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='110'
                height='131'
                viewBox='0 0 110 131'
                fill='none'
              >
                <g opacity='0.04'>
                  <path
                    d='M38.5484 0.942383V11.7868H49.5498V17.209C53.4002 16.6668 56.7006 16.6668 60.5512 17.209V11.7868L71.5526 11.7868V0.942383L38.5484 0.942383Z'
                    fill='white'
                  />
                  <path
                    d='M92.455 36.7288L96.3054 32.9334L100.706 37.2712L108.407 29.6801L91.905 13.4135L84.204 21.0047L88.6046 25.3422L83.654 30.2222C57.2509 14.4978 23.1467 22.6311 7.74492 48.6576C-7.65685 74.6841 0.593885 107.217 26.4471 122.942C52.3003 138.666 86.4042 130.533 101.806 104.506C115.558 82.2752 111.707 54.0799 92.455 36.7288ZM55.0504 114.266C33.5979 114.266 16.5459 97.4575 16.5459 76.311C16.5459 55.1644 33.5979 38.3555 55.0504 38.3555V76.3107H93.555C93.5552 97.4573 76.503 114.266 55.0504 114.266Z'
                    fill='white'
                  />
                </g>
              </svg>
            </div>
            <div className='counter-container'>
              <div className='counter'>
                <div className='digit-container'>
                  <div className='digit'>{paddedCounter[0]}</div>
                </div>
                <div className='digit-container'>
                  <div className='digit'>{paddedCounter[1]}</div>
                </div>
                <div className='digit-container'>
                  <div className='digit'>{paddedCounter[2]}</div>
                </div>
              </div>
              <p className='counter-label'>Running out</p>
            </div>
            <div className='mt-10'>
              <h3 className='text-white text-[23px] font-semibold pb-5'>
                🔥 Limited Availability
              </h3>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='mr-3 h-[15px] w-[40px]'
                >
                  <path
                    d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
                    fill='#10b981'
                  />
                </svg>
                <p className='text-white text-[14px]'>
                  <strong> Date:</strong> Early 2025
                </p>
              </div>
              <div className='flex items-center pt-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='mr-3 h-[15px] w-[40px]'
                >
                  <path
                    d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
                    fill='#10b981'
                  />
                </svg>
                <p className='text-white text-[14px]'>
                  <strong>Minimum Deposit: </strong> $25 per transaction
                </p>
              </div>
            </div>
          </div>
          <div className='bg-[#171717] p-5 rounded-[10px]  '>
            <div className='mt-5'>
              <div className='grid grid-cols-2 gap-5 pb-5'>
                <div className='bg-[#262626] p-6 rounded-[10px] flex justify-center'>
                  <div className='flex flex-col text-center'>
                    <img
                      src={DepositImg}
                      alt='Card Icon'
                      className='h-[150px]'
                    />
                    <p className='text-white text-[13px] font-semibold pt-4'>
                      $25 Deposit
                    </p>
                  </div>
                </div>
                <div className='bg-[#262626] p-6 rounded-[10px] flex justify-center'>
                  <div className='flex flex-col text-center'>
                    <img
                      src={SavingImg}
                      alt='Card Icon'
                      className='h-[150px]'
                    />
                    <p className='text-white text-[13px] font-semibold pt-4'>
                      Massive Savings
                    </p>
                  </div>
                </div>
              </div>
              <h3 className='text-white text-[20px] font-semibold pb-3'>
                💰 Unbeatable Value
              </h3>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='mr-3 h-[15px] w-[40px]'
                >
                  <path
                    d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
                    fill='#10b981'
                  />
                </svg>
                <p className='text-white text-[14px]'>
                  <strong>Regular Users Pay Per Conversion:</strong> Minimum
                  deposit of $25 required to use the platform
                </p>
              </div>
              <div className='flex items-center pt-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='mr-3 h-[15px] w-[40px]'
                >
                  <path
                    d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
                    fill='#10b981'
                  />
                </svg>
                <p className='text-white text-[14px]'>
                  <strong> Lifetime Deal Holders Pay Nothing More:</strong>{' '}
                  Unlimited conversions without additional costs
                </p>
              </div>
              <div className='flex items-center w-[270px] pt-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='mr-3 h-[15px] w-[25px]'
                >
                  <path
                    d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
                    fill='#10b981'
                  />
                </svg>

                <span className='text-white font-semibold'>
                  Massive Savings Over Time
                </span>
              </div>
            </div>
          </div>

          <div className='bg-[#171717] p-8 rounded-[10px]  '>
            <div className='bg-[#262626] p-4 rounded-lg text-white mb-2'>
              <h1 className='mb-6'>AudioShelf VIP Member</h1>
              <div className='flex gap-2 text-[13px] relative'>
                <div className='flex-grow'>
                  <div className='flex items-center mb-2 gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <g clipPath='url(#clip0_8_6103)'>
                        <path
                          d='M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 7.21207 13.8448 6.43185 13.5433 5.7039C13.2417 4.97595 12.7998 4.31451 12.2426 3.75736C11.6855 3.20021 11.0241 2.75825 10.2961 2.45672C9.56815 2.15519 8.78793 2 8 2C7.21207 2 6.43185 2.15519 5.7039 2.45672C4.97595 2.75825 4.31451 3.20021 3.75736 3.75736C3.20021 4.31451 2.75825 4.97595 2.45672 5.7039C2.15519 6.43185 2 7.21207 2 8Z'
                          fill='#10B981'
                        />
                        <path
                          d='M6 8.00008L7.33333 9.33341L10 6.66675'
                          stroke='#0A0A0A'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_8_6103'>
                          <rect width='16' height='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    First to Experience New Features
                  </div>
                  <div className='flex items-center mb-2 gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <g clipPath='url(#clip0_8_6103)'>
                        <path
                          d='M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 7.21207 13.8448 6.43185 13.5433 5.7039C13.2417 4.97595 12.7998 4.31451 12.2426 3.75736C11.6855 3.20021 11.0241 2.75825 10.2961 2.45672C9.56815 2.15519 8.78793 2 8 2C7.21207 2 6.43185 2.15519 5.7039 2.45672C4.97595 2.75825 4.31451 3.20021 3.75736 3.75736C3.20021 4.31451 2.75825 4.97595 2.45672 5.7039C2.15519 6.43185 2 7.21207 2 8Z'
                          fill='#10B981'
                        />
                        <path
                          d='M6 8.00008L7.33333 9.33341L10 6.66675'
                          stroke='#0A0A0A'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_8_6103'>
                          <rect width='16' height='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    Request Features and Changes
                  </div>
                  <div className='flex items-center mb-2 gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <g clipPath='url(#clip0_8_6103)'>
                        <path
                          d='M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 7.21207 13.8448 6.43185 13.5433 5.7039C13.2417 4.97595 12.7998 4.31451 12.2426 3.75736C11.6855 3.20021 11.0241 2.75825 10.2961 2.45672C9.56815 2.15519 8.78793 2 8 2C7.21207 2 6.43185 2.15519 5.7039 2.45672C4.97595 2.75825 4.31451 3.20021 3.75736 3.75736C3.20021 4.31451 2.75825 4.97595 2.45672 5.7039C2.15519 6.43185 2 7.21207 2 8Z'
                          fill='#10B981'
                        />
                        <path
                          d='M6 8.00008L7.33333 9.33341L10 6.66675'
                          stroke='#0A0A0A'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_8_6103'>
                          <rect width='16' height='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    Early Access to New Features
                  </div>
                  <div className='flex items-center mb-2 gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <g clipPath='url(#clip0_8_6103)'>
                        <path
                          d='M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 7.21207 13.8448 6.43185 13.5433 5.7039C13.2417 4.97595 12.7998 4.31451 12.2426 3.75736C11.6855 3.20021 11.0241 2.75825 10.2961 2.45672C9.56815 2.15519 8.78793 2 8 2C7.21207 2 6.43185 2.15519 5.7039 2.45672C4.97595 2.75825 4.31451 3.20021 3.75736 3.75736C3.20021 4.31451 2.75825 4.97595 2.45672 5.7039C2.15519 6.43185 2 7.21207 2 8Z'
                          fill='#10B981'
                        />
                        <path
                          d='M6 8.00008L7.33333 9.33341L10 6.66675'
                          stroke='#0A0A0A'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_8_6103'>
                          <rect width='16' height='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    Personalized Recommendations
                  </div>
                </div>
                <div className='flex-grow absolute right-[-10px] top-[-20px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='129'
                    height='120'
                    viewBox='0 0 129 120'
                    fill='none'
                  >
                    <path
                      opacity='0.03'
                      d='M32.1683 46.4743L0.980127 54.8311C0.971632 53.7839 1.19049 52.7149 1.61971 51.7057L12.864 26.0711C13.0834 25.5848 13.3224 25.1711 13.6435 24.774L32.1683 46.4743ZM1.95185 58.4577C2.40548 59.4246 3.12952 60.241 4.01554 60.9366L79.3728 118.055C80.111 118.634 80.9192 119.04 81.7612 119.281L34.6994 49.683L1.95185 58.4577ZM54.4469 11.9749L17.9278 21.7601C17.42 21.8962 16.9585 22.0588 16.4799 22.3037L35.2372 44.2917L54.4469 11.9749ZM88.9232 31.2669L79.3156 25.8731L57.7286 13.7775L39.4577 44.5211L88.9232 31.2669ZM38.5435 48.653L85.7919 118.511L91.7808 34.3881L38.5435 48.653ZM97.6414 0.556579C97.1408 0.57401 96.6233 0.67376 96.1518 0.800085L59.669 10.5756L92.4732 28.994L97.6414 0.556579ZM89.6307 117.172C90.2394 116.542 90.7367 115.787 91.0864 114.916L127.825 27.762C128.244 26.7165 128.463 25.6474 128.372 24.5833L95.6248 33.358L89.6307 117.172ZM127.401 20.9569C126.884 20.0457 126.16 19.2293 125.284 18.5699L102.693 2.0015C102.26 1.69013 101.846 1.45134 101.369 1.26803L96.2488 29.304L127.401 20.9569Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </div>
            </div>

            <h3 className='text-white text-[20px] font-semibold pb-3'>
              🚀 Exclusive Benefits
            </h3>
            <div className='text-[13px]'>
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='mr-2 h-[15px] w-[40px]'
                >
                  <path
                    d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
                    fill='#10b981'
                  />
                </svg>
                <p className='text-white text-[13px]'>
                  <strong> Private Feedback Access:</strong> Influence the
                  development of AudioShelf directly
                </p>
              </div>
              {/* <div className='flex items-center pt-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='mr-2 h-[15px] w-[40px]'
                >
                  <path
                    d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
                    fill='#10b981'
                  />
                </svg>
                <p className='text-[#a3a3a3] font-bold text-[16px]'>
                  Cost per Character:
                  <span className='text-white font-semibold'> $0.000025</span>
                </p>
              </div> */}
              <ul className='ps-12 pt-3'>
                <li className='list-disc text-[#a3a3a3]'>
                  <p className='text-white'>
                    <strong>Request Features and Changes:</strong> Your input
                    shapes the future of the software
                  </p>
                </li>
                <li className='list-disc text-[#a3a3a3]'>
                  <p className='text-white'>
                    <strong>Priority Consideration:</strong> Your suggestions
                    get top priority
                  </p>
                </li>
              </ul>
              <div className='flex items-center pt-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='mr-2 h-[15px] w-[25px]'
                >
                  <path
                    d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
                    fill='#10b981'
                  />
                </svg>
                <span className='text-white font-semibold'>
                  First to Experience New Features
                </span>
              </div>
              <div className='flex items-center pt-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='mr-2 h-[15px] w-[30px]'
                >
                  <path
                    d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
                    fill='#10b981'
                  />
                </svg>
                <p className='text-white text-[13px]'>
                  <strong>VIP Support:</strong> Your input shapes the future of
                  the software
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LifetimeDeal
