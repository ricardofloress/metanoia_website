import Image from "next/image";
import Link from "next/link";
import { BtnWrapper, FirstText, FloatingDivWrapper, Home1Container, LeftDivWrapper, RightDivWrapper, SecondText, TextWrapper, Title, Home1Wrapper, ImageWrapper, LogoWrapper, ContentFloatWrapper } from "./Home1Elements";
import React, { useState, useEffect } from 'react';



const Home1 = () => {
    const [imagesOption, setImagesOption] = useState(["/images/letter.png", "/images/letter2.png", "/images/letter3.png"]);
    const [imgCounter, setImgCounter] = useState(0);

    if (imgCounter == imagesOption.length) {
        setImgCounter(0);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setImgCounter(imgCounter => imgCounter + 1);

        }, 4000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <Home1Container>
                <Home1Wrapper>
                    <LeftDivWrapper imgBg={imagesOption[imgCounter]} />
                    <RightDivWrapper>
                        <TextWrapper>
                            <Title>
                                A STUDIO DEDICATED
                            </Title>
                            <FirstText>
                                TO CRAFTING THOUGHTFUL AND STRATEGIC DESIGN THAT BRINGS BUSINESSES TO THE NEXT LEVEL.
                            </FirstText>
                            <SecondText>
                                I believe that intentional, beautiful design makes a huge difference.  A cohesive, thought-out brand is what will elevate you above your competition, drawing customers into the story of your business with a single glance.
                            </SecondText>
                        </TextWrapper>
                    </RightDivWrapper>
                    <FloatingDivWrapper>
                        <ContentFloatWrapper>
                            <ImageWrapper imgBg={imagesOption[imgCounter]} />
                            <LogoWrapper>
                                <Image
                                    src="/images/metanoia-logo-reverse.png" // Route of the image file
                                    layout={"fill"} // Desired size with correct aspect ratio
                                    alt="Metanoia"
                                    objectFit="contain"
                                />
                            </LogoWrapper>
                        </ContentFloatWrapper>
                    </FloatingDivWrapper>
                    <BtnWrapper>
                        <Link href="/">Learn More</Link>
                    </BtnWrapper>
                </Home1Wrapper>
            </Home1Container>
        </>
    );
};

export default Home1;
