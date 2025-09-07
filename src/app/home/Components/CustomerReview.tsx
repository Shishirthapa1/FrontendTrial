"use client";
import CustomButton from '@/Components/CustomButton';
import Heading from '@/Components/Heading';
import { testimonialData } from '@/data/data';
import React, { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa6';

const CustomerReview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
        );
    };

    const getVisibletestimonialData = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonialData.length;
            visible.push(testimonialData[index]);
        }
        return visible;
    };

    const StarRating = ({ rating }: { rating: number }) => {
        return (
            <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                    <FaRegStar
                        key={i}
                        className={`w-5 h-5 ${i < rating
                            ? 'text-blue-400 fill-blue-400'
                            : 'text-gray-300'
                            }`}
                    />
                ))}
            </div>
        );
    };
    return (
        <div className="bg-[#6A9FCB] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <Heading title='WHAT OUR CUSTOMERS SAY' titleColor='white' />


                <div className="relative pt-6">
                    <button
                        onClick={prevSlide}
                        className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                        aria-label="Previous testimonial"
                    >
                        <BiChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute  cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                        aria-label="Next testimonial"
                    >
                        <BiChevronRight className="w-6 h-6" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-12">
                        {getVisibletestimonialData().map((testimonial, index) => (
                            <div
                                key={`${testimonial.id}-${currentIndex}-${index}`}
                                className={`bg-white rounded-lg p-8 items-center justify-center flex flex-col shadow-lg transform transition-all duration-300 ${index === 1 ? 'scale-105 md:scale-110' : 'scale-100'
                                    }`}
                            >
                                <div className="mb-6">
                                    <p className="text-gray-700 text-center leading-relaxed text-sm md:text-base">
                                        {index === 1 ? testimonial.fullText : testimonial.text}
                                    </p>
                                </div>

                                <StarRating rating={testimonial.rating} />

                                <div className="text-center">
                                    <p className="text-gray-800 font-semibold text-lg">
                                        {testimonial.author}
                                    </p>
                                    {testimonial.location && (
                                        <p className="text-gray-500 text-sm mt-1">
                                            {testimonial.location}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <CustomButton text='WRITE REVIEW' />
                </div>

                <div className="flex justify-center space-x-2 mt-8">
                    {testimonialData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                ? 'bg-white'
                                : 'bg-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CustomerReview





