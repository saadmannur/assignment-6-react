import { Trash2 } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const RenderSelectedProduct = ({ selectedProduct, selectedProducts, setSelectedProducts, total, setTotal }) => {
    // console.log(selectedProduct)
    const { name, price, icon } = selectedProduct

    const handleDeleteBtn = () => {
        const filteredSelectedProducts = selectedProducts.filter(p => p.id !== selectedProduct.id );
        setSelectedProducts(filteredSelectedProducts)
        setTotal(total - price)
        toast.warn(`${name} is remove from Cart`)
    }

    return (
        <div className='flex justify-between items-center bg-base-200 p-3 px-5 rounded-2xl'>
            <div className='flex gap-5 items-center'>
                <div className='w-20 h-20 border border-gray-300 text-center flex justify-center items-center rounded-full bg-white'>
                    <img src={icon} alt="" className='h-12 w-12 mx-auto' />
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <p className='text-xl text-gray-400'>${price}</p>
                </div>
            </div>
            <button
                onClick={() => handleDeleteBtn(selectedProduct)} 
            className='p-4 rounded-full hover:bg-red-200 border border-red-300'><Trash2 color="red" /></button>
        </div>
    );
};

export default RenderSelectedProduct;