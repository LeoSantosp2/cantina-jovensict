import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import ContextProvider from './src/context';

import Routes from './src/routes';

export default function App() {
    return (
        <View style={styled.view}>
            <ContextProvider>
                <Routes />
            </ContextProvider>
            <StatusBar style="inverted" />
        </View>
    );
}

export const styled = StyleSheet.create({
    view: {
        flex: 1,
    },
});
