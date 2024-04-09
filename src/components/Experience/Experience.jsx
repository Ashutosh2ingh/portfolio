import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import sytles from "./Experience.module.css";

export const Experience = () =>{
    return(
        <section className={sytles.container} id="experience">
            <h2 className={sytles.title}>Experience</h2>
            <div className={sytles.content}>
                <div className={sytles.skills}>
                    {
                        skills.map((skill,id)=>{
                            return(
                                <div key={id} className={sytles.skill}>
                                    <div className={sytles.skillImageContainer}>
                                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <ul className={sytles.history}>
                    {
                        history.map((historyItem,id)=>{
                            return(
                                <li key={id} className={sytles.historyItem}>
                                    <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                                    <div className={sytles.historyItemDetails}>
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul>{historyItem.experience.map((experience,id)=>{
                                            return(
                                                <li key={id}>
                                                    {experience}
                                                </li>
                                            );
                                        })}</ul>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
}