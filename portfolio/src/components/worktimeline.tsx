import React, { useEffect, useState } from "react";
import lightstyles from "../styles/light.module.scss";
import darkstyles from "../styles/dark.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";


const WorkTimeline = ({darkTheme}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const styles = darkTheme ? darkstyles : lightstyles;

    return (
        <>
            <div className={styles.timeline} data-aos="fade-down">
                <div className={styles.container + ' ' + styles.leftContainer}>
                    <div className={styles.content} data-aos="fade-down-left">
                        <h3>Februaru 2023 - Present</h3>
                        <h1>Full-time Laboratory Assistant</h1>
                        <h4>Laboratory Center @BINUS University Alam Sutra</h4>
                        <hr></hr>
                        <ul>
                            <li>
                                <h4>Experienced in Teaching 9+ classes with various courses, starts from Database Design, Web Based App Dev, and Big Data Processing</h4>
                            </li>
                            <li>
                                <h4>Experienced in many more advanced programming languanges, tools, framework and databases, such as Apache Hadoop, Firebase, PostgreSQL, Unity, ReactJS, Golang, ASP.NET, Swift, Android, and many more.</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.container + ' ' + styles.rightContainer}>
                    <div className={styles.content} data-aos="fade-up-right">
                        <h3>September 2022 - February 2023</h3>
                        <h1>Part-time Laboratory Assistant</h1>
                        <h4>Laboratory Center @BINUS University Alam Sutra</h4>
                        <hr></hr>
                        <ul>
                            <li>
                                <h4>Experienced in Teaching 6+ classes with various courses, starts from C and Java Basic, and Web Programming using Laravel Framework</h4>
                            </li>
                            <li>
                                <h4>Experienced in several programming languanges, such as C, Python, C++, Java Basic, PHP, Laravel, mySQL, HTML, CSS, JS, etc.</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.container + ' ' + styles.leftContainer}>
                    <div className={styles.content} data-aos="fade-down-left">
                        <h3>Maret 2022 - January 2023</h3>
                        <h1>Activist - BINUS Computer Science Student Association</h1>
                        <h4>BINUS University</h4>
                        <hr></hr>
                        <ul>
                            <li>
                                <h4>Joining HISHOT (HIMTI Seminar, Workshop, and Study Tour) events for Computer Science Students at BINUS University</h4>
                            </li>
                            <li>
                                <h4>Given responsibility as HISHOT Coordinator for Equipment, Transportation, and Consumption</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.container + ' ' + styles.rightContainer}>
                    <div className={styles.content} data-aos="fade-up-right">
                        <h3>July 2021 - July 2022</h3>
                        <h1>Part-time Promotions Team</h1>
                        <h4>Marketing Team @BINUS University Alam Sutra</h4>
                        <hr></hr>
                        <ul>
                            <li>
                                <h4>Experienced in promoting BINUS University to many high-schoolers with the aim that they interested and want to join BINUS</h4>
                            </li>
                            <li>
                                <h4>Promoting BINUS University Major, Accreditation, Faculty, Facitilites, and so many more.</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkTimeline;