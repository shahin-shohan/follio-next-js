import React from 'react'
import Link  from 'next/link';

const Hero3 = ( props ) => {
    return(
        <section className="wpo-hero-style-3">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-7 col-md-12 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="0.1s">We are The Greatest Digital Agency</h2>
                            <span className="wow fadeInUp" data-wow-delay="0.8s">More than 10 years of creating digital solutions</span>
                            <div className="wow fadeInUp" data-wow-delay="1.0s">
                                <Link href="/AboutPage"><a className="theme-btn">More About</a></Link>
                                <Link href="/ContactPage"><a className="theme-btn-s2">Contact Us</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero3;