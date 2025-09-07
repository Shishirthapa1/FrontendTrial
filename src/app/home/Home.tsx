import Navbar from '@/Components/Navbar';
import Topbar from '@/Components/Topbar';
import React from 'react'
import Hero from './Components/Hero';
import AboutEva from './Components/AboutEva';
import OurServices from './Components/OurServices';
import WhyChooseUs from './Components/WhyChooseUs';

const HomePage = () => {
    return (
        <div className='overflow-x-hidden overflow-y-auto'>
            <Topbar />
            <Navbar />
            <Hero />
            <AboutEva />
            <OurServices />
            <WhyChooseUs />

        </div>
    )
}

export default HomePage;
