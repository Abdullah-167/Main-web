;
import Button from '../Button';
import { IoIosArrowDown } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io5';
import { BsYoutube } from 'react-icons/bs';
import BgImage from '../../../public/frame3.png'


const Pronto = () => {
    return (
        <div className='main-cpmBg py-10 sm:py-16'
            style={{
                backgroundImage: `url(${BgImage.src})`
            }}>
            <div className='container'>
                <div>

                    <div>
                        <h5 className='text-2xl sm:text-5xl text-white font-bold text-center pt-10 pb-8 sm:leading-[60px] max-w-[1050px] mx-auto'>USA LA MIGLIORE TECNOLOGIA NEL MONDO DELLA TRADUZIONE</h5>
                    </div>

                    <div className='flex justify-center'>
                        <Button text={'Ask For A Fast Quotation'} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center'>
                    {iconData.map((item, index) => {
                        return (
                            <div key={index} className='bg-[#F3E9FD] text-[#6A1ACC] font-bold text-xl w-12 h-12 rounded-full p-3 flex justify-center items-center cursor-pointer mt-14'>
                                {item.icon}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Pronto;



const iconData = [
    {
        icon: <FaFacebookF />
    },
    {
        icon: <AiOutlineTwitter />
    },
    {
        icon: <GrLinkedinOption />
    },
    {
        icon: <IoLogoInstagram />
    },
    {
        icon: <BsYoutube />
    }
];
