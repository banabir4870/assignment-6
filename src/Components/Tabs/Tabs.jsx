import React from 'react';

const Tabs = () => {
    return (
        <div className='w-10/12 mx-auto my-32 space-y-4'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-5xl font-extrabold'>Premium Digital Tools </h2>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className="tabs tabs-box justify-center bg-transparent">
                <input  type="radio" name="my_tabs_1" className={`tab rounded-full w-40 font-bold`} aria-label="Products" defaultChecked />
                <input  type="radio" name="my_tabs_1" className={`tab rounded-full w-40 font-bold`} aria-label={`Cart (0)`} />
            </div>
        </div>
    );
};

export default Tabs;