import React from "react";

const Company = (props) => {
    return(
        <div className="tasksInfo">
            
            <div className="roleCon">
                <div className='companyInfo'>
                    <p className='expCompany'>{props.company} | </p> 
                    <p className='expYear'>{props.year}</p>
                </div>
                <p className='expRole'>{props.role}</p>
                <div className='stackList'>
                    {props.stack.map((lang) => {
                        return(
                            <p>{`${lang}`}</p>
                        )
                    })}
                </div>
            </div>
            <div className="tasksCon">
                <div className='taskList'>
                    {props.tasks.map((task) => {
                        return(
                            <li className="task">{task}</li>
                        )
                    })}
                    
                </div>
                
            </div>
                
        </div>
    );
}

export default Company;