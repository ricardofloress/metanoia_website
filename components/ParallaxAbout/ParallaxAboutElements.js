import styled from "styled-components";

export const ParallaxContainer = styled.div`
    margin-top: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ParallaxWrapper = styled.div`
    width: 100%;
    display: flex;    
    height: 400px;
    justify-content: center;
    align-items: center;
    background-image: url(${({ imgBg }) => (imgBg ? imgBg : imgBg)});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const InfoWrapper = styled.div`
    padding: 25px;
    width: 45%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    
    @media screen and (max-width: 768px){
        width: 80%;
    }
`;

export const Infotext = styled.h3`

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
    position: relative;
    margin-top: 0;

    &:after{
        background-color: rgb(193 193 193);
        content: "";
        display: block;
        width: 85px;
        height: 1px;
        margin-top: 25px;
        position: absolute;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
    }

    @media screen and (max-width: 768px){
        text-align: center;
        align-self: center;
    }
`;

export const FirstText = styled.h1`
    color: rgba(69,66,61,1);
    letter-spacing: 0.2em;
    font-size: 12px;
    text-align: center;
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
    line-height: 2.4;

    @media screen and (max-width: 768px){
        text-align: center;

        &:after{
            margin: 15px auto;
        }
    }


`;
