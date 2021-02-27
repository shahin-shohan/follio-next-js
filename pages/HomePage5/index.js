import React from 'react';
import Navbar from '../../components/Navbar'
import Hero5 from '../../components/Hero5'
import ServiceSection from '../../components/ServiceSection'
import PorfolioSection3 from '../../components/PorfolioSection3'
import ContactArea from '../../components/ContactArea'
import Footer from '../../components/Footer'
import TestSlider2 from '../../components/Testimonial2'
import AboutArea2 from '../../components/aboutarea2'
import Head from 'next/head'

const HomePage5 =() => {
    return(
        <div>
            <Head>
                <title>HomePage 5</title>
            </Head>
            <Navbar />
            <Hero5 />
            <AboutArea2 ab3class={'wpo-about-area-4'}/>
            <ServiceSection serviceclass={'wpo-service-area-5 section-padding'}/>
            <PorfolioSection3/>
            <TestSlider2 testclass={'wpo-testimonial-area-5 '}/>
            <ContactArea contactclass={'wpo-contact-area5'}/>
            <Footer/>
        </div>
    )
};
export default HomePage5;