import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#fff' : '#fff')}; 
    height: 100px;
    margin-top: -100px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 991px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    height: 100px;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    width: 100%;
    z-index: 1;
    max-width: 1100px;
    display: flex;
`;

export const LeftWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const RightWrapper = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 60%;
`;

export const LogoWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const MenuWrapper = styled.div`
    width:70%;
    justify-content: space-between;
    align-items: center;
    display: flex;

    @media screen and (max-width: 991px){
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 991px){
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        transform: translate(-100%, 90%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #b6ccd6;
    }
`;

export const MenuItem = styled.h2`
    //padding: 0 20px;
    color: rgba(69,66,61,1);
    text-transform: uppercase;
    line-height: 1.7;
    letter-spacing: 0.2em;
    font-size: 12px;
    text-align: left;
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
    transition: all 0.2s ease-in-out;
    
    &:hover{
        color: #b6ccd6;
        -webkit-text-stroke: 0.4px ;
        //font-size:12.2px;
    }
`;

export const MenuLink = styled(Link)`
    text-decoration: none;
`;

export const SocialMediaWrapper = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 991px){
        display: none;
    }
`;

export const SocialMediaLink = styled.a`
    color: #b6ccd6; 
    font-size:24px;
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





