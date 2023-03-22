import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from '../styles/style';

import MistoQuente from '../components/mistoQuente/index.js';
import Torta from '../components/torta/index.js';
import PaoDeQueijo from '../components/paoDeQueijo/index.js';
import Bolo from '../components/bolo/index.js';
import BoloCobertura from '../components/boloCobertura/index.js';
import SucoAchocolatado from '../components/sucoAchocolatado/index.js';
import RefriSucoLata from '../components/refriSucoLata/index.js';
import CafeComLeite from '../components/cafeComLeite/index.js';
import Cafe from '../components/cafe/index.js';
import PaoChapa from '../components/paoChapa/index.js';

export default function Home({
    mistoQuentePrice,
    tortaPrice,
    paoDeQueijoPrice,
    boloPrice,
    boloCoberturaPrice,
    sucoAchocolatadoPrice,
    refriSucoLataPrice,
    cafeComLeitePrice,
    cafePrice,
    paoChapaPrice,
}) {
    return (
        <View style={styles.main}>
            <ScrollView style={styles.ScrollView}>
                <MistoQuente valuePrice={mistoQuentePrice} />

                <Torta valuePrice={tortaPrice} />

                <PaoDeQueijo valuePrice={paoDeQueijoPrice} />

                <Bolo valuePrice={boloPrice} />

                <BoloCobertura valuePrice={boloCoberturaPrice} />

                <SucoAchocolatado valuePrice={sucoAchocolatadoPrice} />

                <RefriSucoLata valuePrice={refriSucoLataPrice} />

                <CafeComLeite valuePrice={cafeComLeitePrice} />

                <Cafe valuePrice={cafePrice} />

                <PaoChapa valuePrice={paoChapaPrice} />
            </ScrollView>
        </View>
    );
}
