import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './style';

import logoJovensIct from '../../images/logo-jovensict.jpg';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.img} source={logoJovensIct} />
            <Text style={{ fontSize: 18 }}>Cantina JovensICT</Text>
        </View>
    );
}
