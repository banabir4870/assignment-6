import React, { use } from 'react';
import Tool from './Tool';

const Products = ({productsPromise, cart, setCart}) => {
    const products = use(productsPromise)
    console.log(products)
    return (
        <div className='w-8/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-8'>
            {
                products.map(product => <Tool key={product.id} product={product} cart={cart} setCart={setCart}/>)
            }
        </div>
    );
};

export default Products;