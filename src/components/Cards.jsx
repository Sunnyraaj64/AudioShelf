import PropTypes from 'prop-types'

const Cards = ({ img, heading, paragraph }) => {
  return (
    <>
      <div className='bg-[#111111] text-white rounded-xl px-[25px] py-[25px] max-sm:w-80 shadow-lg'>
        <div className='flex items-center mb-4'>
          <div className='bg-[#262626] p-3 rounded-[10px]'>
            {img ? (
              <img src={img} alt='Card Icon' className='w-6 h-6' />
            ) : (
              <svg
                className='w-6 h-6 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeWidth='2'
                  d='M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2m2-5h2a2 2 0 012 2v5a2 2 0 01-2 2h-6a2 2 0 01-2-2v-5a2 2 0 012-2h6m-2-7h-6a2 2 0 00-2 2v5a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2z'
                />
              </svg>
            )}
          </div>
        </div>
        <h3 className='text-lg font-semibold mb-2'>{heading}</h3>
        <p className='text-[#E5E5E5] text-sm'>{paragraph}</p>
      </div>
    </>
  )
}

Cards.propTypes = {
  img: PropTypes.string,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
}

export default Cards
