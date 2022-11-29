import React from 'react'
import ServiceOverlay from '../../.././images/services/service-overlay.png';
import ServiceBackground from '../../.././images/backgrounds/map.png';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsBricks } from 'react-icons/bs'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { MdEngineering } from 'react-icons/md'
// BsBricks  


const HomeServices = () => {
    return (
        <div>
            <section className="services-layout2 pt-120 bg-gray">
                <div className="services-bg">
                    <div className="bg-img"><img src={ServiceBackground} alt="background" /></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                            <div className="heading text-center mb-40">
                                <span className="heading__subtitle">The Best A Grade Commercial & Residential Services</span>
                                <h2 className="heading__title">High Quality Construction Solutions
                                    For Residentials & Industries!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="service-item">
                                <div className="service__content">
                                    <div className="service__icon">
                                        <i ><BsBricks /></i>
                                    </div>
                                    <h4 className="service__title">Architecture <br /> & Building</h4>
                                    <p className="service__desc">Architecture is both the process and the product of planning, and constructing
                                        buildings or any other structures.</p>
                                    <a href="services-single-service.html" className="btn btn__secondary btn__link">
                                        <span>Read More</span>
                                        <i ><AiOutlineArrowRight /></i>
                                    </a>
                                </div>
                                <div className="service__overlay bg-overlay bg-overlay-theme">
                                    <div className="bg-img"><img src={ServiceOverlay} alt="background" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="service-item">
                                <div className="service__content">
                                    <div className="service__icon">
                                        <i><MdEngineering /></i>
                                    </div>
                                    <h4 className="service__title">Construction <br /> Consultants</h4>
                                    <p className="service__desc">Given the increasing complexity of many construction projects it is becoming
                                        more common that a consultant.</p>
                                    <a href="services-single-service.html" className="btn btn__secondary btn__link">
                                        <span>Read More</span>
                                        <i ><AiOutlineArrowRight /></i>
                                    </a>
                                </div>
                                <div className="service__overlay bg-overlay bg-overlay-theme">
                                    <div className="bg-img"><img src={ServiceOverlay} alt="background" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="service-item">
                                <div className="service__content">
                                    <div className="service__icon">
                                        <i><BsFillCalendarCheckFill /></i>
                                    </div>
                                    <h4 className="service__title">Construction<br /> Management</h4>
                                    <p className="service__desc">Professional service uses specialized, project management techniques to oversee
                                        the planning, design.</p>
                                    <a href="services-single-service.html" className="btn btn__secondary btn__link">
                                        <span>Read More</span>
                                        <i ><AiOutlineArrowRight /></i>
                                    </a>
                                </div>
                                <div className="service__overlay bg-overlay bg-overlay-theme">
                                    <div className="bg-img"><img src={ServiceOverlay} alt="background" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                            <p className="text__link">Offering high quality construction solutions. <a href="contacs.html">Build Your Dream
                                Now!</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomeServices