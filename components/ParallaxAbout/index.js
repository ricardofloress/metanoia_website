import React from 'react';
import Link from 'next/link';
import { ParralaxOverlay, ParallaxContainer, ParallaxWrapper, InfoWrapper, Infotext, Title, FirstText } from './ParallaxAboutElements';

const ParallaxAbout = ({ imgBg, link, imgOverlay }) => {
    return (
        <>
            <ParallaxContainer>
                {/*<ParralaxOverlay imgOverlay={imgOverlay}/>*/}
                <ParallaxWrapper imgBg={imgBg}>
                    <InfoWrapper>
                        <Infotext>
                            <Title>
                                METANOIA
                            </Title>
                            <FirstText>
                                Este sonho foi plantado no meu coração por uma razão
                                <br />E, por onde eu for, vou florescer.
                            </FirstText>
                        </Infotext>
                    </InfoWrapper>
                </ParallaxWrapper>
            </ParallaxContainer>
        </>
    );
};

export default ParallaxAbout;
