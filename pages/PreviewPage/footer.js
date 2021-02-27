import React from 'react'
import Link  from 'next/link'


const DemoFooter = () => {
    return(
        <div className="prv-footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>Perfect Portfolio Theme For Your Next Step</p>
                        <Link href="/PreviewPage"><a className="theme-btn">Purshase Now</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoFooter;