
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Tool = ({ product }) => {
    const tagStatus = product.tagType
    return (
        <div className='space-y-4 p-6 bg-base-100 shadow-sm border border-gray-200 rounded-2xl flex flex-col'>
            <div className='relative'>
                <img src={product.icon} alt="" />
                <p className={`badge badge-soft ${tagStatus === 'popular' ? 'badge-primary' : tagStatus === 'best-seller' ? 'badge-warning' : 'badge-success'} absolute -top-2 -right-2`}>{product.tag}</p>
            </div>
            <h2 className='font-bold text-2xl'>{product.name}</h2>
            <p className='text-gray-400'>{product.description}</p>
            <p><span className='font-bold text-2xl'>${product.price}</span><span className='text-gray-400'>/{product.period}</span></p>
            <div className='flex-1'>
                {
                    product.features.map((feature, index) => <p className='flex gap-2 items-center text-gray-400' key={index}><IoMdCheckmark className='text-green-500' />{feature}</p>)
                }
            </div>
            <button className='btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Buy Now</button>
        </div>
    );
};

export default Tool;