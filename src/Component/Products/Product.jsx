import React, { useState } from 'react';
import Feature from './Feature';
import { toast } from 'react-toastify';

const Product = ({ product, selectedProducts, setSelectedProducts, total, setTotal }) => {
    // console.log(product)

    const [isSelected, setIsSelected] = useState(false);

    const handleCardBtn = () => {
        setIsSelected(true)
        setSelectedProducts([...selectedProducts, product])
        setTotal(total + product.price)
        toast.success(`${product.name} is added to Cart`)
    }

    const { name, description, price, period, tag, features, icon } = product
    return (
        <div className='p-5 flex flex-col border space-y-4 border-gray-300 rounded-3xl shadow-md'>
            <div className=' flex justify-between items-center'>
                <div></div>
                <p className={`text-right py-2 px-5 rounded-4xl text-md font-semibold 
                ${tag == "New" && `bg-green-200 text-green-600`}
                ${tag == "Popular" && `bg-purple-200 text-purple-600`}
                ${tag == "Best seller" && `bg-amber-100 text-amber-600`}
                
                `}>{tag}</p>
            </div>

            <div className='w-20 h-20 border border-gray-300 text-center flex justify-center items-center rounded-full'>
                <img src={icon} alt="" className='h-12 w-12 mx-auto' />
            </div>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p className='text-gray-500'>{description}</p>
            <h3><span className='text-2xl font-semibold'>${price}</span>/{period}</h3>
            <ul className='space-y-3 flex-1'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </ul>
            <button
             onClick={handleCardBtn}
                className={`text-white rounded-4xl border bg-blue-800 p-3 w-full ${isSelected && `bg-green-700`}`}>
                {
                    isSelected ? "Added to Cart" : "Buy Now"
                }
            </button>
        </div>
    );
};

export default Product;