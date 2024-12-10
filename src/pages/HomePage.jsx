import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import LanguageLogo from '../assets/Images/FormLogos/language.png'
import CloudLogo from '../assets/Images/FormLogos/cloud-download.png'
import VectorLogo from '../assets/Images/FormLogos/Vector.png'
import MoniterLogo from '../assets/Images/FormLogos/monitor.png'
import ImageContent from '../components/ImageContent'
import SubscriptionTable from '../components/SubscriptionTable'
import ContentTable from '../components/ContentTable'
import HeroImg from '../assets/Images/heroImg.png'
import WhyChoose from '../components/WhyChoose'
import AudioBook from '../components/AudioBook'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        subheading='Your Go-To Audiobook Maker'
        heading={
          <>
            Convert <span className='text-gray-300'>.epub</span> books into
            high-quality
            <span className='text-gray-300'>.mp3</span> audiobooks in minutes
          </>
        }
        description={
          'With AudioShelf, you can convert any .epub book into an audiobook fast. Old books, new ones, or even self-published titles—you name it! It’s easy, quick, and you get to pick how you want to listen.'
        }
        buttonText='Join The Waitlist'
        buttonLink='#'
        waitlistText='Join the Waitlist for Early Access'
        imageSrc={HeroImg}
      />
      <Form />
      <WhyChoose />
      <ContentTable />
      <SubscriptionTable />
      <AudioBook />
      <div>
        <h3 className='text-center mb-10 mt-20 text-white text-4xl font-bold'>
          Exciting Features Coming Soon!
        </h3>
        <div className='mb-20 max-w-[1200px] m-auto max-sm:flex md:flex md:justify-center max-sm:justify-center'>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 gap-4'>
            <Cards
              img={LanguageLogo}
              heading='Multi-language Support'
              paragraph='Listen in Your Language: Upload books in many major languages.'
            />
            <Cards
              img={CloudLogo}
              heading='More Download Options'
              paragraph='Different File Formats: Get your audiobooks in .m4a, .wav, .flac, and more.'
            />
            <Cards
              img={VectorLogo}
              heading='More Upload Formats'
              paragraph='Not Just .epub: Soon you can upload .pdf, .docx, .txt files too.'
            />
            <Cards
              img={MoniterLogo}
              heading='Desktop & Mobile App'
              paragraph='Listen Offline: Use the desktop & mobile app to enjoy your audiobooks anywhere'
            />
          </div>
        </div>
      </div>

      <ImageContent />
      <Footer />
    </>
  )
}

export default HomePage
