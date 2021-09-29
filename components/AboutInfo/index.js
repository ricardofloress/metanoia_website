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
                                ANA
                            </Title>
                            <FirstText>

                            </FirstText>
                            <SecondText>
                                Estudante na área de turismo e profissionalmente experiente em decoração e flores, sou agora fundadora da marca Metanoia, convicta de que será um projeto que pode unir o melhor destes dois mundos.
                                <br />Apaixonada por turismo de natureza e por todos os seus pormenores, foi da vontade de trazer até casa um pouco dessa beleza que fez surgir o conceito da Metanoia, onde cada detalhe é repleto de amor.
                            </SecondText>
                        </TextWrapper>
                    </RightDivWrapper>
                    <FloatingDivWrapper>
                        <ContentFloatWrapper>
                            <ImageWrapper imgBg="/images/ana_2.png" />
                            {/*<LogoWrapper>
                                <Image
                                    src="/images/letterC.png" // Route of the image file
                                    layout={"fill"} // Desired size with correct aspect ratio
                                    alt="Metanoia"
                                    objectFit="cover"
                                />
                            </LogoWrapper>*/}
                        </ContentFloatWrapper>
                    </FloatingDivWrapper>
                </AboutWrapper>
            </AboutContainer>
        </>
    );
};

export default AboutInfo;
