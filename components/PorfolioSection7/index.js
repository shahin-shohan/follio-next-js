import React, { Component } from 'react';

import Link from 'next/link'

class Portfolio2 extends Component {

    state = {
        onWebDesign: false,
        onPrintDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: true,
                onWebDesign: true,
                onPhotography: true,
            });
        }

        const webDesign = event => {
            event.preventDefault();
            this.setState({
                onWebDesign: true,
                onPrintDesign: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const printDesign = event => {
            event.preventDefault();
            this.setState({
                onPrintDesign: true,
                onWebDesign: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: false,
                onWebDesign: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        const Photography = event => {
            event.preventDefault();
            this.setState({
                onPhotography: true,
                onWebApp: false,
                onPrintDesign: false,
                onWebDesign: false,
                isOpen: true,
            });
        }



        return (
            <section id="protfolio" className="gallery-section wpo-protfolio-area-7 wpo-protfolio-area-8 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <ul>
                                    <li><button data-filter="*" href="/" className="current" onClick={allElement}>All</button></li>
                                    <li><button data-filter=".Web-Design" href="/" onClick={webDesign}>Web Design</button></li>
                                    <li><button data-filter=".Print-Design" href="/" onClick={printDesign}>Print Design</button></li>
                                    <li><button data-filter=".Web-Application" href="/" onClick={webApp}>Web Application</button></li>               
                                    <li><button data-filter=".Photography" href="/" onClick={Photography}>Photography</button></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary ">
                               
                               
                                <div className={this.state.onWebDesign ? "grid active" : "grid" 
                                    && this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/protfolio/img-5.jpg' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                            <Link href="/PorfolioGrid2"><a>View Work</a></Link>
                                        </div>
                                    </div>  
                                </div>
                               
                                <div className={this.state.onWebDesign ? "grid active" : "grid" 
                                    && this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/protfolio/img-6.jpg' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                            <Link href="/PorfolioGrid2"><a>View Work</a></Link>
                                        </div>
                                    </div>  
                                </div>
                                <div className={this.state.onWebDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/protfolio/img-7.jpg' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                            <Link href="/PorfolioGrid2"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/protfolio/img-8.jpg' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                            <Link href="/PorfolioGrid2"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/protfolio/img-17.jpg' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                            <Link href="/PorfolioGrid2"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={this.state.onPrintDesign ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.onPhotography ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <div className="wpo-protfolio-single">
                                        <div className="wpo-protfolio-img">
                                            <img src='images/protfolio/img-6.jpg' alt="" className="img img-responsive"/>
                                        </div>
                                        <div className="wpo-protfolio-text">
                                            <h2>Minimalism</h2>
                                            <span>Illustration . Art Direction</span>
                                            <Link href="/PorfolioGrid2"><a>View Work</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="protfolio-btn">
                                <Link href="/PorfolioGrid2" className="theme-btn-s2">Load More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio2;