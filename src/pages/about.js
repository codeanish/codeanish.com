import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
import styles from './about.module.scss'

const About = () => {

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

    return(
        <Layout>            
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Img fluid={images.fileName.childImageSharp.fluid} alt="Profile Image"/>
                </div>
                <div className={styles.name}>Anish Patel</div>
                <p>Hi I'm Anish. I'm a software engineer and architect based out of London, UK.</p>
                <p>I've been building great software for my clients for over 12 years and I've had the opportunity to work at some amazing companies.</p>
                <p>Currently I work at RMS, helping RMS' clients improve their business processes through technology. I lead a team of developers who help to integrate our clients own applications with RMS' platform.</p>
                <p>I've always worked very closely with the business. It is my opinion that by working closely with the users, you're able to better understand their needs and build a better overall solution.</p>
                <p>I'm not currently looking for any new opportunities, but I'm always happy to chat if you have any questions that you think I could help with. Reach out to me on Twitter <a href="https://twitter.com/codeanish" target="_blank" rel="noreferrer">@codeanish</a>.</p>
            </div>
        </Layout>
    );
};

export default About;