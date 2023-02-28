import React from "react";
import List from "./List";
import info from "../Info.json"

const Skills = (props) => {
    const languages = info.info.skills.languages;
    const frameworks = info.info.skills.frameworks;
    const data = info.info.skills.data;

    return (
        <div id="Skills" className="skills snap" ref={props.refp}>
            <h3 >Skills</h3>
            <div className="languages lists">
                <h4>Languages</h4>
                <ul className="list">
                    {languages.map((item) => {
                        return(
                            <List 
                            item = {item}
                            key = {item}
                            />
                        )
                    })}
                </ul>
            </div>
            <div className="Frameworks lists">
                <h4>Frameworks</h4>
                <ul className="list">
                    {frameworks.map((item) => {
                        return(
                            <List 
                            item = {item}
                            key = {item}
                            />
                        )
                    })}
                </ul>
            </div>
            <div className="Data lists">
                <h4>Data</h4>
                <ul className="list">
                    {data.map((item) => {
                        return(
                            <List 
                            item = {item}
                            key = {item}
                            />
                        )
                    })}
                </ul>
            </div>
            
        </div>
    );
}

export default Skills;