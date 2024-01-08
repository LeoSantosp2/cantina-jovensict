import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Screen = styled.View`
  flex: 1;
`;

export const ClearButton = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 21%;
  background-color: ${Colors.black};
`;
