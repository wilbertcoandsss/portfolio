import React, { useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { RiBillLine } from 'react-icons/ri';
import { GrGallery } from 'react-icons/gr';
import { BiSun, BiMoon } from 'react-icons/bi';
import lightstyles from "../styles/light.module.scss"
import darkstyles from "../styles/dark.module.scss"
import { TfiGallery } from "react-icons/tfi";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Navbar = ({ darkTheme, setDarkTheme, isDetails }) => {

    const handleThemeToggle = () => {
        setDarkTheme(!darkTheme);
    };

    const styles = darkTheme ? darkstyles : lightstyles;
    const [isRotated, setIsRotated] = useState(false);

    const handleLabelClick = () => {
        setIsRotated(prevState => !prevState);
        handleThemeToggle();
    };

    // const handleHomeClick = () => {
    //     setActiveSection('home');
    //     // Call scrollToSection with the appropriate ref if needed
    // };

    // const handlePortfolioClick = () => {
    //     setActiveSection('portfolio');
    //     scrollToSection(portfolioRef); // Call scrollToSection with the portfolio ref
    // };

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.iconNavbarContainer}>
                <div className={styles.iconNavbarList}>
                    {isDetails ? (<>
                        <IoIosArrowBack className={styles.iconNavbar} onClick={() => {
                            localStorage.setItem('isBack', 'true');
                            navigate('/');
                        }} />
                    </>) : (<>
                        <AiOutlineHome className={styles.iconNavbar} />
                        <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>
                            <BsCodeSlash className={styles.iconNavbar} />
                        </Link>
                        <Link to="resume" spy={true} smooth={true} offset={50} duration={500}>
                            <RiBillLine className={styles.iconNavbar} />
                        </Link>
                        {/* <TfiGallery className={styles.iconNavbar} onClick={() => navigate('/portfolio')}/> */}
                        <TfiGallery className={styles.iconNavbar} />
                    </>)}
                </div>
                <div >
                    <label className={styles.lblMode} onClick={handleLabelClick}>
                        <BiSun
                            className={`${styles.modeIcon} ${isRotated ? styles.rotate90 : ''}`}
                        />
                        <BiMoon
                            className={`${styles.modeIcon} ${isRotated ? '' : styles.rotate90}`}
                        />
                        <span className={styles.toggleMode}></span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default Navbar;