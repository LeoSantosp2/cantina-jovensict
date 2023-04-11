import React, { useState, useContext } from 'react';

import { Context } from '../../context';

import { Container, Payment, Input, Button, Text, ButtonText } from './style';

export default function Footer() {
    const [payment, setPayment] = useState('');
    const [change, setChange] = useState(0);
    const [total, setTotal] = useState(0);

    const { totalPrice } = useContext(Context);

    const handleClickCalculate = async () => {
        setChange(Number(payment) - totalPrice);
        console.log(totalPrice);
    };

    const handleClickDelete = () => {
        setChange(0);
        setPayment('');
    };

    return (
        <Container
            style={{
                shadowColor: '#000000',
                shadowOffset: { width: 3, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
                elevation: 20,
            }}
        >
            <Payment>
                <Text>Pagamento:</Text>

                <Input
                    onChangeText={setPayment}
                    value={String(payment)}
                    keyboardType="numeric"
                    placeholder="Pagamento"
                    placeholderTextColor="#f2f2f2"
                />

                <Button onPress={() => handleClickCalculate()}>
                    <ButtonText>Calcular</ButtonText>
                </Button>

                <Button onPress={() => handleClickDelete()}>
                    <ButtonText>Apagar</ButtonText>
                </Button>
            </Payment>

            <Text>Total: R${totalPrice.toFixed(2).replace('.', ',')}</Text>
            <Text>Troco: R${change.toFixed(2).replace('.', ',')}</Text>
        </Container>
    );
}
