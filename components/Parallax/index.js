import React from 'react';
import Link from 'next/link';
import { ParallaxContainer, ParallaxWrapper, BtnWrapper, Btntext } from './ParallaxElements';

const Parallax = ({ imgBg, link }) => {
    return (
        <>
            <ParallaxContainer>
                <ParallaxWrapper imgBg={imgBg}>
                    <BtnWrapper>
                        <Btntext>
                            <Link href={link}>
                            PORTEFÓLIO  &#8594;
                            </Link>
                        </Btntext>
                    </BtnWrapper>
                </ParallaxWrapper>
            </ParallaxContainer>

        </>
    );
};

export default Parallax;
