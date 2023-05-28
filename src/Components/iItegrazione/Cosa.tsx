import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import useTranslation from "@/hooks/useTranslation";


const Cosa = () => {
    const { t } = useTranslation();
    const data = [
        {
            img: '/laughman.png',
            btnTitle: 'Interpretazione a distanza per qualsiasi tipologia di evento!',
            heading:  t("microsoftTeams_Heading"),
            para: (
                t("microsoftTeams_para")
            )
        },
    ]
    const counting = [
        {
            num: '+200',
            text:  t("microsoftTeams_FirstCountTesting"),
            color: '#8300E9',
            color2: '#8300E9'
    
        },
        {
            num: '+30000',
            text: t("microsoftTeams_SecCountTesting"),
            color: '#2EA3F2',
            color2: '#0c71c3'
        },
        {
            num: '+6000',
            text: t("microsoftTeams_ThirdCountTesting"),
            color: '#f22ed4',
            color2: '#ea20e3'
        },
    ]

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


    return (
        <div className='container'>
            <div className='py-12 smL:py-20'>
                {data.map((item, index) => {
                    return (
                        <div className='flex flex-col justify-center gap-10 py-10 sm:py-20 items-center' key={index}>
                            <div>
                                <h2 className='text-[30px] m:text-[45px] text-[#333333] font-bold pb-5'>
                                    {item.heading}
                                </h2>
                                <p className='text-base text-[#666666] font-medium leading-9'>
                                    {item.para}
                                </p>
                            </div>
                            <div className='flex justify-center w-full'>
                                <Image src={item.img} alt={''} width={1000} height={0} />
                            </div>
                        </div>
                    )
                })}
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
    )
}

export default Cosa





