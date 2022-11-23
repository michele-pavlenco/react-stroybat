import React from 'react'
import LogoFooter from "../images/logo/logo-footer.png"
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'


const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-4 footer__widget footer__widget-about">
                                <div className="footer__widget-content">
                                    <img src={LogoFooter} alt="logo" className="mb-30" />
                                    <p className="mb-20">A leading developer of A-grade commercial, industrial and residential projects in USA.
                                        Since its foundation the company has doubled its turnover year on year with its staff.</p>
                                    <ul className="social__icons list-unstyled">
                                        <li><a href="#"><BsTwitter /></a></li>
                                        <li><a href="#"><AiOutlineInstagram /></a></li>
                                        <li><a href="#"><FaFacebook /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
                                <h6 className="footer__widget-title">Services</h6>
                                <div className="footer__widget-content">
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li><a href="#">Construction Manage</a></li>
                                            <li><a href="#">Construction Consultants</a></li>
                                            <li><a href="#">Architecture & Building</a></li>
                                            <li><a href="#">Home Renovations</a></li>
                                            <li><a href="#">Tiling & Painiting</a></li>
                                            <li><a href="#">Interior Design</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
                                <h6 className="footer__widget-title">Company</h6>
                                <div className="footer__widget-content">
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="leadership-team.html">Meet Our Team</a></li>
                                            <li><a href="blog.html">News & Media</a></li>
                                            <li><a href="projects-grid.html">Case Studies</a></li>
                                            <li><a href="contacs.html">Contacts</a></li>
                                            <li><a href="careers.html">Careers</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 footer__widget footer__widget-newsletter">
                                <h6 className="footer__widget-title">Newsletter</h6>
                                <div className="footer__widget-content">
                                    <p>Sign up for industry alerts, our latest news, thoughts, and insights from Promina.</p>
                                    <form className="widget__newsletter-form">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" placeholder="Your Email Address" />
                                            <button type="submit" className="btn btn__primary">
                                                <AiOutlineArrowRight />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <p className="text-right footer__more-info mt-20 mb-0">Have a question? <a href="#">Click here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap justify-content-between">
                                <nav>
                                    <ul className="footer__copyright-links list-unstyled d-flex flex-wrap mb-0">
                                        <li><a href="#">Terms & Conditions </a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                    </ul>
                                </nav>
                                <p className="mb-0 color-white"> &copy; 2020 Promina. With Love by
                                    <a href="http://themeforest.net/user/7oroof">7oroof.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer