import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: #b6ccd6;
    font-family: 'Roboto';

`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1114px;
    margin: 0 auto;

    @media screen and (max-width: 768px){
        padding: 0px 25px 40px 25px;
    }
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;

    @media screen and (max-width: 768px){
        padding-top: 32px; 
        width: 100%;  
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    width: 100%;
    
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    color: #ffffff; 
    justify-content: space-between;
    

    @media screen and (max-width: 768px){
        margin: 0px;
        width: 100%;
        padding: 10px;
        align-items: center;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;
`;

export const FooterLink = styled.h3`
    font-size: 12px;
    text-align: left;
    color: #ffffff;
    text-transform: uppercase;
    line-height: 1.7;
    letter-spacing: 0.2em;
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
    transition: all 0.3s ease-in;

    @media screen and (max-width: 768px){
        font-size: 11px;
    }

    &:hover{
        transform: translateY(-3px);
        -webkit-text-stroke: 0.2px ;  
        transition: all 0.3s ease-out;      
    }
`;

export const SocialMedia = styled.section`
    max-width: 1114px;
    width: 100%;
    position: relative;

    &:before{
        content: "";
        width: 100%;
        height: 1px;
        background-color: #ffffff;
        opacity: 0.5;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 10px auto 0 auto;
    padding: 0 50px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        margin: 0 auto;
    }
`;

export const SocialLogo = styled.div`
    color: #ffffff; 
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    @media screen and (max-width: 768px){
        margin-top: 15px;
    }
`;

export const WebsiteRights = styled.small`
    font-size: 12px;
    text-align: center;
    color: #ffffff;
    line-height: 2.4;
    letter-spacing: 0.02em;
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
`;

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70px;

    @media screen and (max-width: 768px){
        margin-top: 20px;
    }
`;

export const LinksSeparator = styled.div`
    height: 100%;
    width: 1px;
    background-color: #ffffff;
    opacity: 0.5;

    @media screen and (max-width: 768px){
        height: 50%;
    }
`;


export const SocialIconLink = styled.a`
    color: #ffffff; 
    font-size:24px;
    transition: all 0.3s ease;

    &:hover{
        cursor: pointer;
        transform: translateY(-2px);
    }
`;
