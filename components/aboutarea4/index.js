import React from 'react';

import Link from 'next/link'

const AboutArea4 = (props) => {

  return (
    <div className="wpo-about-area-5 section-padding">
        <div className="wpo-about-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-s2-img">
                            <img src='images/about/about2.jpg' alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="wpo-about-text">
                            <h2>I think architecture is rarely the product of a single ideology.</h2>
                            <p>My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            <ul>
                                <li>High Quality Service</li>
                                <li>Best Price in Marketplace.</li>
                                <li>Unique Design and Development.</li>
                            </ul>
                            <Link href="/"><a className="theme-btn-s2">Discover More</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutArea4;