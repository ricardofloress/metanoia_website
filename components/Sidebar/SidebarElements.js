import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position:fixed;
    width: 100%;
    z-index: 999;
    height: 100%;
    background: #b6ccd6;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;


export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    padding: 0;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 70px);
    }
`;

export const SidebarLink = styled.h2`
    color: #ffffff;
    text-transform: uppercase;
    line-height: 40px;
    letter-spacing: 0.2em;
    font-size: 9px;
    text-align: center;
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
    font-size: 16px;

    &:hover{
        transition: 0.2s ease-in-out;
        color: #d74341;
    }

    @media screen and (max-width: 480px){
        line-height: 35px;
    }
`;


export const SidebarSeparator = styled.div`
    background-color: #ffffff;
    height: 90px;
    width: 1px;
    margin: 0 auto;
`;

export const SocialMediaWrapper = styled.div`
    margin: 40px 0;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const SocialMediaLink = styled.a`
    color: #fff;
    font-size: 30px;
    transition: 0.3s ease-out;

    &:hover{
        transform: translateY(-2px);
        transition: 0.3s ease-out;
        cursor: pointer;
    }
`;

export const SocialMediaIcon = styled.div`
    text-decoration: none;
`;


