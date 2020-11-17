import React from "react";
import Layout from "../components/layout";
import styles from './index.module.scss';

const Home = () => {
  return (
    <Layout>
      <div className={styles.statement}>
        <div className={styles.hello}>Hi, my name is</div>
        <div className={styles.name}>Anish Patel.</div>
        <div className={styles.strapLine}>I like to make stuff.</div>
        <div className={styles.bio}>I am a software engineer and architect based out of the UK building and designing software solutions for my clients.</div>
        <div className={styles.negativeSpace}></div>
      </div>
    </Layout>
  )
}

export default Home;