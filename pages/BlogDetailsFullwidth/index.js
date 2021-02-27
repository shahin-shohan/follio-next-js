import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogSingleFullwidth from '../../components/BlogSingleFullwidth'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'

const BlogDetailsFullwidth =() => {
    return(
        <Fragment>
            <Head>
                <title>Blog Details fullwidth</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Helpful Tips For Become A Successful Designer'} pageSub={'Blog Details'}/>
            <BlogSingleFullwidth/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </Fragment>
    )
};
export default BlogDetailsFullwidth;