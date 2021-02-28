import React from 'react';
import Link from 'next/link'


const BlogSidebar = () => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    return(
        <div className="col col-lg-4 col-12">
            <div className="wpo-blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link href="/BlogDetailsPage"><a>Branding<span>25</span></a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Wordpress <span>34</span></a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Web Design Tricks and Tips <span>50</span></a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Designer Themes <span>46</span></a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>General Topics <span>15</span></a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Support Center <span>48</span></a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Knowledgebase <span>65</span></a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Inspiration <span>65</span></a></Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Recent posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/img-1.jpg' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link href="/BlogDetailsPage">6 Ideas for how you can avoid telling lie</Link></h4>
                                <span className="date">22 Sep 2021</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/img-2.jpg' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link href="/BlogDetailsPage">The definitive list of digital products you can sell</Link></h4>
                                <span className="date">22 Sep 2021</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src='images/recent-posts/img-3.jpg' alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link href="/BlogDetailsPage">The definitive list of digital products you can sell</Link></h4>
                                <span className="date">22 Sep 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link href="/BlogDetailsPage"><a>Wordpress</a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>HTML</a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>CSS</a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Graphic Design</a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Theme Develop</a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>PDS Template</a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Video</a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Audio</a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Plugin</a></Link></li>
                        <li><Link href="/BlogDetailsPage"><a>Photography</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
