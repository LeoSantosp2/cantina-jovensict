import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Footer from '../../components/footer';
import { Context } from '../../context';

import {
    Container,
    Title,
    Button,
    ButtonText,
    ContainerCount,
    Count,
    Price,
    ContainerTitle,
    ButtonDelete,
    ButtonTextDelete,
    ContainerFoodOption,
} from './style';

interface PropsFoodOption {
    _foodId: number;
    _foodName: string;
    _foodOriginalPrice: number;
}

export default function FoodOption({ _foodId, _foodName, _foodOriginalPrice }: PropsFoodOption) {
    const [count, setCount] = useState(0);
    const [foodName, setFoodName] = useState('');
    const [foodPrice, setFoodPrice] = useState(0);

    const { calcTotalPrice, foodOptions, deleteFoodOptions } = useContext(Context);

    const handleClickUp = () => {
        setCount(count + 1);

        if (foodPrice === 0) {
            setFoodPrice(_foodOriginalPrice);
        } else {
            setFoodPrice(_foodOriginalPrice * (count + 1));
        }
    };

    const handleClickDown = () => {
        if (count === 0) return;

        setCount(count - 1);

        setFoodPrice(foodPrice / 2);

        if (count === 1) {
            setFoodPrice(foodPrice - foodPrice);
        }
    };

    const handleClickClear = () => {
        setCount(0);
        setFoodPrice(0);
    };

    const handleClickDelete = () => {
        deleteFoodOptions(_foodId);
    };

    useEffect(() => {
        setFoodName(_foodName);
    }, [foodName]);

    useEffect(() => {
        foodOptions[_foodId - 1].price = foodPrice;

        let soma = 0;

        for (let i = 0; i < foodOptions.length; i++) {
            soma += foodOptions[i].price;
        }

        calcTotalPrice(soma);
    }, [foodPrice]);

    return (
        <ContainerFoodOption>
            <ContainerTitle>
                <Title>{foodName}</Title>
                <Icon name="delete" size={24} color="#F2F2F2" onPress={() => handleClickDelete()} />
            </ContainerTitle>

            <ContainerCount>
                <Button onPress={() => handleClickUp()}>
                    <ButtonText>+</ButtonText>
                </Button>

                <Count>{count}</Count>

                <Button onPress={() => handleClickDown()}>
                    <ButtonText>-</ButtonText>
                </Button>

                <Price>R${foodPrice.toFixed(2).replace('.', ',')}</Price>

                <ButtonDelete onPress={() => handleClickClear()}>
                    <ButtonTextDelete>Apagar</ButtonTextDelete>
                </ButtonDelete>
            </ContainerCount>
        </ContainerFoodOption>
    );
}

export const ShowFoodOption = () => {
    const { foodOptions } = useContext(Context);

    return (
        <Container>
            <FlatList
                data={foodOptions}
                renderItem={({ item }) => (
                    <ScrollView>
                        <FoodOption _foodId={item.id} _foodName={item.name} _foodOriginalPrice={item.originalPrice} />
                    </ScrollView>
                )}
                keyExtractor={(item) => item.id}
                style={{
                    marginBottom: 126,
                    shadowColor: '#000000',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                    elevation: 20,
                }}
            ></FlatList>

            <Footer />
        </Container>
    );
};
