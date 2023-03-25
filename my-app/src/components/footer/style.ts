import styled from 'styled-components/native';

import * as colors from '../../config/color';

export const Container = styled.View`
    width: 100%;
    padding-left: 10px;
    position: absolute;
    bottom: 0%;
    z-index: 2;
    background-color: ${colors.white};
`;

export const Paymente = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const Input = styled.TextInput`
    width: 100px;
    height: 30px;
    margin: 10px;
    padding-left: 10px;
    border-radius: 5px;
    background-color: ${colors.black};
    color: ${colors.white};
`;

export const Button = styled.TouchableOpacity`
    width: 60px;
    height: 30px;
    margin-right: 4px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.black};
`;

export const MoneyChange = styled.Text`
    margin: 10px 0px;
    font-size: 22px;
`;
