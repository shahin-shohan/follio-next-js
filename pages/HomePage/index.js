import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero1 from '../../components/Hero1'
import Exprience from '../../components/exprience'
import PortfolioSub from '../../components/porfolioSub'
import ContactArea from '../../components/ContactArea'
import LatestBlog from '../../components/LatestNews'
import Footer from '../../components/Footer'
import TestSlider from '../../components/Testimonial'
import AboutWrap from '../../components/about'
import Head from 'next/head'

const HomePage =() => {
    return(
        <Fragment>
            <Head>
                <title>Home Page</title>
            </Head>
            <Navbar />
            <Hero1/>
            <Exprience/>
            <AboutWrap/>
            <PortfolioSub/>
            <TestSlider/>
            <ContactArea/>
            <LatestBlog/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage;