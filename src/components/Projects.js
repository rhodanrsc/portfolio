import React from "react";
import info from '../Info.json';

const images = info.portfolio;

const Projects = (props) => {
    return(
        <div id="Portfolio" className="projects snap" ref={props.refp}>
            <h3>Portfolio</h3>

            <h4>{``}</h4>

        </div>
    )
};

export default Projects;