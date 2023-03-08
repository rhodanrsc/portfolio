import React from "react";
import info from "../Info.json"
import profilepic from '../AboutmePic.jpg'

const About = (props) => {
    return(
        <div id="About" className="aboutSection snap" ref={props.refp}>
            <h3 id="header" >About</h3>
            <figure className="photoContainer">
                <img className="photo" src={profilepic}></img>
            </figure>
            <div className="aboutBody">
                <p>{info.about[0]}</p>
                <p>{info.about[1]}</p>
                <p>{info.about[2]}</p>
            </div>
        </div>
        
    );
}

export default About;