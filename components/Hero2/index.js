import React from 'react'
import Link from 'next/link'



const Hero2 = ( props ) => {
    return(
        <section className="wpo-hero-style-1 bg-animate-shape">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12 col-md-12 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">We are Southern-European Digital Agency</h2>
                            <span className="wow fadeInUp" data-wow-delay="0.8s">More than 10 years of creating digital solutions</span>
                            <div className="wow fadeInUp" data-wow-delay="1.0s">
                                <Link href="/AboutPage"><a className="theme-btn">More About</a></Link>
                                <Link href="/ContactPage"><a className="theme-btn-s2">Contact Us</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape1">
                <img src='images/shape/shape-1.png' alt=""/>
            </div> 
            <div className="shape2">
                <img src='images/shape/shape-2.png' alt=""/>
            </div> 
            <div className="shape3">
                <img src='images/shape/shape-3.png' alt=""/>
            </div>
            <div className="shape4">
                <img src='images/shape/shape-4.png' alt=""/>
            </div> 
            <div className="shape5">
                <img src='images/shape/shape-5.png' alt=""/>
            </div> 
            <div className="shape6">
                <img src='images/shape/shape-6.png' alt=""/>  
            </div> 
        </section>
    )
}
export default Hero2;