import { paddingX } from '@/data/data'
import React from 'react'

const Topbar = () => {
    return (
        <div className={`flex sm:flex-row font-poppins md:text-sm text-xs lg:text-base flex-col items-center justify-between text-white py-2 sm:py-3 ${paddingX} bg-[#6a9fcb] space-y-2`}>
            <p>Welcome to 4EVA Kleen- Honest | Professional | Affordable</p>
            <button className='bg-[#e94290] py-1 px-4 rounded-md shadow-md hover:bg-white hover:text-[#e94290] cursor-pointer transition-all ease-linear duration-300'>
                Click here to book now
            </button>


        </div>
    )
}

export default Topbar
