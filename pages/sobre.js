import React from 'react';
import AboutInfo from '../components/AboutInfo';
import ParallaxAbout from '../components/ParallaxAbout';


const Sobre = () => {
    return (
        <>
            <ParallaxAbout link="/" imgBg="/images/parallax-metanoia.jpg" />
            <AboutInfo />
        </>
    );
};

export default Sobre;
