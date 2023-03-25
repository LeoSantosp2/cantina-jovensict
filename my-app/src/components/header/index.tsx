import React from 'react';

import { Container, Img, Title } from './style';

import LogoJovensIct from '../../images/logo-jovensict.png';

export default function Header() {
    return (
        <Container
            style={{
                shadowColor: '#000000',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            }}
        >
            <Img source={LogoJovensIct} />
            <Title>Cantina JovensICT</Title>
        </Container>
    );
}
