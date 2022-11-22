import React from 'react'
const logoDarkImg = ".../images/logo/logo-dark.png"
const logoLightImg = ".../images/logo/light.png"

const Nav = () => {
    return (
        <div>
            <header class="header header-transparent header-layout1">
                <nav class="navbar navbar-expand-lg sticky-navbar">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="index.html">
                            <img src={logoLightImg} class="logo-light" alt="logo" />
                            <img src={logoDarkImg} class="logo-light" alt="logo" />
                        </a>
                        <button class="navbar-toggler" type="button">
                            <span class="menu-lines"><span></span></span>
                        </button>
                        <div class="collapse navbar-collapse" id="mainNavigation">
                            <ul class="navbar-nav">
                                <li class="nav__item with-dropdown">
                                    <a href="index.html" class="dropdown-toggle nav__item-link active">Home</a>
                                    <i class="fa fa-angle-down" data-toggle="dropdown"></i>
                                    <ul class="dropdown-menu">
                                        <li class="nav__item"><a href="index.html" class="nav__item-link">Home Moderm</a></li>

                                        <li class="nav__item"><a href="home-classic.html" class="nav__item-link">Home classic</a></li>

                                        <li class="nav__item"><a href="home-architecture.html" class="nav__item-link">Home Architecture</a>
                                        </li>

                                    </ul>
                                </li>
                                <li class="nav__item with-dropdown">
                                    <a href="about-us.html" class="dropdown-toggle nav__item-link">Company</a>
                                    <i class="fa fa-angle-down" data-toggle="dropdown"></i>
                                    <ul class="dropdown-menu">
                                        <li class="nav__item"><a href="about-us.html" class="nav__item-link">About Us</a></li>

                                        <li class="nav__item"><a href="core-values.html" class="nav__item-link">core values</a></li>

                                        <li class="nav__item"><a href="leadership-team.html" class="nav__item-link">Leadership Team</a></li>

                                        <li class="nav__item"><a href="pricing.html" class="nav__item-link">Pricing & Plans</a></li>

                                        <li class="nav__item"><a href="faqs.html" class="nav__item-link">Help & FAQs</a></li>

                                        <li class="nav__item"><a href="careers.html" class="nav__item-link">careers</a></li>

                                    </ul>
                                </li>
                                <li class="nav__item with-dropdown">
                                    <a href="services.html" class="dropdown-toggle nav__item-link">Services</a>
                                    <i class="fa fa-angle-down" data-toggle="dropdown"></i>
                                    <ul class="dropdown-menu">
                                        <li class="nav__item"><a href="services-single-service.html" class="nav__item-link">Construction
                                            Manage</a></li>

                                        <li class="nav__item"><a href="services-single-service.html" class="nav__item-link">Construction
                                            Consultants</a></li>

                                        <li class="nav__item"><a href="services-single-service.html" class="nav__item-link">Architecture &
                                            Building</a></li>

                                        <li class="nav__item"><a href="services-single-service.html" class="nav__item-link">Home
                                            Renovations</a></li>

                                        <li class="nav__item"><a href="services-single-service.html" class="nav__item-link">Tiling &
                                            Painiting</a></li>

                                        <li class="nav__item"><a href="services-single-service.html" class="nav__item-link">Interior
                                            Design</a></li>

                                    </ul>
                                </li>
                                <li class="nav__item with-dropdown">
                                    <a href="projects-grid.html" class="dropdown-toggle nav__item-link">Projects</a>
                                    <i class="fa fa-angle-down" data-toggle="dropdown"></i>
                                    <ul class="dropdown-menu">
                                        <li class="nav__item"><a href="projects-grid.html" class="nav__item-link">projects grid</a></li>

                                        <li class="nav__item"><a href="projects-standard.html" class="nav__item-link">projects standard</a>
                                        </li>
                                        <li class="nav__item"><a href="projects-carousel.html" class="nav__item-link">projects carousel</a>
                                        </li>
                                        <li class="nav__item"><a href="projects-single-project.html" class="nav__item-link">projects
                                            single</a></li>
                                    </ul>
                                </li>
                                <li class="nav__item with-dropdown">
                                    <a href="blog.html" class="dropdown-toggle nav__item-link">News & Media</a>
                                    <i class="fa fa-angle-down" data-toggle="dropdown"></i>
                                    <ul class="dropdown-menu">
                                        <li class="nav__item">
                                            <a href="blog.html" class="nav__item-link">Blog Grid</a>
                                        </li>
                                        <li class="nav__item">
                                            <a href="blog-single-post.html" class="nav__item-link">Single Blog Post</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav__item">
                                    <a href="contacs.html" class="nav__item-link">Contacts</a>
                                </li>
                                <li class="nav__item nav__item-btn d-none d-md-block">
                                    <a href="request-quote.html" class="btn btn__primary action__btn-request">
                                        <span>Get A Quote</span><i class="icon-arrow-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="contact__number d-flex align-items-center">
                            <i class="icon-phone"></i>
                            <a href="tel:5565454117">55 654 541 17</a>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Nav