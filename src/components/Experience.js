import React from 'react';
import info from '../Info.json';
import Company from './Company';

const company = info.experience.company;
const role = info.experience.role;
const stack = info.experience.stack;
const year = info.experience.year;
const tasks = info.experience.tasks;

const Experience = (props) => {
    return (
        <div id='Experience' className='experience snap' ref={props.refp}>
            <h3 id='header'>Experience</h3>
            <br />
            <div id='expContainer' className='expContainer'>
                
                <Company 
                    company = {company}
                    year = {year}
                    role = {role}
                    tasks = {tasks}
                    stack = {stack}
                    key = {year + tasks.length + stack.length}
                />

            </div>
        </div>
    );
}

export default Experience;