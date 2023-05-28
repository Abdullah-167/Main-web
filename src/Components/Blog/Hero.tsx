import Image from 'next/image';
import React, { useState } from 'react';
import blogImg from '../../../public/hands.png'
import useTranslation from '@/hooks/useTranslation';

const Hero = () => {
    const { t } = useTranslation();
    // const [input, setInput] = useState('');
    // const [alertMessage, setAlertMessage] = useState('');

    // const handleSubmit = () => {
    //     if (input === '') {
    //         setAlertMessage('Input cannot be empty');
    //         setTimeout(() => {
    //             setAlertMessage('');
    //         }, 2000);
    //     } else {
    //         setInput('');
    //         setAlertMessage('Data Submitted Successfully');
    //         setTimeout(() => {
    //             setAlertMessage('');
    //         }, 2000);
    //     }
    // }

    return (
        <div 
        style={{
            backgroundImage: `url(${blogImg.src})`
        }}>
        
            <div className='py-32'>
                <p className='text-white text-2xl text-center font-bold pb-6'>Blog</p>
                <h3 className='text-[80px] font-bold text-white max-w-[1200px] mx-auto text-center leading-[110px]'>{t("blogh1Title")}</h3>
                {/* <input className='py-[14px] px-[1%] w-full max-w-[512px] mx-auto flex justify-center text-base rounded bg-[rgba(255,255,255,0.3)] outline-none text-white border-b border-b-[rgba(255,255,255,0.3)] mb-5' type="email" placeholder='Indirizzo Email' value={input} onChange={(e) => setInput(e.target.value)} />
                {alertMessage && (
                    <p className={`text-white text-sm text-center mb-4 max-w-[300px] py-3 px-3 mx-auto absolute inset-x-0 bottom-20 translate-x-2    ${alertMessage === 'Data Submitted Successfully' ? 'bg-green-500' : 'bg-red-500'}`}>{alertMessage}</p>
                )}
                <button className='block border border-[rgba(0,0,0,0)] py-[14px] px-[4%] w-full max-w-[512px] mx-auto bg-[#9efaff] text-[#8860D8] rounded text-sm font-bold uppercase tracking-[4px]' onClick={handleSubmit}>
                    Registrati
                </button> */}
            </div>
        </div>
    )
}

export default Hero;
