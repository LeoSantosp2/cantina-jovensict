import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';

import FoodOption from '../../containers/foodOption';

interface Props {
    valuePrice: CallableFunction;
}

const CafeComLeite: React.FC<Props> = ({ valuePrice }) => {
    return (
        <FoodOption
            title="Café C/ Leite"
            valuePrice={valuePrice}
            icon={<Icon name="coffeescript" size={24} color="#f2f2f2" />}
            _price={2.5}
        />
    );
};

export default CafeComLeite;
