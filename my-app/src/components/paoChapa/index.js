import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    LastFoodOption,
    Title,
    Button,
    ButtonText,
    ContainerCount,
    Count,
    Price,
    ContainerTitle,
} from '../../styles/style';

export default function PaoChapa({ valuePrice }) {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    const handleClickUp = () => {
        setCount(count + 1);

        if (price === 0) {
            setPrice(3);
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
        <LastFoodOption>
            <ContainerTitle>
                <Icon name="bread-slice" size={24} color="#f2f2f2" />
                <Title>Pão na Chapa</Title>
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
        </LastFoodOption>
    );
}
