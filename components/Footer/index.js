import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FooterContainer, FooterLink, LinksSeparator, FooterLinksWrapper, FooterWrap, WebsiteRights, FooterLinksContainer, FooterLinkItems, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
import Image from "next/image";
import Link from "next/link";


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLink>
                                <Link href="/">
                                    Home
                               </Link>
                            </FooterLink>
                            <FooterLink>
                                <Link href="/trabalhos">
                                    Trabalhos
                               </Link>
                            </FooterLink>
                            <FooterLink>
                                <Link href="/sobre">
                                    Sobre
                               </Link>
                            </FooterLink>
                            <FooterLink>
                                <Link href="/contactos">
                                    Contactos
                               </Link>
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <Image
                                src="/images/metanoia-logo-reverse.png" // Route of the image file
                                height={90} // Desired size with correct aspect ratio
                                width={90} // Desired size with correct aspect ratio
                                alt="Metanoia" />
                        </SocialLogo>
                        <WebsiteRights>
                            Metanoia © {new Date().getFullYear()} Todos os direitos reservados.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink>
                                <Link href='/' target='_blank' aria-label='Facebook'>
                                    <FaFacebook />
                                </Link>
                            </SocialIconLink>
                            <SocialIconLink>
                                <Link href='/' target='_blank' aria-label='Facebook'>
                                    <FaInstagram />
                                </Link>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
