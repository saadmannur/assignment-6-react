import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import NavLink from './NavLink';
import { FaRegTimesCircle } from 'react-icons/fa';
import { RiMenuFold3Line } from 'react-icons/ri';

const navItems = [
    {
        id: 1,
        name: "Products",
        path: "/",
        icon: "product",
    },
    {
        id: 2,
        name: "Features",
        path: "/features",
        icon: "info",
    },
    {
        id: 3,
        name: "Pricing",
        path: "/pricing",
        icon: "settings",
    },
    {
        id: 4,
        name: "Testimonials",
        path: "/testimonials",
        icon: "article",
    },
    {
        id: 5,
        name: "FAQ",
        path: "/faq",
        icon: "article",
    }
];

const NavBar = ({ selectedProducts }) => {
    const [open , setOpen] = useState(false)
    const navLinks = navItems.map(item => <NavLink key={item.id} item={item}></NavLink> )
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
                <div className='flex items-center'>
                    <span className='md:hidden' onClick={()=> setOpen(!open)} >
                        {
                            open ? <FaRegTimesCircle></FaRegTimesCircle> : <RiMenuFold3Line></RiMenuFold3Line>
                        }
                        <ul className={`absolute z-50 border border-gray-300 shadow p-3 rounded-2xl ${open? `top-12 left-4`:`-left-50 top-12`} space-y-1 duration-1000`}>
                            {navLinks}
                        </ul>
                    </span>
                    <a className="btn btn-ghost text-2xl bg-linear-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent font-bold">DigiTools</a>
                </div>
                <div>
                    <ul className='hidden md:flex gap-5 justify-center items-center'>{navLinks}</ul>
                </div>
                <div className="flex justify-center items-center gap-3 md:gap-6">
                    <div>
                        <p className={`bg-red-500 rounded-full text-white text-center text-sm ${selectedProducts.length == 0 && `hidden`} `}>{selectedProducts.length}</p>
                        <BsCart3></BsCart3>
                    </div>
                    <button>Login</button>
                    <button className='bg-linear-to-r from-blue-500 to-purple-700 btn rounded-4xl text-white'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;