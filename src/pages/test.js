import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './test.module.scss'

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
        <div className={styles.container}>
            <Img fluid={images.fileName.childImageSharp.fluid} alt="Profile Image"/>        
        </div>
    );
}

export default Test;