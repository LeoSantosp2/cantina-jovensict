import React from 'react';

import { Container, Img, Title } from './style';

import logoJovensIct from '../../images/logo-jovensict.jpg';

export default function Header() {
    return (
        <Container>
            <Img source={logoJovensIct} />
            <Title>Cantina JovensICT</Title>
        </Container>
    );
}
