import React from 'react';
import user from '../../assets/user.png'
import choose from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='w-8/12 mx-auto py-28 text-center space-y-4'>
                <h2 className='text-2xl md:text-5xl font-extrabold'>Get Started in 3 Steps</h2>
                <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid md:grid-cols-3 gap-8 mt-10'>
                    <div className='bg-base-100 shadow-sm border border-gray-200 py-20 px-6 rounded-2xl space-y-4 relative'>
                        <button className='btn btn-soft btn-primary btn-circle w-20 h-20'><img src={user} className='w-10' alt="" /></button>
                        <p className='absolute top-4 right-4 w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex items-center justify-center'>01</p>
                        <h3 className='text-2xl font-bold'>Create Account</h3>
                        <p className='text-gray-400'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                    <div className='bg-base-100 shadow-sm border border-gray-200 py-20 px-6 rounded-2xl space-y-4 relative'>
                        <button className='btn btn-soft btn-primary btn-circle w-20 h-20'><img src={choose} className='w-10' alt="" /></button>
                        <p className='absolute top-4 right-4 w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex items-center justify-center'>02</p>
                        <h3 className='text-2xl font-bold'>Choose Products</h3>
                        <p className='text-gray-400'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                    </div>
                    <div className='bg-base-100 shadow-sm border border-gray-200 py-20 px-6 rounded-2xl space-y-4 relative'>
                        <button className='btn btn-soft btn-primary btn-circle w-20 h-20'><img src={rocket} className='w-10' alt="" /></button>
                        <p className='absolute top-4 right-4 w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex items-center justify-center'>03</p>
                        <h3 className='text-2xl font-bold'>Start Creating</h3>
                        <p className='text-gray-400'>Download and start using your premium <br /> tools immediately.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Steps;