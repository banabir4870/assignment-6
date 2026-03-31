import React from 'react';
import CartItem from './CartItem';
import { LuShoppingCart } from 'react-icons/lu';

const Cart = ({ cart, setCart }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    const handlePayment = () =>{
        setCart([])
    }
    return (
        <div className='w-8/12 mx-auto my-10 bg-base-100 shadow-sm border border-gray-200 rounded-2xl p-10 space-y-6'>
            <h2 className='text-2xl font-bold'>Your cart</h2>
            {
                cart.length === 0 ?
                    <div className='flex flex-col items-center justify-center text-center gap-4'>
                        <LuShoppingCart className='text-7xl text-gray-400'/>
                        <p className='text-gray-500 text-2xl'>Your Cart Is Empty</p>
                    </div> :
                    <>
                        {
                            cart.map(item => <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />)
                        }
                        <div className='flex justify-between items-center'>
                            <h4>Total:</h4>
                            <p className='text-2xl font-bold'>${totalPrice}</p>
                        </div>
                        <button onClick={handlePayment} className='btn btn-primary w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Proceed to Checkout</button>
                    </>
            }

        </div>
    );
};

export default Cart;