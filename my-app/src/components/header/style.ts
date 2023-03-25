import styled from 'styled-components/native';

import * as colors from '../../config/color';

export const Container = styled.View`
    width: 100%;
    margin-top: 27px;
    padding: 10px;
    z-index: 1;
    position: absolute;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.white};
`;

export const Img = styled.Image`
    width: 50px;
    height: 50px;
    margin: 0px 10px;
    border-radius: 10px;
`;

export const Title = styled.Text`
    font-size: 22px;
`;
