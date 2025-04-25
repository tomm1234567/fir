import React from 'react';
import './Projects_item.css';

function Projects_item(props) {
    return (
        <div className="projects_item" id={props.bg}>
                <p className="projects_text1 gr">{props.text1}</p>
                <p className="projects_text2">{props.text2}</p>
                <p className="projects_text3">{props.text3}</p>
        </div>
    )
}

export default Projects_item;