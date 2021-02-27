import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer2 from '../../components/Footer2'
import ServiceSingle from '../../components/ServiceSingle'
import Head from 'next/head'

const ServiceDetails =() => {
    return(
        <Fragment>
            <Head>
                <title>Service Details</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Product Design'} pageSub={'Service Details'}/>
            <ServiceSingle/>
            <Footer2 Ftclass={'wpo-footer-area3'} />
        </Fragment>
    )
};
export default ServiceDetails;