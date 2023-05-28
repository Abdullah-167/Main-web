
import Button from '../Button'
import useTranslation from '@/hooks/useTranslation';

const Summary = () => {

    const { t } = useTranslation();

    const data = [
        {
            heading: t('ourOffer_FirstHeading'),
            text: t('ourOffer_Firstpara'),
        },
        {
            heading: t('ourOffer_SecHeading'),
            text: t('ourOffer_Secpara'),
        }, {
            heading: t('ourOffer_ThirdHeading'),
            text: t('ourOffer_Thirdpara'),
        }, {
            heading: t('ourOffer_ForthHeading'),
            text: t('ourOffer_Forthpara'),
        },
    ]

    return (
        <div className='max-w-[1000px] mx-auto'>
            <div className='text-[#666666] py-28'>
                <div className='pb-6'>
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                <h3 className='font-bold pb-1 text-black'>{item.heading}</h3>
                                <p>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
                <span>
                    <Button text={t('ourOffer_Btn')} color={'white'} backgroundColor={'#8300E9'} minWidth={undefined} />
                </span>
            </div>
        </div>
    )
}

export default Summary

