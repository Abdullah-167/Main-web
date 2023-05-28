
import Button from '../Button'
import { IoIosArrowDown } from 'react-icons/io';
import BgImage from '../../../public/frame3.png'

const Hero = () => {
  return (
    <div className='main-cpmBg'
    style={{
      backgroundImage: `url(${BgImage.src})`
  }}>
      <div className='container'>
          <div className=' py-20'>
            <div>
              <h2 className='text-3xl sm:text-6xl md:text-[79px] text-white font-bold mx-auto max-w-[1060px] text-center leading-[1.2em] pb-12'>Remote interpretation Services</h2>
              <h3 className='text-base sm:text-[26px] font-medium text-white text-center pb-5'>Not only online events, but unique experiences!</h3>
              <p className=' text-[20px] font-medium text-white mx-auto max-w-[850px] text-center pb-5'>As a remote interpretation agency, we will take care of the management of your online event as a whole, being on your side every step of the way.</p>
              <p className=' text-[20px] font-medium text-white mx-auto max-w-[850px] text-center pb-10'>Our professionality, punctual delivery, and eye for details are the key to your success.</p>
            </div>
            <div className='flex justify-center'>
              <Button text={'Contact Us'} color={'black'} backgroundColor={'white'} minWidth={undefined}  />
            </div>
          </div>
        </div>
      </div>

  )
}

export default Hero

