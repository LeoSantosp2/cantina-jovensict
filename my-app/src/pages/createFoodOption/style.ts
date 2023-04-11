import styled from 'styled-components/native';

import * as colors from '../../config/color';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
`;

export const LabelInput = styled.Text`
    font-size: 22px;
    color: ${colors.white};
`;

export const InsertFood = styled.View`
    width: 90%;
    border-radius: 5px;
    background-color: ${colors.black};
`;

export const ContainerInput = styled.View`
    width: 100%;
    padding: 20px;
`;

export const Input = styled.TextInput`
    width: 250px;
    margin-top: 5px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${colors.white};
`;

export const Button = styled.TouchableOpacity`
    width: 150px;
    height: 30px;
    margin: 20px auto;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
`;

export const ButtonText = styled.Text`
    color: ${colors.black};
`;
