import React from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../../components/ModalVideo'




const BlogList = () => {

    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src='images/blog/img-4.jpg' alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link href="/BlogDetailsPage"><a><img src='images/blog/admin.jpg' alt=""/> By Admin</a></Link></li>
                                    <li><Link href="/BlogDetailsPage"><a><i className="ti-calendar"></i> Sep 25,2020</a></Link></li>
                                    <li><Link href="/BlogDetailsPage"><a><i className="ti-heart"></i> 35</a></Link></li>
                                </ul>
                                <h3><Link href="/BlogDetailsPage">Helpful tips for become a successful designer</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link href="/BlogDetailsPage" className="read-more">Read More...</Link>
                            </div>
                            <div className="post format-video">
                                <div className="entry-media video-holder">
                                    <img src='images/blog/img-5.jpg' alt=""/>
                                    <div className="video-btn2">
                                        <VideoModal/>
                                    </div>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link href="/BlogDetailsPage"><a><img src='images/blog/admin.jpg' alt=""/> By Admin</a></Link></li>
                                    <li><Link href="/BlogDetailsPage"><a><i className="ti-calendar"></i> Sep 25,2020</a></Link></li>
                                    <li><Link href="/BlogDetailsPage"><a><i className="ti-heart"></i> 35</a></Link></li>
                                </ul>
                                <h3><Link href="/BlogDetailsPage">How to estublish a team with a great way?</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link href="/BlogDetailsPage" className="read-more">Read More...</Link>
                            </div>
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src='images/blog/img-6.jpg' alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link href="/BlogDetailsPage"><a><img src='images/blog/admin.jpg' alt=""/> By Admin</a></Link></li>
                                    <li><Link href="/BlogDetailsPage"><a><i className="ti-calendar"></i> Sep 25,2020</a></Link></li>
                                    <li><Link href="/BlogDetailsPage"><a><i className="ti-heart"></i> 35</a></Link></li>
                                </ul>
                                <h3><Link href="/BlogDetailsPage">A great way to estublish as 3D designer</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                <Link href="/BlogDetailsPage" className="read-more">Read More...</Link>
                            </div>

                            <div className="post format-quote">
                                <ul className="entry-meta">
                                    <li><Link href="/BlogDetailsPage"><a><img src='images/blog/admin.jpg' alt=""/> By Admin</a></Link></li>
                                    <li><Link href="/BlogDetailsPage"><a><i className="ti-calendar"></i> Sep 25,2020</a></Link></li>
                                    <li><Link href="/BlogDetailsPage"><a><i className="ti-heart"></i> 35</a></Link></li>
                                </ul>
                                <h3><Link href="/BlogDetailsPage">How to become a team leader?</Link></h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link href="/BlogDetailsPage" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link href="/BlogDetailsPage">1</Link></li>
                                    <li><Link href="/BlogDetailsPage">2</Link></li>
                                    <li><Link href="/BlogDetailsPage">3</Link></li>
                                    <li><Link href="/BlogDetailsPage">4</Link></li>
                                    <li>
                                        <Link href="/BlogDetailsPage" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar/>
                </div>
            </div>
        </section>
     )
        
}

export default BlogList;
