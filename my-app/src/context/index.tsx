import React, { createContext, useState } from 'react';
import Toast from 'react-native-toast-message';

import { ContextProviderProps } from '../interfaces/contextProviderProps';

export const Context = createContext({});

const ContextProvider = ({ children }: ContextProviderProps) => {
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
