import React, {Fragment} from 'react';
import Navbar4 from '../../components/Navbar4'
import Hero6 from '../../components/Hero6'
import PorfolioSection4 from '../../components/PorfolioSection4'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'

const HomePage6 =() => {
    return(
        <Fragment>
            <Head>
                <title>HomePage 6</title>
            </Head>
            <Navbar4/>
            <Hero6 />
            <PorfolioSection4/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default HomePage6;