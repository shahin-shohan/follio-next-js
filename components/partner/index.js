
import React, { Component } from 'react'
import Slider from "react-slick";


class PartnerSlider extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            margin: 10,
            loop: true,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div className={`partner-sec section-padding ${this.props.partnerclass}`}>
                <div className="container">
                    <div className="partner-sec-details">
                        <div className="pt-carousel">
                            <Slider {...settings}>
                                <div className="partner-col">
                                    <img src='images/gift/3.png' alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src='images/gift/2.png' alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src='images/gift/3.png' alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src='images/gift/4.png' alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src='images/gift/3.png' alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src='images/gift/2.png' alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src='images/gift/3.png' alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src='images/gift/4.png' alt=""/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default PartnerSlider;
          
          
          
          
