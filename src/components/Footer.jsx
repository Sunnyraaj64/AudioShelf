import Logo from '../Assets/Images/AudioShelfLogo.png'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  return (
    <>
      <div className='conatiner pt-5 bg-[#171717]'>
        <div className='max-w-[1280px] mx-auto pb-10 p-4'>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 md:justify-center  gap-y-10 gap-x-10'>
            <div>
              <img src={Logo} alt='' className='h-8' />
              <p className='pt-5 text-[16px] text-white'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
              <div className='text-white flex items-center mt-5'>
                <div className='px-2'>
                  <a href=''>
                    <FaFacebook size={30} />
                  </a>
                </div>
                <div className='px-2'>
                  <a href=''>
                    <FaTiktok size={30} />
                  </a>
                </div>
                <div className='px-2'>
                  <a href=''>
                    <FaInstagram size={30} />
                  </a>
                </div>
                <div className='px-2'>
                  <a href=''>
                    <FaYoutube size={30} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-bold text-white'>Quick Links</h1>
              <ul className='text-[#D4D4D4] text-[18px]'>
                <li className='cursor-pointer pt-3 '>
                  <Link to='#'>Home</Link>
                </li>
                <li className='cursor-pointer pt-3 '>
                  <Link to='#'>Why Choose</Link>
                </li>
                <li className='cursor-pointer pt-3 '>
                  <Link to='#'>Pricing</Link>
                </li>
                <li className='cursor-pointer pt-3 '>
                  <Link to='#'>How Does It Work</Link>
                </li>
                <li className='cursor-pointer pt-3 '>
                  <Link to='#'>Features</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className='text-2xl font-bold text-white'>More</h1>
              <ul className='text-[#D4D4D4] text-[18px]'>
                <li className='cursor-pointer pt-3 '>
                  <Link to='#'>Terms & Conditions</Link>
                </li>
                <li className='cursor-pointer pt-3 '>
                  <Link to='#'>Privacy Policy</Link>
                </li>
                <li className='cursor-pointer pt-3 '>
                  <Link to='#'>FAQ’s</Link>
                </li>
                <li className='cursor-pointer pt-3 '>
                  <Link to='#'>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className='text-2xl font-bold text-white'>Get in touch</h1>
              <ul className='text-[#D4D4D4] text-[18px]'>
                <div className='flex pt-3 items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    height='16'
                    width='16'
                  >
                    <path
                      d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'
                      fill='#fff'
                    />
                  </svg>
                  <li className='cursor-pointer pl-3'>+163 353-2246</li>
                </div>
                <div className='flex pt-3 items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='16'
                    width='16'
                    viewBox='0 0 512 512'
                  >
                    <path
                      d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'
                      fill='#fff'
                    />
                  </svg>
                  <li className='cursor-pointer pl-3'>example@ymail.com</li>
                </div>
                <div className='flex pt-3 items-baseline'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='16'
                    width='16'
                    viewBox='0 0 384 512'
                  >
                    <path
                      d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'
                      fill='#fff'
                    />
                  </svg>
                  <li className='cursor-pointer pl-3'>
                    511 Taft St, Big Lake, MN 55309, United States
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className='max-w-[1180px] m-auto'>
          <hr className='border-[#D4D4D4]' />
          <h3 className='py-6 text-center text-[#D4D4D4]'>© {currentYear} All rights reserved</h3>
        </div>
      </div>
    </>
  )
}

export default Footer
