import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    FoodOption,
    Title,
    Button,
    ButtonText,
    ContainerCount,
    Count,
    Price,
    ContainerTitle,
} from '../../styles/style';

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
            <ContainerTitle>
                <Icon name="tennis-ball" size={24} color="#f2f2f2" />
                <Title>Pão de Queijo</Title>
            </ContainerTitle>

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
