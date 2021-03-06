import React from 'react';
import Link from 'next/link';
import { CloseIcon, SidebarContainer, Icon, SidebarLink, SidebarWrapper, SidebarMenu, SidebarSeparator, SocialMediaWrapper, SocialMediaLink, SocialMediaIcon } from './SidebarElements';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle}><Link href='/'>Inicio</Link></SidebarLink>
                    <SidebarLink onClick={toggle}><Link href='/trabalhos'>Trabalhos</Link></SidebarLink>
                    <SidebarLink onClick={toggle}><Link href='/sobre'>Sobre</Link></SidebarLink>
                    <SidebarLink onClick={toggle}><Link href='/contactos'>Contactos</Link></SidebarLink>
                </SidebarMenu>
                <SidebarSeparator />
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
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;

