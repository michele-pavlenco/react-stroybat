import React from 'react'
import LogoDark from "../images/logo/logo-dark.png"
import LogoLight from "../images/logo/logo-light.png"
import { Link } from 'react-router-dom'
import { AiFillPhone } from 'react-icons/ai'


const Nav = () => {
    return (
        <div>
            <div className="wrapper">
                <header className="header header-transparent header-layout1">
                    <nav className="navbar navbar-expand-lg sticky-navbar">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="index.html">
                                <img src={LogoLight} className="logo-light" alt="logo" />
                                <img src={LogoDark} className="logo-dark" alt="logo" />
                            </a>
                            <button className="navbar-toggler" type="button">
                                <span className="menu-lines"><span></span></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mainNavigation">
                                <ul className="navbar-nav">

                                    <li className="nav__item with-dropdown">
                                        <Link to="/" className="dropdown-toggle 
                                        nav__item-link active" >Home </Link>
                                    </li>

                                    <li className="nav__item with-dropdown">
                                        <Link to="/company" className="dropdown-toggle nav__item-link">Company</Link>
                                    </li>

                                    <li className="nav__item with-dropdown">
                                        <Link to="/services" className="dropdown-toggle nav__item-link">Services</Link>
                                    </li>

                                    <li className="nav__item with-dropdown">
                                        <Link to="/projects" className="dropdown-toggle nav__item-link">Projects</Link>
                                    </li>

                                    <li className="nav__item with-dropdown">
                                        <Link to="/contacts" className="dropdown-toggle nav__item-link">News & Media</Link>
                                    </li>

                                    {/* <li className="nav__item">
                                        <a href="contacs.html" className="nav__item-link">Contacts</a>
                                    </li> */}
                                    <li className="nav__item nav__item-btn d-none d-md-block">
                                        <a href="request-quote.html" className="btn btn__primary action__btn-request">
                                            <span>Ottieni un preventivo</span><i className="icon-arrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact__number d-flex align-items-center">
                                <i><AiFillPhone /></i>
                                <a href="tel:5565454117">55 654 541 17</a>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        </div>
    )
}

export default Nav