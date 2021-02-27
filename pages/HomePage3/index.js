import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3'
import Hero3 from '../../components/Hero3'
import ServiceSection from '../../components/ServiceSection'
import PorfolioSection2 from '../../components/PorfolioSection2'
import ContactArea from '../../components/ContactArea'
import Footer2 from '../../components/Footer2'
import TestSlider2 from '../../components/Testimonial2'
import AboutFeatures from '../../components/AboutFeature'
import Head from 'next/head'


const HomePage3 =() => {
    return(
        <Fragment>
            <Head>
                <title>HomePage 3</title>
            </Head>
            <Navbar3/>
            <Hero3 />
            <AboutFeatures/>
            <ServiceSection serviceclass={'wpo-service-area-3 section-padding'}/>
            <PorfolioSection2/>
            <TestSlider2 testclass={'wpo-testimonial-area-3'}/>
            <ContactArea contactclass={'wpo-contact-area3'}/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
        </Fragment>
    )
};
export default HomePage3;