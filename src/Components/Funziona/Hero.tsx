
import Button from '../Button'
import BgImage from '../../../public/frame.png'
import useTranslation from '@/hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='home-bgMain'>
        <div className='container'>
          <div className='flex justify-center items-center sm:gap-10'>
            <div className='pb-10 sm:pb-32'>
              <div>
                <h3 className='text-base sm:text-[26px] font-medium text-white pt-20 sm:pt-[106px] pb-4 text-center'>{t('howDoes_Title')}</h3>
                <h2 className='text-3xl sm:text-6xl md:text-[79px] text-white font-bold mx-auto max-w-[860px] text-center leading-[1.2em]'>{t('howDoes_SubTitle')}</h2>
                <p className=' text-[20px] font-medium text-white mx-auto max-w-[750px] text-center pt-5'>{t('howDoes_para')}</p>
              </div>
              <div className='flex justify-center mt-10'>
                <Button text={t('howDoes_Btn')} color={'black'} backgroundColor={'white'} minWidth={undefined} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero

