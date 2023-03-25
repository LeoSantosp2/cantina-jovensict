import React, { useState } from 'react';
import { Text } from 'react-native';

import { Container, Paymente, Input, Button, MoneyChange } from './style';

interface Props {
    mistoQuenteTotal: number;
    tortaTotal: number;
    paoDeQueijoTotal: number;
    boloTotal: number;
    boloCoberturaTotal: number;
    sucoAchocolatadoTotal: number;
    refriSucoLataTotal: number;
    cafeComLeiteTotal: number;
    cafeTotal: number;
    paoChapaTotal: number;
}

const Footer: React.FC<Props> = ({
    mistoQuenteTotal,
    tortaTotal,
    paoDeQueijoTotal,
    boloTotal,
    boloCoberturaTotal,
    sucoAchocolatadoTotal,
    refriSucoLataTotal,
    cafeComLeiteTotal,
    cafeTotal,
    paoChapaTotal,
}) => {
    const [payment, setPayment] = useState('');
    const [total, setTotal] = useState(0);
    const [change, setChange] = useState(0);

    const handleClickCalculate = () => {
        setChange(Number(payment) - total);
    };

    const handleClickDelete = () => {
        setChange(0);
        setPayment('');
    };

    setTimeout(() => {
        setTotal(
            mistoQuenteTotal +
                tortaTotal +
                paoDeQueijoTotal +
                boloTotal +
                boloCoberturaTotal +
                sucoAchocolatadoTotal +
                refriSucoLataTotal +
                cafeComLeiteTotal +
                cafeTotal +
                paoChapaTotal,
        );
    }, 1);

    return (
        <Container>
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

            <Text style={{ fontSize: 22 }}>
                Total: R$
                {total.toFixed(2).replace('.', ',')}
            </Text>
            <MoneyChange>Troco: R${change.toFixed(2).replace('.', ',')}</MoneyChange>
        </Container>
    );
};

export default Footer;
