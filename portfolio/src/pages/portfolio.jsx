import React, { useEffect, useState } from "react";
import Transition from "../components/transition";
import AnimatedPage from "../components/transition";
import { db, auth } from "../firebase/clientApp";
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import Navbar from "../components/navbar";
import lightstyles from "../styles/light.module.scss";
import darkstyles from "../styles/dark.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import ParticleBackground from "../components/particles";
import Preloader from "../components/preloader";
import { FiGithub } from "react-icons/fi";

const Portfolio = () => {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, []);

    useEffect(() => {
        if (id) {
            fetchProjectDetails();
        }
    }, [id]); // Include id in the dependency array to re-fetch details when id changes

    const savedTheme = localStorage.getItem('darkTheme');
    const [darkTheme, setDarkTheme] = useState(savedTheme === 'dark');


    useEffect(() => {
        localStorage.setItem('darkTheme', darkTheme ? 'dark' : 'light');
    }, [darkTheme]);

    const styles = darkTheme ? darkstyles : lightstyles;

    useEffect(() => {
        localStorage.setItem('darkTheme', darkTheme ? 'dark' : 'light');
    }, [darkTheme]);

    if (darkTheme) {
        document.querySelector("body")?.setAttribute('data-theme', 'dark');
    }
    else {
        document.querySelector("body")?.setAttribute('data-theme', 'light');
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 1800);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const fetchProjectDetails = async () => {
        try {
            if (id) {
                const docRef = doc(db, 'project', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProject([docSnap.data()]);
                }
                // Continue with the rest of your code...
            } else {
                console.error('Project ID is undefined');
            }
        } catch (error) {
            console.error('Error fetching project details:', error);
        }
    };
    return (
        <>
            <Preloader darkTheme={darkTheme} isDetails={true} />
            <AnimatedPage>
                <ParticleBackground darkTheme={darkTheme} />
                <div data-aos="fade-up" data-aos-duration="2500">
                    <div className={styles.mainContainer}>
                        <div className={styles.main}>
                            {/* Intro Section */}
                            <section id='home'>
                                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} isDetails={true} />
                            </section>
                            <h3>{project.map((p, index) => (
                                <div key={index}>
                                    <h2 style={{ textAlign: 'center' }}>{p.title}</h2>
                                    <h3 className={styles.date}>{p.date?.toDate().toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}</h3>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        {p.title.includes('WT') ? <>
                                            <img src={p.cover} width={'540px'} height={'990px'} style={{ margin: '20px' }}></img>
                                        </> :
                                            <>
                                                <img src={p.cover} className={styles.coverProject}></img>
                                            </>}
                                    </div>
                                    <br></br>
                                    <div className={styles.githubLink} style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }} onClick={() => {
                                        window.open(p.link, '_blank');
                                    }}>
                                        <FiGithub className={styles.githubIcon} /> <h4>Open on Github!</h4>
                                    </div>
                                    <br></br>
                                    <div className={styles.rowContainerPorto}>
                                        {p.genres.map((genre, genreIndex) => (
                                            <div className={styles.genreBox2} key={genreIndex}>
                                                {genre}
                                            </div>
                                        ))}
                                    </div>

                                    <br></br>
                                    {p.longdesc.map((paragraph, index) => (
                                        <p key={index} style={{ textAlign: 'justify' }}>{paragraph}</p>
                                    ))}
                                    <br></br>
                                    <div className={styles.projectDocs}>
                                        {p.title.includes('ATLAS') &&
                                            <>
                                                <div style={{ textAlign: 'center' }}>
                                                    <h3>Preview Video Before Processed</h3>
                                                    <iframe className={styles.video} src={`/assets/Real Video BINUS.mp4`}></iframe>
                                                    <h3>Preview Video After Processed</h3>
                                                    <iframe src={`/assets/Video1_Results.mp4`} className={styles.video}></iframe>
                                                </div>
                                            </>
                                        }
                                        {p.title.includes('WT') ?
                                            <>
                                                <div style={{ textAlign: 'center' }}>
                                                    <h3>Preview App</h3>
                                                    {p.assets.map((index, assets) => (
                                                        <>
                                                            <img src={index} width={'540px'} height={'990px'} style={{ margin: '20px' }}></img>
                                                        </>
                                                    ))}
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div style={{ textAlign: 'center' }}>
                                                    <h3>Preview App</h3>
                                                    {p.assets.map((index, assets) => (
                                                        <>
                                                            <img src={index} className={styles.codePreview}></img>
                                                        </>
                                                    ))}
                                                </div>
                                            </>
                                        }
                                    </div>
                                    {/* Add other properties as needed */}
                                </div>
                            ))}</h3>
                        </div>
                    </div>
                </div>

            </AnimatedPage>
        </>
    )
}

export default Portfolio;