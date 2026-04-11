import React, { use } from 'react';
import RenderPricingData from './RenderPricingData';

const PricingState = ({ pricingDataPromise }) => {
    const pricingData = use(pricingDataPromise)
    // console.log(pricingData)
    return (
        <div className='container mx-auto my-5 p-10'>
            <div className=' text-center'>
                <h2 className='text-5xl font-bold mb-5'>Simple, Transparent Pricing</h2>
                <p className='text-gray-400'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-8 p-4'>
                {
                    pricingData.map((data, i )=> <RenderPricingData
                     key={i}
                     data={data}
                    ></RenderPricingData>)
                }
            </div>
            
        </div>
    );
};

export default PricingState;