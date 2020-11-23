import React from 'react';

const ProjectCard = ({title, url, description, technologies}) => {

    return (
        <div>
            <h1>{title}</h1>
            <p>{url}</p>
            <p>{description}</p>
            <p>{technologies}</p>
        </div>
    )
}

export default ProjectCard;