import styled from 'styled-components/native';

import { Colors } from '../../config/color';

export const ContainerFoodOption = styled.View`
    width: 90%;
    padding-top: 10px;
    margin: 0px auto;
`;

export const Title = styled.Text`
    margin-left: 10px;
    font-size: 22px;
    color: ${Colors.white};
`;

export const ContainerTitle = styled.View`
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.black};
`;

export const ContainerCount = styled.View`
    margin-top: 1px;
    padding: 10px 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    flex-direction: row;
    align-items: center;
    background-color: ${Colors.black};
`;

export const Count = styled.Text`
    font-size: 18px;
    color: ${Colors.white};
`;

export const Price = styled.Text`
    font-size: 20px;
    color: ${Colors.white};
`;

export const Button = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    margin: 0px 10px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.white};
`;

export const ButtonText = styled.Text`
    font-size: 30px;
`;

export const ButtonDelete = styled.TouchableOpacity`
    width: 100px;
    height: 30px;
    margin: 0px 10px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.white};
`;

export const ButtonTextDelete = styled.Text`
    font-size: 18px;
    color: ${Colors.black};
`;
