import React, { useState, useEffect, useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FoodOptionProps } from '../../interfaces/foodOptionProps';
import { getRealm } from '../../databases/realm';
import { Context } from '../../context';

import {
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

export default function FoodOption({
    _id,
    _name,
    originalPrice,
    onPress,
}: FoodOptionProps) {
    const [foodName, setFoodName] = useState('');
    const [foodPrice, setFoodPrice] = useState(0);
    const [count, setCount] = useState(0);

    const { calcTotalPrice } = useContext(Context);

    const handleClickUp = () => {
        setCount(count + 1);

        const numPrice = Number(originalPrice);

        if (foodPrice === 0) {
            setFoodPrice(numPrice);
        } else {
            setFoodPrice(numPrice * (count + 1));
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

    const modifyFoodPrice = async () => {
        const realm = await getRealm();

        const data = {
            _id: _id,
            _name: foodName,
            price: String(foodPrice),
            originalPrice: originalPrice,
        };

        try {
            realm.write(() => {
                realm.create('FoodOption', data, Realm.UpdateMode.Modified);
            });

            setTimeout(() => {
                totalPrice();
            }, 1);
        } catch (e) {
            console.log(e);
        } finally {
            realm.close();
        }
    };

    const totalPrice = async () => {
        const realm = await getRealm();

        try {
            const response = realm.objects<FoodOptionProps[]>('FoodOption');

            let soma = 0;

            for (let i = 0; i < response.length; i++) {
                soma += Number(response[i].price);
            }

            calcTotalPrice(soma);
        } catch (e) {
            console.log(e);
        } finally {
            realm.close();
        }
    };

    useEffect(() => {
        setFoodName(_name);
    }, [foodName]);

    useEffect(() => {
        modifyFoodPrice();
    }, [foodPrice]);

    return (
        <ContainerFoodOption>
            <ContainerTitle>
                <Title>{foodName}</Title>
                <Icon
                    name="delete"
                    size={24}
                    color="#F2F2F2"
                    onPress={!onPress ? () => {} : () => onPress()}
                />
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
