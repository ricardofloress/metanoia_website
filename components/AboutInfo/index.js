import Image from "next/image";
import { FirstText, FloatingDivWrapper, AboutContainer, LeftDivWrapper, RightDivWrapper, SecondText, TextWrapper, Title, AboutWrapper, ImageWrapper, LogoWrapper, ContentFloatWrapper } from "./AboutInfoElements";
import React from 'react';



const AboutInfo = () => {



    return (
        <>
            <AboutContainer>
                <AboutWrapper>
                    <LeftDivWrapper />
                    <RightDivWrapper>
                        <TextWrapper>
                            <Title>
                                A STUDIO DEDICATED
                            </Title>
                            <FirstText>
                                TO CRAFTING THOUGHTFUL AND STRATEGIC DESIGN THAT BRINGS BUSINESSES TO THE NEXT LEVEL.
                            </FirstText>
                            <SecondText>
                                As an entrepreneur, you know how much effort and passion it takes everyday to push your business one step forward. It's the same for me and my business... And that's why I'm so passionate about what I do!  A business is so much more than just a logo and a website – it's a personality with a story, and I love discovering that story and telling it through design.
                            </SecondText>
                        </TextWrapper>
                    </RightDivWrapper>
                    <FloatingDivWrapper>
                        <ContentFloatWrapper>
                            <ImageWrapper imgBg="/images/letterR.png" />
                            <LogoWrapper>
                                <Image
                                    src="/images/letterC.png" // Route of the image file
                                    layout={"fill"} // Desired size with correct aspect ratio
                                    alt="Metanoia"
                                    objectFit="cover"
                                />
                            </LogoWrapper>
                        </ContentFloatWrapper>
                    </FloatingDivWrapper>
                </AboutWrapper>
            </AboutContainer>
        </>
    );
};

export default AboutInfo;
