import React, { useEffect, useState } from "react";
import styles from "../styles/light.module.scss"
import Aos from "aos";
import "aos/dist/aos.css";
import { AiOutlineFullscreen } from "react-icons/ai";

const imageFilenames = [
    'aslab1.jpg',
    // 'aslab2.jpg',
    'BCLD.jpg',
    'dicoding.jpg',
    'Shopee.jpg'
];

const Certificates = ({ certif, isFull, setFull, clickedFilename, setClickedFilename }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className={styles.certificateBox} key={certif}>
                <div>
                    <img
                        src={`public/certificate/${certif}`}
                        className={styles.certificateImage}
                    />
                </div>
                <div className={styles.overlayCertificate} onClick={() => {
                    setFull(!isFull);
                    setClickedFilename(certif)
                }
                }>
                    <AiOutlineFullscreen style={{ color: 'white', height: '50px', width: '40px', marginTop: '20px' }} />
                    <h4 className={styles.text}>Click for View</h4>
                </div>
            </div>
        </>
    )
}

export default Certificates;