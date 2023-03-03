import React from "react";
import List from "./List";
import info from "../Info.json"

const Skills = (props) => {
    const languages = info.skills.languages;
    const frameworks = info.skills.frameworks;
    const data = info.skills.data;

    return (
        <div id="Skills" className="skills snap" ref={props.refp}>
            <h3 >Skills</h3>
            <div className="languages lists">
                <h4>Languages</h4>
                <div className="list">
                    {languages.map((item) => {
                        return(
                            <List 
                            item = {item}
                            key = {item}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="Frameworks lists">
                <h4>Frameworks</h4>
                <div className="list">
                    {frameworks.map((item) => {
                        return(
                            <List 
                            item = {item}
                            key = {item}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="Data lists">
                <h4>Data</h4>
                <div className="list">
                    {data.map((item) => {
                        return(
                            <List 
                            item = {item}
                            key = {item}
                            />
                        )
                    })}
                </div>
            </div>
            
        </div>
    );
}

export default Skills;