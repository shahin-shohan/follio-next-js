import React from 'react'
import Link from 'next/link'

const ServiceSection2 = (props) => {
    return(
        <div className="work-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title-2 text-center">
                        <h2>This is what I do.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src='images/icon/icon3.png' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Planning</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link href="/service-details"><a>Read More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src='images/icon/icon4.png' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Interior</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link href="/service-details"><a>Read More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src='images/icon/icon5.png' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Exterior</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link href="/service-details"><a>Read More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src='images/icon/icon6.png' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Restoration</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link href="/service-details"><a>Read More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src='images/icon/icon7.png' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Building</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link href="/service-details"><a>Read More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                        <div className="work-wrap">
                            <div className="work-icon">
                                <img src='images/icon/icon8.png' alt=""/>
                            </div>
                            <div className="work-content">
                                <h2>Consultation</h2>
                                <p>Our master plans provide a comprehensive look at where an organization is today.</p>
                                <Link href="/service-details"><a>Read More</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection2;