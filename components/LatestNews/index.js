import React from 'react'
import Link from 'next/link'



const LatestBlog = () => {
    return(
        <div className="wpo-blog-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2>Latest News</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-blog-wrap">
                            <div className="wpo-blog-img">
                                <img src='images/blog/1.jpg' alt="blog"/>
                            </div>
                            <div className="wpo-blog-text">
                                <ul>
                                    <li><span>By Admin</span></li>
                                    <li>. Nov 24, 2021</li>
                                </ul>
                                <h2><Link href="/BlogDetailsPage">Helpful tips for become a successful designer</Link></h2>
                                <Link href="/BlogDetailsPage">Read More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-blog-wrap">
                            <div className="wpo-blog-img">
                                <img src='images/blog/2.jpg' alt="blog"/>
                            </div>
                            <div className="wpo-blog-text">
                                <ul>
                                    <li><span>By Admin</span></li>
                                    <li>. Nov 24, 2021</li>
                                </ul>
                                <h2><Link href="/BlogDetailsPage">Helpful tips for become a successful designer</Link></h2>
                                <Link href="/BlogDetailsPage">Read More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-blog-wrap">
                            <div className="wpo-blog-img">
                                <img src='images/blog/3.jpg' alt="blog"/>
                            </div>
                            <div className="wpo-blog-text">
                                <ul>
                                    <li><span>By Admin</span></li>
                                    <li>. Nov 24, 2021</li>
                                </ul>
                                <h2><Link href="/BlogDetailsPage">Helpful tips for become a successful designer</Link></h2>
                                <Link href="/BlogDetailsPage">Read More...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog;