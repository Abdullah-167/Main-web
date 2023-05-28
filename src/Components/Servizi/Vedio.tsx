import Image from 'next/image'

import Button from '../Button'
import { IoIosArrowDown } from 'react-icons/io';
import useTranslation from '@/hooks/useTranslation';

const Vedio = () => {

    const { t } = useTranslation();


    const data = [
        {
            heading: t("services_RemoteTitle"),
        },
        {
            para: t("services_Remotepara"),
        }
    ]

    return (
        <div className='vedio-bg py-12 sm:py-20'>
            <div className='container relative'>
                <div className='block lg:flex sm:gap-10'>
                    <div className='hidden md:block pt-20'>
                        <iframe className='w-full h-[300px] sm:h-[600px]' src="https://www.youtube.com/embed/KCgEhNeVhUc"></iframe>
                    </div>
                    <div className='pt-10'>
                        <div>
                            {data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <h3 className='text-[#FCA497] text-[32px] font-bold'>{item.heading}</h3>
                                        <p className='text-base font-medium text-white pbF-4  py-3'>{item.para}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='mt-10'>
                            <Button text={t("services_RemoteBtn")} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                        </div>
                    </div>
                    <div className='flex md:hidden pt-20'>
                        <iframe className='w-full h-[300px] sm:h-[600px]' src="https://www.youtube.com/embed/KCgEhNeVhUc"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vedio

