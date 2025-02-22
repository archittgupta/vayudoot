"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Overview", href: "/components/overview" },
    { title: "Sponsors", href: "/components/sponsors" },
    { title: "Guidelines", href: "/components/guidelines" },
    { title: "Teams", href: "/components/teams" },
  ];

  return (
    <nav className="h-[10vh] bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="font-bold font-manrope text-[1.5rem] text-gray-100">
              Vayudoot
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between w-[80%] space-x-8">
            <div className="w-[50%] ml-[2.5%] flex justify-between">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-200 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="w-[30%]">
              <button className="bg-white text-black font-bold font-manrope px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200">
                Register
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 hidden"
        }`}
      >
        <div className="px-4 pt-4 pb-3 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="block px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              {item.title}
            </a>
          ))}
          <button className="w-full mt-4 bg-white text-black font-bold px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
