import React, { useEffect, useState } from 'react'
import { IoExtensionPuzzleSharp } from 'react-icons/io5';
import { AiOutlineDesktop } from 'react-icons/ai';
import { BsCoin, BsStar, BsEnvelope } from 'react-icons/bs';
import { GrReactjs } from 'react-icons/gr';
import { RiGlobalLine } from 'react-icons/ri';
import { AiOutlineMobile } from 'react-icons/ai';
import useTranslation from '@/hooks/useTranslation';

const Cards = () => {

    const [count, setCount] = useState(0);

    const declaredNum = 500;

    useEffect(() => {
        if (count < declaredNum) {
            const timeOutId = setTimeout(() => {
                setCount(count + 25)
            }, 100);

            return () => clearTimeout(timeOutId)
        }
    }, [count])

    const { t } = useTranslation();

    const cards = [
        {
            icon: <IoExtensionPuzzleSharp />,
            heading: t("serviceschooseRafiky_FirstcardTitle"),
            para: t("serviceschooseRafiky_Firstcardpara"),
            bgColor: 'rgba(122,105,230,0.3)',
            color: '#7a69e6'
        },
        {
            icon: <AiOutlineDesktop />,
            heading: t("serviceschooseRafiky_SeccardTitle"),
            para: t("serviceschooseRafiky_Seccardpara"),
            bgColor: 'rgba(250,94,93,0.3)',
            color: '#fa5e5d'
        },
        {
            icon: <BsCoin />,
            heading: t("serviceschooseRafiky_ThirdcardTitle"),
            para: t("serviceschooseRafiky_Thirdcardpara"),
            bgColor: 'rgba(249,141,94,0.3)',
            color: '#f98d5e'
        },
        {
            icon: <BsStar />,
            heading: t("serviceschooseRafiky_ForthcardTitle"),
            para: t("serviceschooseRafiky_Forthcardpara"),
            bgColor: 'rgba(118,206,68,0.3)',
            color: '#76ce44'
        },

    ]


    const counting = [
        {
            num: '+200',
            text: t("serviceschooseRafiky_Firstcountingtest"),
            color: '#8300E9',
            color2: '#8300E9'

        },
        {
            num: '+30000',
            text: t("serviceschooseRafiky_Seccountingtest"),
            color: '#2EA3F2',
            color2: '#0c71c3'
        },
        {
            num: '+6000',
            text: t("serviceschooseRafiky_Thirdcountingtest"),
            color: '#f22ed4',
            color2: '#ea20e3'
        },
    ]


    return (
        <div className='bg-[#FFFFFF]  sm:py-20'>
            <div className='container'>
                <h1 className=' text-[35px] sm:text-[45px] text-[#333333] font-bold text-center mb-12'>{t("serviceschooseRafiky_Tile")}</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5 pb-40'>
                    {cards.map((item, index) => {

                        return (
                            <div
                                className='hero-cards bg-white px-4 py-10 rounded-xl'
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
                                <p className='text-[#666666] max-w-[250px] mx-auto text-center py-2'>
                                    {item.para}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className='flex flex-col md:flex-row justify-center md:justify-between gap-5'>
                    {counting.map((item, index) => {
                        return (
                            <div key={index}>
                                <p
                                    className='text-[60px] lg:text-[72px] font-medium text-center'
                                    style={{
                                        color: item.color
                                    }}
                                >
                                    {count >= declaredNum ? item.num : count}
                                </p>
                                <p
                                    className='text-[20px] lg:text-[26px] font-medium text-center'
                                    style={{
                                        color: item.color2
                                    }}
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Cards;


