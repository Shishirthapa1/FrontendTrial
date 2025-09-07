import Heading from '@/Components/Heading'
import ServiceCard from '@/Components/ServiceCard'
import { paddingX, serviceData } from '@/data/data'
import React from 'react'

const OurServices = () => {
    return (
        <div className={` ${paddingX} py-10`}>
            <Heading titleColor='blue' title='Our Services' subtitle='We offer a wide range of professional cleaning services' />

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5'>
                {serviceData.map((service, index) => (
                    <ServiceCard
                        id={service.id} image={service.image} title={service.title} key={service.id || index} />
                ))}

            </div>

        </div>
    )
}

export default OurServices
