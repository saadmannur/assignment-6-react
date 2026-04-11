import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white px-20 md:px-48 pt-10 md:pt-30 mx-auto'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-stretch pb-20 border-b border-gray-400'>
                <div className='col-span-2'>
                    <h2 className='text-4xl font-bold mb-5'>DigiTools</h2>
                    <p className='text-gray-400'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div>
                    <h2 className='text-xl mb-5'>Product</h2>
                    <div className='text-gray-400'>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p>Integrations</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl mb-5'>Company</h2>
                    <div className='text-gray-400'>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl mb-5'>Resources</h2>
                    <div className='text-gray-400'>
                        <p>Documentation</p>
                        <p>Help Center</p>
                        <p>Community</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl mb-5'>Social Links</h2>
                    <div className='text-gray-400 flex justify-center items-center gap-3'>
                        <span><FaInstagram></FaInstagram></span>
                        <span><FaFacebookSquare></FaFacebookSquare></span>
                        <span><FaXTwitter></FaXTwitter></span>
                    </div>
                </div>
            </div>
            <div className='md:flex justify-between items-center py-10'>
                <p className='text-gray-400'><small>© 2026 DigiTools. All rights reserved.</small></p>
                <div className='flex justify-between items-center gap-5 text-sm text-gray-400'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;