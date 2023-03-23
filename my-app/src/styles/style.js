import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding-top: 70px;
    background-color: #f2f2f2;
`;

export const FoodOption = styled.View`
    width: 90%;
    padding-top: 5px;
    margin: 0px auto;
`;

export const LastFoodOption = styled.View`
    width: 90%;
    margin: 10px auto 125px auto;
`;

export const Title = styled.Text`
    margin-left: 10px;
    font-size: 22px;
    color: #f2f2f2;
`;

export const ContainerTitle = styled.View`
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    flex-direction: row;
    align-items: center;
    background-color: #000000;
`;

export const ContainerCount = styled.View`
    margin-top: 1px;
    padding: 10px 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    flex-direction: row;
    align-items: center;
    background-color: #000000;
`;

export const Count = styled.Text`
    font-size: 18px;
    color: #f2f2f2;
`;

export const Price = styled.Text`
    font-size: 20px;
    color: #f2f2f2;
`;

export const Button = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    margin: 0px 10px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
`;

export const ButtonText = styled.Text`
    font-size: 30px;
`;
