import { useEffect } from 'react'
import '../css/main.css'

import button1 from '../assets/Images/WhyChooseComponent/button-1.png'
import button2 from '../assets/Images/WhyChooseComponent/button-2.png'
import button3 from '../assets/Images/WhyChooseComponent/button-3.png'
import button4 from '../assets/Images/WhyChooseComponent/button-4.png'
import button5 from '../assets/Images/WhyChooseComponent/button-5.png'
import button6 from '../assets/Images/WhyChooseComponent/button-6.png'
import button7 from '../assets/Images/WhyChooseComponent/button-7.png'
import button8 from '../assets/Images/WhyChooseComponent/button-8.png'
import button9 from '../assets/Images/WhyChooseComponent/button-9.png'
import button10 from '../assets/Images/WhyChooseComponent/button-10.png'
import book1 from '../assets/Images/WhyChooseComponent/book1.png'
import book2 from '../assets/Images/WhyChooseComponent/book2.png'
import book3 from '../assets/Images/WhyChooseComponent/book3.png'
import card3Bottom from '../assets/Images/WhyChooseComponent/card3-bottom.png'

import audio from '../assets/Images/videoplayback.m4a'

const WhyChoose = () => {
  useEffect(() => {
    function setupAudioPlayer (
      audioId,
      playPauseBtnId,
      playIconId,
      pauseIconId,
      waveformId
    ) {
      const audio = document.getElementById(audioId)
      const playPauseBtn = document.getElementById(playPauseBtnId)
      const playIcon = document.getElementById(playIconId)
      const pauseIcon = document.getElementById(pauseIconId)
      const canvas = document.getElementById(waveformId)
      const ctx = canvas.getContext('2d')

      let waveformData = []
      const barWidth = 1
      const gap = 0
      for (let i = 0; i < canvas.width / (barWidth + gap); i++) {
        waveformData.push(Math.random() * canvas.height)
      }

      function drawWaveform (progress = 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        waveformData.forEach((amplitude, index) => {
          const x = index * (barWidth + gap)
          const opacity = index / waveformData.length <= progress ? 1 : 0.4
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
          ctx.fillRect(
            x,
            canvas.height / 2 - amplitude / 2,
            barWidth,
            amplitude
          )
        })
      }

      playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
          audio.play()
          playIcon.style.display = 'none'
          pauseIcon.style.display = 'inline'
        } else {
          audio.pause()
          playIcon.style.display = 'inline'
          pauseIcon.style.display = 'none'
        }
      })

      audio.addEventListener('timeupdate', () => {
        const progress = audio.currentTime / audio.duration
        drawWaveform(progress)
      })

      drawWaveform()
    }

    setupAudioPlayer(
      'audio-1',
      'play-pause-btn-1',
      'play-icon-1',
      'pause-icon-1',
      'waveform-1'
    )
    setupAudioPlayer(
      'audio-2',
      'play-pause-btn-2',
      'play-icon-2',
      'pause-icon-2',
      'waveform-2'
    )
  }, [])
  return (
    <>
      <div className='max-w-[1200px] m-auto my-20 text-white'>
        <div className='mx-auto py-10 text-white'>
          <h2 className='text-4xl text-center font-bold mb-10'>
            Why Choose AudioShelf?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='portion-1'>
              <div className='bg-[#171717] p-6 rounded-lg shadow-lg mb-3'>
                <h2 className='text-xl font-bold mb-4'>Customizable Output</h2>
                <p className='mb-4'>
                  <strong> Pick Your Speaker:</strong> Choose from male or
                  female voices.
                </p>
                <p className='mb-4'>
                  <strong>
                    {' '}
                    Pick Your Speaker:Set the Speed (0.5-2x Reading Speed):
                  </strong>{' '}
                  Make it read faster or slower.
                </p>
                <p className='mb-4'>
                  <strong>Voice Options: </strong> Dozens of voices to choose
                  from.
                </p>
                <div className='bg-[#262626] p-4 rounded-lg'>
                  <div className='flex gap-4 flex-wrap'>
                    <div className='grid grid-cols-2 gap-4'>
                      <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                        <img src={button1} alt='' />
                        <span>Wade Warren</span>
                      </button>
                      <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                        <img src={button2} alt='' />
                        <span>Courtney Henry</span>
                      </button>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                        <img src={button3} alt='' />
                        <span>Jane Cooper</span>
                      </button>
                      <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                        <img src={button4} alt='' />
                        <span>Cameron Williamson</span>
                      </button>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                        <img src={button5} alt='' />
                        <span>Brooklyn Simmons</span>
                      </button>
                      <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                        <img src={button6} alt='' />
                        <span>Floyd Miles</span>
                      </button>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <p className='mb-2'>Reading Speed</p>
                    <div className='flex items-center justify-between gap-4'>
                      <button className='bg-[#fff] py-2 px-3 rounded-lg flex justify-center gap-2 items-center text-[#000] flex-grow'>
                        Slow
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='8'
                          height='10'
                          viewBox='0 0 8 10'
                          fill='none'
                        >
                          <path
                            d='M7.2 4.20198C8 4.66386 8 5.81856 7.2 6.28044L1.8 9.39813C1 9.86001 -4.38926e-07 9.28266 -3.98547e-07 8.3589L-1.2599e-07 2.12352C-8.56108e-08 1.19976 1 0.622409 1.8 1.08429L7.2 4.20198Z'
                            fill='#000'
                          />
                        </svg>
                      </button>
                      <button className='bg-[#171717] py-2 px-3 rounded-lg flex justify-center gap-2 items-center flex-grow'>
                        Normal
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='8'
                          height='10'
                          viewBox='0 0 8 10'
                          fill='none'
                        >
                          <path
                            d='M7.2 4.20198C8 4.66386 8 5.81856 7.2 6.28044L1.8 9.39813C1 9.86001 -4.38926e-07 9.28266 -3.98547e-07 8.3589L-1.2599e-07 2.12352C-8.56108e-08 1.19976 1 0.622409 1.8 1.08429L7.2 4.20198Z'
                            fill='#A3A3A3'
                          />
                        </svg>
                      </button>
                      <button className='bg-[#171717] py-2 px-3 rounded-lg flex justify-center gap-2 items-center flex-grow'>
                        Fast
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='8'
                          height='10'
                          viewBox='0 0 8 10'
                          fill='none'
                        >
                          <path
                            d='M7.2 4.20198C8 4.66386 8 5.81856 7.2 6.28044L1.8 9.39813C1 9.86001 -4.38926e-07 9.28266 -3.98547e-07 8.3589L-1.2599e-07 2.12352C-8.56108e-08 1.19976 1 0.622409 1.8 1.08429L7.2 4.20198Z'
                            fill='#A3A3A3'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#171717] p-6 rounded-lg shadow-lg mb-3'>
                <h2 className='text-xl font-bold mb-4'>Voice Enhancement</h2>
                <p className='mb-4'>
                  Crystal Clear Audio: Produce crystal clear speech for all your
                  books.
                </p>
                <div className='audio-section'>
                  <div className='audio-player'>
                    <button id='play-pause-btn-2' className='play-pause'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='#000'
                        width='24px'
                        height='24px'
                      >
                        <path id='play-icon-2' d='M8 5v14l11-7z' />
                        <path
                          id='pause-icon-2'
                          d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'
                          style={{ display: 'none' }}
                        />
                      </svg>
                    </button>
                    <div className='audio-waveform'>
                      <canvas id='waveform-2'></canvas>
                    </div>
                  </div>

                  <audio id='audio-2'>
                    <source src={audio} type='audio/mpeg' />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <div className='mt-4 grid gap-2 grid-cols-3'>
                  <img src={book1} alt='' />
                  <img src={book2} alt='' />
                  <img className='w-full h-[160px]' src={book3} alt='' />
                </div>
              </div>
            </div>

            <div className='portion-2'>
              <div className='bg-[#171717] p-6 rounded-lg shadow-lg mb-3'>
                <h2 className='text-xl font-bold mb-4'>Human Quality TTS</h2>
                <p className='mb-4'>
                  Our voices are so clear and natural, you&apos;ll think a real
                  person is reading to you.
                </p>
                <div className='bg-[#262626] rounded-lg'>
                  <div className='p-4 border-b border-white'>
                    <div className='audio-section'>
                      <div className='audio-player'>
                        <button id='play-pause-btn-1' className='play-pause'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='#000'
                            width='24px'
                            height='24px'
                          >
                            <path id='play-icon-1' d='M8 5v14l11-7z' />
                            <path
                              id='pause-icon-1'
                              d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'
                              style={{ display: 'none' }}
                            />
                          </svg>
                        </button>
                        <div className='audio-waveform'>
                          <canvas id='waveform-1'></canvas>
                        </div>
                      </div>

                      <audio id='audio-1'>
                        <source src={audio} type='audio/mpeg' />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                  <div className='p-4'>
                    <div className='flex gap-4 flex-wrap'>
                      <div className='grid grid-cols-2 gap-4'>
                        <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                          <img src={button1} alt='' />
                          <span>Wade Warren</span>
                        </button>
                        <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                          <img src={button7} alt='' />
                          <span>Ronald Richards</span>
                        </button>
                      </div>
                      <div className='grid grid-cols-2 gap-4'>
                        <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                          <img src={button8} alt='' />
                          <span>Jane Cooper</span>
                        </button>
                        <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                          <img src={button6} alt='' />
                          <span>Brooklyn Simmons</span>
                        </button>
                      </div>
                      <div className='grid grid-cols-2 gap-4'>
                        <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                          <img src={button9} alt='' />
                          <span>Kathryn Murphy</span>
                        </button>
                        <button className='bg-[#171717] flex gap-2 items-center leading-none p-2 ps-1 rounded text-sm'>
                          <img src={button10} alt='' />
                          <span>Jenny Wilson</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#171717] p-6 rounded-lg shadow-lg mb-3'>
                <h2 className='text-xl font-bold mb-4'>
                  Preview Before You Convert
                </h2>
                <p className='mb-4 text-[13px]'>
                  <strong>Check the Cost:</strong> See exactly how much your
                  audiobook will cost before you convert.
                </p>
                <p className='mb-4 text-[13px]'>
                  <strong>Preview Audio Quality:</strong> Listen to a short
                  preview to make sure you&apos;re happy with the voice and
                  settings.
                </p>
                <div className='bg-[#262626] p-4 rounded-lg'>
                  <h2 className='font-bold mb-2'>
                    Confirm details before you convert
                  </h2>
                  <p className='text-[13px] mb-4'>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </p>

                  <div className='flex gap-2 flex-wrap mb-4'>
                    <div className='bg-[#171717] p-2 px-3 rounded-lg flex-grow'>
                      <p className='opacity-60'>Length:</p>
                      <p>11 hr 35 min 43 sec</p>
                    </div>
                    <div className='bg-[#171717] p-2 px-3 rounded-lg flex-grow'>
                      <p className='opacity-60'>Chapters:</p>
                      <p>43</p>
                    </div>
                  </div>
                  <div className='bg-[#171717] p-2 flex justify-between rounded-lg mb-3'>
                    <div>Total cost of the book</div>
                    <div className='flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='15'
                        height='13'
                        viewBox='0 0 15 13'
                        fill='none'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M3.74219 4.4886C3.74219 4.21552 3.96357 3.99414 4.23664 3.99414H8.1923C8.46537 3.99414 8.68675 4.21552 8.68675 4.4886C8.68675 4.76168 8.46537 4.98305 8.1923 4.98305H4.23664C3.96357 4.98305 3.74219 4.76168 3.74219 4.4886Z'
                          fill='white'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M12.0954 5.60976C11.8587 5.60976 11.6505 5.70153 11.5003 5.8558L11.4914 5.8647C11.3161 6.03592 11.2181 6.27965 11.2427 6.53862L11.2433 6.54442C11.2781 6.96306 11.6806 7.32388 12.1745 7.32388H13.4553C13.5619 7.31696 13.6315 7.23362 13.6315 7.14587V5.78777C13.6315 5.69995 13.5619 5.61662 13.4553 5.60976H12.0954ZM10.7962 5.16139C11.1335 4.81741 11.5959 4.62085 12.0954 4.62085H13.4667C13.4726 4.62085 13.4785 4.62095 13.4843 4.62116C14.1126 4.6436 14.6204 5.15203 14.6204 5.78777V7.14587C14.6204 7.78161 14.1126 8.29005 13.4843 8.31246C13.4785 8.31266 13.4726 8.31279 13.4667 8.31279H12.1745C11.2452 8.31279 10.3433 7.63328 10.258 6.62946C10.2048 6.06104 10.4212 5.52999 10.7962 5.16139Z'
                          fill='white'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M4.23712 1.35708C4.07609 1.35708 3.92329 1.36857 3.7783 1.39088L3.76468 1.39278C3.03464 1.4844 2.46076 1.79695 2.06781 2.25798C1.67384 2.7202 1.4352 3.36317 1.4352 4.159V8.77392C1.4352 9.6505 1.72522 10.3425 2.19688 10.8142C2.66854 11.2858 3.36058 11.5758 4.23712 11.5758H10.1706C11.0472 11.5758 11.7392 11.2858 12.2109 10.8142C12.6825 10.3425 12.9725 9.6505 12.9725 8.77392V8.31243H12.1748C11.2455 8.31243 10.3435 7.63292 10.2583 6.6291C10.205 6.06068 10.4215 5.52963 10.7965 5.1611C11.1337 4.81705 11.5962 4.6205 12.0957 4.6205H12.9725V4.159C12.9725 3.35778 12.7297 2.71081 12.3295 2.24709C11.9303 1.78443 11.3475 1.47272 10.608 1.38672C10.5999 1.38578 10.5918 1.38464 10.5838 1.3833C10.4652 1.36354 10.3319 1.35708 10.1706 1.35708H4.23712ZM3.63476 0.412421C3.83044 0.382695 4.03136 0.368164 4.23712 0.368164H10.1706C10.3484 0.368164 10.5403 0.374592 10.734 0.405815C11.6902 0.519626 12.5041 0.935734 13.0782 1.60101C13.6537 2.26795 13.9614 3.1538 13.9614 4.159V5.11495C13.9614 5.38802 13.74 5.6094 13.467 5.6094H12.0957C11.8589 5.6094 11.6507 5.70117 11.5006 5.85544L11.4917 5.86434C11.3163 6.03556 11.2183 6.27936 11.243 6.53826L11.2436 6.54406C11.2784 6.9627 11.6809 7.32352 12.1748 7.32352H13.467C13.74 7.32352 13.9614 7.5449 13.9614 7.81798V8.77392C13.9614 9.87518 13.5922 10.8313 12.9101 11.5134C12.228 12.1955 11.2719 12.5648 10.1706 12.5648H4.23712C3.13584 12.5648 2.17969 12.1955 1.49762 11.5134C0.815543 10.8313 0.446289 9.87518 0.446289 8.77392V4.159C0.446289 3.1616 0.748257 2.28164 1.31519 1.6165C1.88178 0.951748 2.68659 0.532917 3.63476 0.412421Z'
                          fill='white'
                        />
                      </svg>{' '}
                      -57
                    </div>
                  </div>

                  <div className='mb-4'>
                    <button className='py-[6px] text-center bg-[#fff] text-[#000] rounded-lg w-full'>
                      Yes, create this audiobook
                    </button>
                  </div>
                  <div className=''>
                    <button className='py-[6px] text-center bg-[#171717] rounded-lg w-full'>
                      No, I’m not ready
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='portion-3'>
              <div className='bg-[#171717] p-6 rounded-lg shadow-lg mb-3'>
                <h2 className='text-xl font-bold mb-4'>
                  {' '}
                  Insert Ambient Music
                </h2>
                <p className='mb-4'>
                  Our voices are so clear and natural, you will think a real
                  person is reading to you.
                </p>
                <div className='bg-[#262626] rounded-lg'>
                  <div className='p-4'>
                    Harry Potter has never even heard of Hogwarts when the
                    letters start dropping on the
                    <span className='opacity-50'>
                      {' '}
                      doormat at number four, Privet Drive. Addressed in green
                      ink on yellowish parchment with a purple seal, they are
                      swiftly confiscat
                    </span>
                  </div>
                  <div className='py-4'>
                    <div>
                      <img src={card3Bottom} className='w-full' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#171717] p-6 rounded-lg shadow-lg mt-9 mb-3'>
                <h2 className='text-xl font-bold mb-4'>
                  Simple, Transparent Pricing
                </h2>
                <p className='mb-4 text-[13px]'>
                  <strong>Pay Per Character:</strong> We charge just $0.000025
                  per character of your ebook.
                </p>
                <p className='mb-4 text-[13px]'>
                  <strong>No Monthly Bills:</strong> Only add funds when you
                  need them.
                </p>
                <p className='mb-4 text-[13px]'>
                  <strong>No Commitments:</strong> Use it whenever you like
                </p>
                <div className='py-3 mb-4'>
                  <span className='bg-[#262626] p-2  rounded-lg'>
                    $0.000025 per character
                  </span>
                </div>
                <div className='relative bg-[#262626] p-4 rounded-lg'>
                  <div className='flex justify-between text-xs text-gray-400 mb-2'>
                    <span>$20</span>
                    <span>$100</span>
                  </div>
                  <div className='relative h-2 bg-[#171717] rounded-full'>
                    <div className='absolute bg-white h-2 rounded-full w-[48%]'></div>
                  </div>
                  <div className="bar-bottom">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className='mt-5'>
                  <button className='bg-white px-4 py-2 rounded-[8px] text-black'>Add Funds</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='bg-[#171717] rounded-lg p-6 shadow-lg w-full max-w-2xl'>
              <h2 className='text-xl font-semibold mb-4'>
                No Monthly Subscriptions
              </h2>
              <p className='text-sm mb-2'>
                <span className='font-bold'>Affordable Audiobooks:</span> Much
                cheaper than buying regular audiobooks.
              </p>
              <p className='text-sm mb-6'>
                <span className='font-bold'>No Hidden Fees:</span> What you see
                is what you pay.
              </p>
              <div className='bg-[#262626] px-4 p-6 rounded-lg'>
                <h3 className='text-center text-lg font-semibold mb-6'>
                  Affordable Audiobooks
                </h3>
                <div
                  className='flex items-center justify-between p-6'
                  style={{
                    backgroundImage: "url('arroaw-bg.png')",
                    backgroundSize: '100% 100%'
                  }}
                >
                  <div className='flex flex-col items-center space-y-2'>
                    <div className='bg-[#171717] p-2 px-6 rounded-lg text-center'>
                      Convert E-book
                    </div>
                  </div>

                  <div className='flex flex-col items-center space-y-2'>
                    <div className='bg-[#171717] p-2 px-6 rounded-lg text-center'>
                      Pay Once
                    </div>
                  </div>

                  <div className='flex flex-col items-center space-y-2'>
                    <div className='bg-[#171717] p-2 px-6 rounded-lg text-center '>
                      Start Listening
                    </div>
                  </div>
                </div>
                <div className='text-center text-sm line-through mt-[-12px]'>
                  <div>Hidden files</div>
                </div>
              </div>
            </div>
            <div className='bg-[#171717] p-6 rounded-lg shadow-md w-full max-w-2xl'>
              <h2 className='text-lg font-semibold mb-2 '>
                Choose What to Download
              </h2>
              <p className='text-sm text-gray-400 mb-6 '>
                Download A Full Book or Individual Chapters: Download the whole
                thing or just the parts you want
              </p>
              <div className='space-y-4 '>
                <div className='flex items-center justify-between gap-4 p-4 bg-[#252525] rounded-lg'>
                  <div className='flex flex-grow items-center gap-4 '>
                    <span className='w-8 h-8 flex items-center justify-center bg-[#404040] text-gray-200 font-semibold rounded '>
                      01
                    </span>
                    <div className='flex-grow flex items-center gap-4 justify-between'>
                      <p className='font-bold'>Name of the Chapter</p>
                      <p className='text-gray-400 '>02 hr 35 min · 250 KHz</p>
                    </div>
                  </div>
                  <div className='flex gap-2 '>
                    <button className='bg-[#404040] p-2 px-3 rounded-lg hover:bg-gray-500 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='13'
                        height='14'
                        viewBox='0 0 13 14'
                        fill='none'
                      >
                        <path
                          d='M11.1553 5.31241C12.4886 6.08221 12.4886 8.00671 11.1553 8.77651L3.48861 13.2029C2.15527 13.9727 0.488607 13.0104 0.488607 11.4708L0.488607 2.61811C0.488607 1.07851 2.15527 0.116258 3.48861 0.886058L11.1553 5.31241Z'
                          fill='white'
                        />
                      </svg>
                    </button>
                    <button className='bg-[#FFFFFF] p-2 px-3 rounded-lg hover:bg-gray-500 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                      >
                        <g clipPath='url(#clip0_16_147)'>
                          <path
                            d='M3.88184 13.752V15.2705C3.88184 15.6732 4.04182 16.0594 4.3266 16.3442C4.61138 16.629 4.99762 16.789 5.40035 16.789H14.5115C14.9142 16.789 15.3004 16.629 15.5852 16.3442C15.87 16.0594 16.03 15.6732 16.03 15.2705V13.752'
                            stroke='#262626'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M6.15918 9.19629L9.95548 12.9926L13.7518 9.19629'
                            stroke='#262626'
                            strokeWidth='2'
                            strokeLinecap='round'
                          />
                          <path
                            d='M9.95605 3.88159V12.9927'
                            stroke='#262626'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_16_147'>
                            <rect
                              width='18.2222'
                              height='18.2222'
                              fill='white'
                              transform='translate(0.844727 0.844482)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className='flex items-center justify-between gap-4 p-4 bg-[#252525] rounded-lg opacity-70'>
                  <div className='flex flex-grow items-center gap-4 '>
                    <span className='w-8 h-8 flex items-center justify-center bg-[#404040] text-gray-200 font-semibold rounded '>
                      01
                    </span>
                    <div className='flex-grow flex items-center gap-4 justify-between'>
                      <p className='font-bold'>Name of the Chapter</p>
                      <p className='text-gray-400 '>02 hr 35 min · 250 KHz</p>
                    </div>
                  </div>
                  <div className='flex gap-2 '>
                    <button className='bg-[#404040] p-2 px-3 rounded-lg hover:bg-gray-500 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='13'
                        height='14'
                        viewBox='0 0 13 14'
                        fill='none'
                      >
                        <path
                          d='M11.1553 5.31241C12.4886 6.08221 12.4886 8.00671 11.1553 8.77651L3.48861 13.2029C2.15527 13.9727 0.488607 13.0104 0.488607 11.4708L0.488607 2.61811C0.488607 1.07851 2.15527 0.116258 3.48861 0.886058L11.1553 5.31241Z'
                          fill='white'
                        />
                      </svg>
                    </button>
                    <button className='bg-[#FFFFFF] p-2 px-3 rounded-lg hover:bg-gray-500 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                      >
                        <g clipPath='url(#clip0_16_147)'>
                          <path
                            d='M3.88184 13.752V15.2705C3.88184 15.6732 4.04182 16.0594 4.3266 16.3442C4.61138 16.629 4.99762 16.789 5.40035 16.789H14.5115C14.9142 16.789 15.3004 16.629 15.5852 16.3442C15.87 16.0594 16.03 15.6732 16.03 15.2705V13.752'
                            stroke='#262626'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M6.15918 9.19629L9.95548 12.9926L13.7518 9.19629'
                            stroke='#262626'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M9.95605 3.88159V12.9927'
                            stroke='#262626'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_16_147'>
                            <rect
                              width='18.2222'
                              height='18.2222'
                              fill='white'
                              transform='translate(0.844727 0.844482)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-4 p-4 bg-[#252525] rounded-lg opacity-40'>
                  <div className='flex flex-grow items-center gap-4 '>
                    <span className='w-8 h-8 flex items-center justify-center bg-[#404040] text-gray-200 font-semibold rounded '>
                      01
                    </span>
                    <div className='flex-grow flex items-center gap-4 justify-between'>
                      <p className='font-bold'>Name of the Chapter</p>
                      <p className='text-gray-400 '>02 hr 35 min · 250 KHz</p>
                    </div>
                  </div>
                  <div className='flex gap-2 '>
                    <button className='bg-[#404040] p-2 px-3 rounded-lg hover:bg-gray-500 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='13'
                        height='14'
                        viewBox='0 0 13 14'
                        fill='none'
                      >
                        <path
                          d='M11.1553 5.31241C12.4886 6.08221 12.4886 8.00671 11.1553 8.77651L3.48861 13.2029C2.15527 13.9727 0.488607 13.0104 0.488607 11.4708L0.488607 2.61811C0.488607 1.07851 2.15527 0.116258 3.48861 0.886058L11.1553 5.31241Z'
                          fill='white'
                        />
                      </svg>
                    </button>
                    <button className='bg-[#FFFFFF] p-2 px-3 rounded-lg hover:bg-gray-500 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                      >
                        <g clipPath='url(#clip0_16_147)'>
                          <path
                            d='M3.88184 13.752V15.2705C3.88184 15.6732 4.04182 16.0594 4.3266 16.3442C4.61138 16.629 4.99762 16.789 5.40035 16.789H14.5115C14.9142 16.789 15.3004 16.629 15.5852 16.3442C15.87 16.0594 16.03 15.6732 16.03 15.2705V13.752'
                            stroke='#262626'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M6.15918 9.19629L9.95548 12.9926L13.7518 9.19629'
                            stroke='#262626'
                            strokeWidth='2'
                            strokeLinecap='round'
                          />
                          <path
                            d='M9.95605 3.88159V12.9927'
                            stroke='#262626'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_16_147'>
                            <rect
                              width='18.2222'
                              height='18.2222'
                              fill='white'
                              transform='translate(0.844727 0.844482)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChoose
