import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer2 from '../../components/Footer2'
import Portfolio from '../../components/PorfolioSection6'
import Head from 'next/head'

const PorfolioGrid =() => {
    return(
        <Fragment>
            <Head>
                <title>Portfolio</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Portfolio'} pageSub={'Portfolio'}/>
            <Portfolio/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default PorfolioGrid;