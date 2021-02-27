import React from 'react'
import Link  from 'next/link'

const DemoHome = () => {
    return(
        <div id="demo" className="demo-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title demosection-title text-center">
                        <h2>10 Stunning Demos</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 custom-grid">
                        <div className="single-demo text-center">
                            <div className="demo-img">
                                <Link href="/"><a target='_blank'><img src='images/preview/demo/1.jpg' alt="" /></a></Link>
                            </div>
                            <div className="demo-content">
                                <h3><Link href="/"><a target='_blank'>Personal Portfolioo</a></Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 custom-grid">
                        <div className="single-demo text-center">
                            <div className="demo-img">
                                <Link href="/home2"><a target='_blank'><img src='images/preview/demo/2.jpg' alt="" /></a></Link>
                            </div>
                            <div className="demo-content">
                                <h3><Link href="/HomePage2"><a target='_blank'>Digital Agency </a></Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 custom-grid">
                        <div className="single-demo text-center">
                            <div className="demo-img">
                                <Link href="/home3"><a target='_blank'><img src='images/preview/demo/3.jpg' alt="" /></a></Link>
                            </div>
                            <div className="demo-content">
                                <h3><Link href="/HomePage3"><a target='_blank'>Design Agency</a></Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 custom-grid">
                        <div className="single-demo text-center">
                            <div className="demo-img">
                                <Link href="/home4"><a target='_blank'><img src='images/preview/demo/4.jpg' alt="" /></a></Link>
                            </div>
                            <div className="demo-content">
                                <h3><Link href="/HomePage4"><a target='_blank'>Designer</a></Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 custom-grid">
                        <div className="single-demo text-center">
                            <div className="demo-img">
                                <Link href="/home5"><a target='_blank'><img src='images/preview/demo/5.jpg' alt="" /></a></Link>
                            </div>
                            <div className="demo-content">
                                <h3><Link href="/HomePage5"><a target='_blank'>Programmer</a></Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 custom-grid">
                        <div className="single-demo text-center">
                            <div className="demo-img">
                                <Link href="/home6"><a target='_blank'><img src='images/preview/demo/6.jpg' alt="" /></a></Link>
                            </div>
                            <div className="demo-content">
                                <h3><Link href="/HomePage6"><a target='_blank'>Bloger</a></Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 custom-grid">
                        <div className="single-demo text-center">
                            <div className="demo-img">
                                <Link href="/home7"><a target='_blank'><img src='images/preview/demo/7.jpg' alt="" /></a></Link>
                            </div>
                            <div className="demo-content">
                                <h3><Link href="/HomePage7"><a target='_blank'>Architect</a></Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 custom-grid">
                        <div className="single-demo text-center">
                            <div className="demo-img">
                                <Link href="/home8"><a target='_blank'><img src='images/preview/demo/8.jpg' alt="" /></a></Link>
                            </div>
                            <div className="demo-content">
                                <h3><Link href="/HomePage8"><a target='_blank'>Doctor</a></Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 custom-grid">
                        <div className="single-demo text-center">
                            <div className="demo-img">
                                <Link href="/home9"><a target='_blank'><img src='images/preview/demo/9.jpg' alt="" /></a></Link>
                            </div>
                            <div className="demo-content">
                                <h3><Link href="/HomePage9"><a target='_blank'>Lawyer</a></Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 custom-grid">
                        <div className="single-demo text-center">
                            <div className="demo-img">
                                <Link href="/home10"><a target='_blank'><img src='images/preview/demo/10.jpg' alt="" /></a></Link>
                            </div>
                            <div className="demo-content">
                                <h3><Link href="/home10"><a target='_blank'>3D Designer</a></Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoHome;