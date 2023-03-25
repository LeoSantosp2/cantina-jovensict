import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import FoodOption from '../../containers/foodOption';

interface Props {
    valuePrice: CallableFunction;
}

const Torta: React.FC<Props> = ({ valuePrice }) => {
    return (
        <FoodOption
            title="Torta"
            valuePrice={valuePrice}
            icon={<Icon name="pie-chart" size={24} color="#f2f2f2" />}
            _price={6}
        />
    );
};

export default Torta;
