import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const HomeContact = () => {
    return (
        <div><section className="contact-info-layout2 pt-60 pb-30">
            <div className="container">
                <div className="row align-items-end">

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="contact-info-box d-flex align-items-center">
                            <div className="contact__info-box-icon">
                                <i> <AiOutlineMail /> </i>
                            </div>
                            <div className="contact__info-box-content">
                                <h4 className="contact__info-box-title">Quick Contact</h4>
                                <ul className="contact__info-list list-unstyled">
                                    <li>Email: <a href="mailto:Promina@7oroof.com">Promina@7oroof.com</a></li>
                                    <li>Phone: <a href="tel:5565454117">55 654 541 17</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="contact-info-box d-flex align-items-center">
                            <div className="contact__info-box-icon">
                                <i><GoLocation /></i>
                            </div>
                            <div className="contact__info-box-content">
                                <h4 className="contact__info-box-title">Our Location</h4>
                                <ul className="contact__info-list list-unstyled">
                                    <li>2307 Beverley Rd Brooklyn, New York 11226 US.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="cta__banner">
                            <h5 className="cta__title color-white">A Leading Developer Of A Grade
                                Commercial & Residential Projects</h5>
                            <p className="cta__desc color-gray">Today Promin has over 4,000 professionals on its payroll All Over The
                                World.</p>
                            <a href="services.html" className="btn btn__primary btn__link color-white">
                                <span>Learn More</span> <i><AiOutlineArrowRight /></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default HomeContact