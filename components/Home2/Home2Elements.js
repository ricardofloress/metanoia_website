import styled from "styled-components";

export const Home2Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
    position: relative;
`;

export const HomeBackgroundWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('/images/bgback.png');
    background-repeat: no-repeat;
    opacity: 0.4;
`;

export const Home2Wrapper = styled.div`
    width: 100%;
    max-width: 1114px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: unset;
    }
`;

export const TitleWrapper = styled.div`
    transform: rotate(-90deg);

    @media screen and (max-width: 768px){
        transform: rotate(0deg);
    }
`;

export const TextWrapper = styled.div`
    padding: 0 5%;
`;

export const Text = styled.p`
    color: rgba(69,66,61,1);
    line-height: 2.4;
    letter-spacing: 0.02em;
    font-size: 14px;
    text-align: left;
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;

    
    @media screen and (max-width: 768px){
        margin: 30px 0;
        text-align: center;
    }
`;

export const Title = styled.h1`
    white-space: nowrap;
    color: rgba(178,147,131,1);
    text-transform: uppercase;
    /*line-height: 1.9;*/
    letter-spacing: 0.2em;
    font-size: 24px;
    text-align: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    transform: translateY(50px);

    @media screen and (max-width: 768px){
        transform: translateY(0);
        margin: 30px 0;
    }
`;

export const Separator = styled.div`
    width: 1px;
    height: 70%;
    background-color: rgba(69,66,61,0.4);

    @media screen and (max-width: 768px){
        width: 40%;
        height: 1px;
    }
`;


