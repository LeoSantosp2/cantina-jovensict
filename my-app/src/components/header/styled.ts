import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Header = styled.View`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 15px;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.black};
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  margin: 0px 10px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  margin-left: 15px;
  font-size: 22px;
  color: ${Colors.white};
`;
