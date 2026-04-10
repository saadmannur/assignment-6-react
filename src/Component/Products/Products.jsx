import React, { use, useState } from 'react';
import Product from './Product';
import SelectedProduct from '../SelectedProduct/SelectedProduct';


const Products = ({ productsPromise, selectedProducts, setSelectedProducts }) => {
    const products = use(productsPromise);
    // console.log(products)

    const [btnType , setBtnType] = useState("products");

    const [total, setTotal] = useState(0);

    return (
        <div className='container mx-auto my-10'>
            <div className='text-center space-y-5'>
                <h2 className='text-5xl font-extrabold'>Premium Digital Tools</h2>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='flex justify-between items-center mb-10'>
                    <div></div>
                    <div className='border border-gray-300 shadow rounded-4xl '>
                        <button
                            onClick={()=> setBtnType("products")}
                            className={`px-10 p-4 rounded-4xl ${btnType == "products" && `bg-linear-to-r from-blue-500 to-purple-700 text-white`}`}>Products</button>
                        <button 
                           onClick={()=>setBtnType("cart")}
                           className={`px-10 p-4 rounded-4xl ${btnType == "cart" && `bg-linear-to-r from-blue-500 to-purple-700 text-white`}`}>Cart ({selectedProducts.length})
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
            {
                btnType == "products" ?
                    <div className='grid grid-cols-1 m-4 md:grid-cols-3 gap-10 items-stretch'>
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                selectedProducts={selectedProducts}
                                setSelectedProducts={setSelectedProducts}
                                total={total}
                                setTotal={setTotal}
                            ></Product>)
                        }
                    </div> :
                    <div>
                        <SelectedProduct
                            selectedProducts={selectedProducts}
                            setSelectedProducts={setSelectedProducts}
                            total={total}
                            setTotal={setTotal}
                        ></SelectedProduct>
                    </div>
            }
        </div>
    );
};

export default Products;