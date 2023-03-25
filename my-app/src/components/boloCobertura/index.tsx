import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FoodOption from '../../containers/foodOption';

interface Props {
    valuePrice: CallableFunction;
}

const BoloCobertura: React.FC<Props> = ({ valuePrice }) => {
    return (
        <FoodOption
            title="Bolo Cobertura"
            valuePrice={valuePrice}
            icon={<Icon name="cake" size={24} color="#f2f2f2" />}
            _price={4.5}
        />
    );
};

export default BoloCobertura;
