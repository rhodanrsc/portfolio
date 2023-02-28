import React from "react";
import { DiReact } from 'react-icons/di'
import { SiExpress } from "react-icons/si";

const List = (props) => {
    return(
        <div className="items">
            <li className="listItem">
                <span className={`devicons ${
                    props.item === 'Java' ? 'devicons-java' : 
                    props.item === 'JavaScript' ? 'devicons-javascript' : 
                    props.item === 'Python' ? 'devicons-python' : 
                    props.item === 'HTML/CSS' ? 'devicons-html5' : 
                    props.item === 'Node.js' ? 'devicons-nodejs_small' : 
                    props.item === 'SQL' ? 'devicons-database' : 
                    props.item === 'MongoDB' ? 'devicons-mongodb' : null
                    }`} 
                />
                { props.item === 'HTML/CSS' ? <span className='devicons devicons-css3'/> : 
                props.item === 'React.js' ? <DiReact className='icon' /> : 
                props.item === 'Express.js' ? <SiExpress className='icon'/> : null}
                {props.item}
            </li>
        </div>
        
    );
}

export default List;