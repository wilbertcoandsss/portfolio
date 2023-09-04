import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import darkParticlesConfig from "./config/particlesConfigDark";
import lightParticlesConfig from "./config/particlesConfig";
import Home from "../pages/home";

export default function ParticleBackground({darkTheme}) {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };
    
    const particlesConfig = darkTheme ? darkParticlesConfig : lightParticlesConfig

    return (
        <>
            <Particles
                params={particlesConfig}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                width="0"
                height="0"
            >
            </Particles>
        </>
    );
}