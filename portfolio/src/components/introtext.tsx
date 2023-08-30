import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function IntroText() {

    const [text] = useTypewriter({
        words: ['Developer', 'Student', 'Full-time assistant'],
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 70,
    });

    return (<>
        <h2 style={{ fontSize: '40px' }}>
            I'm a {' '}
            <span>
                {text}
            </span>
            <span>
                <Cursor />
            </span>
        </h2>
    </>)
}

export default IntroText;