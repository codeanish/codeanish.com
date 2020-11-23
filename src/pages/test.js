import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './test.module.scss'
import Layout from '../components/layout';

const Test = () => {

    const images = useStaticQuery(graphql`
    query {
        fileName: file(relativePath: {eq: "assets/AnishProfilePictureCircular.png"}){
            childImageSharp{
                fluid(maxWidth: 250){
                    ...GatsbyImageSharpFluid
                }
            }
        }

      }
      
    `)

    return (
        <Layout>
            <div className={styles.container}>
                <Img fluid={images.fileName.childImageSharp.fluid} alt="Profile Image"/>        
            </div>
        </Layout>
    );
}

export default Test;