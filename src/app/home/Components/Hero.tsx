"use client";
import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { heroData } from '@/data/data';
import CustomButton from '@/Components/CustomButton';

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("next"); // track slide direction

    const handleNext = () => {
        setDirection("next");
        setIndex((prev) => (prev + 1) % heroData.length);
    };

    const handlePrev = () => {
        setDirection("prev");
        setIndex((prev) => (prev - 1 + heroData.length) % heroData.length);
    };
    return (
        <div
            className="relative h-[80vh] w-full bg-center bg-cover p-4 flex items-center justify-between text-center"
            style={{ backgroundImage: "url(/images/evaBg.jpg)" }}
        >
            <div className="absolute inset-0 bg-black/15"></div>

            <button
                onClick={handlePrev} type='button' className='bg-white/30 rounded-full z-10 p-1 flex items-center justify-center cursor-pointer'>
                <IoIosArrowBack className='text-white/80 text-3xl md:text-5xl lg:text-7xl' />
            </button>

            <div
                key={index}
                className='w-full'
            >
                <p className={`text-xl md:text-2xl lg:text-3xl uppercase font-semibold text-white tracking-wide slide-text ${direction === "next" ? "slide-in-right" : "slide-in-left"}`}>
                    {heroData[index].title}
                </p>
                <h1 className={`mt-2 text-base md:text-lg lg:text-xl font-normal text-white leading-tight slide-text ${direction === "next" ? "slide-in-right" : "slide-in-left"}`}>
                    {heroData[index].description}
                </h1>
                <CustomButton text='Book Cleaning' className='mt-6' />

            </div>
            <button onClick={handleNext} type='button' className='bg-white/30 z-10 rounded-full p-1 items-center justify-center cursor-pointer'>
                <IoIosArrowForward className='text-white/80 text-3xl md:text-5xl lg:text-7xl' />
            </button>

        </div>
    )
}

export default Hero
