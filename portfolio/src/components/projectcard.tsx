import React, { useEffect, useState } from "react";
import lightstyles from "../styles/light.module.scss";
import darkstyles from "../styles/dark.module.scss";
import { MdOpenInNew } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project, darkTheme, setDarkTheme }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const styles = darkTheme ? darkstyles : lightstyles;

    const [isProjectHovered, setIsProjectHovered] = useState(false);

    return (
        <>
            <div className={styles.projectBox} key={project} data-aos="zoom-in-down"
                onMouseEnter={() => setIsProjectHovered(true)}
                onMouseLeave={() => setIsProjectHovered(false)}>
                <>
                    <div className={styles.genreBox}>
                        {project.genre}
                    </div>
                    <br />
                    <h1>{project.title}</h1>
                    <h4>{project.description}</h4>
                    <div className={styles.rowContainerPorto}>
                        {project.genres.map((genre, genreIndex) => (
                            <div className={styles.genreBox2} key={genreIndex}>
                                {genre}
                            </div>
                        ))}
                    </div>
                    <a href={`/portfolio/${project.id}`} rel="noopener noreferrer" className={styles.overlay} onClick={() => localStorage.setItem('lastClickedProject', project.title)}>
                        <div>
                            <MdOpenInNew style={{ width: '50px', height: '50px', color: 'white' }} />
                        </div>
                        <div>
                            <h4 className={styles.text}>See more details!</h4>
                        </div>
                    </a>
                </>
            </div>
        </>
    )
}

export default ProjectCard;