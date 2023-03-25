import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import FoodOption from '../../containers/foodOption';

interface Props {
    valuePrice: CallableFunction;
}

const Cafe: React.FC<Props> = ({ valuePrice }) => {
    return (
        <FoodOption
            title="Café"
            valuePrice={valuePrice}
            icon={<Icon name="coffee" size={24} color="#f2f2f2" />}
            _price={1.5}
        />
    );
};

export default Cafe;
