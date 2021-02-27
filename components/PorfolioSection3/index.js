import React from 'react'
import Link from 'next/link'




const PorfolioSection3 = ( props ) => {
    return(
        <div className="wpo-protfolio-area-5 section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-protfolio-item">
                            <div className="row">
                                <div className="col col-12">
                                    <div className="protfolio-wrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-13.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Website Development</h2>
                                                <span>WordPress . Blog</span>
                                                <Link href="/PorfolioGrid2"><a>View Work</a></Link>
                                            </div>
                                            <div className="thumb-text">
                                                <span>01</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12">
                                    <div className="protfolio-rwrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-14.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Website Development</h2>
                                                <span>WordPress . Blog</span>
                                                <Link href="/PorfolioGrid2"><a>View Work</a></Link>
                                            </div>
                                            <div className="thumb-text">
                                                <span>02</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="protfolio-btn">
                                <Link href="/PorfolioGrid2"><a>See More Work...</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PorfolioSection3;