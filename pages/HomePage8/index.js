import React, {Fragment} from 'react';
import Navbar6 from '../../components/Navbar6'
import Hero8 from '../../components/Hero8'
import ServiceSection3 from '../../components/ServiceSection3'
import ContactArea from '../../components/ContactArea'
import Footer2 from '../../components/Footer2'
import TestSlider2 from '../../components/Testimonial2'
import Emergencey from '../../components/Emergencey'
import PartnerSlider from '../../components/partner'
import Head from 'next/head'

const HomePage8 =() => {
    return(
        <Fragment>
            <Head>
                <title>HomePage 8</title>
            </Head>
            <Navbar6/>
            <Hero8 />
            <Emergencey/>
            <ServiceSection3/>
            <TestSlider2 testclass={'wpo-testimonial-area-4'}/>
            <ContactArea contactclass={'wpo-contact-area4'}/>
            <PartnerSlider partnerclass={'wpo-client-area2'}/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default HomePage8;