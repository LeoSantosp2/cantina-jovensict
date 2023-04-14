import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

import CreateFoodOption from '../pages/createFoodOption';
import ShowFoodOption from '../pages/showFoodOption';

import LogoJovensIct from '../assets/images/logo-jovensict.png';

import { Img } from '../assets/styles/globalStyles';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: { backgroundColor: '#000000' },
                    tabBarActiveTintColor: '#F2F2F2',
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName = '';

                        if (route.name === 'Inserir Refeição') {
                            iconName = focused ? 'food' : 'food-outline';
                        } else if (route.name === 'Cardápio') {
                            iconName = focused
                                ? 'book-open'
                                : 'book-open-outline';
                        }

                        return (
                            <Icon name={iconName} size={size} color={color} />
                        );
                    },
                    tabBarLabelStyle: { fontSize: 12 },
                    headerStyle: {
                        height: 120,
                        backgroundColor: '#000000',
                        shadowColor: '#000000',
                        shadowOffset: { width: -2, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                        elevation: 20,
                    },
                    headerTitle: 'Cantina JovensICT',
                    headerTitleAlign: 'left',
                    headerTitleStyle: { fontSize: 22, color: '#F2F2F2' },
                    headerLeft: () => <Img source={LogoJovensIct} />,
                })}
            >
                <Tab.Screen
                    name="Inserir Refeição"
                    component={CreateFoodOption}
                />
                <Tab.Screen name="Cardápio" component={ShowFoodOption} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
