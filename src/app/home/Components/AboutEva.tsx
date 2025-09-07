import CustomButton from '@/Components/CustomButton'
import Heading from '@/Components/Heading'
import { paddingX } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const AboutEva = () => {
    return (
        <div className={`${paddingX} py-10`}>
            <Heading titleColor='blue' title='About 4EVA KLEEN' />
            <div className='flex md:flex-row flex-col gap-4 items-center justify-center'>
                <div className='flex flex-col gap-2 text-left w-full md:w-3/5'>
                    <p>
                        4EVA KLEEN has been excelling at cleaning services providing Carpet steam cleaning, Upholstery steam cleaning, Tile & Grout cleaning, Windows cleaning and End of lease cleaning.
                    </p>
                    <p>
                        Because 4EVA KLEEN is a family run business, We take your needs very seriously. We feel our Company’s reputation is at stake on each and every job! If something is not to your 100% satisfaction, we will return to the property and make good.
                    </p>
                    <p>
                        That is our guarantee.
                    </p>
                    <p>
                        We value and respect our clients ensuring quality, maintaining your trust and providing consistent reliability.
                    </p>
                    <p>
                        4 EVA KLEEN is thorough!
                    </p>
                    <CustomButton text='Read More' className='w-fit mt-2' />

                </div>
                <div className='md:w-2/5 w-full'>
                    <Image
                        height={500}
                        width={500}
                        src="/images/about.jpeg"
                        alt='hi' className='w-full h-full' />
                </div>

            </div>

        </div>
    )
}

export default AboutEva
