import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Entypo';

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

export default function Torta({ valuePrice }) {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    const handleClickUp = () => {
        setCount(count + 1);

        if (price === 0) {
            setPrice(6);
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
                <Icon name="pie-chart" size={24} color="#f2f2f2" />
                <Title>Torta</Title>
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
