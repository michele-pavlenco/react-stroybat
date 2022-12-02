import React from 'react'
import ProjectsGrid from './ProjectsGrid'
import Background from '../../.././images/page-titles/9.jpg'

let sectionStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '500px'

}


const Projects = () => {
    return (
        <div>
            <section style={sectionStyle} className="page-title page-title-layout7 bg-overlay bg-overlay-2 bg-parallax text-center">
                <div className="bg-img" >
                    <span></span>
                    {/* <img  alt="background" /> */}
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h1 className="pagetitle__heading mb-0">Projects</h1>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectsGrid />
        </div>
    )
}

export default Projects