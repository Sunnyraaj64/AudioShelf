import { useEffect } from 'react';
import '../css/main.css'

import button1 from '../assets/Images/WhyChooseComponent/button-1.png'
import button2 from '../assets/Images/WhyChooseComponent/button-2.png'
import button3 from '../assets/Images/WhyChooseComponent/button-3.png'
import button4 from '../assets/Images/WhyChooseComponent/button-4.png'
import button5 from '../assets/Images/WhyChooseComponent/button-5.png'
import button6 from '../assets/Images/WhyChooseComponent/button-6.png'

import audio from '../assets/Images/videoplayback.m4a'
// import book1 from '../assets/Images/WhyChooseComponents/book1.png'
// import book2 from '../assets/Images/WhyChooseComponents/book2.png'
// import book3 from '../assets/Images/WhyChooseComponents/book3.png'

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Customizable Output Section */}
          <div className='bg-[#171717] p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>Customizable Output</h2>
            <p className='mb-4'>
              Pick Your Speaker: Choose from male or female voices.
            </p>
            <div className='flex gap-4 flex-wrap'>
              <button className='bg-gray-700 py-2 px-4 rounded team-button'>
                <img src={button1} alt='' />
                <span>Wade Warren</span>
              </button>
              <button className='bg-gray-700 py-2 px-4 rounded team-button'>
                <img src={button2} alt='' />
                <span>Courtney Henry</span>
              </button>
              <button className='bg-gray-700 py-2 px-4 rounded team-button'>
                <img src={button3} alt='' />
                <span>Jane Cooper</span>
              </button>
              <button className='bg-gray-700 py-2 px-4 rounded team-button'>
                <img src={button4} alt='' />
                <span>Cameron Williamson</span>
              </button>
              <button className='bg-gray-700 py-2 px-4 rounded team-button'>
                <img src={button5} alt='' />
                <span>Brooklyn Simmons</span>
              </button>
              <button className='bg-gray-700 py-2 px-4 rounded team-button'>
                <img src={button6} alt='' />
                <span>Floyd Miles</span>
              </button>
            </div>
            <div className='mt-4'>
              <p className='mb-2'>Reading Speed</p>
              <div className='flex items-center gap-2'>
                <button className='bg-gray-700 py-1 px-3 rounded'>Slow</button>
                <button className='bg-gray-700 py-1 px-3 rounded'>
                  Normal
                </button>
                <button className='bg-gray-700 py-1 px-3 rounded'>Fast</button>
              </div>
            </div>
          </div>

          {/* Human Quality TTS */}
          <div className='bg-[#171717] p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>Human Quality TTS</h2>
            <p className='mb-4'>
              Our voices are so clear and natural, you&apos;ll think a real
              person is reading to you.
            </p>
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
            <div className='mt-4 flex gap-2 flex-wrap'>
              <button className='bg-gray-700 py-2 px-4 rounded'>
                Wade Warren
              </button>
              <button className='bg-gray-700 py-2 px-4 rounded'>
                Ronald Richards
              </button>
              {/* Add other buttons similarly */}
            </div>
          </div>

          {/* Insert Ambient Music */}
          <div className='bg-[#171717] p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>Insert Ambient Music</h2>
            <p className='mb-4 text-sm'>
              Harry Potter has never even heard of Hogwarts...
            </p>
            <div className='flex justify-center'>
              <div className='bg-gray-700 p-4 rounded-full'>
                {/* <img
                  src={microphoneIcon}
                  alt='Microphone'
                  className='w-8 h-8'
                /> */}
              </div>
            </div>
          </div>

          {/* Voice Enhancement */}
          <div className='bg-[#171717] p-6 rounded-lg shadow-lg'>
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
            <div className='mt-4 grid grid-cols-3 gap-4'>
              {/* <img src={book1} alt='Book 1' className='rounded' />
              <img src={book2} alt='Book 2' className='rounded' />
              <img src={book3} alt='Book 3' className='rounded' /> */}
            </div>
          </div>

          {/* Preview Before You Convert */}
          <div className='bg-[#171717] p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>
              Preview Before You Convert
            </h2>
            <p className='mb-4'>
              Check the cost and listen to a short preview before converting.
            </p>
            <div className='mt-4'>
              <label className='block mb-2'>Duration</label>
              <input
                type='text'
                className='w-full bg-gray-700 p-2 rounded'
                value='11 hr 35 min 43 sec'
                readOnly
              />
              <label className='block mt-4 mb-2'>Chapters</label>
              <input
                type='text'
                className='w-full bg-gray-700 p-2 rounded'
                value='43'
                readOnly
              />
            </div>
            <button className='bg-blue-600 py-2 px-4 mt-4 rounded w-full'>
              Yes, create this audiobook
            </button>
            <button className='bg-red-600 py-2 px-4 mt-2 rounded w-full'>
              No, not interested
            </button>
          </div>

          {/* Simple, Transparent Pricing */}
          <div className='bg-[#171717] p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>
              Simple, Transparent Pricing
            </h2>
            <p className='mb-4'>Pay per character: $0.000025 per character.</p>
            <div className='mt-4 flex justify-between items-center'>
              <span>$20</span>
              <input type='range' className='w-full mx-4' min='20' max='100' />
              <span>$100</span>
            </div>
            <button className='bg-green-600 py-2 px-4 mt-4 rounded w-full'>
              Add Funds
            </button>
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
