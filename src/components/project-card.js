import React from 'react';
import Img from 'gatsby-image'
import styles from './project-card.module.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({title, url, description, technologies, image}) => {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>{title}</h2>                
                <p>{description}</p>
                <ol className={styles.technologies}>
                {technologies.map((tech) => {
                    return <li key={tech}>{tech}</li>
                })}
                </ol>
                <div className={styles.links}>
                    <a href={url} target="_blank" rel="noreferrer" aria-label="External Link" className={styles.icon}><FaExternalLinkAlt/></a>
                </div>                
            </div>
            <div className={styles.right}>
                <Img fluid={image} className={styles.imageTheme}/>
            </div>            
        </div>
    )
}

export default ProjectCard;