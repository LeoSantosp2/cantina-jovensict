import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Component = styled.KeyboardAvoidingView`
  width: 100%;
  height: 20%;
  padding: 20px;
  background-color: ${Colors.black};
`;

export const ComponentUp = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ComponentDown = styled.View`
  width: 100%;
  padding-top: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  margin: 5px 0px;
  font-size: 22px;
  color: ${Colors.white};
`;

export const Input = styled.TextInput`
  width: 100px;
  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 7px;
  font-size: 16px;
  background-color: ${Colors.white};
`;

export const Button = styled.TouchableOpacity`
  width: 80px;
  height: 30px;
  margin: 0px 5px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${Colors.black};
`;
