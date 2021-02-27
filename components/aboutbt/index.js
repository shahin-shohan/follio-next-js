import React from 'react'
import Link from 'next/link'


const Abmain = () => {
    return(
        <div className="wpo-about-item">
            <div className="row">
                <div className="col-lg-6">
                    <div className="wpo-about-img">
                        <img src='images/about/about.png' alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="wpo-about-text">
                        <h2>I create products not just art</h2>
                        <p>My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <Link href="/AboutPage"><a className="theme-btn">Lets Talk</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abmain;