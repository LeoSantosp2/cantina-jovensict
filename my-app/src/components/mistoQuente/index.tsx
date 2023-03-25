import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FoodOption from '../../containers/foodOption';

interface Props {
    valuePrice: CallableFunction;
}

const MistoQuente: React.FC<Props> = ({ valuePrice }) => {
    return (
        <FoodOption
            title="Misto Quente"
            valuePrice={valuePrice}
            icon={<Icon name="lunch-dining" size={24} color="#f2f2f2" />}
            _price={7}
        />
    );
};

export default MistoQuente;
