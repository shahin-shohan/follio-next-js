import React from 'react'
import Link from 'next/link'

const PorfolioSection4 = ( props ) => {
    return(
        <div className={`wpo-protfolio-area-3 section-padding ${props.protfclass}`}>
            <div className="container-fluid">
                <div className="col-12">
                    <div className="section-title-4 text-center">
                        <h2>My Latest Article</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12 sortable-gallery">
                        <div className="gallery-container row">
                            <div className="col-lg-6 col-md-6 col-sm-6 custom-grid">
                                <div className="protfolio-l">
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/protfolio/img-9.jpg' alt=""/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="protfolio-l ">
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                             <img src='images/protfolio/img-11.jpg' alt=""/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 custom-grid">
                                <div>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/protfolio/img-10.jpg' alt=""/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/protfolio/img-12.jpg' alt=""/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="protfolio-btn">
                            <Link href="/PorfolioGrid2"><a className="theme-btn-s2">Load More</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PorfolioSection4;