
import styled from "styled-components";

export const ContactContainer = styled.div`
    height: 600px;
    margin-top: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const ContactWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const ContactFormWrapper = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const ContactInfo = styled.div`
    height: 100%;
    background-color: rgb(234 227 217);
    width: 40%;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const ContactForm = styled.form`
    width: 80%;
    padding: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledInput = styled.input`
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

