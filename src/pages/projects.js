import React from 'react';
import Layout from '../components/layout';
import ProjectCard from '../components/project-card';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './projects.module.scss'

const Projects = () => {

    const data = useStaticQuery(graphql`
    query  {
        allProjectsYaml {
          nodes {
            technologies
            title
            url
            description
            image{
              childImageSharp{
                fluid (maxWidth: 1366){
                  ...GatsbyImageSharpFluid
                }
              }
            }           
          }
        }
      }
    `)

    return (
        <Layout>
          <div className={styles.container}>
            <h2 className={styles.header}>What I've been working on</h2>
            <ol>
                {data.allProjectsYaml.nodes.map((node) => {
                    return <li key={node.title}><ProjectCard title={node.title} description={node.description} url={node.url} technologies={node.technologies} image={node.image.childImageSharp.fluid}/></li>
                })}
            </ol>            
          </div>
        </Layout>
    );
};

export default Projects;