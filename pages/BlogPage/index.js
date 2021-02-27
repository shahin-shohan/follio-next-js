import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogList from '../../components/BlogList'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'

const BlogPage =() => {
    return(
        <Fragment>
            <Head>
                <title>Blog</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Latest News'} pageSub={'Blog'}/>
            <BlogList/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default BlogPage;