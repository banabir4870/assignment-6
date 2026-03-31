import React from 'react';

const Tabs = ({activeTab, setActiveTab, cart}) => {
    return (
        <div className='w-8/12 mx-auto mt-32 space-y-4'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-5xl font-extrabold'>Premium Digital Tools </h2>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className="tabs tabs-box justify-center bg-transparent">
                <input onClick={()=>setActiveTab('products')}  type="radio" name="my_tabs_1" className={`tab rounded-full w-40 font-bold ${activeTab === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`} aria-label="Products" defaultChecked />
                <input onClick={()=>setActiveTab('cart')}  type="radio" name="my_tabs_1" className={`tab rounded-full w-40 font-bold ${activeTab === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`} aria-label={`Cart (${cart.length})`} />
            </div>
        </div>
    );
};

export default Tabs;