import React from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return(
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <Slider {...settings} className={styles.slider}>
                {
                    projects.map((project,id)=>{
                        return(
                            <div key={id}>
                                <ProjectCard project={project} />
                            </div>
                        );
                    })
                }
            </Slider>
        </section>
    );
}
