import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import  Link  from 'next/link'


const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
        submenu: [
            {
                id: 11,
                title: 'Home',
                link: '/'
            },
            {
                id: 12,
                title: 'HomePage 2',
                link: '/HomePage2'
            },
            {
                id: 13,
                title: 'HomePage 3',
                link: '/HomePage3'
            },
            {
                id: 15,
                title: 'HomePage 4',
                link: '/HomePage4'
            },
            {
                id: 16,
                title: 'HomePage 5',
                link: '/HomePage5'
            },
            {
                id: 17,
                title: 'HomePage 6',
                link: '/HomePage6'
            },
            {
                id: 18,
                title: 'HomePage 7',
                link: '/HomePage7'
            },
            {
                id: 19,
                title: 'HomePage 8',
                link: '/HomePage8'
            },
            {
                id: 20,
                title: 'HomePage 9',
                link: '/HomePage9'
            },
            {
                id: 21,
                title: 'HomePage 10',
                link: '/HomePage10'
            },
        ]
    },
    {
        id: 2,
        title: 'About',
        link: '/AboutPage',
    },
    {
        id: 3,
        title: 'Portfolio',
        link: '/service',
        submenu: [
            {
                id: 31,
                title: 'Portfolio Grid',
                link: '/PorfolioGrid'
            },
            {
                id: 32,
                title: 'Portfolio Grid-2',
                link: '/PorfolioGrid2'
            },
            {
                id: 33,
                title: 'Portfolio Mashonary',
                link: '/PorfolioGrid3'
            },
            {
                id: 34,
                title: 'Portfolio List',
                link: '/PorfolioGrid4'
            },
            {
                id: 35,
                title: 'Portfolio Cro',
                link: '/PorfolioGridCro'
            }
    
        ]
    },

    {
        id: 4,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 41,
                title: 'About',
                link: '/AboutPage'
            },
            {
                id: 43,
                title: 'Service Details',
                link: '/ServiceDetails'
            },
            {
                id: 44,
                title: 'Project Details',
                link: '/ProjectDetails'
            },
            {
                id: 45,
                title: '404 Page',
                link: '/404'
            },
        ]
    },
    {
        id: 5,
        title: 'Blog',
        link: '/BlogPage',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/BlogPage'
            },
            {
                id: 52,
                title: 'Blog Fullwidth',
                link: '/BlogFull'
            },
            {
                id: 53,
                title: 'Blog Details',
                link: '/BlogDetailsPage'
            },
            {
                id: 54,
                title: 'Blog Details Fullwidth',
                link: '/BlogDetailsFullwidth'
            }
        ]
    },
    {
        id: 6,
        title: 'Contact',
        link: '/ContactPage'
    },
    
]


export default class CustomMenu extends Component {

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

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`custommenuarea ${isMenuShow ? 'show' : ''}`}>
                    <div className="close" onClick={this.menuHandler}><i className="fa fa-times" aria-hidden="true"></i></div>

                    <ul className="custommenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link href={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link className="active" href={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu showmenuv2" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
