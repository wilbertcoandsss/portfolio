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

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 700 });
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

    const [mode, setMode] = useState("");

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', event => {
                const colorScheme = event.matches ? "dark" : "light";
                console.log(colorScheme); // "dark" or "light"
                setMode(colorScheme);
            });
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setMode("dark");
        }
        else {
            setMode("light");
        }

    }, []);

    console.log(mode);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/wilbertcoandsss')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserDataGithub(data);
    //         });

    //     fetch('https://api.github.com/users/wilbertcoandsss/repos')
    //         .then(res => res.json())
    //         .then(data => {
    //             setRepoData(data);
    //         });
    // }, []);

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

    const projects = [
        {
            genre: 'web-app',
            title: 'EbookZ',
            description: 'An electronic book web platform that built in Laravel Framework that have many features',
            genres: ['website', 'laravel', 'php'],
            link: "https://github.com/wilbertcoandsss/EbookZ    "
        },
        {
            genre: 'web-app',
            title: 'faREbook',
            description: 'An facebook clone app made with Typescript and GraphQLGen (Go + GraphQL API) with PostgreSQL',
            genres: ['website', 'go-lang', 'graphQL API', 'postgreSQL', 'typescript'],
            link: "https://github.com/wilbertcoandsss/faREbook"
        },
        {
            genre: 'game-prog',
            title: 'monster FunTer',
            description: 'An monster adventure game (monster hunter clone) made with Unity 3D game rendering and C# for logic programming',
            genres: ['game', 'unity', 'c#'],
            link: "https://github.com/wilbertcoandsss/monsterFunTer"
        },
        {
            genre: 'desktop-app',
            title: 'siLVoam hospital',
            description: 'An hospital management system made with Nextron (NextJS + Electron) and Firebase',
            genres: ['desktop', 'firebase', 'electron', 'nextJS', 'nextron'],
            link: "https://github.com/wilbertcoandsss/siLVoamhospital"
        },
        {
            genre: 'android-app',
            title: 'wilkea',
            description: 'An ikea clone mobile based android app that use LiteSQL for the database',
            genres: ['mobile', 'android', 'LiteSQL'],
            link: "https://github.com/wilbertcoandsss/wilkea"
        },
        {
            genre: 'computer-vision',
            title: 'ATLAS (Advanced Traffic Light Adaptable System)',
            description: 'An program to object detection using YOLO Algorithm, based on traffic light in everyday use that can have dynamically duration based on the people that want to cross the road.',
            genres: ['comp-vis', 'AI', 'YOLO', 'Object Detection', 'Darknet'],
            link: "https://github.com/wilbertcoandsss/ATLAS"
        },
        {
            genre: 'web-app',
            title: 'adex-legends',
            description: 'An apex legends clone web app that built by using simple HTML, CSS, and JS for my 2nd semester Human & Computer Interaction Project',
            genres: ['web', 'html', 'css', 'js'],
            link: "https://github.com/wilbertcoandsss/adex-legends"
        },
        {
            genre: 'desktop-app',
            title: 'purpleLaneBookstore',
            description: 'An dekstop app to library management systems that consists of admin and member that built using JavaFX and MySQL.',
            genres: ['desktop', 'JavaFX', 'mySQL'],
            link: "https://github.com/wilbertcoandsss/purpleLaneBookstore"
        },
    ];

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

    return (
        <>
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
            <div>
                <div className={styles.mainContainer}>
                    <div className={styles.main}>
                        <ParticleBackground darkTheme={darkTheme} />
                        {/* Intro Section */}
                        <section id='home'>
                            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                            <div className={styles.profileIntro}>
                                <div>
                                    <h1>Wilbert Coandadiputra</h1>
                                    <IntroText />
                                    {/* <h3>Full-Time Laboratory Assistant, Coder, And <br></br>
                                        Junior Computer Science Student</h3> */}
                                    <h4>Focus. Learn. Adapt.</h4>
                                </div>
                                <div>
                                    <img className={styles.profilePic} src="/pp.jpg"></img>
                                </div>
                            </div>
                        </section>

                        {/* Portfolio Coding Section */}
                        <section id='portfolio'>
                            <h1 style={{ fontSize: '40px' }}>Portfolio Project</h1>
                            <hr></hr>
                            <div className={styles.projectContainer}>
                                {projects.map((project, index) => (
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
        </>
    )
}

export default Home