import React, { createContext, useState, ReactNode } from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
// import uuid from 'react-native-uuid';

export const Context = createContext({});

interface Props {
    children: ReactNode;
}

const ContextProvider = ({ children }: Props) => {
    const [foodOptions, setFoodOptions] = useState<
        { id: number; name: string; price: number; originalPrice: number }[]
    >([]);
    const [id, setId] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const settingFoodOptions = (name: string, total: number) => {
        setId(id + 1);

        const foodInfomations = {
            id: id,
            name: name,
            price: total,
            originalPrice: total,
        };

        const newFoodOptions = [...foodOptions];

        setFoodOptions([...newFoodOptions, foodInfomations]);
    };

    const calcTotalPrice = (price: number) => {
        setTotalPrice(price);
    };

    const deleteFoodOptions = (index: number) => {
        const newFoodOptions = [...foodOptions];

        const arr = newFoodOptions.filter((item) => {
            return item.id !== index;
        });

        setFoodOptions(arr);

        if (foodOptions.length === 1) {
            setId(1);
        }
    };

    return (
        <Context.Provider
            value={{
                settingFoodOptions,
                foodOptions,
                calcTotalPrice,
                totalPrice,
                deleteFoodOptions,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
