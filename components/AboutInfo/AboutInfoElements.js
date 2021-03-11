import Link from "next/link";
import styled from "styled-components";





export const AboutContainer = styled.div`
    width: 100%;
`;

export const AboutWrapper = styled.div`
    height: 600px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: unset;

    }
`;

export const LeftDivWrapper = styled.div`
    width: 45%;
    height: 100%;
    background-color: rgb(234 227 217);

    @media screen and (max-width: 768px){
        height: 500px;
        width: 100%;
        background-size: cover;
        background-position:center left;
        background-repeat: no-repeat;
        order: 1;
        opacity: 0.3;
        background-image: url('/images/dry-flowers.jpg');
    }
`;

export const RightDivWrapper = styled.div`
    width: 55%;
    justify-content: center;
    align-items: center;
    display: flex;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 900px;
        order: 2;
    }
`;


export const FloatingDivWrapper = styled.div`
    width: 30%;
    height: 85%;
    position: absolute;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    left: 20%;
    top: 50%;
    transform: translateY(-50%);


    @media screen and (max-width: 768px){
        width: 80%;
        height: 30%;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        justify-content: center;
        background-color: #b6ccd6;
    }
`;



export const TextWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 768px){
        width: 80%;
    }
`;

export const ContentFloatWrapper = styled.div`
    width: 100%;
    margin: 0;
    height: 100%;
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
    }
`;


export const Title = styled.h3`
    color: #b6ccd6;
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: left;
    text-transform: uppercase;
    line-height: 1.9;
    letter-spacing: 0.2em;
    font-size: 24px;
    text-align: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    align-self: flex-start;

    @media screen and (max-width: 768px){
        text-align: center;
        align-self: center;
    }
`;

export const FirstText = styled.h1`
    color: rgba(69,66,61,1);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 12px;
    text-align: left;
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
    line-height: 2.4;
    text-align: left;

    @media screen and (max-width: 768px){
        text-align: center;

        &:after{
            margin: 15px auto;
        }
    }

    &:after{
        background-color: rgb(193 193 193);
        content: "";
        display: block;
        width: 85px;
        height: 1px;
        margin-top: 15px;
    }
`;


export const SecondText = styled.p`
    color: rgba(69,66,61,1);
    line-height: 2.4;
    letter-spacing: 0.02em;
    font-size: 14px;
    text-align: left;
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;

    
    @media screen and (max-width: 768px){
        text-align: center;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 47%;
    justify-content: center;
    align-items: center;
    display: flex;
    background-image: url(${({ imgBg }) => (imgBg ? imgBg : imgBg)});
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const LogoWrapper = styled.div`
    width: 100%;
    height: 47%;
    position: relative;
    padding:0 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    
    
    @media screen and (max-width: 768px){
        width: 100%;
        height: 100%;
    }
`;

