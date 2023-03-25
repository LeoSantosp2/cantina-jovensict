import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import FoodOption from '../../containers/foodOption';

interface Props {
    valuePrice: CallableFunction;
}

const Bolo: React.FC<Props> = ({ valuePrice }) => {
    return (
        <FoodOption
            title="Bolo"
            valuePrice={valuePrice}
            icon={<Icon name="cake" size={24} color="#f2f2f2" />}
            _price={3.5}
        />
    );
};

export default Bolo;
