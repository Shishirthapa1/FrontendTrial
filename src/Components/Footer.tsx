import { contactData, paddingX } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col">
            <div className={` ${paddingX} bg-gray-800 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center justify-center text-white py-5`}>
                <div>
                    <h2>About Us</h2>

                    <p>4EVA KLEEN has been excelling at cleaning services providing Carpet steam cleaning, Upholstery steam cleaning, Tile & Grout cleaning, Windows cleaning and End of lease cleaning. Because 4EVA KLEEN is a family run business, We take your needs very seriously. We feel our Company’s reputation is at stake on each and every job! If something is not to your 100%…
                    </p>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <div>
                        {contactData.map((item, index) => (
                            <div key={item.id || index} className='flex flex-row items-center justify-start'>
                                <item.icon className='text-2xl md:text-3xl lg:text-4xl' />
                                <p className='md:text-sm text-xs lg:text-base'>{item.contact}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div>
                    <h2>Opening  Hours</h2>

                    <div>
                        <p>9AM to 6PM</p>
                        <p>Monday to Sunday</p>
                        <span>Follow Us on Social Media
                        </span>
                    </div>

                </div>

            </div>
            <div className={`bg-black ${paddingX} text-white flex flex-row items-center justify-between`}>
                <p>© 2025. 4Eva Kleen. All Rights Reserved.</p>
                <Image alt='' height={500}
                    width={500}
                    className='w-10 h-10'
                    src="/images/logo.png"
                />


            </div>

        </div>
    )
}

export default Footer
