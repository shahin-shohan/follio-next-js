import React from 'react'
import Link from 'next/link'
import CustomMenu from '../customMenu'

const Header4 = (props) => {
    return(	
	<div className="header-style-s3">
        <div className="container-fluid">
            <div className="header-content">
                <div className="logo">
                    <Link href="/" title=""><a><img src='images/logo2.png' alt=""/></a></Link>
                </div>
                <div className="clearfix"></div>
                
            </div>
            <CustomMenu/>
        </div>
    </div>
    )
}

export default Header4;