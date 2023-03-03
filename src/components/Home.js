import React from "react";
import { IoChevronDownOutline } from "react-icons/io5"

const Home = (props) => {

    return(
        <div className={`homepage snap font`} id="tsparticles" ref={props.refp}>
            <h1 className="name">Rhodan Reigh Cervantes</h1>
            <h2 className="title">Junior Software Developer</h2>

            <div className="spacer" >
                -----
            </div>

            <a className="downIconContainer" href="#About">
                <IoChevronDownOutline className="downIcon" />
            </a>
        </div> 
        
    );
}

export default Home;