import React from 'react'
import Link from 'next/link'


const PorfolioSection = ( props ) => {
    return(
        <div className="wpo-protfolio-area-2 section-padding">
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
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-5.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Minimalism</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link href="/PorfolioGrid2">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-6.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Abstract Art</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link href="/PorfolioGrid2">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-7.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Abstract Art</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link href="/PorfolioGrid2">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-8.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Abstract Art</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link href="/PorfolioGrid2">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="protfolio-btn">
                                <Link href="/PorfolioGrid3"><a>See More Work...</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PorfolioSection;