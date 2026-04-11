import React from 'react';

const ExploreSection = () => {
    return (
        <div className='container mx-auto  bg-linear-to-r from-blue-500 to-purple-700 text-white text-center p-15 space-y-5'>
            <div>
                <h2 className='text-3xl font-bold md:text-5xl md:font-bold mb-5'>Ready to Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>
            <div className='flex gap-5 justify-center items-center'>
                <button className=' btn text-purple-600 rounded-3xl '>Explore Products</button>
                <button className='btn bg-transparent text-white rounded-3xl'>View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
            
        </div>
    );
};

export default ExploreSection;