import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FoodOption from '../../containers/foodOption';

interface Props {
    valuePrice: CallableFunction;
}

const RefriSucoLata: React.FC<Props> = ({ valuePrice }) => {
    return (
        <FoodOption
            title="Refri/Suco Lata"
            valuePrice={valuePrice}
            icon={<Icon name="bottle-soda-classic" size={24} color="#f2f2f2" />}
            _price={4.5}
        />
    );
};

export default RefriSucoLata;
