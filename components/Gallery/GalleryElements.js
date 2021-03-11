import styled from "styled-components";

export const GalleryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

export const GalleryTitle = styled.h1`
    color: rgba(178,147,131,1);
    line-height: 1.8;
    text-transform: uppercase;
    letter-spacing: 0.17em;
    font-size: 18px;
    text-align: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
`;

export const GalleryTitleContainer = styled.div`
    margin-top: 80px;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 40px;
`;


export const GalleryWrapper = styled.div`
    width: 100%;
    display: flex;    
    max-width: 1000px;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        width: 80%;
        padding: 0;
    }
`;

export const GalleryColumn = styled.div`
    width: calc(100%/3);
    display: flex;    
    max-width: 1114px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 5px;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const GallerySquare = styled.div`
    position: relative;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${({ imgBg }) => (imgBg ? imgBg : imgBg)});
    margin: 5px 0;

    &:hover {
        opacity: 0.6;
    }
    
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

`;