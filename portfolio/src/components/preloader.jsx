import React, { useEffect, useState } from "react";
import lightstyles from "../styles/light.module.scss";
import darkstyles from "../styles/dark.module.scss";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import ParticleBackground from "./particles";

const Preloader = ({ darkTheme, isDetails }) => {

    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);

            // Navigate to '/' after 3 seconds
            if (isDetails) {

            }
            else {
                setTimeout(() => {
                    navigate('/');
                }, 1100);
            }
        }, 1450);

        return () => {
            clearTimeout(timeout);
        };
    }, [navigate]);

    const styles = darkTheme ? darkstyles : lightstyles;

    return (
        <>
            {isVisible && (
                <div className={`${styles.preloader} ${isVisible ? styles.visible : styles.hidden}`}>
                    {isDetails ? (
                        <>
                            <div className={styles.textContainer}>
                                <span>Fetching projects...</span>
                            </div>
                            <div>
                                <h3>Opening {localStorage.getItem('lastClickedProject')}</h3>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.textContainer}>
                                <span>Focus,</span>
                                <span>Learn,</span>
                                <span>Adapt.</span>
                            </div>
                            <div>
                                <h1>Wilbert Coandadiputra</h1>
                            </div>
                        </>
                    )}
                </div >
            )}
        </>
    );
}

export default Preloader