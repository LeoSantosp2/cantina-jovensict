import styled from 'styled-components/native';

import { Colors } from '../../config/color';

export const Container = styled.View`
    padding-left: 10px;
    background-color: ${Colors.white};
`;

export const Payment = styled.View`
    padding: 10px 0px;
    flex-direction: row;
    align-items: center;
`;

export const TextPayment = styled.Text`
    font-size: 22px;
`;

export const TextValues = styled.Text`
    padding-bottom: 10px;
    font-size: 22px;
`;

export const Input = styled.TextInput`
    width: 100px;
    height: 30px;
    margin: 0px 10px;
    padding-left: 10px;
    border-radius: 5px;
    background-color: ${Colors.black};
    color: ${Colors.white};
`;

export const Button = styled.TouchableOpacity`
    width: 70px;
    height: 30px;
    margin-right: 4px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.black};
`;

export const ButtonText = styled.Text`
    color: ${Colors.white};
`;
