import React from 'react'
import Link  from 'next/link';


const Hero6 = ( props ) => {
    return(
        <section className="wpo-hero-style-10">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-8 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">Hello I’m Robert</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.8s">Expert Blogger With Huge Content</p>
                            <div className="wow fadeInUp" data-wow-delay="1.0s">
                                <Link href="/PorfolioGrid3"><a  className="theme-btn-s2">Discover My Articles</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero6;