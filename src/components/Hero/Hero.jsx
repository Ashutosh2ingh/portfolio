import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () =>{
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ashutosh</h1>
                <p className={styles.description}>I'm a full-stack developer with 1 Year of experience using React, Python and Django. Reach out if you'd like to learn more!</p>
                <a className={styles.contactBtn} href="mailto:ashutoshsinghh2303@gmail.com" target="_blank">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.jpg")} alt="Hero Image" />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
}