import React from 'react';
import bannerImg from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className=' lg:flex justify-between items-center'>
                <div className=' p-2 md:p-10 space-y-5'>
                    <div className='flex items-center gap-4 bg-purple-100 rounded-4xl p-3'>
                        <div className='rounded-full bg-purple-200 w-10 h-10 flex items-center justify-center'><div className='rounded-full bg-purple-400 w-7 h-7 flex items-center justify-center'><div className='rounded-full bg-purple-700 w-3 h-3'></div></div></div>
                        <h4 className=' md:text-xl font-semibold'>New: AI-Powered Tools Available</h4>
                    </div>
                    <h2 className='font-bold text-2xl md:text-7xl'>Supercharge YourDigital Workflow</h2>
                    <p className='text-gray-400'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <div className=' space-x-4'>
                        <button className='btn btn-primary'>Explore Products</button>
                        <button className='btn btn-primary'>Watch Demo</button>
                    </div>
                </div>
                <img src={bannerImg} alt="" className=' w-full md:w-auto h-64 md:h-120' />
            </div>
        </div>
    );
};

export default Banner;