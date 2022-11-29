import React from 'react'
import Work1 from '../../.././images/portfolio/grid/1.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai'

const HomeWorks = () => {
    return (
        <div>
            <section className="portfolio-standard portfolio-standard-carousel pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                            <div className="heading text-center mb-50">
                                <span className="heading__subtitle">Featured Projects</span>
                                <h2 className="heading__title">Our Recent Works</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="slick-carousel"
                                data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows": false, "dots": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'>

                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <img src={Work1} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <h4 className="portfolio__title"><a href="#">The Fallingwater House</a></h4>
                                        <div className="portfolio__cat">
                                            <a href="#">Building</a><a href="#">Interior</a>
                                        </div>
                                        <p className="portfolio__desc">We understand that data is greatest asset when it comes to analyzing and
                                            optimizing your supply chain performance.</p>
                                        <a href="projects-single-project.html" className="btn btn__loadMore"><span>Explore More</span><i
                                        ><AiOutlineArrowRight /></i></a>
                                    </div>
                                </div>

                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <img src={Work1} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <h4 className="portfolio__title"><a href="#">The Guggenheim Museum</a></h4>
                                        <div className="portfolio__cat">
                                            <a href="#">Construction</a><a href="#">Engineering</a>
                                        </div>
                                        <p className="portfolio__desc">Cost savings is crucial, innovative technology minimizes your overall spend
                                            by utilizing an extensive consolidation.</p>
                                        <a href="projects-single-project.html" className="btn btn__loadMore"><span>Explore More</span><i
                                            className="icon-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <img src={Work1} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <h4 className="portfolio__title"><a href="#">Neue National Galerie</a></h4>
                                        <div className="portfolio__cat">
                                            <a href="#">Renovation</a><a href="#">Architecture</a>
                                        </div>
                                        <p className="portfolio__desc">Our Group has been building relationships and projects last. Serving an
                                            impressive list of long-term clients with experience.</p>
                                        <a href="projects-single-project.html" className="btn btn__loadMore"><span>Explore More</span><i
                                            className="icon-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <img src={Work1} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <h4 className="portfolio__title"><a href="#">Sagrada Familia</a></h4>
                                        <div className="portfolio__cat">
                                            <a href="#">Construstion</a><a href="#">Cuilding</a>
                                        </div>
                                        <p className="portfolio__desc">Cost savings is crucial, innovative technology minimizes your overall spend
                                            by utilizing an extensive consolidation.</p>
                                        <a href="projects-single-project.html" className="btn btn__loadMore"><span>Explore More</span><i
                                            className="icon-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <img src={Work1} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <h4 className="portfolio__title"><a href="#">Heydar Aliyev Center</a></h4>
                                        <div className="portfolio__cat">
                                            <a href="#">Engineering</a><a href="#">Renovation</a>
                                        </div>
                                        <p className="portfolio__desc">Our Group has been building relationships and projects last. Serving an
                                            impressive list of long-term clients with experience.</p>
                                        <a href="projects-single-project.html" className="btn btn__loadMore"><span>Explore More</span><i
                                            className="icon-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div className="portfolio-item">
                                    <div className="portfolio__img">
                                        <img src={Work1} alt="portfolio img" />
                                    </div>
                                    <div className="portfolio__content">
                                        <h4 className="portfolio__title"><a href="#">Cathedral of Brasilia</a></h4>
                                        <div className="portfolio__cat">
                                            <a href="#">Building</a><a href="#">Modern</a>
                                        </div>
                                        <p className="portfolio__desc">We understand that data is greatest asset when it comes to analyzing and
                                            optimizing your supply chain performance.</p>
                                        <a href="projects-single-project.html" className="btn btn__loadMore"><span>Explore More</span><i
                                            className="icon-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomeWorks