import React from 'react';
import AboutInfo from '../components/AboutInfo';
import ParallaxAbout from '../components/ParallaxAbout';


const Sobre = () => {
    return (
        <>
            <ParallaxAbout link="/" imgBg="/images/parallax-metanoia.jpg" imgOverlay="/images/plant_no_bg_horizontal_grey.png" />
            <AboutInfo />
        </>
    );
};

export default Sobre;
