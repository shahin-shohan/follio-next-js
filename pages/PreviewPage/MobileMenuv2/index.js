import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'



export default class MobileMenuv2 extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

                    <ul className="responsivemenu">
                    <li>
                        <AnchorLink href='#demo'>Demo</AnchorLink></li>
                         <li><AnchorLink href='#features'>Features</AnchorLink></li>
                         <li><AnchorLink href='#page'>Single Page</AnchorLink></li>
                         <li><AnchorLink href='#support'>Support</AnchorLink></li>
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
