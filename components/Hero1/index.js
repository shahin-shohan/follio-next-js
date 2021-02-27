import React from 'react'
import Link from 'next/link'

const Hero1 = () => {
    return(
        <section className="wpo-hero-style-2" >
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-8 slide-caption">
                            <h2>I’m <span>John</span> Smith</h2>
                            <p>Freelance UI/UX Designer</p>
                            <div className="bg-social">
                                <ul>
                                    <li><Link href="/"><a><i className="fa fa-facebook"></i></a></Link></li>
                                    <li><Link href="/"><a><i className="fa fa-linkedin"></i></a></Link></li>
                                    <li><Link href="/"><a><i className="fa fa-instagram"></i></a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-slide-right-img">
                    <div className="slide-img">
                        <img src='images/slider/hero-shape.png' alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero1;