import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Hero7 from '../../components/Hero7'
import ServiceSection2 from '../../components/ServiceSection2'
import Footer2 from '../../components/Footer2'
import PorfolioSection5 from '../../components/PorfolioSection5'
import AboutArea4 from '../../components/aboutarea4'
import Head from 'next/head'

const HomePage7 =() => {
    return(
        <Fragment>
            <Head>
                <title>HomePage 7</title>
            </Head>
            <Navbar5/>
            <Hero7 />
            <AboutArea4/>
            <ServiceSection2/>
            <PorfolioSection5/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default HomePage7;