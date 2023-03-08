import React from "react";
import { IoChevronDownOutline, IoPhonePortraitOutline, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const Home = (props) => {

    return(
        <div className={`homepage snap font`} id="tsparticles" ref={props.refp}>
            <h1 id="name">Rhodan Reigh Cervantes</h1>
            <h2 id="title">Junior Software Developer</h2>

            <div className="homeIcons" >
                <a href="https://www.linkedin.com/in/rhodanc/" >
                    <IoLogoLinkedin />
                </a>
                <a href="https://github.com/">
                    <IoLogoGithub />
                </a>
                <a href="#Contact">
                    <IoPhonePortraitOutline />
                </a>
            </div>

            <a className="downIconContainer" href="#About">
                <IoChevronDownOutline className="downIcon" />
            </a>
        </div> 
        
    );
}

export default Home;