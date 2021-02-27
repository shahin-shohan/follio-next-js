import React  from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogFullwidth from '../../components/BlogFullwidth'
import Footer2 from '../../components/Footer2'
import Head from 'next/head'

const BlogFull =() => {
    return(
        <div>
            <Head>
                <title>Blog Fullwidth</title>
            </Head>
            <Navbar5/>
            <Breadcrumbs pageTitle={'Latest News'} pageSub={'Blog'}/>
            <BlogFullwidth/>
            <Footer2 Ftclass={'wpo-footer-area3'}/>
        </div>
    )
};
export default BlogFull;