import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './style';

export default function Footer({
    mistoQuenteTotal,
    tortaTotal,
    paoDeQueijoTotal,
    boloTotal,
    boloCoberturaTotal,
    SucoAchocolatadoTotal,
    refriSucoLataTotal,
    cafeComLeiteTotal,
    cafeTotal,
    paoChapaTotal,
}) {
    const [payment, setPayment] = useState(0);
    const [total, setTotal] = useState(0);
    const [change, setChange] = useState(0);

    const handleClickCalculate = () => {
        setChange(payment - total);
    };

    const handleClickDelete = () => {
        setChange(0);
    };

    setTimeout(() => {
        setTotal(
            mistoQuenteTotal +
                tortaTotal +
                paoDeQueijoTotal +
                boloTotal +
                boloCoberturaTotal +
                SucoAchocolatadoTotal +
                refriSucoLataTotal +
                cafeComLeiteTotal +
                cafeTotal +
                paoChapaTotal,
        );
    }, 1);

    return (
        <View style={styles.footer}>
            <View style={styles.payment}>
                <Text>Pagamento:</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setPayment}
                    value={payment}
                    keyboardType="numeric"
                    placeholder="Pagamento"
                    placeholderTextColor="#f2f2f2"
                />

                <TouchableOpacity style={styles.button} onPress={() => handleClickCalculate()}>
                    <Text style={{ color: '#f2f2f2' }}>Calcular</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => handleClickDelete()}>
                    <Text style={{ color: '#f2f2f2' }}>Apagar</Text>
                </TouchableOpacity>
            </View>

            <Text>
                Total: R$
                {total.toFixed(2).replace('.', ',')}
            </Text>
            <Text style={styles.moneyChange}>Troco: R${change.toFixed(2).replace('.', ',')}</Text>
        </View>
    );
}
