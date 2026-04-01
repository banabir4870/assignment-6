import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Pricing = () => {
    return (
        <div className='w-8/12 mx-auto my-28'>
            <div className='text-center space-y-4'>
                <h1 className='text-xl md:text-5xl font-extrabold'>Simple, Transparent Pricing</h1>
                <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                <div className='bg-[#F2F2F2] shadow-sm border border-gray-200 rounded-2xl p-6 space-y-6 flex flex-col'>
                    <h3 className='font-bold text-2xl'>Starter</h3>
                    <p className='text-gray-500'>Perfect for getting started</p>
                    <p><span className='text-4xl font-bold'>$0</span><span className='text-gray-500 text-xl'>/Month</span></p>
                    <div className='flex-1'>
                        <p className='flex gap-2 items-center text-gray-500'><IoMdCheckmark className='text-green-500' />Access to 10 free tools</p>
                        <p className='flex gap-2 items-center text-gray-500'><IoMdCheckmark className='text-green-500' />Basic templates</p>
                        <p className='flex gap-2 items-center text-gray-500'><IoMdCheckmark className='text-green-500' />Community support</p>
                        <p className='flex gap-2 items-center text-gray-500'><IoMdCheckmark className='text-green-500' />1 project per month</p>
                    </div>
                    <button className='btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-primary'>Get Started Free</button>
                </div>
                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm border border-gray-200 rounded-2xl p-6 space-y-6 relative flex flex-col'>
                    <h3 className='font-bold text-2xl text-white'>Pro</h3>
                    <p className="badge badge-soft badge-warning rounded-full absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] font-medium">Most Popular</p>
                    <p className='text-white'>Best for professionals</p>
                    <p><span className='text-4xl font-bold text-white'>$29</span><span className='text-white text-xl'>/Month</span></p>
                    <div className='flex-1'>
                        <p className='flex gap-2 items-center text-white'><IoMdCheckmark />Access to all premium tools</p>
                        <p className='flex gap-2 items-center text-white'><IoMdCheckmark />Unlimited templates</p>
                        <p className='flex gap-2 items-center text-white'><IoMdCheckmark />Priority support</p>
                        <p className='flex gap-2 items-center text-white'><IoMdCheckmark />Unlimited projects</p>
                        <p className='flex gap-2 items-center text-white'><IoMdCheckmark />Cloud sync</p>
                        <p className='flex gap-2 items-center text-white'><IoMdCheckmark />Advanced analytics</p>
                    </div>
                    <button className='btn w-full rounded-full bg-white'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span></button>
                </div>
                <div className='bg-[#F2F2F2] shadow-sm border border-gray-200 rounded-2xl p-6 space-y-6 flex flex-col'>
                    <h3 className='font-bold text-2xl'>Enterprise</h3>
                    <p className='text-gray-500'>For teams and businesses</p>
                    <p><span className='text-4xl font-bold'>$99</span><span className='text-gray-500 text-xl'>/Month</span></p>
                    <div className='flex-1'>
                        <p className='flex gap-2 items-center text-gray-500'><IoMdCheckmark className='text-green-500' />Everything in Pro</p>
                        <p className='flex gap-2 items-center text-gray-500'><IoMdCheckmark className='text-green-500' />Team collaboration</p>
                        <p className='flex gap-2 items-center text-gray-500'><IoMdCheckmark className='text-green-500' />Custom integrations</p>
                        <p className='flex gap-2 items-center text-gray-500'><IoMdCheckmark className='text-green-500' />Dedicated support</p>
                        <p className='flex gap-2 items-center text-gray-500'><IoMdCheckmark className='text-green-500' />SLA guarantee</p>
                        <p className='flex gap-2 items-center text-gray-500'><IoMdCheckmark className='text-green-500' />Custom branding</p>
                    </div>
                    <button className='btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-primary'>Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;