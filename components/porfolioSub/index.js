import React from 'react'
import Link from 'next/link'

const PortfolioSub = ( props ) => {
    return(
        <div className={`wpo-protfolio-area section-padding ${props.subclass}`}>
            <div className="container">
                <div className="col-12">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-protfolio-item">
                            <div className="row">
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="wpo-protfolio-left">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-1.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Minimalism</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link href="/ProjectDetails">View Work</Link>
                                            </div>
                                        </div>
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-2.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>3D Project</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link href="/ProjectDetails">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="wpo-protfolio-right">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-3.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Abstract Art</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link href="/ProjectDetails">View Work</Link>
                                            </div>
                                        </div>
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-4.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Modern BG</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link href="/ProjectDetails">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="protfolio-btn v1">
                                <Link href="/">See More Work...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSub;