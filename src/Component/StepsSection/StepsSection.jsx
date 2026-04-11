import React from 'react';
import User from "../../assets/user.png";
import Package from "../../assets/package.png";
import Rocket from "../../assets/rocket.png"

const StepsSection = () => {
    return (
        <div className='container mx-auto my-3 p-5 md:p-15 bg-base-200 rounded-3xl'>
            <div className='md:text-center mb-5'>
                <h2 className='text-3xl md:text-5xl font-semibold md:font-extrabold my-5'>Get Started in 3 Steps</h2>
                <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div className=' border border-gray-300 shadow bg-white rounded-2xl p-5'>
                    <div className='flex justify-between items-center'>
                        <p></p>
                        <p className=' font-semibold text-sm p-2 bg-linear-to-r from-blue-500 to-purple-700 text-white rounded-full '>01</p>
                    </div>
                    <div className='text-center space-y-3 pb-10'>
                        <img src={User} alt="" className='mx-auto p-5 rounded-full bg-purple-200' />
                        <h2 className='text-2xl font-bold'>Create Account</h2>
                        <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                <div className=' border border-gray-300 shadow bg-white rounded-2xl p-5'>
                    <div className='flex justify-between items-center'>
                        <p></p>
                        <p className=' font-semibold text-sm p-2 bg-linear-to-r from-blue-500 to-purple-700 text-white rounded-full '>02</p>
                    </div>
                    <div className='text-center space-y-3 pb-10'>
                        <img src={Package} alt="" className='mx-auto p-5 rounded-full bg-purple-200' />
                        <h2 className='text-2xl font-bold'>Choose Products</h2>
                        <p className='text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>

                <div className=' border border-gray-300 shadow bg-white rounded-2xl p-5'>
                    <div className='flex justify-between items-center'>
                        <p></p>
                        <p className=' font-semibold text-sm p-2 bg-linear-to-r from-blue-500 to-purple-700 text-white rounded-full '>03</p>
                    </div>
                    <div className='text-center space-y-3 pb-10'>
                        <img src={Rocket} alt="" className='mx-auto p-5 rounded-full bg-purple-200' />
                        <h2 className='text-2xl font-bold'>Start Creating</h2>
                        <p className='text-gray-500'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepsSection;