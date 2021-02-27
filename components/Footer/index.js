import React from 'react'
import Link from 'next/link'

const Footer = (props) => {
    return(
        <div className={`wpo-footer-area ${props.Ftclass}`}>
            <div className="container">
                <div className="wpo-footer-top">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                            <div className="footer-logo">
                                 <img src='images/logo.png' alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9 col-sm-9 col-12">
                            <div className="wpo-footer-menu">
                                <ul>
                                    <li><Link href="/AboutPage">About</Link></li>
                                    <li><Link href="/PorfolioGrid">Portfolio</Link></li>
                                    <li><Link href="/BlogPage">Blog</Link></li>
                                    <li><Link href="/ContactPage">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="wpo-footer-social">
                                <ul>
                                    <li><Link href="/"><a><i className="fa fa-facebook"></i></a></Link></li>
                                    <li><Link href="/"><a><i className="fa fa-twitter" aria-hidden="true"></i></a></Link></li>
                                    <li><Link href="/"><a><i className="fa fa-instagram" aria-hidden="true"></i></a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`wpo-footer-bottom ${props.Fbclass}`}>
                <span>© 2020 Follio. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;