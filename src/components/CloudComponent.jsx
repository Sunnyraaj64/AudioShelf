import CloudImg from '../assets/Images/CloudImg.png'

const CloudComponent = () => {
  return (
    <>
      <div className='max-w-[1000px] m-auto my-20 max-sm:p-5'>
        <div className='text-white text-center'>
          <h3 className='text-3xl font-bold mb-2'>The Clock Is Ticking…</h3>
          <p>
            Don&apos;t miss out on this one-time opportunity to secure lifetime
            access to AudioShelf.
          </p>
          <a href=''>
            <button className='text-black mt-5 bg-white text-[12px] font-bold px-5 py-2 ml-3 rounded-[20px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:scale-x-110 hover:border-1'>
              👉 Claim Your Lifetime Access Now 👈
            </button>
          </a>
          <img className='mt-10' src={CloudImg} alt='' />
        </div>
      </div>
    </>
  )
}

export default CloudComponent
