import Heading from '@/Components/Heading'
import { contactData, paddingX } from '@/data/data'
import React from 'react'

const ContactUs = () => {
    return (
        <div className={`${paddingX} py-10 w-full flex flex-col items-center justify-center`}>
            <Heading title='Contact Us' titleColor='blue' />
            <div className='w-full flex sm:flex-row flex-col gap-4 md:gap-5 lg:gap-6'>
                {contactData.map((item, index) => (
                    <div key={item.id || index} className='bg-[#244da9] w-full rounded-lg md:px-4 px-3 lg:px-5 md:py-8 py-5 lg:py-10 flex flex-col justify-center text-white items-center gap-2'>
                        <item.icon className='text-2xl md:text-3xl lg:text-4xl' />
                        <p className='md:text-lg text-base lg:text-xl font-semibold'>{item.text}</p>
                        <p className='md:text-sm text-xs lg:text-base'>{item.contact}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ContactUs
