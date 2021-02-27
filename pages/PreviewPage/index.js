import React, {Fragment} from 'react';
import HeaderDemo from './HeaderDemo'
import HeroDemo from './hero'
import DemoFeatures from './features'
import DemoHome from './stuning'
import DemoServices from './service'
import DemoSinglepage from './singlepage'
import DemoFooter from './footer'

const PreviewPage =() => {
    return(
        <Fragment>
            <HeaderDemo/>
            <HeroDemo/>
            <DemoFeatures/>
            <DemoHome/>
            <DemoServices/>
            <DemoSinglepage/>
            <DemoFooter/>
        </Fragment>
    )
};
export default PreviewPage;