import React from 'react'
import Client1 from '../../.././images/clients/smac_logo.webp';


const HomeClients = () => {
    return (
        <div>
            <section className="clients border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="slick-carousel"
                                data-slick='{"slidesToShow": 6, "arrows": false, "dots": false, "autoplay": true,"autoplaySpeed": 2000, "infinite": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 4}}, {"breakpoint": 767, "settings": {"slidesToShow": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2}}]}'>
                                <div className="client">
                                    <a href="#"><img src={Client1} alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="https://www.smac-sa.com/"><img src={Client1} alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="https://www.smac-sa.com/"><img src={Client1} alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="https://www.smac-sa.com/"><img src={Client1} alt="client" /></a>
                                </div>
                                {/* <div className="client">
                                    <a href="#"><img src={Client1} alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src={Client1} alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/3.png" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/4.png" alt="client" /></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeClients