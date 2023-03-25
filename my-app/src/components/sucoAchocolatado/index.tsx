import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FoodOption from '../../containers/foodOption';

interface Props {
    valuePrice: CallableFunction;
}

const SucoAchocolatado: React.FC<Props> = ({ valuePrice }) => {
    return (
        <FoodOption
            title="Suco/Achocolatado"
            valuePrice={valuePrice}
            icon={<Icon name="glass-pint-outline" size={24} color="#f2f2f2" />}
            _price={2.5}
        />
    );
};

export default SucoAchocolatado;
