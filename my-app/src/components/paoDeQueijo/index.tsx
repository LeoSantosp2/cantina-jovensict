import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FoodOption from '../../containers/foodOption';

interface Props {
    valuePrice: CallableFunction;
}

const PaoDeQueijo: React.FC<Props> = ({ valuePrice }) => {
    return (
        <FoodOption
            title="Pão de Queijo"
            valuePrice={valuePrice}
            icon={<Icon name="tennis-ball" size={24} color="#f2f2f2" />}
            _price={4.5}
        />
    );
};

export default PaoDeQueijo;
