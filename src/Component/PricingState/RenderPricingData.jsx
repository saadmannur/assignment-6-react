import React from 'react';
import RenderPricingFeature from './RenderPricingFeature';

const RenderPricingData = ({data}) => {
    // console.log(data)
    const { planName, subtitle, price, billingPeriod, isMostPopular, features, batch, buttonText } = data;
    return (
        <div className={`border border-gray-300 shadow rounded-3xl bg-base-200 p-8 flex flex-col space-y-5 relative ${isMostPopular && `bg-linear-to-r from-blue-500 to-purple-700 text-white shadow-xl`}`}>
            <div className={`absolute bg-amber-100 -top-7 left-15 md:left-27 rounded-4xl`}>
                {
                    isMostPopular && <h3 className='p-3 px-5 text-amber-600 '>{batch}</h3>
                }
            </div>
            <h2 className={`text-2xl font-bold`}>{planName}</h2>
            <p className={`text-gray-500 ${isMostPopular && `text-white`}`}>{subtitle}</p>
            <h3><span className='text-3xl font-semibold'>${price}</span>/<span className={`text-gray-500 ${isMostPopular && `text-white`}`}>{billingPeriod}</span></h3>
            <ul className={`space-y-3 flex-1 mt-2 text-gray-500 ${isMostPopular && `text-white`}`}>
                {
                    features.map((feature, i) => <RenderPricingFeature
                     key={i}
                     feature={feature}
                        isMostPopular={isMostPopular}
                    ></RenderPricingFeature> )
                }
            </ul>
            <button className={`btn text-white ${isMostPopular && `bg-linear-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent`} rounded-4xl font-bold ${isMostPopular || `bg-linear-to-r from-blue-500 to-purple-700`}`}>{buttonText}</button>
        </div>
    );
};

export default RenderPricingData;