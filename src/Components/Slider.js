import React from 'react'
import img1 from '../images/sliders/1.jpg';
import img2 from '../images/sliders/2.jpg';

// import img1 from '.../images/sliders/1.jpg';
// import img2 from '../images/sliders/2.jpg';

const Slider = () => {
    return (
        <div>
            <section className="slider slider-layout1">
                <div className="slick-carousel carousel-arrows-light m-slides-0"
                    data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear"}'>
                    <div className="slide-item align-v-h bg-overlay bg-overlay-2">
                        {/* <div className="bg-img"><img src={img1} alt="slide img" /></div> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                                    <div className="slide__content">
                                        <h2 className="slide__title">Provide Effective Building Solutions!</h2>
                                        <p className="slide__desc">A leading developer of A-grade commercial, industrial and residential projects
                                            in USA. Since its foundation the company has doubled its turnover year on year, with its staff
                                            numbers swelling accordingly. </p>
                                        <a href="services.html" className="btn btn__primary btn__icon btn__lg mr-30">
                                            <span>Our Services</span><i className="icon-arrow-right"></i>
                                        </a>
                                        <a href="about-us.html" className="btn btn__white">More About Us!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item align-v-h bg-overlay">
                        <div className="bg-img"><img src={img2} alt="slide img" /></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                                    <div className="slide__content">
                                        <h2 className="slide__title">Bigger, Better, <br /> Faster & Stronger</h2>
                                        <p className="slide__desc">A leading developer of A-grade commercial, industrial and residential projects
                                            in USA. Since its foundation the company has doubled its turnover year on year, with its staff
                                            numbers swelling accordingly. </p>
                                        <a href="services.html" className="btn btn__primary btn__icon btn__lg mr-30">
                                            <span>Our Services</span><i className="icon-arrow-right"></i>
                                        </a>
                                        <a href="about-us.html" className="btn btn__white">More About Us!</a>
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

export default Slider