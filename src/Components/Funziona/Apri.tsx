
import Button from '../Button'
import { IoIosArrowDown } from 'react-icons/io';
import useTranslation from '@/hooks/useTranslation';

const Apri = () => {
    const {t} = useTranslation();
    return (
        <div className='container'>
            <div className='pt-10 my-10 sm:my-20'>
                        <div className='max-w-[800px] mx-auto'>
                            <h3 className='text-3xl sm:text-[45px] text-[#333333] text-center font-bold leading-9 sm:leading-[60px]'>
                            {t('remoteVideo_Heading')}
                            </h3>
                            <p className='text-center text-base font-medium py-3 leading-8'>
                            {t('remoteVideo_para')}
                            </p>
                        </div>
                <div className='flex justify-center mt-5'>
                    <Button text={t('remoteVideo_Btn')} color={'white'} backgroundColor={'#8624E1'} minWidth={undefined} />
                </div>
            </div>
        </div>
    )
}

export default Apri


