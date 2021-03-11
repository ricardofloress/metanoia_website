import React from 'react';
import Link from 'next/link';
import { ParallaxContainer, ParallaxWrapper, InfoWrapper, Infotext, Title, FirstText } from './ParallaxAboutElements';

const ParallaxAbout = ({ imgBg, link }) => {
    return (
        <>
            <ParallaxContainer>
                <ParallaxWrapper imgBg={imgBg}>
                    <InfoWrapper>
                        <Infotext>
                            <Title>
                                A STUDIO DEDICATED
                            </Title>
                            <FirstText>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius.
                            </FirstText>
                        </Infotext>
                    </InfoWrapper>
                </ParallaxWrapper>
            </ParallaxContainer>
        </>
    );
};

export default ParallaxAbout;
