import RenderSelectedProduct from './RenderSelectedProduct';

const SelectedProduct = ({ selectedProducts, setSelectedProducts, total, setTotal }) => {
    // console.log(selectedProducts)

    return (
        <div className='border border-gray-200 rounded-4xl shadow m-5 p-5'>

            {
                selectedProducts.length == 0 ?

                    <div className='border border-gray-200 shadow m-5 p-25 rounded-4xl text-center'>
                        <h2 className='text-4xl font-semibold text-gray-500 mb-10'>Your product storage is empty</h2>
                        <p className='text-2xl text-gray-400'>Go to products and click Buy Now </p>
                    </div> :

                    <div className='m-1'>
                        <h2 className="font-bold text-3xl my-5">Your Cart</h2>
                        <div className='space-y-5'>
                            {
                                selectedProducts.map(selectedProduct => <RenderSelectedProduct
                                    key={selectedProduct.id}
                                    selectedProduct={selectedProduct}
                                    selectedProducts={selectedProducts}
                                    setSelectedProducts={setSelectedProducts}
                                    total={total}
                                    setTotal={setTotal}
                                ></RenderSelectedProduct>)
                            }
                        </div>
                        <div className='flex justify-between items-center my-10 mx-8'>
                            <h3 className='text-2xl font-semibold'>Total :</h3>
                            <h3 className='text-3xl font-semibold'>${total}</h3>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SelectedProduct;