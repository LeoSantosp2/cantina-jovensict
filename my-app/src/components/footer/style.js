import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    padding-left: 10px;
    position: absolute;
    bottom: 0%;
    z-index: 2;
    background-color: #f2f2f2;
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
    background-color: #000000;
    color: #f2f2f2;
`;

export const Button = styled.TouchableOpacity`
    width: 60px;
    height: 30px;
    margin-right: 4px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    background-color: #000000;
`;

export const MoneyChange = styled.Text`
    margin: 10px 0px;
    font-size: 22px;
`;
