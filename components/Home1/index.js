import Image from "next/image";
import Link from "next/link";
import { BtnWrapper, FirstText, FloatingDivWrapper, Home1Container, LeftDivWrapper, RightDivWrapper, SecondText, TextWrapper, Title, Home1Wrapper, ImageWrapper, LogoWrapper, ContentFloatWrapper } from "./Home1Elements";
import React, { useState, useEffect } from 'react';
import { AnimatePresence, useViewportScroll } from "framer-motion";



const Home1 = () => {
    const [imagesOption, setImagesOption] = useState(["/images/letter.png", "/images/letter2.png", "/images/letter3.png"]);
    const [imgCounter, setImgCounter] = useState(0);
    const [fadeLeft, setFadeLeft] = useState({});
    const { scrollYProgress } = useViewportScroll();


    if (imgCounter == imagesOption.length) {
        setImgCounter(0);
    }

    useEffect(() => {
        if (window.innerWidth >= 768) {
            console.log(1);
            setFadeLeft({
                hidden: { opacity: 0, left: -100, y: '-100%' },
                visible: { opacity: 1, left: 0, y: '-50%' }
            });
        } else {
            console.log(2);
            setFadeLeft({
                hidden: { opacity: 0, x: -100, y: 0 },
                visible: { opacity: 1, x: '-50%', y: 0 }
            });
        }

        const interval = setInterval(() => {
            setImgCounter(imgCounter => imgCounter + 1);

        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };






    return (
        <>
            <Home1Container>
                <Home1Wrapper>
                    <LeftDivWrapper imgBg={imagesOption[imgCounter]} />
                    <RightDivWrapper>
                        <TextWrapper variants={fadeRight}
                            initial='hidden'
                            animate='visible'
                            transition={{ duration: 1 }}>
                            <Title>
                                METANOIA
                            </Title>
                            <FirstText>
                                UM TOQUE DE DELICADEZA
                            </FirstText>
                            <SecondText>
                                Esta marca nasceu do gosto pela decoração, pelas flores, mas sobretudo pelos detalhes.
                                Acredito na importância que a beleza da natureza traduz no nosso bem-estar e, por isso, exploro todas as suas cores e texturas para que sinta, no seu espaço, uma maior harmonia e tranquilidade.
                            </SecondText>
                        </TextWrapper>
                    </RightDivWrapper>
                    <FloatingDivWrapper variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }} >
                        <ContentFloatWrapper>
                            <ImageWrapper imgBg={imagesOption[imgCounter]} />
                            <LogoWrapper>
                                <Image
                                    src="/images/metanoia_logo_square.png" // Route of the image file
                                    layout={"fill"} // Desired size with correct aspect ratio
                                    alt="Metanoia"
                                    objectFit="contain"
                                />
                            </LogoWrapper>
                        </ContentFloatWrapper>
                    </FloatingDivWrapper>
                    {/* <BtnWrapper>
                  <Link href="/">Learn More</Link>
              </BtnWrapper>*/}

                </Home1Wrapper>
            </Home1Container>
        </>
    );
};

export default Home1;
