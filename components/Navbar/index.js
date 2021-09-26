import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, LeftWrapper, LogoWrapper, MenuItem, MenuLink, MenuWrapper, RightWrapper, SocialMediaIcon, SocialMediaLink, SocialMediaWrapper, MobileIcon } from "./NavbarElements";
import { FaBars, FaFacebook, FaInstagram } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import Link from 'next/link';



const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <LeftWrapper>
                        <LogoWrapper>
                            <Link href="/">
                                <Image
                                    src="/images/metanoia_logo.png" // Route of the image file
                                    height={60} // Desired size with correct aspect ratio
                                    width={100} // Desired size with correct aspect ratio
                                    alt="Metanoia"
                                />
                            </Link>
                        </LogoWrapper>
                    </LeftWrapper>
                    <RightWrapper>
                        <MenuWrapper>
                            <MenuItem>
                                <MenuLink href="/">
                                    Inicio
                                </MenuLink >
                            </MenuItem>
                            <MenuItem>

                                <MenuLink href="/trabalhos">
                                    Portefólio
                                </MenuLink>
                            </MenuItem>
                            <MenuItem>

                                <MenuLink href="/sobre">
                                    Sobre
                                </MenuLink>
                            </MenuItem>
                            <MenuItem>

                                <MenuLink href="/contactos">
                                    Contactos
                                </MenuLink>
                            </MenuItem>
                        </MenuWrapper>
                        <SocialMediaWrapper>
                            <SocialMediaLink href="https://www.facebook.com/metanoiacreating/" target='_blank' aria-label='Facebook'>
                                <SocialMediaIcon>
                                    <FaFacebook />
                                </SocialMediaIcon>
                            </SocialMediaLink>
                            <SocialMediaLink href="https://www.instagram.com/metanoiacreating/" target='_blank' aria-label='Instagram'>
                                <SocialMediaIcon>
                                    <FaInstagram />
                                </SocialMediaIcon>
                            </SocialMediaLink>
                        </SocialMediaWrapper>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                    </RightWrapper>


                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
