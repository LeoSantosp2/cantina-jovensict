import React, { useState, useEffect } from 'react';

import { FoodOption, Title, Button, ButtonText, ContainerCount, Count, Price } from '../../styles/style';

export default function PaoDeQueijo({ valuePrice }) {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    const handleClickUp = () => {
        setCount(count + 1);

        if (price === 0) {
            setPrice(4.5);
        } else {
            setPrice(price * 2);
        }
    };

    const handleClickDown = () => {
        if (count === 0) return;

        setCount(count - 1);

        setPrice(price / 2);

        if (count === 1) {
            setPrice(price - price);
        }
    };

    useEffect(() => {
        valuePrice(price);
    }, [price]);

    return (
        <FoodOption>
            <Title>Pão de Queijo</Title>

            <ContainerCount>
                <Button onPress={() => handleClickUp()}>
                    <ButtonText>+</ButtonText>
                </Button>

                <Count>{count}</Count>

                <Button onPress={() => handleClickDown()}>
                    <ButtonText>-</ButtonText>
                </Button>

                <Price>R${price.toFixed(2).replace('.', ',')}</Price>
            </ContainerCount>
        </FoodOption>
    );
}
