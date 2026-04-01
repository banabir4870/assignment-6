import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cart }) => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar md:w-8/12 mx-auto">
                <div className="navbar-start">
                    <a className="font-extrabold text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-8 px-1 text-lg font-semibold">
                        <li>
                            <a>Products</a>
                        </li>
                        <li>
                            <a>Features</a>
                        </li>
                        <li>
                            <a>Pricing</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <div className="relative">
                        <FiShoppingCart className="text-2xl" />

                        {cart.length > 0 &&
                            <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                {cart.length}
                            </p>
                        }
                    </div>
                    <a className='font-semibold'>Login</a>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;