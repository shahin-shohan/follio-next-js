
import React, { Component } from 'react'
import Slider from "react-slick";
import Link from 'next/link'


class PorfolioSection9 extends Component {
    render( props ) {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            margin: 10,
            loop: true,
            responsive: [
                {
                  breakpoint: 1445,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div className="protfolio-cro-area section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-md-12">
                            <div className="gallery-active">
                                <Slider {...settings}>
                                    <div className="protfolio-wrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-22.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Website Development</h2>
                                                <span>WordPress . Blog</span>
                                                <Link href="/PorfolioGrid2"><a>View Full Work</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="protfolio-wrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-23.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Website Development</h2>
                                                <span>WordPress . Blog</span>
                                                <Link href="/PorfolioGrid2"><a>View Full Work</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="protfolio-wrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-24.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Website Development</h2>
                                                <span>WordPress . Blog</span>
                                                <Link href="/PorfolioGrid2"><a>View Full Work</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="protfolio-wrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-22.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Website Development</h2>
                                                <span>WordPress . Blog</span>
                                                <Link href="/PorfolioGrid2"><a>View Full Work</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="protfolio-wrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                 <img src='images/protfolio/img-23.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Website Development</h2>
                                                <span>WordPress . Blog</span>
                                                <Link href="/PorfolioGrid2"><a>View Full Work</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="protfolio-wrapper">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src='images/protfolio/img-24.jpg' alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Website Development</h2>
                                                <span>WordPress . Blog</span>
                                                <Link href="/PorfolioGrid2"><a>View Full Work</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default PorfolioSection9;
          
          
          
          
