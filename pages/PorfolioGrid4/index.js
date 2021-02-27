import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import PorfolioSection8 from '../../components/PorfolioSection8'
import Head from 'next/head'

const PorfolioGrid4 =() => {
    return(
        <Fragment>
            <Head>
                <title>Portfolio 4</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Portfolio'} pageSub={'Portfolio'}/>
            <PorfolioSection8/>
            <Footer Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default PorfolioGrid4;