import React, { useState, useEffect, useContext } from 'react';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { getRealm } from '../../databases/realm';
import { Context } from '../../context';

import {
    Container,
    InsertFood,
    Input,
    LabelInput,
    ContainerInput,
    Button,
    ButtonText,
} from './style';

export default function CreateFoodOption() {
    const [foodName, setFoodName] = useState('');
    const [foodPrice, setFoodPrice] = useState('');

    const { showToast } = useContext(Context);

    useEffect(() => {
        let newFoodPrice = foodPrice;
        newFoodPrice = newFoodPrice.replace(',', '.');

        setFoodPrice(newFoodPrice);
    }, [foodPrice]);

    const handleClickAdd = async () => {
        const realm = await getRealm();

        try {
            realm.write(() => {
                realm.create('FoodOption', {
                    _id: uuid.v4(),
                    _name: foodName,
                    price: '0',
                    originalPrice: foodPrice,
                });
            });

            setFoodName('');
            setFoodPrice('');
            Keyboard.dismiss();
            showToast('Refeição cadastrada com sucesso!');
        } catch (e) {
            //console.log(e);
            showToast('Refeição não cadastrada!');
        } finally {
            realm.close();
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <Toast />
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
                        <LabelInput>Refeição:</LabelInput>
                        <Input
                            value={foodName}
                            onChangeText={setFoodName}
                            placeholder="Nome da Refeição"
                        />
                    </ContainerInput>

                    <ContainerInput>
                        <LabelInput>Preço:</LabelInput>
                        <Input
                            value={foodPrice}
                            onChangeText={setFoodPrice}
                            keyboardType="numeric"
                            placeholder="Preço da Refeição"
                        />
                    </ContainerInput>

                    <Button onPress={() => handleClickAdd()}>
                        <ButtonText>Adicionar</ButtonText>
                    </Button>
                </InsertFood>
            </Container>
        </TouchableWithoutFeedback>
    );
}
