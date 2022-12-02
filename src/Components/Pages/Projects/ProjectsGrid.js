import React from 'react'
import Portfolio14 from '../../.././images/portfolio/grid/object1/object1_img_4.jpeg'
import Portfolio24 from '../../.././images/portfolio/grid/object2/object2_img_4.jpg'
import Portfolio35 from '../../.././images/portfolio/grid/object3/object3_img_5.jpg'





const ProjectsGrid = () => {
    return (
        <div>
            <section className="portfolio-grid">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <ul className="portfolio-filter d-flex flex-wrap justify-content-center list-unstyled">
                                <li><a className="filter active" href="#" data-filter="all">ALL Works</a></li>
                                <li><a className="filter" href="#" data-filter=".filter-construction">Construction</a></li>
                                <li><a className="filter" href="#" data-filter=".filter-architecture">Architecture</a></li>
                                <li><a className="filter" href="#" data-filter=".filter-building">Building</a></li>
                                <li><a className="filter" href="#" data-filter=".filter-renovations">Renovations</a></li>
                                <li><a className="filter" href="#" data-filter=".filter-interior">Interior</a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="row">



                        <div className="portfolio-item">
                            <div className="portfolio__img">
                                <img src={Portfolio14} alt="portfolio img" />
                            </div>
                            <div className="portfolio__content">
                                <h4 className="portfolio__title"><a href="#">The Fallingwater House</a></h4>
                                <div className="portfolio__cat">
                                    <a href="#">Building</a><a href="#">Interior</a>
                                </div>
                            </div>
                        </div>



                        <div className="portfolio-item">
                            <div className="portfolio__img">
                                <img src={Portfolio24} alt="portfolio img" />
                            </div>
                            <div className="portfolio__content">
                                <h4 className="portfolio__title"><a href="#">The Guggenheim Museum</a></h4>
                                <div className="portfolio__cat">
                                    <a href="#">Construction</a><a href="#">Engineering</a>
                                </div>
                            </div>
                        </div>



                        <div className="portfolio-item">
                            <div className="portfolio__img">
                                <img src={Portfolio35} alt="portfolio img" />
                            </div>
                            <div className="portfolio__content">
                                <h4 className="portfolio__title"><a href="#">Neue National Galerie</a></h4>
                                <div className="portfolio__cat">
                                    <a href="#">Renovation</a><a href="#">Architecture</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-6 col-md-6 col-lg-4 mix filter-architecture">
                            <div className="portfolio-item">
                                <div className="portfolio__img">
                                    {/* <img src="assets/images/portfolio/grid/4.jpg" alt="portfolio img" /> */}
                                </div>
                                <div className="portfolio__content">
                                    <h4 className="portfolio__title"><a href="#">Sagrada Familia</a></h4>
                                    <div className="portfolio__cat">
                                        <a href="#">Construstion</a><a href="#">Cuilding</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 mix filter-construction">
                            <div className="portfolio-item">
                                <div className="portfolio__img">
                                    {/* <img src="assets/images/portfolio/grid/5.jpg" alt="portfolio img" /> */}
                                </div>
                                <div className="portfolio__content">
                                    <h4 className="portfolio__title"><a href="#">Heydar Aliyev Center</a></h4>
                                    <div className="portfolio__cat">
                                        <a href="#">Engineering</a><a href="#">Renovation</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 mix filter-interior">
                            <div className="portfolio-item">
                                <div className="portfolio__img">
                                    {/* <img src="assets/images/portfolio/grid/6.jpg" alt="portfolio img" /> */}
                                </div>
                                <div className="portfolio__content">
                                    <h4 className="portfolio__title"><a href="#">Cathedral of Brasilia</a></h4>
                                    <div className="portfolio__cat">
                                        <a href="#">Building</a><a href="#">Modern</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 mix filter-construction portfolio-hidden">
                            <div className="portfolio-item">
                                <div className="portfolio__img">
                                    {/* <img src="assets/images/portfolio/grid/1.jpg" alt="portfolio img" /> */}
                                </div>
                                <div className="portfolio__content">
                                    <h4 className="portfolio__title"><a href="#">Neue National Galerie</a></h4>
                                    <div className="portfolio__cat">
                                        <a href="#">construction</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 mix filter-building portfolio-hidden">
                            <div className="portfolio-item">
                                <div className="portfolio__img">
                                    {/* <img src="assets/images/portfolio/grid/3.jpg" alt="portfolio img" /> */}
                                </div>
                                <div className="portfolio__content">
                                    <h4 className="portfolio__title"><a href="#">Villy Manufacturing Inc</a></h4>
                                    <div className="portfolio__cat">
                                        <a href="#">Engineering</a><a href="#">Auto</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 mix filter-renovations portfolio-hidden">
                            <div className="portfolio-item">
                                <div className="portfolio__img">
                                    {/* <img src="assets/images/portfolio/grid/2.jpg" alt="portfolio img" /> */}
                                </div>
                                <div className="portfolio__content">
                                    <h4 className="portfolio__title"><a href="#">Highway Energy Station</a></h4>
                                    <div className="portfolio__cat">
                                        <a href="#">Construction</a><a href="#">Energy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                            <button type="button" className="btn btn__link btn__loadMore loadMoreportfolio">
                                <span>More Projects</span><i>+</i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectsGrid