import React, {Fragment} from 'react';
import Navbarl5 from '../../components/Navbarl5'
import Hero2 from '../../components/Hero2'
import ServiceSection from '../../components/ServiceSection'
import PorfolioSection from '../../components/PorfolioSection'
import ContactArea from '../../components/ContactArea'
import Footer from '../../components/Footer'
import TestSlider2 from '../../components/Testimonial2'
import Head from 'next/head'


import AboutArea2 from '../../components/aboutarea2'

const HomePage2 =() => {
    return(
        <Fragment>
            <Head>
                <title>HomePage 2</title>
            </Head>
            <Navbarl5/>
            <Hero2 />
            <AboutArea2/>
            <ServiceSection/>
            <PorfolioSection/>
            <TestSlider2/>
            <ContactArea contactclass={'wpo-contact-area2'}/>
            <Footer Ftclass={'wpo-footer-area2'}/>
        </Fragment>
    )
};
export default HomePage2;