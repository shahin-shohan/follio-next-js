import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import ServiceSection from '../../components/ServiceSection'
import MySkill from '../../components/MySkill'
import Footer2 from '../../components/Footer2'
import AboutArea3 from '../../components/aboutarea3'
import Head from 'next/head'

const AboutPage =() => {
    return(
        <Fragment>
            <Head>
                <title>About Page</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'About Us'} pageSub={'About'}/>
            <AboutArea3/>
            <MySkill/>
            <ServiceSection serviceclass={'wpo-service-area-4 section-padding'}/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
        </Fragment>
    )
};
export default AboutPage;