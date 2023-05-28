
import Button from '../../Button'
import { IoIosArrowDown } from 'react-icons/io';
import BgImage from '../../../../public/frame3.png'
import useTranslation from '@/hooks/useTranslation'

const Hero = () => {
    const {t} = useTranslation();
    return (
        <div className='main-cpmBg'
            style={{
                backgroundImage: `url(${BgImage.src})`
            }}>
            <div className='container'>
                <div className='flex justify-center items-center sm:gap-10'>
                    <div className='pb-10 pt-10 sm:pt-32 sm:pb-32'>
                        <div>
                            <h2 className='text-3xl sm:text-6xl md:text-[79px] text-white font-bold mx-auto max-w-[1160px] text-center leading-[1.2em] pb-10'> {t("britishEnglish_Heading")}</h2>
                            <p className=' text-[20px] font-medium text-white mx-auto max-w-[950px] text-center pt-5 leading-10'> {t("britishEnglish_para")}</p>
                        </div>
                        <div className='flex justify-center mt-10'>
                            <Button text= {t("britishEnglish_Btn")} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero

