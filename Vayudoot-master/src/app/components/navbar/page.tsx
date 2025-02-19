"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: 'Overview', href: '/components/overview' },
        { title: 'Sponsers', href: '/components/sponsers' },
        { title: 'Guidelines', href: '/components/guidelines' },
        { title: 'Teams', href: '/components/teams' },
        
    ];

    return (
        <nav className=" h-[10vh] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className=" flex items-center flex-shrink-0">
                        <span className=" font-bold  font-manrope text-[1.5rem]">Vayudoot</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden items-center w-[80%] justify-between md:flex space-x-8">
                        <div className='w-[50%] ml-[2.5%] justify-between '>
                            {menuItems.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className="text-white hover:text-blue-700 ml-[10%] transition-colors duration-200"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                        <div className='w-[30%  ]'>
                            <button className="bg-[#ffffff] text-black  font-bold font-manrope px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                Register
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center bg-white justify-center p-2 rounded-md hover:bg-gray-800 focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } md:hidden transition-all duration-300 ease-in-out`}
            >
                <div className="px-2 bg-white text-black pt-2 pb-3 space-y-1 ">
                    {menuItems.map((item) => (
                        <a
                            key={item.title}
                            href={item.href}
                            className="block px-3 py-2  hover:bg-gray-800 rounded-md"
                        >
                            {item.title}
                        </a>
                    ))}
                    <button className="w-full  text-black font-bold mt-4 bg-blue-500  px-4 py-2 rounded-md hover:bg-[#041E42] transition-colors duration-200">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;