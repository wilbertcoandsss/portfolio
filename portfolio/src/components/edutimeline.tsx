import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import lightstyles from "../styles/light.module.scss";
import darkstyles from "../styles/dark.module.scss";

const EduTimeline = ({ darkTheme }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    const styles = darkTheme ? darkstyles : lightstyles;

    return (
        <>
            <div className={styles.timeline} data-aos="fade-down">
                <div className={styles.container + ' ' + styles.leftContainer}>
                    <div className={styles.content} data-aos="fade-left">
                        <h3>2021 - 2025 (Expected)</h3>
                        <h1>Bina Nusantara University</h1>
                        <h3>Computer Science Major</h3>
                        <h4>Current GPA: 3.96/4.00 (82 credits)</h4>
                    </div>
                </div>
                <div className={styles.container + ' ' + styles.rightContainer}>
                    <div className={styles.content} data-aos="fade-right">
                        <h3>2018-2021</h3>
                        <h1>Saint Thomas Aquino Senior High School</h1>
                        <h3>Mathematics and Natural Sciences Major</h3>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EduTimeline;