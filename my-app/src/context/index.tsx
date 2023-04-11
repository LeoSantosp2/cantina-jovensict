import React, { createContext, useState, ReactNode } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import uuid from 'react-native-uuid';
import Toast from 'react-native-toast-message';

export const Context = createContext({});

interface Props {
    children: ReactNode;
}

const ContextProvider = ({ children }: Props) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const calcTotalPrice = (price: number) => {
        setTotalPrice(price);
    };

    const showToast = (text: string) => {
        Toast.show({
            type: 'success',
            text1: text,
        });
    };

    return (
        <Context.Provider
            value={{
                calcTotalPrice,
                showToast,
                totalPrice,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
