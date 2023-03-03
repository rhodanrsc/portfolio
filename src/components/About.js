import React from "react";
import info from "../Info.json"

const About = (props) => {
    return(
        <div id="About" className="aboutSection snap" ref={props.refp}>
            <h3 >About</h3>
            <figure className="photoContainer">
                <img className="photo" src=""></img>
            </figure>
            <p className="aboutBody">{info.about}</p>
        </div>
        
    );
}

export default About;