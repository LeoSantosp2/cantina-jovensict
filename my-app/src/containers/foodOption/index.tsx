import React, { useState, useEffect } from 'react';

import {
    ContainerFoodOption,
    Title,
    Button,
    ButtonText,
    ContainerCount,
    Count,
    Price,
    ContainerTitle,
    ButtonDelete,
    ButtonTextDelete,
} from './style';

interface Props {
    title: string;
    valuePrice: CallableFunction;
    icon: any;
    _price: number;
}

const FoodOption: React.FC<Props> = ({ title, valuePrice, icon, _price }) => {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    const handleClickUp = () => {
        setCount(count + 1);

        if (price === 0) {
            setPrice(_price);
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

    const handleDelete = () => {
        setCount(0);
        setPrice(0);
    };

    useEffect(() => {
        valuePrice(price);
    }, [price]);

    return (
        <ContainerFoodOption
            style={{
                shadowColor: '#000000',
                shadowOffset: { width: 3, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
            }}
        >
            <ContainerTitle>
                {icon}
                <Title>{title}</Title>
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

                <ButtonDelete onPress={() => handleDelete()}>
                    <ButtonTextDelete>Apagar</ButtonTextDelete>
                </ButtonDelete>
            </ContainerCount>
        </ContainerFoodOption>
    );
};

export default FoodOption;
