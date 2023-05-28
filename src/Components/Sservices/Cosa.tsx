import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { IoIosArrowDown } from 'react-icons/io';


const Cosa = () => {

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
                        <div className='flex flex-col xl:flex-row gap-10 py-10 sm:py-20 items-center' key={index}>
                            <div>
                                <h2 className='text-[30px] m:text-[45px] text-[#333333] font-bold sm:min-w-[600px] pb-5'>
                                    {item.heading}
                                </h2>
                                <p className='text-base text-[#666666] font-medium xl:max-w-[550px] leading-9'>
                                    {item.para}
                                </p>
                                <div className='mt-10'>
                                    <Button text={item.btnTitle} color={'white'} backgroundColor={'#682CCD'} minWidth={undefined} />
                                </div>
                            </div>
                            <div className='w-full'>
                                <iframe title='rafiky' className='w-full' src={item.url} height={470}></iframe>
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


const data = [
    {
        url: 'https://www.youtube.com/embed/u6wyZwyTVoA?feature=oembed',
        btnTitle: 'Richiedi un preventivo',
        heading: 'Rafiky XP',
        para: 'Whether you are about to promote activities or products, conduct interviews, hold workshops, webinars or online courses, organizing an event online is not easy at all. It will be necessary to define objectives and strategies, to create work plans, agendas and questionnaires, to take care of collateral marketing and management of the participants, without neglecting the purely technical part. Rafiky’s team will care for every aspect of your online event, with a view to guaranteeing for a unique experience.'
    },
]


const counting = [
    {
        num: '+200',
        text: 'Lingue',
        color: '#8300E9',
        color2: '#8300E9'

    },
    {
        num: '+30000',
        text: 'Eventi Online',
        color: '#2EA3F2',
        color2: '#0c71c3'
    },
    {
        num: '+6000',
        text: 'Interpreti Professionisti',
        color: '#f22ed4',
        color2: '#ea20e3'
    },
]