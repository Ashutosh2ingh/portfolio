import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () =>{
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:ashutoshsinghh2303@gmail.com" target="_blank">ashutoshsinghh2303@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/ashutosh-singh-939679230/" target="_blank">linkedin.com/Ashutosh Singh</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/Ashutosh2ingh" target="_blank">github.com/Ashutosh2ingh</a>
                </li>
            </ul>
        </footer>
    );
}