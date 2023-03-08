import React from "react";
import info from '../../Info.json'
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react"
import landingPage from './images/CCLandingPage.png'
import Forum from './images/CCForum.png'
import portfolio from './images/portfolio.png'
import '@coreui/coreui/dist/css/coreui.min.css'

const Carousel = () => {
    return (
        <div className="Carousel">
            <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="d-block w-100 slide" align="center" src={landingPage} alt="Clean Collective - Landing Page" />
                <CCarouselCaption className="d-none d-md-block carouselCaption">
                <h5>Clean Collective - Landing Page</h5>
                <p>The landing page of Clean Collective</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 slide" align="center" src={Forum} alt="slide 2" />
                <CCarouselCaption className="d-none d-md-block carouselCaption">
                <h5>Clean Collective - Forum Page</h5>
                <p>Page where Clean Tech companies can engage in discussions</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 slide" align="center" src={portfolio} alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block carouselCaption">
                <h5>Portfolio</h5>
                <p>My personal portfolio to showcase my skills</p>
                </CCarouselCaption>
            </CCarouselItem>
            </CCarousel>
        </div>
    );
}

export default Carousel;