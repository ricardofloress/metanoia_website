import styled from "styled-components";

export const ParallaxContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ParallaxWrapper = styled.div`
    width: 100%;
    display: flex;    
    height: 300px;
    justify-content: center;
    align-items: center;
    background-image: url(${({ imgBg }) => (imgBg ? imgBg : imgBg)});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BtnWrapper = styled.div`
    width: 25%;
    height: 30%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    
    @media screen and (max-width: 768px){
        width: 80%;
    }
`;

export const Btntext = styled.h3`
    color: rgba(69,66,61,1);
    letter-spacing: 0.3em;
    font-size: 15px;
    text-transform: uppercase;
    line-height: 1.7;
    text-align: left;
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
    transition: all 0.3s ease;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
        -webkit-text-stroke: 0.3px ;
        transform: translateY(-3px);
    }
`;

