import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import ErroeSection from '../../components/ErroeSection'
import Head from 'next/head'

const ErroPage =() => {
    return(
        <Fragment>
            <Head>
                <title>404</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'404 Error'} pageSub={'404 Not Found'}/>
            <ErroeSection/>
            <Footer Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default ErroPage;