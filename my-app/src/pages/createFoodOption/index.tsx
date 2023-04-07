import React, { useState, useContext, useEffect } from 'react';

import { Context } from '../../context';

import { Container, InsertFood, Input, LabelInput, ContainerInput, Button, ButtonText } from './style';

export default function CreateFoodOption() {
    const [foodName, setFoodName] = useState('');
    const [foodPrice, setFoodPrice] = useState('');

    const { settingFoodOptions } = useContext(Context);

    useEffect(() => {
        let newFoodPrice = foodPrice;
        newFoodPrice = newFoodPrice.replace(',', '.');

        setFoodPrice(newFoodPrice);
    }, [foodPrice]);

    const handleClickAdd = () => {
        settingFoodOptions(foodName, Number(foodPrice));
        setFoodName('');
        setFoodPrice('');
    };

    return (
        <Container>
            <InsertFood
                style={{
                    shadowColor: '#000000',
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 20,
                }}
            >
                <ContainerInput>
                    <LabelInput>Comida:</LabelInput>
                    <Input value={foodName} onChangeText={setFoodName} placeholder="Insira a Comida" />
                </ContainerInput>

                <ContainerInput>
                    <LabelInput>Preço:</LabelInput>
                    <Input
                        value={foodPrice}
                        onChangeText={setFoodPrice}
                        keyboardType="numeric"
                        placeholder="Insira o Preço"
                    />
                </ContainerInput>

                <Button onPress={() => handleClickAdd()}>
                    <ButtonText>Adicionar</ButtonText>
                </Button>
            </InsertFood>
        </Container>
    );
}
