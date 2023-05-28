
import Button from '../Button'
import { IoIosArrowDown } from 'react-icons/io';
import BgImage from '../../../public/frame3.png'
import useTranslation from '@/hooks/useTranslation';

const Hero = () => {

    const { t } = useTranslation();

    return (
        <div className='main-cpmBg'
            style={{
                backgroundImage: `url(${BgImage.src})`
            }}>
            <div className='container'>
                <div className=' py-20'>
                    <div>
                        <h2 className='text-3xl sm:text-6xl md:text-[70px] text-white font-bold mx-auto max-w-[1060px] text-center leading-[70px] pb-12'>{t("services_HeroTitle")}</h2>
                        <h3 className='text-base sm:text-[26px] max-w-[1000px] mx-auto font-medium text-white text-center pb-5 leading-9'>{t("services_Heropara")}</h3>
                    </div>
                    <div className='flex justify-center'>
                        <Button text={t("services_HeroBtn")} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero

