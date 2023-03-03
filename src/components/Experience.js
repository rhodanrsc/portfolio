import React from 'react';
import info from '../Info.json';
import Company from './Company';

const company = info.experience.company;
const role = info.experience.role;
const stack = info.experience.stack;
const year = info.experience.year;
const tasks = info.experience.tasks;
// Box that expands????
const Experience = (props) => {
    return (
        <div id='Experience' className='experience snap' ref={props.refp}>
            <h3>Experience</h3>

            <div className='expContainer'>
                <div className='companyInfo'>
                    <p className='expCompany'>{company} | </p> 
                    <p className='expYear'>{year}</p>
                </div>

                <div></div>

                <Company 
                    role = {role}
                    tasks = {tasks}
                    stack = {stack}
                />

            </div>
        </div>
    );
}

export default Experience;