import React from "react";
import { IoHomeOutline, IoHelpCircleOutline, IoCodeSlashOutline, IoFolderOutline, IoCallOutline, IoLaptopOutline } from "react-icons/io5";

const SideButton = (props) => {
    return(
        <div className={"sidebutton " + props.name} id={'sidebutton' + props.name} onMouseOver={props.toggle} key={props.key}>
            <a className="button" id={`button ${props.name ? 'selected' : 'unselected'}`} href={`#${props.name}`}>
                <div className="buttonIcon">{
                    props.name === "Home" ? <IoHomeOutline size={25}/> : 
                    props.name === "About" ? <IoHelpCircleOutline size={25}/> : 
                    props.name === "Skills" ? <IoCodeSlashOutline size={25}/> :
                    props.name === "Experience" ? <IoLaptopOutline size={25}/> :
                    props.name === "Portfolio" ? <IoFolderOutline size={25}/> : 
                    props.name === "Contact" ? <IoCallOutline size={25}/> : null} 
                </div>
                <div className="buttonName">
                    {props.name}
                </div>
            </a>
        </div>
    );
}

export default SideButton;