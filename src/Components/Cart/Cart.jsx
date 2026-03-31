import React from 'react';
import CartItem from './CartItem';

const Cart = ({cart, setCart}) => {
    const totalPrice = cart.reduce((sum, item)=> sum + item.price, 0)
    return (
        <div className='w-8/12 mx-auto my-10 bg-base-100 shadow-sm border border-gray-200 rounded-2xl p-10 space-y-6'>
            <h2 className='text-2xl font-bold'>Your cart</h2>
            {
                cart.map(item => <CartItem key={item.id} item={item}/>)
            }
            <div className='flex justify-between items-center'>
                <h4>Total:</h4>
                <p className='text-2xl font-bold'>${totalPrice}</p>
            </div>
            <button className='btn btn-primary w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;