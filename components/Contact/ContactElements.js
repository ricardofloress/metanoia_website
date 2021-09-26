
import styled from "styled-components";

export const ContactContainer = styled.div`
    height: 80vh;
    margin-top: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;

    @media screen and (max-width: 768px){
        height: unset;
    }
`;

export const ContactWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const ContactFormWrapper = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content:center;

    @media screen and (max-width: 768px){
         width: 100%;
    }
`;

export const ContactInfo = styled.div`
    height: 100%;
    background-color: rgb(234 227 217);
    width: 40%;
    display: flex;
    align-items: center;
    justify-content:center;
    position: relative;

    @media screen and (max-width: 768px){
         width: 100%;
    }
`;

export const ContactInfoBg = styled.div`
    position: absolute;
    left: 0; 
    top: 0;
    height: 100%;
    background-image: url('/images/contact-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    opacity: 0.2;
`;


export const ContactForm = styled.form`
    width: 80%;
    padding: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        padding: 40px 0;
    }
`;

export const StyledInput = styled.input`
    box-sizing: border-box;
    padding: 10px;
    color: rgba(69,66,61,1);
    font-family: 'Roboto';
    line-height: 2.4;
    letter-spacing: 0.02em;
    font-size: 14px;
    text-align: left;
    font-weight: 400;
    font-style: normal;
    margin: 12.5px 0;
    display: block;
    width: 100%;
    height: 43px;
    background-color: rgb(225 232 235);
    border: none;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        box-shadow: 0px 4px 2px rgb(234 227 217);
    }

    ::placeholder{
        padding-left: 10px;
        color: #b7b7b7;
        line-height: 2.4;
        letter-spacing: 0.02em;
        font-size: 14px;
        text-align: left;
        font-family: 'Roboto';
        font-weight: 400;
        font-style: normal;
    }

`;


export const StyledTextArea = styled.textarea`
    box-sizing: border-box;
    padding: 10px;
    font-family: 'Roboto';
    color: rgba(69,66,61,1);
    line-height: 2.4;
    letter-spacing: 0.02em;
    font-size: 14px;
    text-align: left;
    font-weight: 400;
    font-style: normal;
    margin: 12.5px 0 25px 0;
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    background-color: rgb(225 232 235);
    border: none;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        box-shadow: 0px 4px 2px rgb(234 227 217);
    }

    ::placeholder {
        padding-left: 10px;
        color: #b7b7b7;
        line-height: 2.4;
        letter-spacing: 0.02em;
        font-size: 14px;
        text-align: left;
        font-family: 'Roboto';
        font-weight: 400;
        font-style: normal;
    }
`;

export const StyledButton = styled.button`
    align-self: flex-start;
    cursor: pointer;
    width: 130px;
    height: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #b6ccd6;
    color: #ffffff;
    text-transform: uppercase;
    line-height: 1.7;
    letter-spacing: 0.2em;
    font-size: 12px;
    text-align: center;
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
    border: none;

    &:hover{
        opacity: 0.7;
    }
`;



export const ContactInfoTextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;

    @media screen and (max-width: 768px){
         width: 80%;
         min-height: 500px;
    }
`;


export const ConatctInfoTextTitle = styled.h2`
    text-transform: uppercase;
    color: rgba(255,255,255,1);
    text-align: center;
    line-height: 2;
    letter-spacing: 0.05em;
    font-size: 20px;
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    margin: 25px;
`;

export const ConatctInfoTextText = styled.a`
    margin: 25px;
    color: rgba(255,255,255,1);
    text-align: center;
    line-height: 2.4;
    letter-spacing: 0.02em;
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: 300;
    font-style: normal;
    transition: all 0.2s ease;


    &:hover{
        transition: all 0.2s ease-in-out;
        -webkit-text-stroke: 0.2px ;
        transform: translateY(-2px);
    }

`;


export const ContactMailIcon = styled.div`
    font-size: 40px;

`;

export const StyledError = styled.div`
    color: red;
    line-height: 2.4;
    letter-spacing: 0.02em;
    font-size: 14px;
    text-align: left;
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    margin: 0 0 40px 0;
    text-transform: uppercase;
    align-self: flex-start;
`;

export const FromTitle = styled.h1`
    align-self: flex-start;
    color: #b6ccd6;
    text-transform: uppercase;
    line-height: 2;
    letter-spacing: 0.17em;
    font-size: 18px;
    text-align: left;
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
`;

export const Separator = styled.div`
    background-color: #ffffff;
    width: 90px;
    height: 1px;
    margin: 0 auto;
`;

export const SocialMediaWrapper = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;

    @media screen and (max-width: 991px){
    }
`;

export const SocialMediaLink = styled.a`
    color: #fff; 
    font-size:40px;
    transition: 0.3s ease-out;

    &:hover{
        transform: translateY(-5px);
        transition: 0.3s ease-out;
        cursor: pointer;
    }
`;

export const SocialMediaIcon = styled.div`
    text-decoration: none;
`;