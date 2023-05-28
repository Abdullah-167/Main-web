import React, { FC } from 'react';
import { BsCoin, BsStar, BsEnvelope, BsClock } from 'react-icons/bs';
import { GrStatusGood } from 'react-icons/gr';
import { RxSpeakerLoud } from 'react-icons/rx';
import { AiOutlineMobile, AiFillLock, AiOutlineCloudDownload } from 'react-icons/ai';
import { SlMagnifierAdd } from 'react-icons/sl';
import { HiOutlineKey } from 'react-icons/hi';
import { TbMessageCircle } from 'react-icons/tb';
import useTranslation from '@/hooks/useTranslation';

interface PropsComp {
    display: string
}



const SecCard: FC<PropsComp> = ({ display }) => {
    const { t } = useTranslation();

    const cards = [
        {
            icon: <BsClock />,
            heading: t('chooseRafiky_FirstcardTitle'),
            para: t('chooseRafiky_Firstcardpara'),
            bgColor: 'rgba(122,105,230,0.3)',
            color: '#7a69e6'
        },
        {
            icon: <GrStatusGood />,
            heading: t('chooseRafiky_SeccardTitle'),
            para: t('chooseRafiky_Seccardpara'),
            bgColor: 'rgba(250,94,93,0.3)',
            color: '#7a69e6'
        },
        {
            icon: <SlMagnifierAdd />,
            heading: t('chooseRafiky_ThirdcardTitle'),
            para: t('chooseRafiky_Thirdcardpara'),
            bgColor: 'rgba(249,141,94,0.3)',
            color: '#f98d5e'
        },

        {
            icon: <RxSpeakerLoud />,
            heading: t('chooseRafiky_ForthcardTitle'),
            para: t('chooseRafiky_Forthcardpara'),
            bgColor: 'rgba(106,154,232,0.3)',
            color: '#6a9ae8'
        },
        {
            icon: <HiOutlineKey />,
            heading: t('chooseRafiky_FifthcardTitle'),
            para: t('chooseRafiky_Fifthcardpara'),
            bgColor: 'rgba(249,192,67,0.3)',
            color: '#f9c043'
        },
        {
            icon: <AiFillLock />,
            heading: t('chooseRafiky_SixcardTitle'),
            para: t('chooseRafiky_Sixcardpara'),
            bgColor: 'rgba(118,206,68,0.3)',
            color: '#76ce44'
        },
        {
            icon: <AiOutlineMobile />,
            heading: t('chooseRafiky_SeventhcardTitle'),
            para: ('chooseRafiky_Seventhcardpara'),
            bgColor: 'rgba(247,103,180,0.3)',
            color: '#f767b4'
        },
        {
            icon: <AiOutlineCloudDownload />,
            heading: ('chooseRafiky_EightcardTitle'),
            para: ('chooseRafiky_Eightcardpara'),
            bgColor: 'rgba(68,206,176,0.3)',
            color: '#44ceb0'
        },
    ]
        
    return (
        <div className='bg-[#FFFFFF]  sm:py-20'>
            <div className='container'>
                <h1 className=' text-[35px] sm:text-[45px] text-[#333333] font-bold text-center mb-16'>{t('chooseRafiky_Title')}</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5 pb-32'>
                    {cards.map((item, index) => {
                        return (
                            <div
                                className=' bg-white px-4 py-7 rounded-xl'
                                key={index}
                            >
                                <div
                                    className={`text-4xl rounded-full w-16 h-16 mx-auto px-4 py-3 text-center`}
                                    style={{
                                        backgroundColor: item.bgColor,
                                        color: item.color
                                    }}
                                >
                                    <div className="icon-container"> {item.icon} </div>
                                </div>
                                <h2 className='text-lg text-[#333333] text-center font-bold pt-8 pb-3'>
                                    {item.heading}
                                </h2>
                                <p className='text-base text-[#666666] max-w-[250px] mx-auto text-center'>
                                    {item.para}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <span className='flex justify-center'
                    style={{
                        display: display
                    }}
                >
                    <iframe title='rafiky' className="w-[1000px] h-[566px] rounded-md mt-5 mb-12" loading='lazy' src="https://www.youtube.com/embed/KCgEhNeVhUc" />
                </span>
            </div>
        </div>
    );
};

export default SecCard;


