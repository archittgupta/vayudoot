"use client"
import React from 'react';
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import { IndianRupee } from "lucide-react";

const judges = [
    {
        name: "Dr. Luisa Arnedo",
        title: "Primatologist, Conservationist, and Senior Program Officer, National Geographic Society",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Dr. José Luís Camargo",
        title: "Faculty, Graduate Program of Ecology and Botany at the National Institute for Amazonian Research (INPA, Brazil)",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Dr. Stuart Davies",
        title: "Director, Center for Tropical Forest Science-Forest Global Earth Observatory at the Smithsonian Institution",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Dr. Lucia Lohmann",
        title: "Executive Director, Association for Tropical Biology and Conservation",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
];

export default function Overview() {
    
    return (
        <main className="overflow-x-hidden">
            <Navbar />

            {/* Hero Image */}
            <section className="w-full h-[40vh] md:h-[50vh] bg-slate-400 mt-4 md:mt-10">
                <img src="/poster.png" alt="poster" className="h-full w-full object-cover" />
            </section>

            {/* Explore Section */}
            <section className="w-full px-4 md:px-8 lg:px-0 py-8 md:py-10 lg:h-[40vh] flex flex-col lg:flex-row">
                <section className="w-full lg:w-[30%] lg:ml-[10rem] mb-8 lg:mb-0">
                    <p className="font-bold text-2xl md:text-3xl lg:text-[2rem] pt-4 md:pt-[2.5rem]">EXPLORE.</p>
                    <p className="font-bold text-2xl md:text-3xl lg:text-[2rem] pt-1 md:pt-[.25rem]">INNOVATE.</p>
                    <p className="font-bold text-2xl md:text-3xl lg:text-[2rem] pt-1 md:pt-[.25rem]">PIONEER.</p>
                </section>
                <section className="w-full lg:w-[50%] lg:ml-[5rem]">
                    <div className="flex items-center justify-start">
                        <IndianRupee className="h-12 w-8 md:h-16 md:w-12 mt-2 md:mt-[1rem]" />
                        <p className="font-extrabold text-3xl md:text-4xl lg:text-[4rem] pt-2 md:pt-[1.5rem]">50,000</p>
                    </div>
                    <div>
                        <p className="font-bold text-xl md:text-[1.5rem] pl-2 md:pl-[1.5rem]">Prize Purse</p>
                    </div>
                    <div>
                        <p className="font-syncopate text-sm md:text-base pl-2 md:pl-[1.5rem] mt-4">
                            The 50,000 Vayudoot is two-month competition with the goal of making breakthrough in the design and development of the Drones.
                        </p>
                    </div>
                </section>
            </section>

            {/* How to Win Section */}
            <section className="w-full px-4 md:px-8 lg:px-0 py-8 md:py-10 lg:h-[40vh] flex flex-col lg:flex-row">
                <section className="w-full lg:w-[30%] lg:ml-[10rem] mb-8 lg:mb-0">
                    <p className="font-bold text-2xl md:text-3xl lg:text-[2rem] pt-4 md:pt-[2.5rem]">HOW TO WIN</p>
                </section>
                <section className="w-full lg:w-[50%] lg:ml-[5rem]">
                    <p className="font-inter text-sm md:text-base pl-2 md:pl-[1.5rem]">
                        The winning team will develop novel technologies to rapidly and comprehensively adapt to the designed hurdles and the challenges provided.
                        <br className="hidden md:block" /><br className="hidden md:block" />
                        For the final testing, teams must be able to pass all the hurdles and conquer the challenges in the record time.
                        <br className="hidden md:block" /><br className="hidden md:block" />
                        Teams also need to show the scalability of their technology and producing insights to meet the prize criteria and effectively disrupt the current development and design of drones.
                    </p>
                </section>
            </section>

            {/* Contact Section */}
            <section className="w-full px-4 md:px-8 lg:px-0 py-8 md:py-10 lg:h-[40vh] flex flex-col lg:flex-row">
                <section className="w-full lg:w-[30%] lg:ml-[10rem] mb-8 lg:mb-0">
                    <p className="font-bold text-2xl md:text-3xl lg:text-[2rem] pt-4 md:pt-[2.5rem]">Contact Us</p>
                </section>
                <section className="w-full lg:w-[50%] lg:ml-[5rem]">
                    <p className="font-inter text-sm md:text-base pl-2 md:pl-[1.5rem]">
                        We welcome teams throughout all the phases of the competition, whether you want to help recruit teams, support team's success, help scale winning solutions, or assist with testing operations.
                    </p>
                    <div className="pl-2 md:pl-[1.5rem] mt-6 md:mt-[2.5rem]">
                        <button className="w-full md:w-[15rem] h-10 md:h-[2.5rem] flex items-center justify-center font-bold text-white bg-blue-800 hover:bg-blue-950 rounded-lg transition-colors">
                            Contact Us
                        </button>
                    </div>
                </section>
            </section>

            {/* Judges Section */}
            <section className="bg-black text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 tracking-tight">Leadership</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {judges.map((judge, index) => (
                            <div key={index} className="group">
                                <div className="aspect-w-1 aspect-h-1 mb-4">
                                    <img
                                        src={judge.image}
                                        alt={judge.name}
                                        className="w-full h-[280px] object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                                <h2 className="text-lg md:text-xl font-semibold mb-2">{judge.name}</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">{judge.title}</p>
                            </div>
                        ))}
                    </div>
                    <button className="mt-8 md:mt-12 border-b-2 border-blue-600 text-white font-semibold pb-1 hover:border-blue-700 transition-colors duration-300">
                        See All Leadership
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}