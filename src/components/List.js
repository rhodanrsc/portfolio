import React from "react";
import { DiReact } from 'react-icons/di'
import { SiExpress } from "react-icons/si";

const List = (props) => {
    return(
        <div className="items">
            <div className="listItem"> 
                {props.item === 'Java' ? <span className='devicons devicons-java' /> : 
                props.item === 'JavaScript' ? <span className='devicons devicons-javascript' /> : 
                props.item === 'Python' ? <span className='devicons devicons-python' /> : 
                props.item === 'HTML/CSS' ? <span className='devicons devicons-html5' /> : 
                props.item === 'Node.js' ? <span className='devicons devicons-nodejs_small' /> : 
                props.item === 'SQL' ? <span className='devicons devicons-database' /> : 
                props.item === 'MongoDB' ? <span className='devicons devicons-mongodb' /> : 
                props.item === 'HTML/CSS' ? <span className='devicons devicons-css3'/> : 
                props.item === 'React.js' ? <DiReact className='icon' id="icon" /> : 
                props.item === 'Express.js' ? <SiExpress className='icon' id="icon" /> : null}
                <p className="itemName">{props.item}</p>
            </div>
        </div>
        
    );
}

export default List;