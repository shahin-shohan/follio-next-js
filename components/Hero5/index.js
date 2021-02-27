import React from 'react'
import Link  from 'next/link'


const Hero5 = ( props ) => {
    return(
        <section className="wpo-hero-style-5">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-8 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">I’m <span>John</span> Smith</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.8s">Freelance UI/UX Designer</p>
                            <div className="bg-social wow fadeInUp" data-wow-delay="1.0s">
                                <ul>
                                    <li><Link href="/"><a><span><img src='images/icon/icon1.png' alt=""/></span></a></Link></li>
                                    <li><Link href="/"><a><span><img src='images/icon/icon2.png' alt=""/></span></a></Link></li>
                                    <li><Link href="/"><a><i className="ti-instagram"></i></a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero5;