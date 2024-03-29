import React from "react";
import info from '../../Info.json'
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react"
import { IoLogoGithub } from "react-icons/io5";
import landingPage from './images/CCLandingPage.jpg'
import Forum from './images/CCForum.jpg'
import portfolio from './images/portfolio.jpg'
import '@coreui/coreui/dist/css/coreui.min.css'

const Carousel = () => {
    return (
        <div className="Carousel">
            <CCarousel controls indicators>
                {info.projects.map((proj) => {
                    return(
                        <CCarouselItem key={proj.img.length + proj.alt.length}>
                            <CImage className="d-block w-100 slide" 
                            align="center" 
                            src={proj.img === "landing" ? landingPage :
                                proj.img === "forum" ? Forum :
                                proj.img === "portfolio" ? portfolio : null} 
                            alt={proj.alt} />
                            <CCarouselCaption className="d-none d-md-block carouselCaption">
                                <h5>{proj.title}</h5>
                                <p>{proj.desc}</p>
                                <p id="projectStack">{proj.stack}</p>
                                <a id="projGit" href={proj.code} target="_blank" rel="noreferrer"><IoLogoGithub /></a>
                            </CCarouselCaption>
                        </CCarouselItem>
                    )
                })}
            </CCarousel>
        </div>
    );
}

export default Carousel;