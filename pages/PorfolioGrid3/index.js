import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer2 from '../../components/Footer2'
import PorfolioSection2 from '../../components/PorfolioSection2'
import Head from 'next/head'

const PorfolioGrid3 =() => {
    return(
        <Fragment>
            <Head>
                <title>Portfolio 3</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Portfolio'} pageSub={'Portfolio'}/>
            <PorfolioSection2 protfclass={'wpo-protfolio-area-3'}/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default PorfolioGrid3;