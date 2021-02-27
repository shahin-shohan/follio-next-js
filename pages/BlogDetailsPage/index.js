import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogSingle from '../../components/BlogDetails'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'

const BlogDetailsPage =() => {
    return(
        <Fragment>
            <Head>
                <title>Blog Details</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Helpful Tips For Become A Successful Designer'} pageSub={'Blog Details'}/>
            <BlogSingle/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default BlogDetailsPage;