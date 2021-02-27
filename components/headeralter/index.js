import React from 'react'
import Link  from 'next/link'
import MobileMenu from '../MobileMenu'


const HeaderAlter = (props) => {
    return(	
	<div className={`header-style-1 ${props.headerclass}`}>
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <Link href="/" title=""><a><img src='images/logo2.png' alt=""/></a></Link>
                </div>
                <nav className="d-lg-block d-none header-b">
                <ul>
                        <li><Link className="active" href="/" title="">Home</Link>
                            <ul>
                                <li><Link className="active" href="/">Home</Link></li>
                                <li><Link href="/HomePage2">Home-style-2</Link></li>
                                <li><Link href="/HomePage3">Home-style-3</Link></li>
                                <li><Link href="/HomePage4">Home-style-4</Link></li>
                                <li><Link href="/HomePage5">Home-style-5</Link></li>
                                <li><Link href="/HomePage6">Home-style-6</Link></li>
                                <li><Link href="/HomePage7">Home-style-7</Link></li>
                                <li><Link href="/HomePage8">Home-style-8</Link></li>
                                <li><Link href="/HomePage9">Home-style-9</Link></li>
                                <li><Link href="/HomePage10">Home-style-10</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/AboutPage" title="">About</Link></li>
                        <li><Link  href="/portfolio">Portfolio</Link>
                            <ul>
                                <li><Link href="/PorfolioGrid">Portfolio Grid</Link></li>
                                <li><Link href="/PorfolioGrid2">Portfolio Grid-2</Link></li>
                                <li><Link href="/PorfolioGrid3">Portfolio Mashonary</Link></li>
                                <li><Link href="/PorfolioGrid4">Portfolio List</Link></li>
                                <li><Link href="/PorfolioGridCro">Portfolio Cro</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/">Pages</Link>
                            <ul>
                                <li><Link href="/AboutPage">About</Link></li>
                                <li><Link href="/ServiceDetails">Service Details</Link></li>
                                <li><Link href="/ProjectDetails">Project Details</Link></li>
                                <li><Link href="/404">404 Page</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/" title="">Blog</Link>
                            <ul>
                                <li><Link href="/BlogPage" title="">Blog</Link></li>
                                <li><Link href="/BlogFull" title="">Blog Fullwidth</Link></li>
                                <li><Link href="/" title="">Blog Details</Link>
                                    <ul>
                                        <li><Link href="/BlogDetailsPage" title="">Blog Details</Link></li>
                                        <li><Link href="/BlogDetailsFullwidth" title="">Blog Details Fullwidth</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link href="/ContactPage" title="">Contact</Link></li>
                    </ul>
                </nav>
                <div className="contact">
                    <div className="cart-search-contact">
                        <div className="get-number">
                            <Link href="/ContactPage" >+(888) 01234567</Link>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                
            </div>
            <MobileMenu/>
        </div>
    </div>
    )
}

export default HeaderAlter;