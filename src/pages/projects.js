import React from 'react';
import Layout from '../components/layout';
import ProjectCard from '../components/project-card';
import { graphql, useStaticQuery } from 'gatsby';

const Projects = () => {

    const data = useStaticQuery(graphql`
    query  {
        allProjectsYaml {
          nodes {
            technologies
            title
            url
            description
          }
        }
      }
    `)

    return (
        <Layout>
            <ol>
                {data.allProjectsYaml.nodes.map((node) => {
                    return <li><ProjectCard title={node.title} description={node.description} url={node.url} technologies={node.technologies}/></li>
                })}
            </ol>            
        </Layout>
    );
};

export default Projects;