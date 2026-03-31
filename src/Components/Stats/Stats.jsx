import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='w-11/12 md:w-10/12 mx-auto py-6 md:py-10 md:flex justify-around md:divide-x md:divide-white/30'>
                <div className='text-center space-y-3 mt-6'>
                    <h1 className='text-6xl font-extrabold text-white md:px-8 xl:px-32'>50K+</h1>
                    <p className='text-2xl font-medium text-white'>Active Users</p>
                </div>
                <div className='text-center space-y-3 mt-6'>
                    <h1 className='text-6xl font-extrabold text-white md:px-8 xl:px-32'>200+</h1>
                    <p className='text-2xl font-medium text-white'>Premium Tools</p>
                </div>
                <div className='text-center space-y-3 mt-6'>
                    <h1 className='text-6xl font-extrabold text-white md:px-8 xl:px-32'>4.9</h1>
                    <p className='text-2xl font-medium text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;