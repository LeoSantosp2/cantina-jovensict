import React, { useState, useContext } from 'react';
import { Text } from 'react-native';

import { Context } from '../../context';

import { Container, Paymente, Input, Button, MoneyChange } from './style';

export default function Footer() {
    const [payment, setPayment] = useState('');
    const [change, setChange] = useState(0);

    const { totalPrice } = useContext(Context);

    const handleClickCalculate = () => {
        setChange(Number(payment) - totalPrice);
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
            <Paymente>
                <Text style={{ fontSize: 22 }}>Pagamento:</Text>

                <Input
                    onChangeText={setPayment}
                    value={String(payment)}
                    keyboardType="numeric"
                    placeholder="Pagamento"
                    placeholderTextColor="#f2f2f2"
                />

                <Button onPress={() => handleClickCalculate()}>
                    <Text style={{ color: '#f2f2f2' }}>Calcular</Text>
                </Button>

                <Button onPress={() => handleClickDelete()}>
                    <Text style={{ color: '#f2f2f2' }}>Apagar</Text>
                </Button>
            </Paymente>

            <Text style={{ fontSize: 22 }}>Total: R${totalPrice.toFixed(2).replace('.', ',')}</Text>
            <MoneyChange>Troco: R${change.toFixed(2).replace('.', ',')}</MoneyChange>
        </Container>
    );
}
