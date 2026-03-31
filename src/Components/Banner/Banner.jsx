import React from 'react';
import badgeDot from '../../assets/dot.png'
import { MdOutlinePlayArrow } from 'react-icons/md';
import bannerPhoto from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='md:w-10/12 mx-auto my-14 md:flex justify-between items-center'>
            <div className='space-y-4 text-center md:text-left'>
                <div className="badge badge-soft badge-primary px-4 py-4 rounded-full"><img src={badgeDot} alt="badgeDot" /><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium'>New: AI-Powered Tools Available</span></div>
                <h1 className=' text-4xl lg:text-5xl xl:text-7xl font-extrabold'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-gray-500 text-sm md:text-lg lg:text-xl'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products</p>
                <div className='flex gap-4 items-center justify-center md:justify-start'>
                    <button className='btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-bold'>Explore Products</button>
                    <button className='flex items-center gap-1 btn btn-outline btn-primary rounded-full'><MdOutlinePlayArrow />Watch Demo</button>
                </div>

            </div>
            <div className='mt-4'>
                <img className='mx-auto' src={bannerPhoto} alt="banner" />
            </div>

        </div>
    );
};

export default Banner;