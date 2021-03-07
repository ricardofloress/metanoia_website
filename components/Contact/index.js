import React, { useState } from 'react';
import { ContactContainer, ContactFormWrapper, ContactForm, ContactInfo, ContactWrapper, StyledButton, FromTitle, StyledError, StyledInput, StyledTextArea } from "./ContactElements";
import emailjs from 'emailjs-com';

const initalFormState = {
    name: '',
    email: '',
    message: '',
};

const Contact = () => {
    const [state, setState] = useState(initalFormState);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target);
        console.log('submitted!');
        console.log(state);

        for (let key in state) {
            if (state[key] === '') {
                switch (key) {
                    case "name":
                        setError(`Campo do Nome Obrigatório!`);
                        break;
                    case "email":
                        setError(`Campo do Email Obrigatório!`);
                        break;
                    case "message":
                        setError(`Campo da Menssagem Obrigatório!`);
                        break;
                }
                return;
            }
        }
        setError('');

        // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        // const test = regex.test(state.email);
        // console.log(test);

        emailjs.sendForm('service_9ms61mb', 'template_w9b48zn', e.target, 'user_9HootldHEd7tz5q9WlLMS')
            .then((result) => {
                console.log(status);
                alert(result.text);
            }, (error) => {
                console.log(2);
                alert(error.text);
            });
    };

    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;
        setState(prev => ({ ...prev, [inputName]: value }));
    };


    return (
        <>
            <ContactContainer>
                <ContactWrapper>
                    <ContactFormWrapper>
                        <ContactForm onSubmit={handleSubmit}>
                            <FromTitle>Fale Connosco!</FromTitle>
                            <StyledInput
                                type="text"
                                name="name"
                                value={state.name}
                                onChange={handleInput}
                                placeholder="Primeiro e Ultimo Nome*"
                            />
                            <StyledInput
                                type="email"
                                name="email"
                                value={state.email}
                                onChange={handleInput}
                                placeholder="Email*"
                            />
                            <StyledTextArea
                                placeholder="Como Posso Ajudar?*"
                                name="message"
                                value={state.message}
                                onChange={handleInput}
                            />
                            {error && (
                                <StyledError>
                                    <p>{error}</p>
                                </StyledError>
                            )}
                            <StyledButton type="submit">Enviar</StyledButton>
                        </ContactForm>
                    </ContactFormWrapper>
                    <ContactInfo>

                    </ContactInfo>
                </ContactWrapper>
            </ContactContainer>
        </>
    );
};

export default Contact;
