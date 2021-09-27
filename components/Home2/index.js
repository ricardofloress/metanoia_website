import React from 'react';
import { Home2Container, HomeBackgroundWrapper, Home2Wrapper, Separator, Title, Text, TextWrapper, TitleWrapper } from '../Home2/Home2Elements';

const Home2 = () => {
    return (
        <>
            <Home2Container>
                <HomeBackgroundWrapper />
                <Home2Wrapper>
                    {/*<TitleWrapper>
                        <Title>
                            KIND WORDS
                        </Title>
                    </TitleWrapper>
                    <Separator />*/}
                    <TextWrapper>
                        <Text>
                            Cada produto, é para mim, um desafio, desenhado e elaborado à medida do cliente, carregando um pouco do meu olhar, sensibilidade e inspiração.<br />
                            <p style={{ fontSize: '17px', textTransform: 'uppercase' }}>Sejam bem-vindos a esta nova marca, portuguesa, que agora também é vossa.</p>
                        </Text>
                    </TextWrapper>
                </Home2Wrapper>
            </Home2Container>
        </>
    );
};

export default Home2;
