import Heading from '@/Components/Heading'
import { chooseData, paddingX } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <div className={`bg-[#6a9fcb] py-5 ${paddingX} w-full flex flex-col items-center justify-center`}>
            <Heading title='Why CHoose Us' titleColor='white'
                subtitle='4Eva Kleen has been excelling at cleaning services providing: End of Lease cleaning, Carpet steam cleaning, Tile & Grout steam cleaning, Windows cleaning, Post Construction cleaning, Pre-sale cleaning.' />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6">
                {chooseData.map((item, index) => (
                    <div
                        key={item.id || index}
                        className="p-6 text-center flex flex-col items-center "
                    >
                        <Image height={500}
                            width={500} src={item.image} alt={item.title} className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-4" />
                        <h3 className="lg:text-lg md:text-base text-sm font-bold text-yellow-500 mb-2">
                            {item.title}
                        </h3>
                        <p className="text-white text-[10px] md:text-xs lg:text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WhyChooseUs
