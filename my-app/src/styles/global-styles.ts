import styled from 'styled-components/native';

import { Colors } from '../theme';

export const Container = styled.View`
  width: 100%;
  margin: 15px 0px;
  justify-content: center;
  align-items: center;
`;

export const ContainerUp = styled.View`
  width: 90%;
  margin-bottom: 1px;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${Colors.black};
`;

export const ContainerDown = styled.View`
  width: 90%;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  flex-direction: row;
  background-color: ${Colors.black};
`;

export const Text = styled.Text`
  margin: 0px 10px;
  font-size: 18px;
  color: ${Colors.white};
`;

export const Button = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
`;
