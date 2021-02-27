import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer2 from '../../components/Footer2'
import Portfolio2 from '../../components/PorfolioSection7'
import Head from 'next/head'

const PorfolioGrid2 =() => {
    return(
        <Fragment>
            <Head>
                <title>Portfolio 2</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Portfolio'} pageSub={'Portfolio'}/>
            <Portfolio2/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default PorfolioGrid2;