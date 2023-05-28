
import Button from '../Button'
import useTranslation from '@/hooks/useTranslation'

const Home = () => {

    const { t } = useTranslation()

    return (
        <div className='contact-bg'>
            <div className='text-white  text-center py-32'>
                <p className='text-[26px] font-medium'>{t('zonessPartners_Title')}</p>
                <h2 className='text-[80px] font-bold pb-8'>{t('zonessPartners_SubTitle')}</h2>
                <p className='font-normal max-w-[750px] mx-auto text-lg leading-9 pb-12'>
                {t('zonessPartners_para')}
                </p>
                <span className='flex justify-center'>
                    <Button text={t('zonessPartners_Btn')} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                </span>
            </div>
        </div>
    )
}

export default Home