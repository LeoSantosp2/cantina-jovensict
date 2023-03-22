import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../../styles/style';

export default function Bolo({ valuePrice }) {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    const handleClickUp = () => {
        setCount(count + 1);

        if (price === 0) {
            setPrice(3.5);
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
        <View style={styles.foodOption}>
            <Text style={styles.title}>Bolo</Text>

            <View style={styles.containerCount}>
                <TouchableOpacity style={styles.button} onPress={() => handleClickUp()}>
                    <Text>+</Text>
                </TouchableOpacity>

                <Text style={styles.count}>{count}</Text>

                <TouchableOpacity style={styles.button} onPress={() => handleClickDown()}>
                    <Text>-</Text>
                </TouchableOpacity>

                <Text style={styles.value}>R${price.toFixed(2).replace('.', ',')}</Text>
            </View>
        </View>
    );
}
