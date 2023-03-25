import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FoodOption from '../../containers/foodOption';

interface Props {
    valuePrice: CallableFunction;
}

const PaoChapa: React.FC<Props> = ({ valuePrice }) => {
    return (
        <FoodOption
            title="Pão na Chapa"
            valuePrice={valuePrice}
            icon={<Icon name="bread-slice" size={24} color="#f2f2f2" />}
            _price={3}
        />
    );
};

export default PaoChapa;
