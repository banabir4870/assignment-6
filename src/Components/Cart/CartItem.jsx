import React from 'react';

const CartItem = ({item, cart, setCart}) => {
    const handleRemove = (item) =>{
        const filteredArray = cart.filter(c => c.id !== item.id)
        setCart(filteredArray)
    }
    return (
        <div className=' md:flex justify-between items-center p-5 bg-[#F4F4F5] rounded-2xl'>
            <div className='flex items-center gap-4'>
                <img src={item.icon} alt="" />
                <div>
                    <h3 className='text-sm md:text-xl font-semibold'>{item.name}</h3>
                    <p className='font-medium text-gray-400'>${item.price}</p>
                </div>
            </div>
            <div onClick={()=>handleRemove(item)} className='text-[#FF3980] font-bold btn border-none'><a>Remove</a></div>
        </div>
    );
};

export default CartItem;