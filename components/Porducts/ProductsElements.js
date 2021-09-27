import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100%;
    padding: 100px 50px 70px 50px;
`;


export const ProductsWrapper = styled.div`
    max-width: 1114px;
    width: 100%;
    height: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;   

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;


export const ProductSingleWrapper = styled.div`
    width: 20%;
    height: 100%;

    @media screen and (max-width: 768px){
        width: 100%;
        margin: 30px 0;
    }
`;

export const Square = styled.div`
    position: relative;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${({ imgBg }) => (imgBg ? imgBg : imgBg)});

    &:hover {
        opacity: 0.6;
        transform: scale(1.01);
    }
    
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    &:before {
        content: "";
        display: block;
        position: absolute;
        bottom: -25px;
        left: 50%;
        height: 50px;
        background-color: rgb(193 193 193);
        width: 1px;
        }
`;

export const Text = styled.h3`
    margin-bottom: 0;
    margin-top: 40px;
    line-height: 2.4;
    text-align: center;
    color: rgba(69,66,61,1);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 12px;
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
`;

/*
.square {
  position: relative;
  width: 50%;
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

*/