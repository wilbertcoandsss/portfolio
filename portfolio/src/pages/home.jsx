import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import lightstyles from "../styles/light.module.scss";
import darkstyles from "../styles/dark.module.scss";
import ProjectCard from "../components/projectcard";
import Timeline from "../components/worktimeline";
import IntroText from "../components/introtext";
import Aos from "aos";
import "aos/dist/aos.css";
import EduTimeline from "../components/edutimeline";
import WorkTimeline from "../components/worktimeline";
import Certificates from "../components/certificate";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import ParticleBackground from "../components/particles";
import AnimatedPage from "../components/transition";
import Preloader from "../components/preloader";
import { collection, query, where, getDocs, doc, updateDoc, getDoc, serverTimestamp, DocumentReference, deleteDoc, setDoc, addDoc, Timestamp } from 'firebase/firestore';
import { db, auth } from "../firebase/clientApp";

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { Button } from "react-scroll";

// const firebaseConfig = {
//     apiKey: "AIzaSyD8k9cfjheGHktq7daxNAqEiq7mR1p4zns",
//     authDomain: "portfoliowb-3026c.firebaseapp.com",
//     projectId: "portfoliowb-3026c",
//     storageBucket: "portfoliowb-3026c.appspot.com",
//     messagingSenderId: "83762096133",
//     appId: "1:83762096133:web:e0ac8a97c6f3eeb782d46c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const db = getFirestore(app);

const Home = () => {

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const collectionRef = collection(db, 'project');
        const snapshot = await getDocs(collectionRef);
        const dataArray = [];
        snapshot.forEach(doc => {
            dataArray.push({ id: doc.id, ...doc.data() });
        });
        setData(dataArray);
    };

    useEffect(() => {
        Aos.init({ duration: 700 });
        fetchData();
    }, []);

    const [activeSection, setActiveSection] = useState('home');
    const portfolioRef = useRef(null); // Create a ref for the portfolio section
    // Add refs for other sections if needed

    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const savedTheme = localStorage.getItem('darkTheme');
    const [darkTheme, setDarkTheme] = useState(savedTheme === 'dark');

    const [userDataGithub, setUserDataGithub] = useState([]);
    const [repoData, setRepoData] = useState([]);


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

    const [isProjectHovered, setIsProjectHovered] = useState(false);
    const imageFilenames = [
        'aslab1.jpg',
        // 'aslab2.jpg',
        'BCLD.jpg',
        'dicoding.jpg',
        'Shopee.jpg'
    ];

    const [isFullScreen, setIsFullscreen] = useState(false);
    const [clickedFilename, setClickedFilename] = useState("");


    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        // fetchProjects();
    }, []);


    useEffect(() => {

        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 1800);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div>
            {localStorage.getItem('isBack') == 'true' ? (
                <>
                    {localStorage.setItem('isBack', 'false')}
                </>
            ) : (
                <>
                    <Preloader darkTheme={darkTheme} isDetails={false} />
                </>
            ) 
            }
            <AnimatedPage>
                <ParticleBackground darkTheme={darkTheme} />
                {/* <div style={{ background: mode === 'dark' ? '#444' : '#fff', height: '100vh' }}>
                        <div style={{ padding: 30 }}>
                            <h1 style={{ color: mode === 'dark' ? '#fff' : '#2979ff' }}>
                                {mode === "dark" ? "Dark Mode" : "Light Mode"}
                            </h1>
                        </div>
                    </div> */}
                {isFullScreen && (
                    <div className={styles.overlayFullscreen} data-aos="fade-up">
                        <div>
                            <AiOutlineCloseCircle className={styles.closeBtn} onClick={() => setIsFullscreen(!isFullScreen)} />
                        </div>
                        <img
                            src={`/certificate/${clickedFilename}`}
                            className={styles.certificateImageFull}
                        />
                    </div >
                )}
                <div data-aos="fade-up" data-aos-duration="2500">
                    <div className={styles.mainContainer}>
                        <div className={styles.main}>
                            {/* Intro Section */}
                            <section id='home'>
                                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} isDetails={false} />
                                <div className={styles.profileIntro}>
                                    <div>
                                        <h1>Wilbert Coandadiputra</h1>
                                        <IntroText />
                                        {/* <h3>Full-Time Laboratory Assistant, Coder, And <br></br>
                                        Junior Computer Science Student</h3> */}
                                        <h4>Focus. Learn. Adapt.</h4>
                                    </div>
                                    <div>
{/*                                         <img className={styles.profilePic} src="/pp4.png"></img> */}
                                    </div>
                                </div>
                            </section>

                            {/* Portfolio Coding Section */}
                            <section id='portfolio'>
                                <h1 style={{ fontSize: '40px' }}>Portfolio Project</h1>
                                {/* {project.map((project) => (
                                    <h1>{project.data.title}</h1>
                                ))} */}
                                <hr></hr>
                                <div className={styles.projectContainer}>
                                    {/* {projects.map((project, index) => (
                                        <ProjectCard project={project} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                                    ))} */}
                                    {data.map((project, index) => (
                                        <ProjectCard project={project} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                                    ))}
                                </div>
                            </section>

                            <br></br>
                            <br></br>

                            {/* Educiation Timeline */}
                            <section id='resume'>
                                <h1>Resume</h1>
                                <br></br>
                                <h1>Work & Organization Experience</h1>
                                <hr></hr>
                                <WorkTimeline darkTheme={darkTheme} />
                                <br></br>
                                <hr></hr>
                                <h1>Education</h1>
                                <EduTimeline darkTheme={darkTheme} />
                                <hr></hr>
                                <h1>Certificates</h1>
                                <br></br>
                                <div className={styles.certificateContainer} data-aos="fade-down">
                                    {imageFilenames.map((certif) => (
                                        <Certificates certif={certif} isFull={isFullScreen} setFull={setIsFullscreen} clickedFilename={clickedFilename}
                                            setClickedFilename={setClickedFilename} darkTheme={darkTheme} />
                                    ))}
                                </div>
                            </section>
                        </div >
                    </div >
                </div>
            </AnimatedPage>
        </div >
    )
}

export default Home
