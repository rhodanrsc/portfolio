import React from "react";
import info from '../Info.json';
import Carousel from "./Carousel/Carousel";

const images = info.portfolio;

const Projects = (props) => {
    return(
        <div id="Projects" className="projects snap" ref={props.refp}>
            <h3 id="header" className="projectHeader">Projects</h3>

            <div className="carousel">
                <Carousel />
            </div>

        </div>
    )
};

export default Projects;