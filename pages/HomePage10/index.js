import React, {Fragment} from 'react';
import Navbarl5 from '../../components/Navbarl5'
import Hero10 from '../../components/Hero10'
import ServiceSection from '../../components/ServiceSection'
import PorfolioSection2 from '../../components/PorfolioSection2'
import ContactArea from '../../components/ContactArea'
import Footer2 from '../../components/Footer2'
import TestSlider2 from '../../components/Testimonial2'
import AboutFeatures from '../../components/AboutFeature'
import Head from 'next/head'

const HomePage10 =() => {
    return(
        <Fragment>
            <Head>
                <title>HomePage 10</title>
            </Head>
            <Navbarl5/>
            <Hero10 />
            <AboutFeatures/>
            <ServiceSection serviceclass={'wpo-service-area-3 section-padding'}/>
            <PorfolioSection2/>
            <TestSlider2 testclass={'wpo-testimonial-area-3'}/>
            <ContactArea contactclass={'wpo-contact-area3'}/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default HomePage10;