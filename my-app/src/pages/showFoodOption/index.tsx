import React, { useState, useCallback } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { getRealm } from '../../databases/realm';

import FoodOption from '../../components/foodOption';
import Footer from '../../components/footer';

import { FoodOptionProps } from '../../interfaces/foodOptionProps';

import { Container } from './styled';

const ShowFoodOption = () => {
    const [datas, setDatas] = useState<FoodOptionProps[]>([]);

    const fetchFoodOptions = async () => {
        const realm = await getRealm();
        try {
            const response = realm
                .objects<FoodOptionProps[]>('FoodOption')
                .toJSON();

            setDatas(response);
        } catch (e) {
            console.log(e);
        } finally {
            realm.close();
        }
    };

    const handleDelete = async (id: string) => {
        const realm = await getRealm();

        try {
            realm.write(() => {
                realm.delete(
                    realm.objects('FoodOption').filtered(`_id = '${id}'`),
                );
            });

            fetchFoodOptions();
        } catch (e) {
            console.log(e);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchFoodOptions();
        }, []),
    );

    return (
        <Container>
            <FlatList
                data={datas}
                renderItem={({ item }) => (
                    <ScrollView>
                        <FoodOption
                            _id={item._id}
                            _name={item._name}
                            price={item.price}
                            originalPrice={item.originalPrice}
                            onPress={() => handleDelete(item._id)}
                        />
                    </ScrollView>
                )}
                keyExtractor={(item) => item._id}
                style={{
                    marginBottom: 128,
                    shadowColor: '#000000',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.5,
                    shadowRadius: 3,
                    elevation: 20,
                }}
            ></FlatList>

            <Footer />
        </Container>
    );
};

export default ShowFoodOption;
